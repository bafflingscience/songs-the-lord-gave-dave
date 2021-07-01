//~* the `B2_ACCOUNT_INFO` env. variable specifies the sqlite file to use for caching authentication information.  */
/* const B2_ACCOUNT_INFO = "~/.b2_account_info"; */

const b2_authorize_account = 'https://api.backblazeb2.com/b2api/v5/b2_authorize_account';

const keysThings = {
'keyID': 'fde7f46c0c0e',
'keyName': 'Master Application Key',
'applicationKey': '0000df857b151af644d9e204ca67411b5dd1405506'
}

const songKeys = {
  'keyID': '000fde7f46c0c0e0000000001',
  'keyName': 'key-songs',
  'applicationKey': 'K0002a5fArCV+jhJ3Up90zrIjAtWZBw'
}

let apiUrl = account.api_url;

console.log(songKeys.keyID, apiUrl);
document.getElementById('bucket-of-song');