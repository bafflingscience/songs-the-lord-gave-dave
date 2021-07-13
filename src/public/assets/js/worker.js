/**
 * !!! IMPORTANT !!!
 * You need to create a CloudFlare KV Namespace and bind it to the variable kv
 * !!! IMPORTANT !!!
 */

 addEventListener('fetch', event => {
    event.respondWith(handle(event))
});

let auth = null;
const b2AppKeyId = "<App Key ID>"; //App Key ID
const b2AppKey = "<App Key>"; //App Key

/**
 * List of allowed buckets. Use "*" to allow every bucket.
 * Use CACHE to cache files for the bucket, use NO-CACHE to bypass the cache for the bucket.
 */
const whitelistedBuckets = {
    "example23": "CACHE",
    "bucket2": "CACHE",
    "bucket1": "CACHE",
    "exampleBucket": "NO-CACHE"
};

async function handle(event) {
    let request = event.request;
    let cache = caches.default;
    let response;

    response = await cache.match(request);
    if (response) {
        return response;
    }

    if(request.method !== "GET") {
        return new Response("Request method not supported: " + request.method, {
            status: 405,
            statusText: "Method Not Allowed"
        });
    }

    let split = request.url.split("/");
    let bucketName = split[split.length - 2];
    let fileName = split[split.length - 1];

    if(!isBucketValid(bucketName)) {
        response = new Response("Bucket name not whitelisted.", {
            status: 403,
            statusText: "Bucket name not whitelisted."
        });

        return response;
    }

    let fileStream = await downloadFile(bucketName, fileName);
    let { readable, writable } = new TransformStream();
    streamBody(fileStream.body, writable);

    response = new Response(readable, fileStream);

    if(shouldCache) {
        response.headers.append('Cache-Tag', request.url);
        event.waitUntil(cache.put(request, response.clone()));
    }

    return response
}


let shouldCache = false;
/**
 * Checks if bucket is present in whitelist and determines if it is cached
 * @param bucketName The name of the bucket in question
 * @returns {boolean}
 */
function isBucketValid(bucketName) {
    let contains = false;
    Object.keys(whitelistedBuckets).forEach(function (entry) {
        if(entry !== bucketName && entry !== "*" || contains) return;

        if(whitelistedBuckets[entry] === "CACHE") {
            shouldCache = true;
        } else {
            shouldCache = false;
        }
        contains = true;
    });

    return contains;
}

/**
 * Downloads file from B2
 * @param bucket B2 bucket name
 * @param fileName Name of the file in the b2 bucket
 * @returns {Promise<Response>}
 */
async function downloadFile(bucket, fileName) {
    if(auth === null)
        await checkToken();

    let downloadUrl = auth.downloadUrl + "/file/" + bucket + "/" + fileName;
    return fetch(downloadUrl, {
        method: 'GET',
        headers: {'Authorization': auth.token}
    })
}

/**
 * Checks if a token is found in CloudFlare KV and if its expired
 * Will create new token if token is invalid
 * @returns {Promise<void>}
 */
async function checkToken() {
    let kvAuthObj = await getValueByKey("auth", "json");
    if (kvAuthObj === null) {
        await authorize();
        return;
    }

    if(new Date().getTime() - new Date(kvAuthObj.creation).getTime() > 1000*60*60 /*1 hour*/) {
        console.log("Expiration date of token reached! Reauthorizing...");
        await authorize();
        return;
    }
    auth = kvAuthObj;
}

/**
 * Retrieves B2 Auth token and stores it in CloudFlare KV
 * @returns {Promise<void>}
 */
async function authorize() {
    console.log("Fetching new auth token!");
    let authObj = {
        token: "",
        downloadUrl: "",
        apiUrl: "",
        creation: new Date()
    };
    let b2Auth = btoa(b2AppKeyId + ":" + b2AppKey);
    let response = await (await fetch('https://api.backblazeb2.com/b2api/v2/b2_authorize_account', {
        method: 'GET',
        headers: {'Authorization': 'Basic ' + b2Auth}
    })).json();
    authObj.token = response.authorizationToken;
    authObj.downloadUrl = response.downloadUrl;
    authObj.apiUrl = response.apiUrl;

    await setValueByKey("auth", JSON.stringify(authObj));
    auth = authObj;
}

async function streamBody(readable, writable) {
    // This function will continue executing after `fetchAndStream()`
    // returns its response.
    return readable.pipeTo(writable)
}

/**
 * Gets the value of a key from the CloudFlare Workers KV Store
 * In this case CloudFlare KV is bound to the variable 'kv'
 * @param key
 * @param type The type of the value. Allowed values: text, json, arrayBuffer, stream
 * @returns {Promise<*>}
 */
async function getValueByKey(key, type) {
    return await kv.get(key, type)
}

/**
 * Inserts a new Key Value pair into CloudFlare KV
 * In this case CloudFlare KV is bound to the variable 'kv'
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
async function setValueByKey(key, value) {
    await kv.put(key, value)
}
