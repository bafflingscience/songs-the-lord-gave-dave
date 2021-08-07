// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"39Mbm":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
var _indexCss = require("./index.css");
const { readFileSync  } = require('fs');
const posthtml = require('posthtml');
const include = require('posthtml-include');
const html = readFileSync('index.html');
posthtml([
    include({
        encoding: 'utf8'
    })
]).process(html).then((result)=>console.log(result.html)
);

},{"fs":"2RD6T","posthtml":"5f1mZ","posthtml-include":"1PtZL","./index.css":"7o2yX"}],"2RD6T":[function(require,module,exports) {
"use strict";

},{}],"5f1mZ":[function(require,module,exports) {
const pkg = require('../package.json');
const Api = require('./api.js');
let { default: parser  } = require('posthtml-parser');
let { default: render  } = require('posthtml-render');
/**
 * @author Ivan Voischev (@voischev),
 *         Ivan Demidov (@scrum)
 *
 * @requires api
 * @requires posthtml-parser
 * @requires posthtml-render
 *
 * @constructor PostHTML
 * @param {Array} plugins - An array of PostHTML plugins
 */ class PostHTML {
    constructor(plugins){
        /**
   * PostHTML Instance
   *
   * @prop plugins
   * @prop options
   */ this.version = pkg.version;
        this.name = pkg.name;
        this.plugins = typeof plugins === 'function' ? [
            plugins
        ] : plugins || [];
        this.source = '';
        /**
     * Tree messages to store and pass metadata between plugins
     *
     * @memberof tree
     * @type {Array} messages
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *   return function (tree) {
     *      tree.messages.push({
     *        type: 'dependency',
     *        file: 'path/to/dependency.html',
     *        from: tree.options.from
     *      })
     *
     *      return tree
     *   }
     * }
     * ```
     */ this.messages = [];
        /**
     * Tree method parsing string inside plugins.
     *
     * @memberof tree
     * @type {Function} parser
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *   return function (tree) {
     *      tree.match({ tag: 'include' }, function(node) {
     *          node.tag = false;
     *          node.content = tree.parser(fs.readFileSync(node.attr.src))
     *          return node
     *      })
     *
     *      return tree
     *   }
     * }
     * ```
     */ this.parser = parser;
        /**
     * Tree method rendering tree to string inside plugins.
     *
     * @memberof tree
     * @type {Function} render
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *    return function (tree) {
     *      var outherTree = ['\n', {tag: 'div', content: ['1']}, '\n\t', {tag: 'div', content: ['2']}, '\n'];
     *      var htmlWitchoutSpaceless = tree.render(outherTree).replace(/[\n|\t]/g, '');
     *      return tree.parser(htmlWitchoutSpaceless)
     *    }
     * }
     * ```
     */ this.render = render;
        // extend api methods
        Api.call(this);
    }
    /**
  * @this posthtml
  * @param   {Function} plugin - A PostHTML plugin
  * @returns {Constructor} - this(PostHTML)
  *
  * **Usage**
  * ```js
  * ph.use((tree) => { tag: 'div', content: tree })
  *   .process('<html>..</html>', {})
  *   .then((result) => result))
  * ```
  */ use(...args) {
        this.plugins.push(...args);
        return this;
    }
    /**
   * @param   {String} html - Input (HTML)
   * @param   {?Object} options - PostHTML Options
   * @returns {Object<{html: String, tree: PostHTMLTree}>} - Sync Mode
   * @returns {Promise<{html: String, tree: PostHTMLTree}>} - Async Mode (default)
   *
   * **Usage**
   *
   * **Sync**
   * ```js
   * ph.process('<html>..</html>', { sync: true }).html
   * ```
   *
   * **Async**
   * ```js
   * ph.process('<html>..</html>', {}).then((result) => result))
   * ```
   */ process(tree, options = {
    }) {
        /**
     * ## PostHTML Options
     *
     * @type {Object}
     * @prop {?Boolean} options.sync - enables sync mode, plugins will run synchronously, throws an error when used with async plugins
     * @prop {?Function} options.parser - use custom parser, replaces default (posthtml-parser)
     * @prop {?Function} options.render - use custom render, replaces default (posthtml-render)
     * @prop {?Boolean} options.skipParse - disable parsing
     * @prop {?Array} options.directives - Adds processing of custom [directives](https://github.com/posthtml/posthtml-parser#directives).
     */ this.options = options;
        this.source = tree;
        if (options.parser) parser = this.parser = options.parser;
        if (options.render) render = this.render = options.render;
        tree = options.skipParse ? tree || [] : parser(tree, options);
        tree = [].concat(tree);
        // sync mode
        if (options.sync === true) {
            this.plugins.forEach((plugin, index)=>{
                _treeExtendApi(tree, this);
                let result;
                if (plugin.length === 2 || isPromise(result = plugin(tree))) throw new Error(`Can’t process contents in sync mode because of async plugin: ${plugin.name}`);
                // clearing the tree of options
                if (index !== this.plugins.length - 1 && !options.skipParse) tree = [].concat(tree);
                // return the previous tree unless result is fulfilled
                tree = result || tree;
            });
            return lazyResult(render, tree);
        }
        // async mode
        let i = 0;
        const next = (result, cb)=>{
            _treeExtendApi(result, this);
            // all plugins called
            if (this.plugins.length <= i) {
                cb(null, result);
                return;
            }
            // little helper to go to the next iteration
            function _next(res) {
                if (res && !options.skipParse) res = [].concat(res);
                return next(res || result, cb);
            }
            // call next
            const plugin = this.plugins[i++];
            if (plugin.length === 2) {
                plugin(result, (err, res)=>{
                    if (err) return cb(err);
                    _next(res);
                });
                return;
            }
            // sync and promised plugins
            let err = null;
            const res = tryCatch(()=>plugin(result)
            , (e)=>{
                err = e;
                return e;
            });
            if (err) {
                cb(err);
                return;
            }
            if (isPromise(res)) {
                res.then(_next).catch(cb);
                return;
            }
            _next(res);
        };
        return new Promise((resolve, reject)=>{
            next(tree, (err, tree)=>{
                if (err) reject(err);
                else resolve(lazyResult(render, tree));
            });
        });
    }
}
/**
 * @exports posthtml
 *
 * @param  {Array} plugins
 * @return {Function} posthtml
 *
 * **Usage**
 * ```js
 * import posthtml from 'posthtml'
 * import plugin from 'posthtml-plugin'
 *
 * const ph = posthtml([ plugin() ])
 * ```
 */ module.exports = (plugins1)=>new PostHTML(plugins1)
;
/**
 * Extension of options tree
 *
 * @private
 *
 * @param   {Array}    tree
 * @param   {Object}   PostHTML
 * @returns {?*}
 */ function _treeExtendApi(t, _t) {
    if (typeof t === 'object') t = Object.assign(t, _t);
}
/**
 * Checks if parameter is a Promise (or thenable) object.
 *
 * @private
 *
 * @param   {*} promise - Target `{}` to test
 * @returns {Boolean}
 */ function isPromise(promise) {
    return !!promise && typeof promise.then === 'function';
}
/**
 * Simple try/catch helper, if exists, returns result
 *
 * @private
 *
 * @param   {Function} tryFn - try block
 * @param   {Function} catchFn - catch block
 * @returns {?*}
 */ function tryCatch(tryFn, catchFn) {
    try {
        return tryFn();
    } catch (err) {
        catchFn(err);
    }
}
/**
 * Wraps the PostHTMLTree within an object using a getter to render HTML on demand.
 *
 * @private
 *
 * @param   {Function} render
 * @param   {Array}    tree
 * @returns {Object<{html: String, tree: Array}>}
 */ function lazyResult(render1, tree) {
    return {
        get html () {
            return render1(tree, tree.options);
        },
        tree,
        messages: tree.messages
    };
}

},{"../package.json":"N4VWo","./api.js":"8v6d0","posthtml-parser":"6CTtI","posthtml-render":"4xgQ5"}],"N4VWo":[function(require,module,exports) {
module.exports = JSON.parse("{\"name\":\"posthtml\",\"version\":\"0.16.4\",\"description\":\"HTML/XML processor\",\"keywords\":[\"html\",\"xml\",\"postproccessor\",\"parser\",\"transform\",\"transformations\",\"manipulation\",\"preprocessor\",\"processor\"],\"main\":\"lib\",\"types\":\"types/posthtml.d.ts\",\"files\":[\"types\",\"lib\"],\"engines\":{\"node\":\">=12.0.0\"},\"dependencies\":{\"posthtml-parser\":\"^0.9.0\",\"posthtml-render\":\"^2.0.6\"},\"devDependencies\":{\"@commitlint/cli\":\"^12.1.4\",\"@commitlint/config-angular\":\"^12.1.4\",\"c8\":\"^7.7.2\",\"chai\":\"^4.3.4\",\"chai-as-promised\":\"^7.1.1\",\"chai-subset\":\"^1.6.0\",\"conventional-changelog-cli\":\"^2.1.1\",\"husky\":\"^6.0.0\",\"jsdoc-to-markdown\":\"^7.0.1\",\"lint-staged\":\"^11.0.0\",\"mocha\":\"^9.0.0\",\"standard\":\"^16.0.2\"},\"scripts\":{\"version\":\"conventional-changelog -i changelog.md -s -r 0 && git add changelog.md\",\"test\":\"c8 mocha\",\"docs:api\":\"jsdoc2md lib/api.js > docs/api.md\",\"docs:core\":\"jsdoc2md lib/index.js > docs/core.md\"},\"author\":\"Ivan Voischev <voischev.ivan@ya.ru>\",\"contributors\":[{\"name\":\"Ivan Voischev\",\"email\":\"voischev.ivan@ya.ru\"},{\"name\":\"Ivan Demidov\",\"email\":\"scrum@list.ru\"}],\"homepage\":\"https://posthtml.org\",\"repository\":\"https://github.com/posthtml/posthtml.git\",\"bugs\":\"https://github.com/posthtml/posthtml/issues\",\"license\":\"MIT\"}");

},{}],"8v6d0":[function(require,module,exports) {
'use strict';
/**
 * # API
 *
 * @author Ivan Voischev (@voischev),
 *         Anton Winogradov (@awinogradov),
 *         Alexej Yaroshevich (@zxqfox),
 *         Vasiliy (@Yeti-or)
 *
 * @namespace tree
 */ function Api() {
    this.walk = walk;
    this.match = match;
}
/**
 * Walks the tree and passes all nodes via a callback
 *
 * @memberof tree
 *
 * @param  {Function} cb  Callback
 * @return {Function}     Callback(node)
 *
 *@example
 * ```js
 * export const walk = (tree) => {
 *   tree.walk((node) => {
 *     let classes = node.attrs && node.attrs.class.split(' ') || []
 *
 *     if (classes.includes(className)) return cb(node)
 *       return node
 *   })
 * }
 * ```
 */ function walk(cb) {
    return traverse(this, cb);
}
/**
 * Matches an expression to search for nodes in the tree
 *
 * @memberof tree
 *
 * @param  {String|RegExp|Object|Array} expression - Matcher(s) to search
 * @param  {Function} cb Callback
 *
 * @return {Function} Callback(node)
 *
 * @example
 * ```js
 * export const match = (tree) => {
 *   // Single matcher
 *   tree.match({ tag: 'custom-tag' }, (node) => {
 *     let tag = node.tag
 *
 *     Object.assign(node, { tag: 'div', attrs: {class: tag} })
 *
 *     return node
 *   })
 *   // Multiple matchers
 *   tree.match([{ tag: 'b' }, { tag: 'strong' }], (node) => {
 *     let style = 'font-weight: bold;'
 *
 *     node.tag = 'span'
 *
 *     node.attrs
 *       ? ( node.attrs.style
 *         ? ( node.attrs.style += style )
 *         : node.attrs.style = style
 *       )
 *       : node.attrs = { style: style }
 *
 *     return node
 *   })
 * }
 * ```
 */ function match(expression, cb) {
    return Array.isArray(expression) ? traverse(this, (node)=>{
        for(let i = 0; i < expression.length; i++){
            if (compare(expression[i], node)) return cb(node);
        }
        return node;
    }) : traverse(this, (node)=>{
        if (compare(expression, node)) return cb(node);
        return node;
    });
}
module.exports = Api;
module.exports.match = match;
module.exports.walk = walk;
/** @private */ function traverse(tree, cb) {
    if (Array.isArray(tree)) for(let i = 0; i < tree.length; i++)tree[i] = traverse(cb(tree[i]), cb);
    else if (tree && typeof tree === 'object' && Object.prototype.hasOwnProperty.call(tree, 'content')) traverse(tree.content, cb);
    return tree;
}
/** @private */ function compare(expected, actual) {
    if (expected instanceof RegExp) {
        if (typeof actual === 'object') return false;
        if (typeof actual === 'string') return expected.test(actual);
    }
    if (typeof expected !== typeof actual) return false;
    if (typeof expected !== 'object' || expected === null) return expected === actual;
    if (Array.isArray(expected)) return expected.every((exp)=>[].some.call(actual, (act)=>compare(exp, act)
        )
    );
    return Object.keys(expected).every((key)=>{
        const ao = actual[key];
        const eo = expected[key];
        if (typeof eo === 'object' && eo !== null && ao !== null) return compare(eo, ao);
        if (typeof eo === 'boolean') return eo !== (ao == null);
        return ao === eo;
    });
}

},{}],"6CTtI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _chunkT6SARJYHjs = require('./chunk.T6SARJYH.js');
var _htmlparser2 = require('htmlparser2');
var O = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    decodeEntities: false
}, v = [
    {
        name: "!doctype",
        start: "<",
        end: ">"
    }
], w = (a, f = {
})=>{
    let d = new _chunkT6SARJYHjs.a(a), s = [], i = [];
    function c() {
        return s[s.length - 1];
    }
    function g(e, t) {
        return e.name instanceof RegExp ? new RegExp(e.name.source, "i").test(t) : t === e.name;
    }
    function b(e) {
        let t = {
        };
        return Object.keys(e).forEach((n)=>{
            let o = {
            };
            o[n] = e[n].replace(/&quot;/g, '"'), Object.assign(t, o);
        }), t;
    }
    function h(e, t) {
        var p;
        let n = v.concat((p = f.directives) != null ? p : []), o = c();
        for (let u of n){
            let l = u.start + t + u.end;
            if (g(u, e.toLowerCase())) {
                if (o === void 0) {
                    i.push(l);
                    return;
                }
                typeof o == "object" && (o.content === void 0 && (o.content = []), o.content.push(l));
            }
        }
    }
    function m(e) {
        let t = `<!--${e}-->`, n = c();
        if (n === void 0) {
            i.push(t);
            return;
        }
        typeof n == "object" && (n.content === void 0 && (n.content = []), n.content.push(t));
    }
    function N(e, t) {
        let n = d.getPosition(r.startIndex), o = {
            tag: e
        };
        f.sourceLocations && (o.location = {
            start: n,
            end: n
        }), Object.keys(t).length > 0 && (o.attrs = b(t)), s.push(o);
    }
    function y() {
        let e = s.pop();
        if (e && typeof e == "object" && e.location && r.endIndex !== null && (e.location.end = d.getPosition(r.endIndex)), e) {
            let t = c();
            if (s.length <= 0) {
                i.push(e);
                return;
            }
            typeof t == "object" && (t.content === void 0 && (t.content = []), t.content.push(e));
        }
    }
    function A(e) {
        let t = c();
        if (t === void 0) {
            i.push(e);
            return;
        }
        if (typeof t == "object") {
            if (t.content && t.content.length > 0) {
                let n = t.content[t.content.length - 1];
                if (typeof n == "string" && !n.startsWith("<!--")) {
                    t.content[t.content.length - 1] = `${n}${e}`;
                    return;
                }
            }
            t.content === void 0 && (t.content = []), t.content.push(e);
        }
    }
    let r = new _htmlparser2.Parser({
        onprocessinginstruction: h,
        oncomment: m,
        onopentag: N,
        onclosetag: y,
        ontext: A
    }, {
        ...O,
        ...f
    });
    return r.write(a), r.end(), i;
}, T = exports.default = w;
exports.default = T;

},{"./chunk.T6SARJYH.js":"21j5x","htmlparser2":"54Bcp"}],"21j5x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var i = class {
    constructor(t1){
        this.source = t1, this.lastPosition = {
            line: 1,
            column: 1
        }, this.lastIndex = 0;
    }
    getPosition(t) {
        if (t < this.lastIndex) throw new Error("Source indices must be monotonic");
        for(; this.lastIndex < t;)this.source.charCodeAt(this.lastIndex) === 10 ? (this.lastPosition.line++, this.lastPosition.column = 1) : this.lastPosition.column++, this.lastIndex++;
        return {
            line: this.lastPosition.line,
            column: this.lastPosition.column
        };
    }
};
exports.a = i;

},{}],"54Bcp":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
var Parser_1 = require("./Parser");
Object.defineProperty(exports, "Parser", {
    enumerable: true,
    get: function() {
        return Parser_1.Parser;
    }
});
var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "DomHandler", {
    enumerable: true,
    get: function() {
        return domhandler_1.DomHandler;
    }
});
Object.defineProperty(exports, "DefaultHandler", {
    enumerable: true,
    get: function() {
        return domhandler_1.DomHandler;
    }
});
// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */ function parseDocument(data, options) {
    var handler = new domhandler_1.DomHandler(undefined, options);
    new Parser_1.Parser(handler, options).end(data);
    return handler.root;
}
exports.parseDocument = parseDocument;
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */ function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
exports.parseDOM = parseDOM;
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */ function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
    return new Parser_1.Parser(handler, options);
}
exports.createDomStream = createDomStream;
var Tokenizer_1 = require("./Tokenizer");
Object.defineProperty(exports, "Tokenizer", {
    enumerable: true,
    get: function() {
        return __importDefault(Tokenizer_1).default;
    }
});
var ElementType = __importStar(require("domelementtype"));
exports.ElementType = ElementType;
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */ __exportStar(require("./FeedHandler"), exports);
exports.DomUtils = __importStar(require("domutils"));
var FeedHandler_1 = require("./FeedHandler");
Object.defineProperty(exports, "RssHandler", {
    enumerable: true,
    get: function() {
        return FeedHandler_1.FeedHandler;
    }
});

},{"./Parser":"426CL","domhandler":"6nMQY","./Tokenizer":"33ni0","domelementtype":"4hCCU","./FeedHandler":"7cQoD","domutils":"1w7IW"}],"426CL":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parser = void 0;
var Tokenizer_1 = __importDefault(require("./Tokenizer"));
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea", 
]);
var pTag = new Set([
    "p"
]);
var openImpliesClose = {
    tr: new Set([
        "tr",
        "th",
        "td"
    ]),
    th: new Set([
        "th"
    ]),
    td: new Set([
        "thead",
        "th",
        "td"
    ]),
    body: new Set([
        "head",
        "link",
        "script"
    ]),
    li: new Set([
        "li"
    ]),
    p: pTag,
    h1: pTag,
    h2: pTag,
    h3: pTag,
    h4: pTag,
    h5: pTag,
    h6: pTag,
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: new Set([
        "option"
    ]),
    optgroup: new Set([
        "optgroup",
        "option"
    ]),
    dd: new Set([
        "dt",
        "dd"
    ]),
    dt: new Set([
        "dt",
        "dd"
    ]),
    address: pTag,
    article: pTag,
    aside: pTag,
    blockquote: pTag,
    details: pTag,
    div: pTag,
    dl: pTag,
    fieldset: pTag,
    figcaption: pTag,
    figure: pTag,
    footer: pTag,
    form: pTag,
    header: pTag,
    hr: pTag,
    main: pTag,
    nav: pTag,
    ol: pTag,
    pre: pTag,
    section: pTag,
    table: pTag,
    ul: pTag,
    rt: new Set([
        "rt",
        "rp"
    ]),
    rp: new Set([
        "rt",
        "rp"
    ]),
    tbody: new Set([
        "thead",
        "tbody"
    ]),
    tfoot: new Set([
        "thead",
        "tbody"
    ])
};
var voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr", 
]);
var foreignContextElements = new Set([
    "math",
    "svg"
]);
var htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title", 
]);
var reNameEnd = /\s|\//;
var Parser = function() {
    function Parser1(cbs, options) {
        if (options === void 0) options = {
        };
        var _a, _b, _c, _d, _e;
        /** The start index of the last event. */ this.startIndex = 0;
        /** The end index of the last event. */ this.endIndex = null;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.options = options;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {
        };
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 || _e.call(_d, this);
    }
    Parser1.prototype.updatePosition = function(initialOffset) {
        if (this.endIndex === null) {
            if (this.tokenizer.sectionStart <= initialOffset) this.startIndex = 0;
            else this.startIndex = this.tokenizer.sectionStart - initialOffset;
        } else this.startIndex = this.endIndex + 1;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
    };
    // Tokenizer event handlers
    Parser1.prototype.ontext = function(data) {
        var _a, _b;
        this.updatePosition(1);
        this.endIndex--;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 || _b.call(_a, data);
    };
    Parser1.prototype.onopentagname = function(name) {
        var _a, _b;
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        this.tagname = name;
        if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
            var el = void 0;
            while(this.stack.length > 0 && openImpliesClose[name].has(el = this.stack[this.stack.length - 1]))this.onclosetag(el);
        }
        if (this.options.xmlMode || !voidElements.has(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) this.foreignContext.push(true);
            else if (htmlIntegrationElements.has(name)) this.foreignContext.push(false);
        }
        (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 || _b.call(_a, name);
        if (this.cbs.onopentag) this.attribs = {
        };
    };
    Parser1.prototype.onopentagend = function() {
        var _a, _b;
        this.updatePosition(1);
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 || _b.call(_a, this.tagname, this.attribs);
            this.attribs = null;
        }
        if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) this.cbs.onclosetag(this.tagname);
        this.tagname = "";
    };
    Parser1.prototype.onclosetag = function(name) {
        this.updatePosition(1);
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) this.foreignContext.pop();
        if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    pos = this.stack.length - pos;
                    while(pos--)// We know the stack has sufficient elements.
                    this.cbs.onclosetag(this.stack.pop());
                } else this.stack.length = pos;
            } else if (name === "p" && !this.options.xmlMode) {
                this.onopentagname(name);
                this.closeCurrentTag();
            }
        } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this.closeCurrentTag();
        }
    };
    Parser1.prototype.onselfclosingtag = function() {
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) this.closeCurrentTag();
        else this.onopentagend();
    };
    Parser1.prototype.closeCurrentTag = function() {
        var _a, _b;
        var name = this.tagname;
        this.onopentagend();
        /*
         * Self-closing tags will be on the top of the stack
         * (cheaper check than in onclosetag)
         */ if (this.stack[this.stack.length - 1] === name) {
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a, name);
            this.stack.pop();
        }
    };
    Parser1.prototype.onattribname = function(name) {
        if (this.lowerCaseAttributeNames) name = name.toLowerCase();
        this.attribname = name;
    };
    Parser1.prototype.onattribdata = function(value) {
        this.attribvalue += value;
    };
    Parser1.prototype.onattribend = function(quote) {
        var _a, _b;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 || _b.call(_a, this.attribname, this.attribvalue, quote);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) this.attribs[this.attribname] = this.attribvalue;
        this.attribname = "";
        this.attribvalue = "";
    };
    Parser1.prototype.getInstructionName = function(value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        return name;
    };
    Parser1.prototype.ondeclaration = function(value) {
        if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
    };
    Parser1.prototype.onprocessinginstruction = function(value) {
        if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
    };
    Parser1.prototype.oncomment = function(value) {
        var _a, _b, _c, _d;
        this.updatePosition(4);
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 || _b.call(_a, value);
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 || _d.call(_c);
    };
    Parser1.prototype.oncdata = function(value) {
        var _a, _b, _c, _d, _e, _f;
        this.updatePosition(1);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 || _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 || _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 || _f.call(_e);
        } else this.oncomment("[CDATA[" + value + "]]");
    };
    Parser1.prototype.onerror = function(err) {
        var _a, _b;
        (_b = (_a = this.cbs).onerror) === null || _b === void 0 || _b.call(_a, err);
    };
    Parser1.prototype.onend = function() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            for(var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]));
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 || _b.call(_a);
    };
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */ Parser1.prototype.reset = function() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 || _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack = [];
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 || _d.call(_c, this);
    };
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */ Parser1.prototype.parseComplete = function(data) {
        this.reset();
        this.end(data);
    };
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */ Parser1.prototype.write = function(chunk) {
        this.tokenizer.write(chunk);
    };
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */ Parser1.prototype.end = function(chunk) {
        this.tokenizer.end(chunk);
    };
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */ Parser1.prototype.pause = function() {
        this.tokenizer.pause();
    };
    /**
     * Resumes parsing after `pause` was called.
     */ Parser1.prototype.resume = function() {
        this.tokenizer.resume();
    };
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */ Parser1.prototype.parseChunk = function(chunk) {
        this.write(chunk);
    };
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */ Parser1.prototype.done = function(chunk) {
        this.end(chunk);
    };
    return Parser1;
}();
exports.Parser = Parser;

},{"./Tokenizer":"33ni0"}],"33ni0":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decode_codepoint_1 = __importDefault(require("entities/lib/decode_codepoint"));
var entities_json_1 = __importDefault(require("entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(require("entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(require("entities/lib/maps/xml.json"));
function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
function isASCIIAlpha(c) {
    return c >= "a" && c <= "z" || c >= "A" && c <= "Z";
}
function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();
    if (upper === lower) return function(t, c) {
        if (c === lower) t._state = SUCCESS;
        else {
            t._state = FAILURE;
            t._index--;
        }
    };
    return function(t, c) {
        if (c === lower || c === upper) t._state = SUCCESS;
        else {
            t._state = FAILURE;
            t._index--;
        }
    };
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();
    return function(t, c) {
        if (c === lower || c === upper) t._state = NEXT_STATE;
        else {
            t._state = 3;
            t._index--; // Consume the token again
        }
    };
}
var stateBeforeCdata1 = ifElseState("C", 24/* BeforeCdata2 */ , 16/* InDeclaration */ );
var stateBeforeCdata2 = ifElseState("D", 25/* BeforeCdata3 */ , 16/* InDeclaration */ );
var stateBeforeCdata3 = ifElseState("A", 26/* BeforeCdata4 */ , 16/* InDeclaration */ );
var stateBeforeCdata4 = ifElseState("T", 27/* BeforeCdata5 */ , 16/* InDeclaration */ );
var stateBeforeCdata5 = ifElseState("A", 28/* BeforeCdata6 */ , 16/* InDeclaration */ );
var stateBeforeScript1 = consumeSpecialNameChar("R", 35/* BeforeScript2 */ );
var stateBeforeScript2 = consumeSpecialNameChar("I", 36/* BeforeScript3 */ );
var stateBeforeScript3 = consumeSpecialNameChar("P", 37/* BeforeScript4 */ );
var stateBeforeScript4 = consumeSpecialNameChar("T", 38/* BeforeScript5 */ );
var stateAfterScript1 = ifElseState("R", 40/* AfterScript2 */ , 1/* Text */ );
var stateAfterScript2 = ifElseState("I", 41/* AfterScript3 */ , 1/* Text */ );
var stateAfterScript3 = ifElseState("P", 42/* AfterScript4 */ , 1/* Text */ );
var stateAfterScript4 = ifElseState("T", 43/* AfterScript5 */ , 1/* Text */ );
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45/* BeforeStyle2 */ );
var stateBeforeStyle2 = consumeSpecialNameChar("L", 46/* BeforeStyle3 */ );
var stateBeforeStyle3 = consumeSpecialNameChar("E", 47/* BeforeStyle4 */ );
var stateAfterStyle1 = ifElseState("Y", 49/* AfterStyle2 */ , 1/* Text */ );
var stateAfterStyle2 = ifElseState("L", 50/* AfterStyle3 */ , 1/* Text */ );
var stateAfterStyle3 = ifElseState("E", 51/* AfterStyle4 */ , 1/* Text */ );
var stateBeforeSpecialT = consumeSpecialNameChar("I", 54/* BeforeTitle1 */ );
var stateBeforeTitle1 = consumeSpecialNameChar("T", 55/* BeforeTitle2 */ );
var stateBeforeTitle2 = consumeSpecialNameChar("L", 56/* BeforeTitle3 */ );
var stateBeforeTitle3 = consumeSpecialNameChar("E", 57/* BeforeTitle4 */ );
var stateAfterSpecialTEnd = ifElseState("I", 58/* AfterTitle1 */ , 1/* Text */ );
var stateAfterTitle1 = ifElseState("T", 59/* AfterTitle2 */ , 1/* Text */ );
var stateAfterTitle2 = ifElseState("L", 60/* AfterTitle3 */ , 1/* Text */ );
var stateAfterTitle3 = ifElseState("E", 61/* AfterTitle4 */ , 1/* Text */ );
var stateBeforeEntity = ifElseState("#", 63/* BeforeNumericEntity */ , 64/* InNamedEntity */ );
var stateBeforeNumericEntity = ifElseState("X", 66/* InHexEntity */ , 65/* InNumericEntity */ );
var Tokenizer = function() {
    function Tokenizer1(options, cbs) {
        var _a;
        /** The current state the tokenizer is in. */ this._state = 1;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this._index = 0;
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */ this.bufferOffset = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = 1;
        /** For special parsing behavior inside of script and style tags. */ this.special = 1;
        /** Indicates whether the tokenizer has been paused. */ this.running = true;
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */ this.ended = false;
        this.cbs = cbs;
        this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
        this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
    }
    Tokenizer1.prototype.reset = function() {
        this._state = 1;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1;
        this.special = 1;
        this.running = true;
        this.ended = false;
    };
    Tokenizer1.prototype.write = function(chunk) {
        if (this.ended) this.cbs.onerror(Error(".write() after done!"));
        this.buffer += chunk;
        this.parse();
    };
    Tokenizer1.prototype.end = function(chunk) {
        if (this.ended) this.cbs.onerror(Error(".end() after done!"));
        if (chunk) this.write(chunk);
        this.ended = true;
        if (this.running) this.finish();
    };
    Tokenizer1.prototype.pause = function() {
        this.running = false;
    };
    Tokenizer1.prototype.resume = function() {
        this.running = true;
        if (this._index < this.buffer.length) this.parse();
        if (this.ended) this.finish();
    };
    /**
     * The current index within all of the written data.
     */ Tokenizer1.prototype.getAbsoluteIndex = function() {
        return this.bufferOffset + this._index;
    };
    Tokenizer1.prototype.stateText = function(c) {
        if (c === "<") {
            if (this._index > this.sectionStart) this.cbs.ontext(this.getSection());
            this._state = 2;
            this.sectionStart = this._index;
        } else if (this.decodeEntities && c === "&" && (this.special === 1 || this.special === 4)) {
            if (this._index > this.sectionStart) this.cbs.ontext(this.getSection());
            this.baseState = 1;
            this._state = 62;
            this.sectionStart = this._index;
        }
    };
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */ Tokenizer1.prototype.isTagStartChar = function(c) {
        return isASCIIAlpha(c) || this.xmlMode && !whitespace(c) && c !== "/" && c !== ">";
    };
    Tokenizer1.prototype.stateBeforeTagName = function(c) {
        if (c === "/") this._state = 5;
        else if (c === "<") {
            this.cbs.ontext(this.getSection());
            this.sectionStart = this._index;
        } else if (c === ">" || this.special !== 1 || whitespace(c)) this._state = 1;
        else if (c === "!") {
            this._state = 15;
            this.sectionStart = this._index + 1;
        } else if (c === "?") {
            this._state = 17;
            this.sectionStart = this._index + 1;
        } else if (!this.isTagStartChar(c)) this._state = 1;
        else {
            this._state = !this.xmlMode && (c === "s" || c === "S") ? 32 : !this.xmlMode && (c === "t" || c === "T") ? 52 : 3;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInTagName = function(c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this.emitToken("onopentagname");
            this._state = 8;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateBeforeClosingTagName = function(c) {
        if (whitespace(c)) ;
        else if (c === ">") this._state = 1;
        else if (this.special !== 1) {
            if (this.special !== 4 && (c === "s" || c === "S")) this._state = 33;
            else if (this.special === 4 && (c === "t" || c === "T")) this._state = 53;
            else {
                this._state = 1;
                this._index--;
            }
        } else if (!this.isTagStartChar(c)) {
            this._state = 20;
            this.sectionStart = this._index;
        } else {
            this._state = 6;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInClosingTagName = function(c) {
        if (c === ">" || whitespace(c)) {
            this.emitToken("onclosetag");
            this._state = 7;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateAfterClosingTagName = function(c) {
        // Skip everything until ">"
        if (c === ">") {
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateBeforeAttributeName = function(c) {
        if (c === ">") {
            this.cbs.onopentagend();
            this._state = 1;
            this.sectionStart = this._index + 1;
        } else if (c === "/") this._state = 4;
        else if (!whitespace(c)) {
            this._state = 9;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInSelfClosingTag = function(c) {
        if (c === ">") {
            this.cbs.onselfclosingtag();
            this._state = 1;
            this.sectionStart = this._index + 1;
            this.special = 1; // Reset special state, in case of self-closing special tags
        } else if (!whitespace(c)) {
            this._state = 8;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateInAttributeName = function(c) {
        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateAfterAttributeName = function(c) {
        if (c === "=") this._state = 11;
        else if (c === "/" || c === ">") {
            this.cbs.onattribend(undefined);
            this._state = 8;
            this._index--;
        } else if (!whitespace(c)) {
            this.cbs.onattribend(undefined);
            this._state = 9;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateBeforeAttributeValue = function(c) {
        if (c === '"') {
            this._state = 12;
            this.sectionStart = this._index + 1;
        } else if (c === "'") {
            this._state = 13;
            this.sectionStart = this._index + 1;
        } else if (!whitespace(c)) {
            this._state = 14;
            this.sectionStart = this._index;
            this._index--; // Reconsume token
        }
    };
    Tokenizer1.prototype.handleInAttributeValue = function(c, quote) {
        if (c === quote) {
            this.emitToken("onattribdata");
            this.cbs.onattribend(quote);
            this._state = 8;
        } else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInAttributeValueDoubleQuotes = function(c) {
        this.handleInAttributeValue(c, '"');
    };
    Tokenizer1.prototype.stateInAttributeValueSingleQuotes = function(c) {
        this.handleInAttributeValue(c, "'");
    };
    Tokenizer1.prototype.stateInAttributeValueNoQuotes = function(c) {
        if (whitespace(c) || c === ">") {
            this.emitToken("onattribdata");
            this.cbs.onattribend(null);
            this._state = 8;
            this._index--;
        } else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateBeforeDeclaration = function(c) {
        this._state = c === "[" ? 23 : c === "-" ? 18 : 16;
    };
    Tokenizer1.prototype.stateInDeclaration = function(c) {
        if (c === ">") {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateInProcessingInstruction = function(c) {
        if (c === ">") {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateBeforeComment = function(c) {
        if (c === "-") {
            this._state = 19;
            this.sectionStart = this._index + 1;
        } else this._state = 16;
    };
    Tokenizer1.prototype.stateInComment = function(c) {
        if (c === "-") this._state = 21;
    };
    Tokenizer1.prototype.stateInSpecialComment = function(c) {
        if (c === ">") {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateAfterComment1 = function(c) {
        if (c === "-") this._state = 22;
        else this._state = 19;
    };
    Tokenizer1.prototype.stateAfterComment2 = function(c) {
        if (c === ">") {
            // Remove 2 trailing chars
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
        } else if (c !== "-") this._state = 19;
    // Else: stay in AFTER_COMMENT_2 (`--->`)
    };
    Tokenizer1.prototype.stateBeforeCdata6 = function(c) {
        if (c === "[") {
            this._state = 29;
            this.sectionStart = this._index + 1;
        } else {
            this._state = 16;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateInCdata = function(c) {
        if (c === "]") this._state = 30;
    };
    Tokenizer1.prototype.stateAfterCdata1 = function(c) {
        if (c === "]") this._state = 31;
        else this._state = 29;
    };
    Tokenizer1.prototype.stateAfterCdata2 = function(c) {
        if (c === ">") {
            // Remove 2 trailing chars
            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
        } else if (c !== "]") this._state = 29;
    // Else: stay in AFTER_CDATA_2 (`]]]>`)
    };
    Tokenizer1.prototype.stateBeforeSpecialS = function(c) {
        if (c === "c" || c === "C") this._state = 34;
        else if (c === "t" || c === "T") this._state = 44;
        else {
            this._state = 3;
            this._index--; // Consume the token again
        }
    };
    Tokenizer1.prototype.stateBeforeSpecialSEnd = function(c) {
        if (this.special === 2 && (c === "c" || c === "C")) this._state = 39;
        else if (this.special === 3 && (c === "t" || c === "T")) this._state = 48;
        else this._state = 1;
    };
    Tokenizer1.prototype.stateBeforeSpecialLast = function(c, special) {
        if (c === "/" || c === ">" || whitespace(c)) this.special = special;
        this._state = 3;
        this._index--; // Consume the token again
    };
    Tokenizer1.prototype.stateAfterSpecialLast = function(c, sectionStartOffset) {
        if (c === ">" || whitespace(c)) {
            this.special = 1;
            this._state = 6;
            this.sectionStart = this._index - sectionStartOffset;
            this._index--; // Reconsume the token
        } else this._state = 1;
    };
    // For entities terminated with a semicolon
    Tokenizer1.prototype.parseFixedEntity = function(map) {
        if (map === void 0) map = this.xmlMode ? xml_json_1.default : entities_json_1.default;
        // Offset = 1
        if (this.sectionStart + 1 < this._index) {
            var entity = this.buffer.substring(this.sectionStart + 1, this._index);
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
                this.emitPartial(map[entity]);
                this.sectionStart = this._index + 1;
            }
        }
    };
    // Parses legacy entities (without trailing semicolon)
    Tokenizer1.prototype.parseLegacyEntity = function() {
        var start = this.sectionStart + 1;
        // The max length of legacy entities is 6
        var limit = Math.min(this._index - start, 6);
        while(limit >= 2){
            // The min length of legacy entities is 2
            var entity = this.buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
                this.emitPartial(legacy_json_1.default[entity]);
                this.sectionStart += limit + 1;
                return;
            }
            limit--;
        }
    };
    Tokenizer1.prototype.stateInNamedEntity = function(c) {
        if (c === ";") {
            this.parseFixedEntity();
            // Retry as legacy entity if entity wasn't parsed
            if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) this.parseLegacyEntity();
            this._state = this.baseState;
        } else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
            if (this.xmlMode || this.sectionStart + 1 === this._index) ;
            else if (this.baseState !== 1) {
                if (c !== "=") // Parse as legacy entity, without allowing additional characters.
                this.parseFixedEntity(legacy_json_1.default);
            } else this.parseLegacyEntity();
            this._state = this.baseState;
            this._index--;
        }
    };
    Tokenizer1.prototype.decodeNumericEntity = function(offset, base, strict) {
        var sectionStart = this.sectionStart + offset;
        if (sectionStart !== this._index) {
            // Parse entity
            var entity = this.buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial(decode_codepoint_1.default(parsed));
            this.sectionStart = strict ? this._index + 1 : this._index;
        }
        this._state = this.baseState;
    };
    Tokenizer1.prototype.stateInNumericEntity = function(c) {
        if (c === ";") this.decodeNumericEntity(2, 10, true);
        else if (c < "0" || c > "9") {
            if (!this.xmlMode) this.decodeNumericEntity(2, 10, false);
            else this._state = this.baseState;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateInHexEntity = function(c) {
        if (c === ";") this.decodeNumericEntity(3, 16, true);
        else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
            if (!this.xmlMode) this.decodeNumericEntity(3, 16, false);
            else this._state = this.baseState;
            this._index--;
        }
    };
    Tokenizer1.prototype.cleanup = function() {
        if (this.sectionStart < 0) {
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
        } else if (this.running) {
            if (this._state === 1) {
                if (this.sectionStart !== this._index) this.cbs.ontext(this.buffer.substr(this.sectionStart));
                this.buffer = "";
                this.bufferOffset += this._index;
                this._index = 0;
            } else if (this.sectionStart === this._index) {
                // The section just started
                this.buffer = "";
                this.bufferOffset += this._index;
                this._index = 0;
            } else {
                // Remove everything unnecessary
                this.buffer = this.buffer.substr(this.sectionStart);
                this._index -= this.sectionStart;
                this.bufferOffset += this.sectionStart;
            }
            this.sectionStart = 0;
        }
    };
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */ Tokenizer1.prototype.parse = function() {
        while(this._index < this.buffer.length && this.running){
            var c = this.buffer.charAt(this._index);
            if (this._state === 1) this.stateText(c);
            else if (this._state === 12) this.stateInAttributeValueDoubleQuotes(c);
            else if (this._state === 9) this.stateInAttributeName(c);
            else if (this._state === 19) this.stateInComment(c);
            else if (this._state === 20) this.stateInSpecialComment(c);
            else if (this._state === 8) this.stateBeforeAttributeName(c);
            else if (this._state === 3) this.stateInTagName(c);
            else if (this._state === 6) this.stateInClosingTagName(c);
            else if (this._state === 2) this.stateBeforeTagName(c);
            else if (this._state === 10) this.stateAfterAttributeName(c);
            else if (this._state === 13) this.stateInAttributeValueSingleQuotes(c);
            else if (this._state === 11) this.stateBeforeAttributeValue(c);
            else if (this._state === 5) this.stateBeforeClosingTagName(c);
            else if (this._state === 7) this.stateAfterClosingTagName(c);
            else if (this._state === 32) this.stateBeforeSpecialS(c);
            else if (this._state === 21) this.stateAfterComment1(c);
            else if (this._state === 14) this.stateInAttributeValueNoQuotes(c);
            else if (this._state === 4) this.stateInSelfClosingTag(c);
            else if (this._state === 16) this.stateInDeclaration(c);
            else if (this._state === 15) this.stateBeforeDeclaration(c);
            else if (this._state === 22) this.stateAfterComment2(c);
            else if (this._state === 18) this.stateBeforeComment(c);
            else if (this._state === 33) this.stateBeforeSpecialSEnd(c);
            else if (this._state === 53) stateAfterSpecialTEnd(this, c);
            else if (this._state === 39) stateAfterScript1(this, c);
            else if (this._state === 40) stateAfterScript2(this, c);
            else if (this._state === 41) stateAfterScript3(this, c);
            else if (this._state === 34) stateBeforeScript1(this, c);
            else if (this._state === 35) stateBeforeScript2(this, c);
            else if (this._state === 36) stateBeforeScript3(this, c);
            else if (this._state === 37) stateBeforeScript4(this, c);
            else if (this._state === 38) this.stateBeforeSpecialLast(c, 2/* Script */ );
            else if (this._state === 42) stateAfterScript4(this, c);
            else if (this._state === 43) this.stateAfterSpecialLast(c, 6);
            else if (this._state === 44) stateBeforeStyle1(this, c);
            else if (this._state === 29) this.stateInCdata(c);
            else if (this._state === 45) stateBeforeStyle2(this, c);
            else if (this._state === 46) stateBeforeStyle3(this, c);
            else if (this._state === 47) this.stateBeforeSpecialLast(c, 3/* Style */ );
            else if (this._state === 48) stateAfterStyle1(this, c);
            else if (this._state === 49) stateAfterStyle2(this, c);
            else if (this._state === 50) stateAfterStyle3(this, c);
            else if (this._state === 51) this.stateAfterSpecialLast(c, 5);
            else if (this._state === 52) stateBeforeSpecialT(this, c);
            else if (this._state === 54) stateBeforeTitle1(this, c);
            else if (this._state === 55) stateBeforeTitle2(this, c);
            else if (this._state === 56) stateBeforeTitle3(this, c);
            else if (this._state === 57) this.stateBeforeSpecialLast(c, 4/* Title */ );
            else if (this._state === 58) stateAfterTitle1(this, c);
            else if (this._state === 59) stateAfterTitle2(this, c);
            else if (this._state === 60) stateAfterTitle3(this, c);
            else if (this._state === 61) this.stateAfterSpecialLast(c, 5);
            else if (this._state === 17) this.stateInProcessingInstruction(c);
            else if (this._state === 64) this.stateInNamedEntity(c);
            else if (this._state === 23) stateBeforeCdata1(this, c);
            else if (this._state === 62) stateBeforeEntity(this, c);
            else if (this._state === 24) stateBeforeCdata2(this, c);
            else if (this._state === 25) stateBeforeCdata3(this, c);
            else if (this._state === 30) this.stateAfterCdata1(c);
            else if (this._state === 31) this.stateAfterCdata2(c);
            else if (this._state === 26) stateBeforeCdata4(this, c);
            else if (this._state === 27) stateBeforeCdata5(this, c);
            else if (this._state === 28) this.stateBeforeCdata6(c);
            else if (this._state === 66) this.stateInHexEntity(c);
            else if (this._state === 65) this.stateInNumericEntity(c);
            else if (this._state === 63) stateBeforeNumericEntity(this, c);
            else this.cbs.onerror(Error("unknown _state"), this._state);
            this._index++;
        }
        this.cleanup();
    };
    Tokenizer1.prototype.finish = function() {
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this._index) this.handleTrailingData();
        this.cbs.onend();
    };
    Tokenizer1.prototype.handleTrailingData = function() {
        var data = this.buffer.substr(this.sectionStart);
        if (this._state === 29 || this._state === 30 || this._state === 31) this.cbs.oncdata(data);
        else if (this._state === 19 || this._state === 21 || this._state === 22) this.cbs.oncomment(data);
        else if (this._state === 64 && !this.xmlMode) {
            this.parseLegacyEntity();
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        } else if (this._state === 65 && !this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        } else if (this._state === 66 && !this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) this.cbs.ontext(data);
    /*
         * Else, ignore remaining data
         * TODO add a way to remove current tag
         */ };
    Tokenizer1.prototype.getSection = function() {
        return this.buffer.substring(this.sectionStart, this._index);
    };
    Tokenizer1.prototype.emitToken = function(name) {
        this.cbs[name](this.getSection());
        this.sectionStart = -1;
    };
    Tokenizer1.prototype.emitPartial = function(value) {
        if (this.baseState !== 1) this.cbs.onattribdata(value); // TODO implement the new event
        else this.cbs.ontext(value);
    };
    return Tokenizer1;
}();
exports.default = Tokenizer;

},{"entities/lib/decode_codepoint":"21a99","entities/lib/maps/entities.json":"2HB26","entities/lib/maps/legacy.json":"2YMh2","entities/lib/maps/xml.json":"2Mdpw"}],"21a99":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decode_json_1 = __importDefault(require("./maps/decode.json"));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint || function(codePoint) {
    var output = "";
    if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function decodeCodePoint(codePoint) {
    if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return "\uFFFD";
    if (codePoint in decode_json_1.default) codePoint = decode_json_1.default[codePoint];
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;

},{"./maps/decode.json":"5snTr"}],"5snTr":[function(require,module,exports) {
module.exports = JSON.parse("{\"0\":65533,\"128\":8364,\"130\":8218,\"131\":402,\"132\":8222,\"133\":8230,\"134\":8224,\"135\":8225,\"136\":710,\"137\":8240,\"138\":352,\"139\":8249,\"140\":338,\"142\":381,\"145\":8216,\"146\":8217,\"147\":8220,\"148\":8221,\"149\":8226,\"150\":8211,\"151\":8212,\"152\":732,\"153\":8482,\"154\":353,\"155\":8250,\"156\":339,\"158\":382,\"159\":376}");

},{}],"2HB26":[function(require,module,exports) {
module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

},{}],"2YMh2":[function(require,module,exports) {
module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"Agrave\":\"À\",\"agrave\":\"à\",\"amp\":\"&\",\"AMP\":\"&\",\"Aring\":\"Å\",\"aring\":\"å\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"COPY\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"Eacute\":\"É\",\"eacute\":\"é\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"Egrave\":\"È\",\"egrave\":\"è\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"GT\":\">\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"LT\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"REG\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"times\":\"×\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

},{}],"2Mdpw":[function(require,module,exports) {
module.exports = JSON.parse("{\"amp\":\"&\",\"apos\":\"'\",\"gt\":\">\",\"lt\":\"<\",\"quot\":\"\\\"\"}");

},{}],"6nMQY":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DomHandler = void 0;
var domelementtype_1 = require("domelementtype");
var node_1 = require("./node");
__exportStar(require("./node"), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false
};
var DomHandler = function() {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ function DomHandler1(callback, options, elementCB) {
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new node_1.Document(this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler1.prototype.onparserinit = function(parser) {
        this.parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler1.prototype.onreset = function() {
        var _a;
        this.dom = [];
        this.root = new node_1.Document(this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = (_a = this.parser) !== null && _a !== void 0 ? _a : null;
    };
    // Signals the handler that parsing is done
    DomHandler1.prototype.onend = function() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    };
    DomHandler1.prototype.onerror = function(error) {
        this.handleCallback(error);
    };
    DomHandler1.prototype.onclosetag = function() {
        this.lastNode = null;
        var elem = this.tagStack.pop();
        if (this.options.withEndIndices) elem.endIndex = this.parser.endIndex;
        if (this.elementCB) this.elementCB(elem);
    };
    DomHandler1.prototype.onopentag = function(name, attribs) {
        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
        var element = new node_1.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    };
    DomHandler1.prototype.ontext = function(data) {
        var normalizeWhitespace = this.options.normalizeWhitespace;
        var lastNode = this.lastNode;
        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            else lastNode.data += data;
        } else {
            if (normalizeWhitespace) data = data.replace(reWhitespace, " ");
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    };
    DomHandler1.prototype.oncomment = function(data) {
        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    };
    DomHandler1.prototype.oncommentend = function() {
        this.lastNode = null;
    };
    DomHandler1.prototype.oncdatastart = function() {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    };
    DomHandler1.prototype.oncdataend = function() {
        this.lastNode = null;
    };
    DomHandler1.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler1.prototype.handleCallback = function(error) {
        if (typeof this.callback === "function") this.callback(error, this.dom);
        else if (error) throw error;
    };
    DomHandler1.prototype.addNode = function(node) {
        var parent = this.tagStack[this.tagStack.length - 1];
        var previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) node.startIndex = this.parser.startIndex;
        if (this.options.withEndIndices) node.endIndex = this.parser.endIndex;
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    };
    return DomHandler1;
}();
exports.DomHandler = DomHandler;
exports.default = DomHandler;

},{"domelementtype":"4hCCU","./node":"6cbTG"}],"4hCCU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
/** Types of elements found in htmlparser2's DOM */ var ElementType;
(function(ElementType1) {
    /** Type for the root element of a document */ ElementType1["Root"] = "root";
    /** Type for Text */ ElementType1["Text"] = "text";
    /** Type for <? ... ?> */ ElementType1["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType1["Comment"] = "comment";
    /** Type for <script> tags */ ElementType1["Script"] = "script";
    /** Type for <style> tags */ ElementType1["Style"] = "style";
    /** Type for Any tag */ ElementType1["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType1["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType1["Doctype"] = "doctype";
})(ElementType = exports.ElementType || (exports.ElementType = {
}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */ function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */ exports.Root = ElementType.Root;
/** Type for Text */ exports.Text = ElementType.Text;
/** Type for <? ... ?> */ exports.Directive = ElementType.Directive;
/** Type for <!-- ... --> */ exports.Comment = ElementType.Comment;
/** Type for <script> tags */ exports.Script = ElementType.Script;
/** Type for <style> tags */ exports.Style = ElementType.Style;
/** Type for Any tag */ exports.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */ exports.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */ exports.Doctype = ElementType.Doctype;

},{}],"6cbTG":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var domelementtype_1 = require("domelementtype");
var nodeTypes = new Map([
    [
        domelementtype_1.ElementType.Tag,
        1
    ],
    [
        domelementtype_1.ElementType.Script,
        1
    ],
    [
        domelementtype_1.ElementType.Style,
        1
    ],
    [
        domelementtype_1.ElementType.Directive,
        1
    ],
    [
        domelementtype_1.ElementType.Text,
        3
    ],
    [
        domelementtype_1.ElementType.CDATA,
        4
    ],
    [
        domelementtype_1.ElementType.Comment,
        8
    ],
    [
        domelementtype_1.ElementType.Root,
        9
    ], 
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */ var Node1 = function() {
    /**
     *
     * @param type The type of the node.
     */ function Node2(type) {
        this.type = type;
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    Object.defineProperty(Node2.prototype, "nodeType", {
        // Read-only aliases
        get: function() {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node2.prototype, "parentNode", {
        // Read-write aliases for properties
        get: function() {
            return this.parent;
        },
        set: function(parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node2.prototype, "previousSibling", {
        get: function() {
            return this.prev;
        },
        set: function(prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node2.prototype, "nextSibling", {
        get: function() {
            return this.next;
        },
        set: function(next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ Node2.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) recursive = false;
        return cloneNode(this, recursive);
    };
    return Node2;
}();
exports.Node = Node1;
var DataNode1 = function(_super) {
    __extends(DataNode2, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */ function DataNode2(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode2.prototype, "nodeValue", {
        get: function() {
            return this.data;
        },
        set: function(data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode2;
}(Node1);
exports.DataNode = DataNode1;
var Text1 = function(_super) {
    __extends(Text2, _super);
    function Text2(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
    }
    return Text2;
}(DataNode1);
exports.Text = Text1;
var Comment1 = function(_super) {
    __extends(Comment2, _super);
    function Comment2(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
    }
    return Comment2;
}(DataNode1);
exports.Comment = Comment1;
var ProcessingInstruction1 = function(_super) {
    __extends(ProcessingInstruction2, _super);
    function ProcessingInstruction2(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction2;
}(DataNode1);
exports.ProcessingInstruction = ProcessingInstruction1;
/**
 * A `Node` that can have children.
 */ var NodeWithChildren1 = function(_super) {
    __extends(NodeWithChildren2, _super);
    /**
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */ function NodeWithChildren2(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
        // Aliases
        get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
        get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
        get: function() {
            return this.children;
        },
        set: function(children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren2;
}(Node1);
exports.NodeWithChildren = NodeWithChildren1;
var Document1 = function(_super) {
    __extends(Document2, _super);
    function Document2(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
    }
    return Document2;
}(NodeWithChildren1);
exports.Document = Document1;
var Element1 = function(_super) {
    __extends(Element2, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ function Element2(name, attribs, children, type) {
        if (children === void 0) children = [];
        if (type === void 0) type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element2.prototype, "tagName", {
        // DOM Level 1 aliases
        get: function() {
            return this.name;
        },
        set: function(name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element2.prototype, "attributes", {
        get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
                var _a, _b;
                return {
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element2;
}(NodeWithChildren1);
exports.Element = Element1;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */ function isTag(node) {
    return domelementtype_1.isTag(node);
}
exports.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */ function isCDATA(node) {
    return node.type === domelementtype_1.ElementType.CDATA;
}
exports.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */ function isText(node) {
    return node.type === domelementtype_1.ElementType.Text;
}
exports.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */ function isComment(node) {
    return node.type === domelementtype_1.ElementType.Comment;
}
exports.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDirective(node) {
    return node.type === domelementtype_1.ElementType.Directive;
}
exports.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDocument(node) {
    return node.type === domelementtype_1.ElementType.Root;
}
exports.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
 */ function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */ function cloneNode(node, recursive) {
    if (recursive === void 0) recursive = false;
    var result;
    if (isText(node)) result = new Text1(node.data);
    else if (isComment(node)) result = new Comment1(node.data);
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element1(node.name, __assign({
        }, node.attribs), children);
        children.forEach(function(child) {
            return child.parent = clone_1;
        });
        if (node["x-attribsNamespace"]) clone_1["x-attribsNamespace"] = __assign({
        }, node["x-attribsNamespace"]);
        if (node["x-attribsPrefix"]) clone_1["x-attribsPrefix"] = __assign({
        }, node["x-attribsPrefix"]);
        result = clone_1;
    } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new NodeWithChildren1(domelementtype_1.ElementType.CDATA, children);
        children.forEach(function(child) {
            return child.parent = clone_2;
        });
        result = clone_2;
    } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document1(children);
        children.forEach(function(child) {
            return child.parent = clone_3;
        });
        if (node["x-mode"]) clone_3["x-mode"] = node["x-mode"];
        result = clone_3;
    } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction1(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else throw new Error("Not implemented yet: " + node.type);
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    return result;
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function(child) {
        return cloneNode(child, true);
    });
    for(var i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

},{"domelementtype":"4hCCU"}],"7cQoD":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseFeed = exports.FeedHandler = void 0;
var domhandler_1 = __importDefault(require("domhandler"));
var DomUtils = __importStar(require("domutils"));
var Parser_1 = require("./Parser");
var FeedItemMediaMedium;
(function(FeedItemMediaMedium1) {
    FeedItemMediaMedium1[FeedItemMediaMedium1["image"] = 0] = "image";
    FeedItemMediaMedium1[FeedItemMediaMedium1["audio"] = 1] = "audio";
    FeedItemMediaMedium1[FeedItemMediaMedium1["video"] = 2] = "video";
    FeedItemMediaMedium1[FeedItemMediaMedium1["document"] = 3] = "document";
    FeedItemMediaMedium1[FeedItemMediaMedium1["executable"] = 4] = "executable";
})(FeedItemMediaMedium || (FeedItemMediaMedium = {
}));
var FeedItemMediaExpression;
(function(FeedItemMediaExpression1) {
    FeedItemMediaExpression1[FeedItemMediaExpression1["sample"] = 0] = "sample";
    FeedItemMediaExpression1[FeedItemMediaExpression1["full"] = 1] = "full";
    FeedItemMediaExpression1[FeedItemMediaExpression1["nonstop"] = 2] = "nonstop";
})(FeedItemMediaExpression || (FeedItemMediaExpression = {
}));
// TODO: Consume data as it is coming in
var FeedHandler1 = function(_super) {
    __extends(FeedHandler2, _super);
    /**
     *
     * @param callback
     * @param options
     */ function FeedHandler2(callback, options) {
        var _this = this;
        if (typeof callback === "object") {
            callback = undefined;
            options = callback;
        }
        _this = _super.call(this, callback, options) || this;
        return _this;
    }
    FeedHandler2.prototype.onend = function() {
        var _a, _b;
        var feedRoot = getOneElement(isValidFeed, this.dom);
        if (!feedRoot) {
            this.handleCallback(new Error("couldn't find root of feed"));
            return;
        }
        var feed = {
        };
        if (feedRoot.name === "feed") {
            var childs = feedRoot.children;
            feed.type = "atom";
            addConditionally(feed, "id", "id", childs);
            addConditionally(feed, "title", "title", childs);
            var href = getAttribute("href", getOneElement("link", childs));
            if (href) feed.link = href;
            addConditionally(feed, "description", "subtitle", childs);
            var updated = fetch("updated", childs);
            if (updated) feed.updated = new Date(updated);
            addConditionally(feed, "author", "email", childs, true);
            feed.items = getElements("entry", childs).map(function(item) {
                var entry = {
                };
                var children = item.children;
                addConditionally(entry, "id", "id", children);
                addConditionally(entry, "title", "title", children);
                var href1 = getAttribute("href", getOneElement("link", children));
                if (href1) entry.link = href1;
                var description = fetch("summary", children) || fetch("content", children);
                if (description) entry.description = description;
                var pubDate = fetch("updated", children);
                if (pubDate) entry.pubDate = new Date(pubDate);
                entry.media = getMediaElements(children);
                return entry;
            });
        } else {
            var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
            feed.type = feedRoot.name.substr(0, 3);
            feed.id = "";
            addConditionally(feed, "title", "title", childs);
            addConditionally(feed, "link", "link", childs);
            addConditionally(feed, "description", "description", childs);
            var updated = fetch("lastBuildDate", childs);
            if (updated) feed.updated = new Date(updated);
            addConditionally(feed, "author", "managingEditor", childs, true);
            feed.items = getElements("item", feedRoot.children).map(function(item) {
                var entry = {
                };
                var children = item.children;
                addConditionally(entry, "id", "guid", children);
                addConditionally(entry, "title", "title", children);
                addConditionally(entry, "link", "link", children);
                addConditionally(entry, "description", "description", children);
                var pubDate = fetch("pubDate", children);
                if (pubDate) entry.pubDate = new Date(pubDate);
                entry.media = getMediaElements(children);
                return entry;
            });
        }
        this.feed = feed;
        this.handleCallback(null);
    };
    return FeedHandler2;
}(domhandler_1.default);
exports.FeedHandler = FeedHandler1;
function getMediaElements(where) {
    return getElements("media:content", where).map(function(elem) {
        var media = {
            medium: elem.attribs.medium,
            isDefault: !!elem.attribs.isDefault
        };
        if (elem.attribs.url) media.url = elem.attribs.url;
        if (elem.attribs.fileSize) media.fileSize = parseInt(elem.attribs.fileSize, 10);
        if (elem.attribs.type) media.type = elem.attribs.type;
        if (elem.attribs.expression) media.expression = elem.attribs.expression;
        if (elem.attribs.bitrate) media.bitrate = parseInt(elem.attribs.bitrate, 10);
        if (elem.attribs.framerate) media.framerate = parseInt(elem.attribs.framerate, 10);
        if (elem.attribs.samplingrate) media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
        if (elem.attribs.channels) media.channels = parseInt(elem.attribs.channels, 10);
        if (elem.attribs.duration) media.duration = parseInt(elem.attribs.duration, 10);
        if (elem.attribs.height) media.height = parseInt(elem.attribs.height, 10);
        if (elem.attribs.width) media.width = parseInt(elem.attribs.width, 10);
        if (elem.attribs.lang) media.lang = elem.attribs.lang;
        return media;
    });
}
function getElements(tagName, where) {
    return DomUtils.getElementsByTagName(tagName, where, true);
}
function getOneElement(tagName, node) {
    return DomUtils.getElementsByTagName(tagName, node, true, 1)[0];
}
function fetch(tagName, where, recurse) {
    if (recurse === void 0) recurse = false;
    return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function getAttribute(name, elem) {
    if (!elem) return null;
    var attribs = elem.attribs;
    return attribs[name];
}
function addConditionally(obj, prop, what, where, recurse) {
    if (recurse === void 0) recurse = false;
    var tmp = fetch(what, where, recurse);
    if (tmp) obj[prop] = tmp;
}
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this option, you should set `xmlMode` to `true`.
 */ function parseFeed(feed, options) {
    if (options === void 0) options = {
        xmlMode: true
    };
    var handler = new FeedHandler1(options);
    new Parser_1.Parser(handler, options).end(feed);
    return handler.feed;
}
exports.parseFeed = parseFeed;

},{"domhandler":"6nMQY","domutils":"1w7IW","./Parser":"426CL"}],"1w7IW":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
__exportStar(require("./stringify"), exports);
__exportStar(require("./traversal"), exports);
__exportStar(require("./manipulation"), exports);
__exportStar(require("./querying"), exports);
__exportStar(require("./legacy"), exports);
__exportStar(require("./helpers"), exports);
var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "isTag", {
    enumerable: true,
    get: function() {
        return domhandler_1.isTag;
    }
});
Object.defineProperty(exports, "isCDATA", {
    enumerable: true,
    get: function() {
        return domhandler_1.isCDATA;
    }
});
Object.defineProperty(exports, "isText", {
    enumerable: true,
    get: function() {
        return domhandler_1.isText;
    }
});
Object.defineProperty(exports, "isComment", {
    enumerable: true,
    get: function() {
        return domhandler_1.isComment;
    }
});
Object.defineProperty(exports, "isDocument", {
    enumerable: true,
    get: function() {
        return domhandler_1.isDocument;
    }
});
Object.defineProperty(exports, "hasChildren", {
    enumerable: true,
    get: function() {
        return domhandler_1.hasChildren;
    }
});

},{"./stringify":"3vU3w","./traversal":"3sKLz","./manipulation":"31asg","./querying":"2m4ml","./legacy":"5i2AT","./helpers":"3h450","domhandler":"6nMQY"}],"3vU3w":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
var domhandler_1 = require("domhandler");
var dom_serializer_1 = __importDefault(require("dom-serializer"));
var domelementtype_1 = require("domelementtype");
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */ function getOuterHTML(node, options) {
    return dom_serializer_1.default(node, options);
}
exports.getOuterHTML = getOuterHTML;
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */ function getInnerHTML(node, options) {
    return domhandler_1.hasChildren(node) ? node.children.map(function(node1) {
        return getOuterHTML(node1, options);
    }).join("") : "";
}
exports.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */ function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if (domhandler_1.isTag(node)) return node.name === "br" ? "\n" : getText(node.children);
    if (domhandler_1.isCDATA(node)) return getText(node.children);
    if (domhandler_1.isText(node)) return node.data;
    return "";
}
exports.getText = getText;
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */ function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if (domhandler_1.isTag(node)) return textContent(node.children);
    if (domhandler_1.isCDATA(node)) return textContent(node.children);
    if (domhandler_1.isText(node)) return node.data;
    return "";
}
exports.textContent = textContent;
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */ function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if (domhandler_1.hasChildren(node) && node.type === domelementtype_1.ElementType.Tag) return innerText(node.children);
    if (domhandler_1.isCDATA(node)) return innerText(node.children);
    if (domhandler_1.isText(node)) return node.data;
    return "";
}
exports.innerText = innerText;

},{"domhandler":"6nMQY","dom-serializer":"NuqTv","domelementtype":"4hCCU"}],"NuqTv":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Module dependencies
 */ var ElementType = __importStar(require("domelementtype"));
var entities_1 = require("entities");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var foreignNames_1 = require("./foreignNames");
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript", 
]);
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    if (!attributes) return;
    return Object.keys(attributes).map(function(key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") /* Fix up mixed-case attribute names */ key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") return key;
        return key + "=\"" + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + "\"";
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr", 
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */ function render(node, options) {
    if (options === void 0) options = {
    };
    var nodes = "length" in node ? node : [
        node
    ];
    var output = "";
    for(var i = 0; i < nodes.length; i++)output += renderNode(nodes[i], options);
    return output;
}
exports.default = render;
function renderNode(node, options) {
    switch(node.type){
        case ElementType.Root:
            return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title", 
]);
var foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) opts = __assign(__assign({
        }, opts), {
            xmlMode: false
        });
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) opts = __assign(__assign({
    }, opts), {
        xmlMode: "foreign"
    });
    var tag = "<" + elem.name;
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) tag += " " + attribs;
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) tag += render(elem.children, opts);
        if (opts.xmlMode || !singleTag.has(elem.name)) tag += "</" + elem.name + ">";
    }
    return tag;
}
function renderDirective(elem) {
    return "<" + elem.data + ">";
}
function renderText(elem, opts) {
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) data = entities_1.encodeXML(data);
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
    return "<!--" + elem.data + "-->";
}

},{"domelementtype":"4hCCU","entities":"6wjaM","./foreignNames":"2NTth"}],"6wjaM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = require("./decode");
var encode_1 = require("./encode");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */ function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */ function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */ function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = require("./encode");
Object.defineProperty(exports, "encodeXML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeXML;
    }
});
Object.defineProperty(exports, "encodeHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeNonAsciiHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeNonAsciiHTML;
    }
});
Object.defineProperty(exports, "escape", {
    enumerable: true,
    get: function() {
        return encode_2.escape;
    }
});
Object.defineProperty(exports, "escapeUTF8", {
    enumerable: true,
    get: function() {
        return encode_2.escapeUTF8;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeHTML5", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
var decode_2 = require("./decode");
Object.defineProperty(exports, "decodeXML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});
Object.defineProperty(exports, "decodeHTML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML5", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML4Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeHTML5Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeXMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});

},{"./decode":"3JHJe","./encode":"54ze0"}],"3JHJe":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(require("./maps/entities.json"));
var legacy_json_1 = __importDefault(require("./maps/legacy.json"));
var xml_json_1 = __importDefault(require("./maps/xml.json"));
var decode_codepoint_1 = __importDefault(require("./decode_codepoint"));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function(str) {
        return String(str).replace(strictEntityRe, replace);
    };
}
var sorter = function(a, b) {
    return a < b ? 1 : -1;
};
exports.decodeHTML = (function() {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for(var i = 0, j = 0; i < keys.length; i++)if (legacy[j] === keys[i]) {
        keys[i] += ";?";
        j++;
    } else keys[i] += ";";
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";") str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function(str) {
        return String(str).replace(re, replacer);
    };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}

},{"./maps/entities.json":"2HB26","./maps/legacy.json":"2YMh2","./maps/xml.json":"2Mdpw","./decode_codepoint":"21a99"}],"54ze0":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(require("./maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require("./maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {
    });
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for(var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++){
        var k = _a[_i];
        if (k.length === 1) // Add value to single array
        single.push("\\" + k);
        else // Add value to multiple array
        multiple.push(k);
    }
    // Add ranges to single characters.
    single.sort();
    for(var start = 0; start < single.length - 1; start++){
        // Find the end of a run of characters
        var end = start;
        while(end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1))end += 1;
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3) continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? function(str) {
    return str.codePointAt(0);
} : function(c) {
    return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
};
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function(data) {
        return data.replace(re, function(name) {
            return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */ function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */ function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function(data) {
        return data.replace(reEscapeChars, function(c) {
            return obj[c] || singleCharReplacer(c);
        });
    };
}

},{"./maps/xml.json":"2Mdpw","./maps/entities.json":"2HB26"}],"2NTth":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attributeNames = exports.elementNames = void 0;
exports.elementNames = new Map([
    [
        "altglyph",
        "altGlyph"
    ],
    [
        "altglyphdef",
        "altGlyphDef"
    ],
    [
        "altglyphitem",
        "altGlyphItem"
    ],
    [
        "animatecolor",
        "animateColor"
    ],
    [
        "animatemotion",
        "animateMotion"
    ],
    [
        "animatetransform",
        "animateTransform"
    ],
    [
        "clippath",
        "clipPath"
    ],
    [
        "feblend",
        "feBlend"
    ],
    [
        "fecolormatrix",
        "feColorMatrix"
    ],
    [
        "fecomponenttransfer",
        "feComponentTransfer"
    ],
    [
        "fecomposite",
        "feComposite"
    ],
    [
        "feconvolvematrix",
        "feConvolveMatrix"
    ],
    [
        "fediffuselighting",
        "feDiffuseLighting"
    ],
    [
        "fedisplacementmap",
        "feDisplacementMap"
    ],
    [
        "fedistantlight",
        "feDistantLight"
    ],
    [
        "fedropshadow",
        "feDropShadow"
    ],
    [
        "feflood",
        "feFlood"
    ],
    [
        "fefunca",
        "feFuncA"
    ],
    [
        "fefuncb",
        "feFuncB"
    ],
    [
        "fefuncg",
        "feFuncG"
    ],
    [
        "fefuncr",
        "feFuncR"
    ],
    [
        "fegaussianblur",
        "feGaussianBlur"
    ],
    [
        "feimage",
        "feImage"
    ],
    [
        "femerge",
        "feMerge"
    ],
    [
        "femergenode",
        "feMergeNode"
    ],
    [
        "femorphology",
        "feMorphology"
    ],
    [
        "feoffset",
        "feOffset"
    ],
    [
        "fepointlight",
        "fePointLight"
    ],
    [
        "fespecularlighting",
        "feSpecularLighting"
    ],
    [
        "fespotlight",
        "feSpotLight"
    ],
    [
        "fetile",
        "feTile"
    ],
    [
        "feturbulence",
        "feTurbulence"
    ],
    [
        "foreignobject",
        "foreignObject"
    ],
    [
        "glyphref",
        "glyphRef"
    ],
    [
        "lineargradient",
        "linearGradient"
    ],
    [
        "radialgradient",
        "radialGradient"
    ],
    [
        "textpath",
        "textPath"
    ], 
]);
exports.attributeNames = new Map([
    [
        "definitionurl",
        "definitionURL"
    ],
    [
        "attributename",
        "attributeName"
    ],
    [
        "attributetype",
        "attributeType"
    ],
    [
        "basefrequency",
        "baseFrequency"
    ],
    [
        "baseprofile",
        "baseProfile"
    ],
    [
        "calcmode",
        "calcMode"
    ],
    [
        "clippathunits",
        "clipPathUnits"
    ],
    [
        "diffuseconstant",
        "diffuseConstant"
    ],
    [
        "edgemode",
        "edgeMode"
    ],
    [
        "filterunits",
        "filterUnits"
    ],
    [
        "glyphref",
        "glyphRef"
    ],
    [
        "gradienttransform",
        "gradientTransform"
    ],
    [
        "gradientunits",
        "gradientUnits"
    ],
    [
        "kernelmatrix",
        "kernelMatrix"
    ],
    [
        "kernelunitlength",
        "kernelUnitLength"
    ],
    [
        "keypoints",
        "keyPoints"
    ],
    [
        "keysplines",
        "keySplines"
    ],
    [
        "keytimes",
        "keyTimes"
    ],
    [
        "lengthadjust",
        "lengthAdjust"
    ],
    [
        "limitingconeangle",
        "limitingConeAngle"
    ],
    [
        "markerheight",
        "markerHeight"
    ],
    [
        "markerunits",
        "markerUnits"
    ],
    [
        "markerwidth",
        "markerWidth"
    ],
    [
        "maskcontentunits",
        "maskContentUnits"
    ],
    [
        "maskunits",
        "maskUnits"
    ],
    [
        "numoctaves",
        "numOctaves"
    ],
    [
        "pathlength",
        "pathLength"
    ],
    [
        "patterncontentunits",
        "patternContentUnits"
    ],
    [
        "patterntransform",
        "patternTransform"
    ],
    [
        "patternunits",
        "patternUnits"
    ],
    [
        "pointsatx",
        "pointsAtX"
    ],
    [
        "pointsaty",
        "pointsAtY"
    ],
    [
        "pointsatz",
        "pointsAtZ"
    ],
    [
        "preservealpha",
        "preserveAlpha"
    ],
    [
        "preserveaspectratio",
        "preserveAspectRatio"
    ],
    [
        "primitiveunits",
        "primitiveUnits"
    ],
    [
        "refx",
        "refX"
    ],
    [
        "refy",
        "refY"
    ],
    [
        "repeatcount",
        "repeatCount"
    ],
    [
        "repeatdur",
        "repeatDur"
    ],
    [
        "requiredextensions",
        "requiredExtensions"
    ],
    [
        "requiredfeatures",
        "requiredFeatures"
    ],
    [
        "specularconstant",
        "specularConstant"
    ],
    [
        "specularexponent",
        "specularExponent"
    ],
    [
        "spreadmethod",
        "spreadMethod"
    ],
    [
        "startoffset",
        "startOffset"
    ],
    [
        "stddeviation",
        "stdDeviation"
    ],
    [
        "stitchtiles",
        "stitchTiles"
    ],
    [
        "surfacescale",
        "surfaceScale"
    ],
    [
        "systemlanguage",
        "systemLanguage"
    ],
    [
        "tablevalues",
        "tableValues"
    ],
    [
        "targetx",
        "targetX"
    ],
    [
        "targety",
        "targetY"
    ],
    [
        "textlength",
        "textLength"
    ],
    [
        "viewbox",
        "viewBox"
    ],
    [
        "viewtarget",
        "viewTarget"
    ],
    [
        "xchannelselector",
        "xChannelSelector"
    ],
    [
        "ychannelselector",
        "yChannelSelector"
    ],
    [
        "zoomandpan",
        "zoomAndPan"
    ], 
]);

},{}],"3sKLz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
var domhandler_1 = require("domhandler");
var emptyArray = [];
/**
 * Get a node's children.
 *
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */ function getChildren(elem) {
    var _a;
    return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
exports.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */ function getParent(elem) {
    return elem.parent || null;
}
exports.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first.
 * If we don't have a parent (the element is a root node),
 * we walk the element's `prev` & `next` to get all remaining nodes.
 *
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */ function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null) return getChildren(parent);
    var siblings = [
        elem
    ];
    var prev = elem.prev, next = elem.next;
    while(prev != null){
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
    }
    while(next != null){
        siblings.push(next);
        _b = next, next = _b.next;
    }
    return siblings;
}
exports.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */ function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
exports.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */ function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
exports.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */ function getName(elem) {
    return elem.name;
}
exports.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */ function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while(next !== null && !domhandler_1.isTag(next))_a = next, next = _a.next;
    return next;
}
exports.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */ function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while(prev !== null && !domhandler_1.isTag(prev))_a = prev, prev = _a.prev;
    return prev;
}
exports.prevElementSibling = prevElementSibling;

},{"domhandler":"6nMQY"}],"31asg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @param elem The element to be removed
 */ function removeElement(elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
exports.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */ function replaceElement(elem, replacement) {
    var prev = replacement.prev = elem.prev;
    if (prev) prev.next = replacement;
    var next = replacement.next = elem.next;
    if (next) next.prev = replacement;
    var parent = replacement.parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
    }
}
exports.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */ function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    } else child.prev = null;
}
exports.appendChild = appendChild;
/**
 * Append an element after another.
 *
 * @param elem The element to append after.
 * @param next The element be added.
 */ function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    } else if (parent) parent.children.push(next);
}
exports.append = append;
/**
 * Prepend a child to an element.
 *
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */ function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
    } else child.next = null;
}
exports.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */ function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) elem.prev.next = prev;
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
exports.prepend = prepend;

},{}],"2m4ml":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
var domhandler_1 = require("domhandler");
/**
 * Search a node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function filter(test, node, recurse, limit) {
    if (recurse === void 0) recurse = true;
    if (limit === void 0) limit = Infinity;
    if (!Array.isArray(node)) node = [
        node
    ];
    return find(test, node, recurse, limit);
}
exports.filter = filter;
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function find(test, nodes, recurse, limit) {
    var result = [];
    for(var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++){
        var elem = nodes_1[_i];
        if (test(elem)) {
            result.push(elem);
            if ((--limit) <= 0) break;
        }
        if (recurse && domhandler_1.hasChildren(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0) break;
        }
    }
    return result;
}
exports.find = find;
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 */ function findOneChild(test, nodes) {
    return nodes.find(test);
}
exports.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */ function findOne(test, nodes, recurse) {
    if (recurse === void 0) recurse = true;
    var elem = null;
    for(var i = 0; i < nodes.length && !elem; i++){
        var checked = nodes[i];
        if (!domhandler_1.isTag(checked)) continue;
        else if (test(checked)) elem = checked;
        else if (recurse && checked.children.length > 0) elem = findOne(test, checked.children);
    }
    return elem;
}
exports.findOne = findOne;
/**
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing a test.
 */ function existsOne(test, nodes) {
    return nodes.some(function(checked) {
        return domhandler_1.isTag(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
    });
}
exports.existsOne = existsOne;
/**
 * Search and array of nodes and its children for nodes passing a test function.
 *
 * Same as `find`, only with less options, leading to reduced complexity.
 *
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */ function findAll(test, nodes) {
    var _a;
    var result = [];
    var stack = nodes.filter(domhandler_1.isTag);
    var elem;
    while(elem = stack.shift()){
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
        if (children && children.length > 0) stack.unshift.apply(stack, children);
        if (test(elem)) result.push(elem);
    }
    return result;
}
exports.findAll = findAll;

},{"domhandler":"6nMQY"}],"5i2AT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
var domhandler_1 = require("domhandler");
var querying_1 = require("./querying");
var Checks = {
    tag_name: function(name) {
        if (typeof name === "function") return function(elem) {
            return domhandler_1.isTag(elem) && name(elem.name);
        };
        else if (name === "*") return domhandler_1.isTag;
        return function(elem) {
            return domhandler_1.isTag(elem) && elem.name === name;
        };
    },
    tag_type: function(type) {
        if (typeof type === "function") return function(elem) {
            return type(elem.type);
        };
        return function(elem) {
            return elem.type === type;
        };
    },
    tag_contains: function(data) {
        if (typeof data === "function") return function(elem) {
            return domhandler_1.isText(elem) && data(elem.data);
        };
        return function(elem) {
            return domhandler_1.isText(elem) && elem.data === data;
        };
    }
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") return function(elem) {
        return domhandler_1.isTag(elem) && value(elem.attribs[attrib]);
    };
    return function(elem) {
        return domhandler_1.isTag(elem) && elem.attribs[attrib] === value;
    };
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either
 * of the input functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return function(elem) {
        return a(elem) || b(elem);
    };
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true`
 * if any of them match a node.
 */ function compileTest(options) {
    var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */ function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
exports.testElement = testElement;
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */ function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) limit = Infinity;
    var test = compileTest(options);
    return test ? querying_1.filter(test, nodes, recurse, limit) : [];
}
exports.getElements = getElements;
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */ function getElementById(id, nodes, recurse) {
    if (recurse === void 0) recurse = true;
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return querying_1.findOne(getAttribCheck("id", id), nodes, recurse);
}
exports.getElementById = getElementById;
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */ function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) recurse = true;
    if (limit === void 0) limit = Infinity;
    return querying_1.filter(Checks.tag_name(tagName), nodes, recurse, limit);
}
exports.getElementsByTagName = getElementsByTagName;
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */ function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) recurse = true;
    if (limit === void 0) limit = Infinity;
    return querying_1.filter(Checks.tag_type(type), nodes, recurse, limit);
}
exports.getElementsByTagType = getElementsByTagType;

},{"domhandler":"6nMQY","./querying":"2m4ml"}],"3h450":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
var domhandler_1 = require("domhandler");
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't subtrees of each other.
 */ function removeSubsets(nodes) {
    var idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while((--idx) >= 0){
        var node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for(var ancestor = node.parent; ancestor; ancestor = ancestor.parent)if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
        }
    }
    return nodes;
}
exports.removeSubsets = removeSubsets;
/**
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */ function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) return 0;
    var current = domhandler_1.hasChildren(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = domhandler_1.hasChildren(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    var maxIdx = Math.min(aParents.length, bParents.length);
    var idx = 0;
    while(idx < maxIdx && aParents[idx] === bParents[idx])idx++;
    if (idx === 0) return 1;
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) return 20;
        return 4;
    }
    if (sharedParent === nodeA) return 10;
    return 2;
}
exports.compareDocumentPosition = compareDocumentPosition;
/**
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */ function uniqueSort(nodes) {
    nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
    });
    nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2) return -1;
        else if (relative & 4) return 1;
        return 0;
    });
    return nodes;
}
exports.uniqueSort = uniqueSort;

},{"domhandler":"6nMQY"}],"4xgQ5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var D = Object.defineProperty;
var I = Object.prototype.hasOwnProperty;
var x = Object.getOwnPropertySymbols, U = Object.prototype.propertyIsEnumerable;
var N = (n, r, f)=>r in n ? D(n, r, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: f
    }) : n[r] = f
, A = (n, r)=>{
    for(var f in r || (r = {
    }))I.call(r, f) && N(n, f, r[f]);
    if (x) for (var f of x(r))U.call(r, f) && N(n, f, r[f]);
    return n;
};
var _isjson = require('is-json');
var _isjson2 = _interopRequireDefault(_isjson);
var u;
(function(l) {
    l.tag = "tag", l.slash = "slash", l.default = "default", l.closeAs = "closeAs";
})(u || (u = {
}));
var i;
(function(s) {
    s.tag = "tag", s.slash = "slash", s.default = "default";
})(i || (i = {
}));
var b;
(function(s) {
    s[s.Smart = 0] = "Smart", s[s.Single = 1] = "Single", s[s.Double = 2] = "Double";
})(b || (b = {
}));
var y = [
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
], j = /[\t\n\f\r "'`=<>]/, v = {
    closingSingleTag: void 0,
    quoteAllAttributes: true,
    replaceQuote: true,
    quoteStyle: b.Double
};
function G(n, r = {
}) {
    var h;
    let f = y;
    r.singleTags && (f = [
        ...new Set([
            ...y,
            ...r.singleTags
        ])
    ]), r = A(A(A({
    }, v), r), {
        singleTags: f
    });
    let { singleTags: s , closingSingleTag: l , quoteAllAttributes: m , replaceQuote: R , quoteStyle: $  } = r, g = (h = s == null ? void 0 : s.filter((a)=>a instanceof RegExp
    )) != null ? h : [];
    function d(a) {
        let t = "";
        for (let e of a){
            if (e === false || e === void 0 || e === null || typeof e == "string" && e.length === 0 || Number.isNaN(e)) continue;
            if (Array.isArray(e)) {
                if (e.length === 0) continue;
                t += d(e);
                continue;
            }
            if (typeof e == "string" || typeof e == "number") {
                t += e;
                continue;
            }
            if (Array.isArray(e.content) || (e.content || (e.content = ""), e.content = [
                e.content
            ]), e.tag === false) {
                t += d(e.content);
                continue;
            }
            let o = typeof e.tag == "string" ? e.tag : "div";
            t += `<${o}`, e.attrs && (t += Q(e.attrs));
            let c = {
                [i.tag]: `></${o}>`,
                [i.slash]: " />",
                [i.default]: ">"
            };
            if (k(o)) {
                switch(l){
                    case u.tag:
                        t += c[i.tag];
                        break;
                    case u.slash:
                        t += c[i.slash];
                        break;
                    case u.closeAs:
                        t += c[e.closeAs ? i[e.closeAs] : i.default];
                        break;
                    default:
                        t += c[i.default];
                }
                e.content && (t += d(e.content));
            } else if (l === u.closeAs && e.closeAs) {
                let w = e.closeAs ? i[e.closeAs] : i.default;
                t += `${c[w]}${d(e.content)}`;
            } else t += `>${d(e.content)}</${o}>`;
        }
        return t;
    }
    function k(a) {
        return g.length > 0 ? g.some((t)=>t.test(a)
        ) : !!(s == null ? void 0 : s.includes(a.toLowerCase()));
    }
    function Q(a) {
        let t = "";
        for (let [e, o] of Object.entries(a))if (typeof o == "string") {
            if (_isjson2.default.call(void 0, o)) t += p(e, o);
            else if (m || j.test(o)) {
                let c = o;
                R && (c = o.replace(/"/g, "&quot;")), t += p(e, c, $);
            } else o === "" ? t += ` ${e}` : t += ` ${e}=${o}`;
        } else o === true ? t += ` ${e}` : typeof o == "number" && (t += p(e, o, $));
        return t;
    }
    function p(a, t, e = 1) {
        return e === 1 ? ` ${a}='${t}'` : e === 2 ? ` ${a}="${t}"` : typeof t == "string" && t.includes('"') ? ` ${a}='${t}'` : ` ${a}="${t}"`;
    }
    return Array.isArray(n) || (n || (n = ""), n = [
        n
    ]), d(n);
}
var F = G;
exports.default = F;

},{"is-json":"5LK4M"}],"5LK4M":[function(require,module,exports) {
'use strict';
module.exports = isJSON;
isJSON.strict = strict;
function isJSON(str, pass_object) {
    if (pass_object && isObject(str)) return true;
    if (!isString(str)) return false;
    str = str.replace(/\s/g, '').replace(/\n|\r/, '');
    if (/^\{(.*?)\}$/.test(str)) return /"(.*?)":(.*?)/g.test(str);
    if (/^\[(.*?)\]$/.test(str)) return str.replace(/^\[/, '').replace(/\]$/, '').replace(/},{/g, '}\n{').split(/\n/).map(function(s) {
        return isJSON(s);
    }).reduce(function(prev, curr) {
        return !!curr;
    });
    return false;
}
function strict(str) {
    if (isObject(str)) return true;
    try {
        return JSON.parse(str) && true;
    } catch (ex) {
        return false;
    }
}
function isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

},{}],"1PtZL":[function(require,module,exports) {
'use strict';
const fs = require('fs');
const path = require('path');
const posthtml = require('posthtml');
const parser = require('posthtml-parser').default;
const { match  } = require('posthtml/lib/api');
const expressions = require('posthtml-expressions');
module.exports = (options = {
})=>{
    options.root = options.root || './';
    options.encoding = options.encoding || 'utf-8';
    return function posthtmlInclude(tree) {
        tree.parser = tree.parser || parser;
        tree.match = tree.match || match;
        tree.match({
            tag: 'include'
        }, (node)=>{
            let src = node.attrs.src || false;
            let content;
            let subtree;
            let source;
            const posthtmlExpressionsOptions = options.posthtmlExpressionsOptions || {
                locals: false
            };
            if (options.delimiters) posthtmlExpressionsOptions.delimiters = options.delimiters;
            if (src) {
                src = path.resolve(options.root, src);
                source = fs.readFileSync(src, options.encoding);
                try {
                    const localsRaw = node.attrs.locals || (node.content ? node.content.join().replace(/\n/g, '') : false);
                    posthtmlExpressionsOptions.locals = JSON.parse(localsRaw);
                } catch  {
                }
                if (posthtmlExpressionsOptions.locals) {
                    const result = posthtml().use(expressions(posthtmlExpressionsOptions)).process(source, {
                        sync: true
                    });
                    source = result.html;
                }
                subtree = tree.parser(source);
                subtree.match = tree.match;
                subtree.parser = tree.parser;
                subtree.messages = tree.messages;
                content = source.includes('include') ? posthtmlInclude(subtree) : subtree;
                if (tree.messages) tree.messages.push({
                    type: 'dependency',
                    file: src
                });
            }
            return {
                tag: false,
                content
            };
        });
        return tree;
    };
};

},{"fs":"2RD6T","path":"7rNOE","posthtml":"5Liws","posthtml-parser":"5CwfF","posthtml/lib/api":"7xEh9","posthtml-expressions":"1qKNR"}],"7rNOE":[function(require,module,exports) {
var process = require("process");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47) break;
        else code = 47;
        if (code === 47) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47/*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47/*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47/*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if ((--extIdx) === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute1 = code === 47/*/*/ ;
        var start;
        if (isAbsolute1) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute1) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute1) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute1) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"7AgFc"}],"7AgFc":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while((++queueIndex) < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"5Liws":[function(require,module,exports) {
const pkg = require('../package.json');
const Api = require('./api.js');
let { default: parser  } = require('posthtml-parser');
let render = require('posthtml-render');
/**
 * @author Ivan Voischev (@voischev),
 *         Ivan Demidov (@scrum)
 *
 * @requires api
 * @requires posthtml-parser
 * @requires posthtml-render
 *
 * @constructor PostHTML
 * @param {Array} plugins - An array of PostHTML plugins
 */ class PostHTML {
    constructor(plugins){
        /**
   * PostHTML Instance
   *
   * @prop plugins
   * @prop options
   */ this.version = pkg.version;
        this.name = pkg.name;
        this.plugins = typeof plugins === 'function' ? [
            plugins
        ] : plugins || [];
        this.source = '';
        /**
     * Tree messages to store and pass metadata between plugins
     *
     * @memberof tree
     * @type {Array} messages
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *   return function (tree) {
     *      tree.messages.push({
     *        type: 'dependency',
     *        file: 'path/to/dependency.html',
     *        from: tree.options.from
     *      })
     *
     *      return tree
     *   }
     * }
     * ```
     */ this.messages = [];
        /**
     * Tree method parsing string inside plugins.
     *
     * @memberof tree
     * @type {Function} parser
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *   return function (tree) {
     *      tree.match({ tag: 'include' }, function(node) {
     *          node.tag = false;
     *          node.content = tree.parser(fs.readFileSync(node.attr.src))
     *          return node
     *      })
     *
     *      return tree
     *   }
     * }
     * ```
     */ this.parser = parser;
        /**
     * Tree method rendering tree to string inside plugins.
     *
     * @memberof tree
     * @type {Function} render
     *
     * @example
     * ```js
     * export default function plugin (options = {}) {
     *    return function (tree) {
     *      var outherTree = ['\n', {tag: 'div', content: ['1']}, '\n\t', {tag: 'div', content: ['2']}, '\n'];
     *      var htmlWitchoutSpaceless = tree.render(outherTree).replace(/[\n|\t]/g, '');
     *      return tree.parser(htmlWitchoutSpaceless)
     *    }
     * }
     * ```
     */ this.render = render;
        // extend api methods
        Api.call(this);
    }
    /**
  * @this posthtml
  * @param   {Function} plugin - A PostHTML plugin
  * @returns {Constructor} - this(PostHTML)
  *
  * **Usage**
  * ```js
  * ph.use((tree) => { tag: 'div', content: tree })
  *   .process('<html>..</html>', {})
  *   .then((result) => result))
  * ```
  */ use(...args) {
        this.plugins.push(...args);
        return this;
    }
    /**
   * @param   {String} html - Input (HTML)
   * @param   {?Object} options - PostHTML Options
   * @returns {Object<{html: String, tree: PostHTMLTree}>} - Sync Mode
   * @returns {Promise<{html: String, tree: PostHTMLTree}>} - Async Mode (default)
   *
   * **Usage**
   *
   * **Sync**
   * ```js
   * ph.process('<html>..</html>', { sync: true }).html
   * ```
   *
   * **Async**
   * ```js
   * ph.process('<html>..</html>', {}).then((result) => result))
   * ```
   */ process(tree, options = {
    }) {
        /**
     * ## PostHTML Options
     *
     * @type {Object}
     * @prop {?Boolean} options.sync - enables sync mode, plugins will run synchronously, throws an error when used with async plugins
     * @prop {?Function} options.parser - use custom parser, replaces default (posthtml-parser)
     * @prop {?Function} options.render - use custom render, replaces default (posthtml-render)
     * @prop {?Boolean} options.skipParse - disable parsing
     * @prop {?Array} options.directives - Adds processing of custom [directives](https://github.com/posthtml/posthtml-parser#directives).
     */ this.options = options;
        this.source = tree;
        if (options.parser) parser = this.parser = options.parser;
        if (options.render) render = this.render = options.render;
        tree = options.skipParse ? tree || [] : parser(tree, options);
        tree = [].concat(tree);
        // sync mode
        if (options.sync === true) {
            this.plugins.forEach((plugin, index)=>{
                _treeExtendApi(tree, this);
                let result;
                if (plugin.length === 2 || isPromise(result = plugin(tree))) throw new Error(`Can’t process contents in sync mode because of async plugin: ${plugin.name}`);
                // clearing the tree of options
                if (index !== this.plugins.length - 1 && !options.skipParse) tree = [].concat(tree);
                // return the previous tree unless result is fulfilled
                tree = result || tree;
            });
            return lazyResult(render, tree);
        }
        // async mode
        let i = 0;
        const next = (result, cb)=>{
            _treeExtendApi(result, this);
            // all plugins called
            if (this.plugins.length <= i) {
                cb(null, result);
                return;
            }
            // little helper to go to the next iteration
            function _next(res) {
                if (res && !options.skipParse) res = [].concat(res);
                return next(res || result, cb);
            }
            // call next
            const plugin = this.plugins[i++];
            if (plugin.length === 2) {
                plugin(result, (err, res)=>{
                    if (err) return cb(err);
                    _next(res);
                });
                return;
            }
            // sync and promised plugins
            let err = null;
            const res = tryCatch(()=>plugin(result)
            , (e)=>{
                err = e;
                return e;
            });
            if (err) {
                cb(err);
                return;
            }
            if (isPromise(res)) {
                res.then(_next).catch(cb);
                return;
            }
            _next(res);
        };
        return new Promise((resolve, reject)=>{
            next(tree, (err, tree)=>{
                if (err) reject(err);
                else resolve(lazyResult(render, tree));
            });
        });
    }
}
/**
 * @exports posthtml
 *
 * @param  {Array} plugins
 * @return {Function} posthtml
 *
 * **Usage**
 * ```js
 * import posthtml from 'posthtml'
 * import plugin from 'posthtml-plugin'
 *
 * const ph = posthtml([ plugin() ])
 * ```
 */ module.exports = (plugins1)=>new PostHTML(plugins1)
;
/**
 * Extension of options tree
 *
 * @private
 *
 * @param   {Array}    tree
 * @param   {Object}   PostHTML
 * @returns {?*}
 */ function _treeExtendApi(t, _t) {
    if (typeof t === 'object') t = Object.assign(t, _t);
}
/**
 * Checks if parameter is a Promise (or thenable) object.
 *
 * @private
 *
 * @param   {*} promise - Target `{}` to test
 * @returns {Boolean}
 */ function isPromise(promise) {
    return !!promise && typeof promise.then === 'function';
}
/**
 * Simple try/catch helper, if exists, returns result
 *
 * @private
 *
 * @param   {Function} tryFn - try block
 * @param   {Function} catchFn - catch block
 * @returns {?*}
 */ function tryCatch(tryFn, catchFn) {
    try {
        return tryFn();
    } catch (err) {
        catchFn(err);
    }
}
/**
 * Wraps the PostHTMLTree within an object using a getter to render HTML on demand.
 *
 * @private
 *
 * @param   {Function} render
 * @param   {Array}    tree
 * @returns {Object<{html: String, tree: Array}>}
 */ function lazyResult(render1, tree) {
    return {
        get html () {
            return render1(tree, tree.options);
        },
        tree,
        messages: tree.messages
    };
}

},{"../package.json":"3SBpZ","./api.js":"7xEh9","posthtml-parser":"5CwfF","posthtml-render":"71bUV"}],"3SBpZ":[function(require,module,exports) {
module.exports = JSON.parse("{\"name\":\"posthtml\",\"version\":\"0.15.2\",\"description\":\"HTML/XML processor\",\"keywords\":[\"html\",\"xml\",\"postproccessor\",\"parser\",\"transform\",\"transformations\",\"manipulation\",\"preprocessor\",\"processor\"],\"main\":\"lib\",\"types\":\"types/posthtml.d.ts\",\"files\":[\"types\",\"lib\"],\"engines\":{\"node\":\">=10.0.0\"},\"dependencies\":{\"posthtml-parser\":\"^0.7.2\",\"posthtml-render\":\"^1.3.1\"},\"devDependencies\":{\"@commitlint/cli\":\"^11.0.0\",\"@commitlint/config-angular\":\"^11.0.0\",\"c8\":\"^7.3.5\",\"chai\":\"^4.0.0\",\"chai-as-promised\":\"^7.1.1\",\"chai-subset\":\"^1.6.0\",\"conventional-changelog-cli\":\"^2.1.1\",\"husky\":\"^4.3.0\",\"jsdoc-to-markdown\":\"^6.0.1\",\"lint-staged\":\"^10.5.1\",\"mocha\":\"^8.1.1\",\"standard\":\"^16.0.2\"},\"scripts\":{\"version\":\"conventional-changelog -i changelog.md -s -r 0 && git add changelog.md\",\"test\":\"c8 mocha\",\"docs:api\":\"jsdoc2md lib/api.js > docs/api.md\",\"docs:core\":\"jsdoc2md lib/index.js > docs/core.md\"},\"author\":\"Ivan Voischev <voischev.ivan@ya.ru>\",\"contributors\":[{\"name\":\"Ivan Voischev\",\"email\":\"voischev.ivan@ya.ru\"},{\"name\":\"Ivan Demidov\",\"email\":\"scrum@list.ru\"}],\"homepage\":\"https://posthtml.org\",\"repository\":\"https://github.com/posthtml/posthtml.git\",\"bugs\":\"https://github.com/posthtml/posthtml/issues\",\"license\":\"MIT\"}");

},{}],"7xEh9":[function(require,module,exports) {
'use strict';
/**
 * # API
 *
 * @author Ivan Voischev (@voischev),
 *         Anton Winogradov (@awinogradov),
 *         Alexej Yaroshevich (@zxqfox),
 *         Vasiliy (@Yeti-or)
 *
 * @namespace tree
 */ function Api() {
    this.walk = walk;
    this.match = match;
}
/**
 * Walks the tree and passes all nodes via a callback
 *
 * @memberof tree
 *
 * @param  {Function} cb  Callback
 * @return {Function}     Callback(node)
 *
 *@example
 * ```js
 * export const walk = (tree) => {
 *   tree.walk((node) => {
 *     let classes = node.attrs && node.attrs.class.split(' ') || []
 *
 *     if (classes.includes(className)) return cb(node)
 *       return node
 *   })
 * }
 * ```
 */ function walk(cb) {
    return traverse(this, cb);
}
/**
 * Matches an expression to search for nodes in the tree
 *
 * @memberof tree
 *
 * @param  {String|RegExp|Object|Array} expression - Matcher(s) to search
 * @param  {Function} cb Callback
 *
 * @return {Function} Callback(node)
 *
 * @example
 * ```js
 * export const match = (tree) => {
 *   // Single matcher
 *   tree.match({ tag: 'custom-tag' }, (node) => {
 *     let tag = node.tag
 *
 *     Object.assign(node, { tag: 'div', attrs: {class: tag} })
 *
 *     return node
 *   })
 *   // Multiple matchers
 *   tree.match([{ tag: 'b' }, { tag: 'strong' }], (node) => {
 *     let style = 'font-weight: bold;'
 *
 *     node.tag = 'span'
 *
 *     node.attrs
 *       ? ( node.attrs.style
 *         ? ( node.attrs.style += style )
 *         : node.attrs.style = style
 *       )
 *       : node.attrs = { style: style }
 *
 *     return node
 *   })
 * }
 * ```
 */ function match(expression, cb) {
    return Array.isArray(expression) ? traverse(this, (node)=>{
        for(let i = 0; i < expression.length; i++){
            if (compare(expression[i], node)) return cb(node);
        }
        return node;
    }) : traverse(this, (node)=>{
        if (compare(expression, node)) return cb(node);
        return node;
    });
}
module.exports = Api;
module.exports.match = match;
module.exports.walk = walk;
/** @private */ function traverse(tree, cb) {
    if (Array.isArray(tree)) for(let i = 0; i < tree.length; i++)tree[i] = traverse(cb(tree[i]), cb);
    else if (tree && typeof tree === 'object' && Object.prototype.hasOwnProperty.call(tree, 'content')) traverse(tree.content, cb);
    return tree;
}
/** @private */ function compare(expected, actual) {
    if (expected instanceof RegExp) {
        if (typeof actual === 'object') return false;
        if (typeof actual === 'string') return expected.test(actual);
    }
    if (typeof expected !== typeof actual) return false;
    if (typeof expected !== 'object' || expected === null) return expected === actual;
    if (Array.isArray(expected)) return expected.every((exp)=>[].some.call(actual, (act)=>compare(exp, act)
        )
    );
    return Object.keys(expected).every((key)=>{
        const ao = actual[key];
        const eo = expected[key];
        if (typeof eo === 'object' && eo !== null && ao !== null) return compare(eo, ao);
        if (typeof eo === 'boolean') return eo !== (ao == null);
        return ao === eo;
    });
}

},{}],"5CwfF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _htmlparser2 = require('htmlparser2');
var j = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    decodeEntities: false
}, O = [
    {
        name: "!doctype",
        start: "<",
        end: ">"
    }
], v = (p, f = {
})=>{
    let s = [], r = [];
    function i() {
        return s[s.length - 1];
    }
    function l(e, t) {
        return e.name instanceof RegExp ? new RegExp(e.name.source, "i").test(t) : t === e.name;
    }
    function g(e) {
        let t = {
        };
        return Object.keys(e).forEach((n)=>{
            let o = {
            };
            o[n] = e[n].replace(/&quot;/g, '"'), Object.assign(t, o);
        }), t;
    }
    function b(e, t) {
        var a;
        let n = O.concat((a = f.directives) != null ? a : []), o = i();
        for (let c of n){
            let d = c.start + t + c.end;
            if (l(c, e.toLowerCase())) {
                if (o === void 0) {
                    r.push(d);
                    return;
                }
                typeof o == "object" && (o.content === void 0 && (o.content = []), o.content.push(d));
            }
        }
    }
    function h(e) {
        let t = `<!--${e}-->`, n = i();
        if (n === void 0) {
            r.push(t);
            return;
        }
        typeof n == "object" && (n.content === void 0 && (n.content = []), n.content.push(t));
    }
    function m(e, t) {
        let n = {
            tag: e
        };
        Object.keys(t).length > 0 && (n.attrs = g(t)), s.push(n);
    }
    function N() {
        let e = s.pop();
        if (e) {
            let t = i();
            if (s.length <= 0) {
                r.push(e);
                return;
            }
            typeof t == "object" && (t.content === void 0 && (t.content = []), t.content.push(e));
        }
    }
    function y(e) {
        let t = i();
        if (t === void 0) {
            r.push(e);
            return;
        }
        if (typeof t == "object") {
            if (t.content && t.content.length > 0) {
                let n = t.content[t.content.length - 1];
                if (typeof n == "string") {
                    t.content[t.content.length - 1] = `${n}${e}`;
                    return;
                }
            }
            t.content === void 0 && (t.content = []), t.content.push(e);
        }
    }
    let u = new _htmlparser2.Parser({
        onprocessinginstruction: b,
        oncomment: h,
        onopentag: m,
        onclosetag: N,
        ontext: y
    }, {
        ...j,
        ...f
    });
    return u.write(p), u.end(), r;
}, w = exports.default = v;
exports.default = w;

},{"htmlparser2":"54Bcp"}],"71bUV":[function(require,module,exports) {
const SINGLE_TAGS = [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
const ATTRIBUTE_QUOTES_REQUIRED = /[\t\n\f\r "'`=<>]/;
/** Render PostHTML Tree to HTML
 *
 * @param  {Array|Object} tree PostHTML Tree @param  {Object} options Options
 *
 * @return {String} HTML
 */ function render(tree, options) {
    /** Options
   *
   * @type {Object}
   *
   * @prop {Array<String|RegExp>} singleTags  Custom single tags (selfClosing)
   * @prop {String} closingSingleTag Closing format for single tag @prop
   * @prop {Boolean} quoteAllAttributes If all attributes should be quoted.
   * Otherwise attributes will be unquoted when allowed.
   * @prop {Boolean} replaceQuote Replaces quotes in attribute values with `&quote;`
   *
   * Formats:
   *
   * ``` tag: `<br></br>` ```, slash: `<br />` ```, ```default: `<br>` ```
   */ options = options || {
    };
    const singleTags = options.singleTags ? SINGLE_TAGS.concat(options.singleTags) : SINGLE_TAGS;
    const singleRegExp = singleTags.filter((tag)=>{
        return tag instanceof RegExp;
    });
    const { closingSingleTag  } = options;
    let { quoteAllAttributes  } = options;
    if (quoteAllAttributes === undefined) quoteAllAttributes = true;
    let { replaceQuote  } = options;
    if (replaceQuote === undefined) replaceQuote = true;
    let { quoteStyle  } = options;
    if (quoteStyle === undefined) quoteStyle = 2;
    /** @private */ function isSingleTag(tag) {
        if (singleRegExp.length > 0) {
            return singleRegExp.some((reg)=>reg.test(tag)
            );
        }
        if (!singleTags.includes(tag)) {
            return false;
        }
        return true;
    }
    /** @private */ function attrs(object) {
        let attr = '';
        for(const key in object){
            if (typeof object[key] === 'string') {
                if (quoteAllAttributes || object[key].match(ATTRIBUTE_QUOTES_REQUIRED)) {
                    let attrValue = object[key];
                    if (replaceQuote) {
                        attrValue = object[key].replace(/"/g, '&quot;');
                    }
                    attr += makeAttr(key, attrValue, quoteStyle);
                } else if (object[key] === '') {
                    attr += ' ' + key;
                } else {
                    attr += ' ' + key + '=' + object[key];
                }
            } else if (object[key] === true) {
                attr += ' ' + key;
            } else if (typeof object[key] === 'number') {
                attr += makeAttr(key, object[key], quoteStyle);
            }
        }
        return attr;
    }
    /** @private */ function traverse(tree1, cb) {
        if (tree1 !== undefined) {
            for(let i = 0, { length  } = tree1; i < length; i++){
                traverse(cb(tree1[i]), cb);
            }
        }
    }
    /** @private */ function makeAttr(key, attrValue, quoteStyle1 = 1) {
        if (quoteStyle1 === 1) {
            // Single Quote
            return ` ${key}='${attrValue}'`;
        }
        if (quoteStyle1 === 2) {
            // Double Quote
            return ` ${key}="${attrValue}"`;
        }
        // Smart Quote
        if (attrValue.includes('"')) {
            return ` ${key}='${attrValue}'`;
        }
        return ` ${key}="${attrValue}"`;
    }
    /**
   * HTML Stringifier
   *
   * @param  {Array|Object} tree PostHTML Tree
   *
   * @return {String} result HTML
   */ function html(tree1) {
        let result = '';
        if (!Array.isArray(tree1)) {
            tree1 = [
                tree1
            ];
        }
        traverse(tree1, (node)=>{
            // Undefined, null, '', [], NaN
            if (node === undefined || node === null || node === false || node.length === 0 || Number.isNaN(node)) {
                return;
            }
            // Treat as new root tree if node is an array
            if (Array.isArray(node)) {
                result += html(node);
                return;
            }
            if (typeof node === 'string' || typeof node === 'number') {
                result += node;
                return;
            }
            // Skip node
            if (node.tag === false) {
                result += html(node.content);
                return;
            }
            const tag = node.tag || 'div';
            result += '<' + tag;
            if (node.attrs) {
                result += attrs(node.attrs);
            }
            if (isSingleTag(tag)) {
                switch(closingSingleTag){
                    case 'tag':
                        result += '></' + tag + '>';
                        break;
                    case 'slash':
                        result += ' />';
                        break;
                    default:
                        result += '>';
                }
                result += html(node.content);
            } else {
                result += '>' + html(node.content) + '</' + tag + '>';
            }
        });
        return result;
    }
    return html(tree);
}
/**
 * @module posthtml-render
 *
 * @version 1.1.5
 * @license MIT
 */ module.exports = render;

},{}],"1qKNR":[function(require,module,exports) {
'use strict';
const vm = require('vm');
const parser = require('posthtml-parser');
const render = require('posthtml-render');
const getNextTag = require('./tags');
const parseLoopStatement = require('./loops');
const escapeRegexpString = require('./escape');
const makeLocalsBackup = require('./backup').make;
const revertBackupedLocals = require('./backup').revert;
const placeholders = require('./placeholders');
const delimitersSettings = [];
let conditionals, switches, loops, scopes, ignored, delimitersReplace, unescapeDelimitersReplace;
/**
 * @description Creates a set of local variables within the loop, and evaluates all nodes within the loop, returning their contents
 *
 * @method executeLoop
 *
 * @param  {Array}  params  Parameters
 * @param  {String} p1      Parameter 1
 * @param  {String} p2      Parameter 2
 * @param  {Object} locals  Locals
 * @param  {String} tree    Tree
 *
 * @return {Function} walk  Walks the tree and parses all locals within the loop
 */ function executeLoop(params, p1, p2, locals, tree) {
    // two loop locals are allowed
    // - for arrays it's the current value and the index
    // - for objects, it's the value and the key
    const scopes1 = locals;
    scopes1[params[0]] = p1;
    if (params[1]) scopes1[params[1]] = p2;
    return walk({
        locals: scopes1
    }, JSON.parse(tree));
}
/**
 * @description Runs walk function with arbitrary set of local variables
 *
 * @method executeScope
 *
 * @param  {Object} scope  Scoped Locals
 * @param  {Object} locals Locals
 * @param  {Object} node   Node
 *
 * @return {Function} walk Walks the tree and parses all locals in scope
 */ function executeScope(scope, locals, node) {
    scope = Object.assign(locals, scope);
    return walk({
        locals: scope
    }, node.content);
}
/**
 * @description Returns an object containing loop metadata
 *
 * @method getLoopMeta
 *
 * @param {Integer|Object}  index Current iteration
 * @param {Object}          target Object being iterated
 *
 * @return {Object} Object containing loop metadata
 */ function getLoopMeta(index, target) {
    index = Array.isArray(target) ? index : Object.keys(target).indexOf(index);
    const arr = Array.isArray(target) ? target : Object.keys(target);
    return {
        index: index,
        remaining: arr.length - index - 1,
        first: arr.indexOf(arr[index]) === 0,
        last: index + 1 === arr.length,
        length: arr.length
    };
}
/**
 * @author Jeff Escalante Denis (@jescalan),
 *         Denis Malinochkin (mrmlnc),
 *         Michael Ciniawsky (@michael-ciniawsky)
 * @description Expressions Plugin for PostHTML
 * @license MIT
 *
 * @module posthtml-expressions
 * @version 1.0.0
 *
 * @requires vm
 *
 * @requires ./tags
 * @requires ./loops
 * @requires ./escape
 * @requires ./backup
 * @requires ./placeholders
 *
 * @param  {Object} options Options
 *
 * @return {Object} tree PostHTML Tree
 */ module.exports = function postHTMLExpressions(options) {
    // set default options
    options = Object.assign({
        locals: {
        },
        delimiters: [
            '{{',
            '}}'
        ],
        unescapeDelimiters: [
            '{{{',
            '}}}'
        ],
        conditionalTags: [
            'if',
            'elseif',
            'else'
        ],
        switchTags: [
            'switch',
            'case',
            'default'
        ],
        loopTags: [
            'each'
        ],
        scopeTags: [
            'scope'
        ],
        ignoredTag: 'raw',
        strictMode: true
    }, options);
    // set tags
    loops = options.loopTags;
    scopes = options.scopeTags;
    conditionals = options.conditionalTags;
    switches = options.switchTags;
    ignored = options.ignoredTag;
    // make a RegExp's to search for placeholders
    let before = escapeRegexpString(options.delimiters[0]);
    let after = escapeRegexpString(options.delimiters[1]);
    const delimitersRegexp = new RegExp(`(?<!@)${before}(.+?)${after}`, 'g');
    before = escapeRegexpString(options.unescapeDelimiters[0]);
    after = escapeRegexpString(options.unescapeDelimiters[1]);
    const unescapeDelimitersRegexp = new RegExp(`(?<!@)${before}(.+?)${after}`, 'g');
    // make array of delimiters
    const delimiters = [
        {
            text: options.delimiters,
            regexp: delimitersRegexp,
            escape: true
        },
        {
            text: options.unescapeDelimiters,
            regexp: unescapeDelimitersRegexp,
            escape: false
        }
    ];
    // we arrange delimiter search order by length, since it's possible that one
    // delimiter could 'contain' another delimiter, like '{{' and '{{{'. But if
    // you sort by length, the longer one will always match first.
    if (options.delimiters.join().length > options.unescapeDelimiters.join().length) {
        delimitersSettings[0] = delimiters[0];
        delimitersSettings[1] = delimiters[1];
    } else {
        delimitersSettings[0] = delimiters[1];
        delimitersSettings[1] = delimiters[0];
    }
    delimitersReplace = new RegExp(`@${escapeRegexpString(delimitersSettings[1].text[0])}`, 'g');
    unescapeDelimitersReplace = new RegExp(`@${escapeRegexpString(delimitersSettings[0].text[0])}`, 'g');
    // kick off the parsing
    return function(tree) {
        return normalizeTree(clearRawTag(walk({
            locals: options.locals,
            strictMode: options.strictMode
        }, tree)), tree.options);
    };
};
function walk(opts, nodes) {
    // the context in which expressions are evaluated
    const ctx = vm.createContext(opts.locals);
    // After a conditional has been resolved, we remove the conditional elements
    // from the tree. This variable determines how many to skip afterwards.
    let skip;
    // loop through each node in the tree
    return [].concat(nodes).reduce((m, node, i)=>{
        // if we're skipping this node, return immediately
        if (skip) {
            skip--;
            return m;
        }
        // don't parse ignoredTag
        if (node.tag === ignored) {
            m.push(node);
            return m;
        }
        // if we have a string, match and replace it
        if (typeof node === 'string') {
            node = placeholders(node, ctx, delimitersSettings, opts);
            node = node.replace(unescapeDelimitersReplace, delimitersSettings[0].text[0]).replace(delimitersReplace, delimitersSettings[1].text[0]);
            m.push(node);
            return m;
        }
        // if not, we have an object, so we need to run the attributes and contents
        if (node.attrs) for(const key in node.attrs){
            if (typeof node.attrs[key] === 'string') {
                node.attrs[key] = placeholders(node.attrs[key], ctx, delimitersSettings, opts);
                node.attrs[key] = node.attrs[key].replace(unescapeDelimitersReplace, delimitersSettings[0].text[0]).replace(delimitersReplace, delimitersSettings[1].text[0]);
            }
            // if key is parametr
            const _key = placeholders(key, ctx, delimitersSettings, opts);
            if (key !== _key) {
                node.attrs[_key] = node.attrs[key];
                delete node.attrs[key];
            }
        }
        // if the node has content, recurse (unless it's a loop, handled later)
        if (node.content && loops.includes(node.tag) === false && node.tag !== scopes[0]) node.content = walk(opts, node.content);
        // if we have an element matching "if", we've got a conditional
        // this comes after the recursion to correctly handle nested loops
        if (node.tag === conditionals[0]) {
            // throw an error if it's missing the "condition" attribute
            if (!(node.attrs && node.attrs.condition)) throw new Error(`the "${conditionals[0]}" tag must have a "condition" attribute`);
            // сalculate the first path of condition expression
            let expressionIndex = 1;
            let expression = `if (${node.attrs.condition}) { 0 } `;
            const branches = [
                node.content
            ];
            // move through the nodes and collect all others that are part of the same
            // conditional statement
            let computedNextTag = getNextTag(nodes, ++i);
            let current = computedNextTag[0];
            let nextTag = computedNextTag[1];
            while(conditionals.slice(1).indexOf(nextTag.tag) > -1){
                let statement = nextTag.tag;
                let condition = '';
                // ensure the "else" tag is represented in our little AST as 'else',
                // even if a custom tag was used
                if (nextTag.tag === conditionals[2]) statement = 'else';
                // add the condition if it's an else if
                if (nextTag.tag === conditionals[1]) {
                    // throw an error if an "else if" is missing a condition
                    if (!(nextTag.attrs && nextTag.attrs.condition)) throw new Error(`the "${conditionals[1]}" tag must have a "condition" attribute`);
                    condition = nextTag.attrs.condition;
                    // while we're here, expand "elseif" to "else if"
                    statement = 'else if';
                }
                branches.push(nextTag.content);
                // calculate next part of condition expression
                expression += statement + (condition ? ` (${condition})` : '') + ` { ${expressionIndex++} } `;
                computedNextTag = getNextTag(nodes, ++current);
                current = computedNextTag[0];
                nextTag = computedNextTag[1];
            }
            // evaluate the expression, get the winning condition branch
            let branch;
            try {
                branch = branches[vm.runInContext(expression, ctx)];
            } catch (error) {
                if (opts.strictMode) throw new SyntaxError(error);
            }
            // remove all of the conditional tags from the tree
            // we subtract 1 from i as it's incremented from the initial if statement
            // in order to get the next node
            skip = current - i;
            // recursive evaluate of condition branch
            if (branch) Array.prototype.push.apply(m, walk(opts, branch));
            return m;
        }
        // switch tag
        if (node.tag === switches[0]) {
            // throw an error if it's missing the "expression" attribute
            if (!(node.attrs && node.attrs.expression)) throw new Error(`the "${switches[0]}" tag must have a "expression" attribute`);
            // сalculate the first path of condition expression
            let expressionIndex = 0;
            let expression = `switch(${node.attrs.expression}) {`;
            const branches = [];
            for(let i1 = 0; i1 < node.content.length; i1++){
                const currentNode = node.content[i1];
                if (typeof currentNode === 'string') continue;
                if (currentNode.tag === switches[1]) {
                    // throw an error if it's missing the "n" attribute
                    if (!(currentNode.attrs && currentNode.attrs.n)) throw new Error(`the "${switches[1]}" tag must have a "n" attribute`);
                    expression += `case ${currentNode.attrs.n}: {${expressionIndex++}}; break; `;
                } else if (currentNode.tag === switches[2]) expression += `default: {${expressionIndex++}}`;
                else throw new Error(`the "${switches[0]}" tag can contain only "${switches[1]}" tags and one "${switches[2]}" tag`);
                branches.push(currentNode);
            }
            expression += '}';
            // evaluate the expression, get the winning switch branch
            const branch = branches[vm.runInContext(expression, ctx)];
            // recursive evaluate of branch
            Array.prototype.push.apply(m, walk(opts, branch.content));
            return m;
        }
        // parse loops
        if (loops.includes(node.tag)) {
            // handle syntax error
            if (!(node.attrs && node.attrs.loop)) throw new Error(`the "${node.tag}" tag must have a "loop" attribute`);
            // parse the "loop" param
            const loopParams = parseLoopStatement(node.attrs.loop);
            let target = {
            };
            try {
                target = vm.runInContext(loopParams.expression, ctx);
            } catch (error) {
                if (opts.strictMode) throw new SyntaxError(error);
            }
            // handle additional syntax errors
            if (typeof target !== 'object' && opts.strictMode) throw new Error('You must provide an array or object to loop through');
            if (loopParams.keys.length < 1 || loopParams.keys[0] === '') throw new Error('You must provide at least one loop argument');
            // converts nodes to a string. These nodes will be changed within the loop
            const treeString = JSON.stringify(node.content);
            const keys = loopParams.keys;
            // creates a copy of the keys that will be changed within the loop
            const localsBackup = makeLocalsBackup(keys, opts.locals);
            // run the loop, different types of loops for arrays and objects
            if (Array.isArray(target)) for(let index = 0; index < target.length; index++){
                opts.locals.loop = getLoopMeta(index, target);
                m.push(executeLoop(keys, target[index], index, opts.locals, treeString));
            }
            else for(const key1 in target){
                opts.locals.loop = getLoopMeta(key1, target);
                m.push(executeLoop(keys, target[key1], key1, opts.locals, treeString));
            }
            // returns the original keys values that was changed within the loop
            opts.locals = revertBackupedLocals(keys, opts.locals, localsBackup);
            // return directly out of the loop, which will skip the "each" tag
            return m;
        }
        // parse scopes
        if (node.tag === scopes[0]) {
            // handle syntax error
            if (!node.attrs || !node.attrs.with) throw new Error(`the "${scopes[0]}" tag must have a "with" attribute`);
            const target = vm.runInContext(node.attrs.with, ctx);
            // handle additional syntax errors
            if (typeof target !== 'object' || Array.isArray(target)) throw new Error('You must provide an object to make scope');
            const keys = Object.keys(target);
            // creates a copy of the keys that will be changed within the loop
            const localsBackup = makeLocalsBackup(keys, opts.locals);
            m.push(executeScope(target, opts.locals, node));
            // returns the original keys values that was changed within the loop
            opts.locals = revertBackupedLocals(keys, opts.locals, localsBackup);
            // return directly out of the loop, which will skip the "scope" tag
            return m;
        }
        // return the node
        m.push(node);
        return m;
    }, []);
}
function clearRawTag(tree) {
    return tree.reduce((m, node)=>{
        if (node.content) node.content = clearRawTag(node.content);
        if (node.tag === ignored) node.tag = false;
        m.push(node);
        return m;
    }, []);
}
function normalizeTree(tree, options) {
    return parser(render(tree), options);
}

},{"vm":"1GaCD","posthtml-parser":"5sTmh","posthtml-render":"71bUV","./tags":"1PotN","./loops":"4w0Oi","./escape":"2FIl6","./backup":"4kdmt","./placeholders":"7D8bz"}],"1GaCD":[function(require,module,exports) {
var indexOf = function(xs, item) {
    if (xs.indexOf) return xs.indexOf(item);
    else for(var i = 0; i < xs.length; i++){
        if (xs[i] === item) return i;
    }
    return -1;
};
var Object_keys = function(obj) {
    if (Object.keys) return Object.keys(obj);
    else {
        var res = [];
        for(var key in obj)res.push(key);
        return res;
    }
};
var forEach = function(xs, fn) {
    if (xs.forEach) return xs.forEach(fn);
    else for(var i = 0; i < xs.length; i++)fn(xs[i], i, xs);
};
var defineProp = function() {
    try {
        Object.defineProperty({
        }, '_', {
        });
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            });
        };
    } catch (e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}();
var globals = [
    'Array',
    'Boolean',
    'Date',
    'Error',
    'EvalError',
    'Function',
    'Infinity',
    'JSON',
    'Math',
    'NaN',
    'Number',
    'Object',
    'RangeError',
    'ReferenceError',
    'RegExp',
    'String',
    'SyntaxError',
    'TypeError',
    'URIError',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'undefined',
    'unescape'
];
function Context() {
}
Context.prototype = {
};
var Script = exports.Script = function NodeScript(code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};
Script.prototype.runInContext = function(context) {
    if (!(context instanceof Context)) throw new TypeError("needs a 'context' argument.");
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {
    };
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;
    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    forEach(Object_keys(context), function(key) {
        win[key] = context[key];
    });
    forEach(globals, function(key) {
        if (context[key]) win[key] = context[key];
    });
    var winKeys = Object_keys(win);
    var res = wEval.call(win, this.code);
    forEach(Object_keys(win), function(key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) context[key] = win[key];
    });
    forEach(globals, function(key) {
        if (!(key in context)) defineProp(context, key, win[key]);
    });
    document.body.removeChild(iframe);
    return res;
};
Script.prototype.runInThisContext = function() {
    return eval(this.code); // maybe...
};
Script.prototype.runInNewContext = function(context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);
    if (context) forEach(Object_keys(ctx), function(key) {
        context[key] = ctx[key];
    });
    return res;
};
forEach(Object_keys(Script.prototype), function(name) {
    exports[name] = Script[name] = function(code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});
exports.isContext = function(context) {
    return context instanceof Context;
};
exports.createScript = function(code) {
    return exports.Script(code);
};
exports.createContext = Script.createContext = function(context) {
    var copy = new Context();
    if (typeof context === 'object') forEach(Object_keys(context), function(key) {
        copy[key] = context[key];
    });
    return copy;
};

},{}],"5sTmh":[function(require,module,exports) {
const { Parser  } = require('htmlparser2');
/**
 * @see https://github.com/fb55/htmlparser2/wiki/Parser-options
 */ const defaultOptions = {
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
    decodeEntities: false
};
const defaultDirectives = [
    {
        name: '!doctype',
        start: '<',
        end: '>'
    }
];
/**
 * Parse html to PostHTMLTree
 * @param  {String} html
 * @param  {Object} [options=defaultOptions]
 * @return {PostHTMLTree}
 */ function postHTMLParser(html, options) {
    const bufArray = [];
    const results = [];
    bufArray.last = function() {
        return this[this.length - 1];
    };
    function isDirective({ name  }, tag) {
        if (name instanceof RegExp) {
            const regex = new RegExp(name.source, 'i');
            return regex.test(tag);
        }
        if (tag !== name) return false;
        return true;
    }
    function parserDirective(name, data) {
        const directives = [].concat(defaultDirectives, options.directives || []);
        const last = bufArray.last();
        for (const directive of directives){
            const directiveText = directive.start + data + directive.end;
            name = name.toLowerCase();
            if (isDirective(directive, name)) {
                if (!last) {
                    results.push(directiveText);
                    return;
                }
                if (last.content === undefined) last.content = [];
                last.content.push(directiveText);
            }
        }
    }
    function normalizeArributes(attrs) {
        const result = {
        };
        Object.keys(attrs).forEach((key)=>{
            const object = {
            };
            object[key] = attrs[key].replace(/&quot;/g, '"');
            Object.assign(result, object);
        });
        return result;
    }
    const parser = new Parser({
        onprocessinginstruction: parserDirective,
        oncomment (data) {
            const comment = `<!--${data}-->`;
            const last = bufArray.last();
            if (!last) {
                results.push(comment);
                return;
            }
            if (last.content === undefined) last.content = [];
            last.content.push(comment);
        },
        onopentag (tag, attrs) {
            const buf = {
                tag
            };
            if (Object.keys(attrs).length > 0) buf.attrs = normalizeArributes(attrs);
            bufArray.push(buf);
        },
        onclosetag () {
            const buf = bufArray.pop();
            if (!bufArray.length > 0) {
                results.push(buf);
                return;
            }
            const last = bufArray.last();
            if (!Array.isArray(last.content)) last.content = [];
            last.content.push(buf);
        },
        ontext (text) {
            const last = bufArray.last();
            if (!last) {
                results.push(text);
                return;
            }
            if (last.content && last.content.length > 0 && typeof last.content[last.content.length - 1] === 'string') {
                last.content[last.content.length - 1] = `${last.content[last.content.length - 1]}${text}`;
                return;
            }
            if (last.content === undefined) last.content = [];
            last.content.push(text);
        }
    }, options || defaultOptions);
    parser.write(html);
    parser.end();
    return results;
}
function parserWrapper(...args) {
    let option;
    function parser(html) {
        const opt = {
            ...defaultOptions,
            ...option
        };
        return postHTMLParser(html, opt);
    }
    if (args.length === 1 && Boolean(args[0]) && args[0].constructor.name === 'Object') {
        option = args[0];
        return parser;
    }
    option = args[1];
    return parser(args[0]);
}
module.exports = parserWrapper;
module.exports.defaultOptions = defaultOptions;
module.exports.defaultDirectives = defaultDirectives;

},{"htmlparser2":"5uEnl"}],"5uEnl":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.DomHandler = exports.Parser = void 0;
var Parser_1 = require("./Parser");
Object.defineProperty(exports, "Parser", {
    enumerable: true,
    get: function() {
        return Parser_1.Parser;
    }
});
var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "DomHandler", {
    enumerable: true,
    get: function() {
        return domhandler_1.DomHandler;
    }
});
Object.defineProperty(exports, "DefaultHandler", {
    enumerable: true,
    get: function() {
        return domhandler_1.DomHandler;
    }
});
// Helper methods
/**
 * Parses data, returns the resulting DOM.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */ function parseDOM(data, options) {
    var handler = new domhandler_1.DomHandler(void 0, options);
    new Parser_1.Parser(handler, options).end(data);
    return handler.dom;
}
exports.parseDOM = parseDOM;
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */ function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
    return new Parser_1.Parser(handler, options);
}
exports.createDomStream = createDomStream;
var Tokenizer_1 = require("./Tokenizer");
Object.defineProperty(exports, "Tokenizer", {
    enumerable: true,
    get: function() {
        return __importDefault(Tokenizer_1).default;
    }
});
var ElementType = __importStar(require("domelementtype"));
exports.ElementType = ElementType;
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */ __exportStar(require("./FeedHandler"), exports);
exports.DomUtils = __importStar(require("domutils"));
var FeedHandler_1 = require("./FeedHandler");
Object.defineProperty(exports, "RssHandler", {
    enumerable: true,
    get: function() {
        return FeedHandler_1.FeedHandler;
    }
});

},{"./Parser":"76s2Z","domhandler":"1q2qY","./Tokenizer":"byNtH","domelementtype":"4hCCU","./FeedHandler":"1Pmi2","domutils":"1w7IW"}],"76s2Z":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parser = void 0;
var Tokenizer_1 = __importDefault(require("./Tokenizer"));
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea", 
]);
var pTag = new Set([
    "p"
]);
var openImpliesClose = {
    tr: new Set([
        "tr",
        "th",
        "td"
    ]),
    th: new Set([
        "th"
    ]),
    td: new Set([
        "thead",
        "th",
        "td"
    ]),
    body: new Set([
        "head",
        "link",
        "script"
    ]),
    li: new Set([
        "li"
    ]),
    p: pTag,
    h1: pTag,
    h2: pTag,
    h3: pTag,
    h4: pTag,
    h5: pTag,
    h6: pTag,
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: new Set([
        "option"
    ]),
    optgroup: new Set([
        "optgroup",
        "option"
    ]),
    dd: new Set([
        "dt",
        "dd"
    ]),
    dt: new Set([
        "dt",
        "dd"
    ]),
    address: pTag,
    article: pTag,
    aside: pTag,
    blockquote: pTag,
    details: pTag,
    div: pTag,
    dl: pTag,
    fieldset: pTag,
    figcaption: pTag,
    figure: pTag,
    footer: pTag,
    form: pTag,
    header: pTag,
    hr: pTag,
    main: pTag,
    nav: pTag,
    ol: pTag,
    pre: pTag,
    section: pTag,
    table: pTag,
    ul: pTag,
    rt: new Set([
        "rt",
        "rp"
    ]),
    rp: new Set([
        "rt",
        "rp"
    ]),
    tbody: new Set([
        "thead",
        "tbody"
    ]),
    tfoot: new Set([
        "thead",
        "tbody"
    ])
};
var voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr", 
]);
var foreignContextElements = new Set([
    "math",
    "svg"
]);
var htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title", 
]);
var reNameEnd = /\s|\//;
var Parser = function() {
    function Parser1(cbs, options) {
        if (options === void 0) options = {
        };
        var _a, _b, _c, _d, _e;
        /** The start index of the last event. */ this.startIndex = 0;
        /** The end index of the last event. */ this.endIndex = null;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.options = options;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {
        };
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 || _e.call(_d, this);
    }
    Parser1.prototype.updatePosition = function(initialOffset) {
        if (this.endIndex === null) {
            if (this.tokenizer.sectionStart <= initialOffset) this.startIndex = 0;
            else this.startIndex = this.tokenizer.sectionStart - initialOffset;
        } else this.startIndex = this.endIndex + 1;
        this.endIndex = this.tokenizer.getAbsoluteIndex();
    };
    // Tokenizer event handlers
    Parser1.prototype.ontext = function(data) {
        var _a, _b;
        this.updatePosition(1);
        this.endIndex--;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 || _b.call(_a, data);
    };
    Parser1.prototype.onopentagname = function(name) {
        var _a, _b;
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        this.tagname = name;
        if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
            var el = void 0;
            while(this.stack.length > 0 && openImpliesClose[name].has(el = this.stack[this.stack.length - 1]))this.onclosetag(el);
        }
        if (this.options.xmlMode || !voidElements.has(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) this.foreignContext.push(true);
            else if (htmlIntegrationElements.has(name)) this.foreignContext.push(false);
        }
        (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 || _b.call(_a, name);
        if (this.cbs.onopentag) this.attribs = {
        };
    };
    Parser1.prototype.onopentagend = function() {
        var _a, _b;
        this.updatePosition(1);
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 || _b.call(_a, this.tagname, this.attribs);
            this.attribs = null;
        }
        if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) this.cbs.onclosetag(this.tagname);
        this.tagname = "";
    };
    Parser1.prototype.onclosetag = function(name) {
        this.updatePosition(1);
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) this.foreignContext.pop();
        if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    pos = this.stack.length - pos;
                    while(pos--)// We know the stack has sufficient elements.
                    this.cbs.onclosetag(this.stack.pop());
                } else this.stack.length = pos;
            } else if (name === "p" && !this.options.xmlMode) {
                this.onopentagname(name);
                this.closeCurrentTag();
            }
        } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this.closeCurrentTag();
        }
    };
    Parser1.prototype.onselfclosingtag = function() {
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) this.closeCurrentTag();
        else this.onopentagend();
    };
    Parser1.prototype.closeCurrentTag = function() {
        var _a, _b;
        var name = this.tagname;
        this.onopentagend();
        /*
         * Self-closing tags will be on the top of the stack
         * (cheaper check than in onclosetag)
         */ if (this.stack[this.stack.length - 1] === name) {
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a, name);
            this.stack.pop();
        }
    };
    Parser1.prototype.onattribname = function(name) {
        if (this.lowerCaseAttributeNames) name = name.toLowerCase();
        this.attribname = name;
    };
    Parser1.prototype.onattribdata = function(value) {
        this.attribvalue += value;
    };
    Parser1.prototype.onattribend = function(quote) {
        var _a, _b;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 || _b.call(_a, this.attribname, this.attribvalue, quote);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) this.attribs[this.attribname] = this.attribvalue;
        this.attribname = "";
        this.attribvalue = "";
    };
    Parser1.prototype.getInstructionName = function(value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) name = name.toLowerCase();
        return name;
    };
    Parser1.prototype.ondeclaration = function(value) {
        if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
    };
    Parser1.prototype.onprocessinginstruction = function(value) {
        if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
    };
    Parser1.prototype.oncomment = function(value) {
        var _a, _b, _c, _d;
        this.updatePosition(4);
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 || _b.call(_a, value);
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 || _d.call(_c);
    };
    Parser1.prototype.oncdata = function(value) {
        var _a, _b, _c, _d, _e, _f;
        this.updatePosition(1);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 || _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 || _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 || _f.call(_e);
        } else this.oncomment("[CDATA[" + value + "]]");
    };
    Parser1.prototype.onerror = function(err) {
        var _a, _b;
        (_b = (_a = this.cbs).onerror) === null || _b === void 0 || _b.call(_a, err);
    };
    Parser1.prototype.onend = function() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            for(var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]));
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 || _b.call(_a);
    };
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */ Parser1.prototype.reset = function() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 || _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack = [];
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 || _d.call(_c, this);
    };
    /**
     * Parses a complete document and pushes it to the handler.
     *
     * @param data Document to parse.
     */ Parser1.prototype.parseComplete = function(data) {
        this.reset();
        this.end(data);
    };
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */ Parser1.prototype.write = function(chunk) {
        this.tokenizer.write(chunk);
    };
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */ Parser1.prototype.end = function(chunk) {
        this.tokenizer.end(chunk);
    };
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */ Parser1.prototype.pause = function() {
        this.tokenizer.pause();
    };
    /**
     * Resumes parsing after `pause` was called.
     */ Parser1.prototype.resume = function() {
        this.tokenizer.resume();
    };
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */ Parser1.prototype.parseChunk = function(chunk) {
        this.write(chunk);
    };
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */ Parser1.prototype.done = function(chunk) {
        this.end(chunk);
    };
    return Parser1;
}();
exports.Parser = Parser;

},{"./Tokenizer":"byNtH"}],"byNtH":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decode_codepoint_1 = __importDefault(require("entities/lib/decode_codepoint"));
var entities_json_1 = __importDefault(require("entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(require("entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(require("entities/lib/maps/xml.json"));
function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
function isASCIIAlpha(c) {
    return c >= "a" && c <= "z" || c >= "A" && c <= "Z";
}
function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();
    if (upper === lower) return function(t, c) {
        if (c === lower) t._state = SUCCESS;
        else {
            t._state = FAILURE;
            t._index--;
        }
    };
    return function(t, c) {
        if (c === lower || c === upper) t._state = SUCCESS;
        else {
            t._state = FAILURE;
            t._index--;
        }
    };
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();
    return function(t, c) {
        if (c === lower || c === upper) t._state = NEXT_STATE;
        else {
            t._state = 3;
            t._index--; // Consume the token again
        }
    };
}
var stateBeforeCdata1 = ifElseState("C", 24/* BeforeCdata2 */ , 16/* InDeclaration */ );
var stateBeforeCdata2 = ifElseState("D", 25/* BeforeCdata3 */ , 16/* InDeclaration */ );
var stateBeforeCdata3 = ifElseState("A", 26/* BeforeCdata4 */ , 16/* InDeclaration */ );
var stateBeforeCdata4 = ifElseState("T", 27/* BeforeCdata5 */ , 16/* InDeclaration */ );
var stateBeforeCdata5 = ifElseState("A", 28/* BeforeCdata6 */ , 16/* InDeclaration */ );
var stateBeforeScript1 = consumeSpecialNameChar("R", 35/* BeforeScript2 */ );
var stateBeforeScript2 = consumeSpecialNameChar("I", 36/* BeforeScript3 */ );
var stateBeforeScript3 = consumeSpecialNameChar("P", 37/* BeforeScript4 */ );
var stateBeforeScript4 = consumeSpecialNameChar("T", 38/* BeforeScript5 */ );
var stateAfterScript1 = ifElseState("R", 40/* AfterScript2 */ , 1/* Text */ );
var stateAfterScript2 = ifElseState("I", 41/* AfterScript3 */ , 1/* Text */ );
var stateAfterScript3 = ifElseState("P", 42/* AfterScript4 */ , 1/* Text */ );
var stateAfterScript4 = ifElseState("T", 43/* AfterScript5 */ , 1/* Text */ );
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45/* BeforeStyle2 */ );
var stateBeforeStyle2 = consumeSpecialNameChar("L", 46/* BeforeStyle3 */ );
var stateBeforeStyle3 = consumeSpecialNameChar("E", 47/* BeforeStyle4 */ );
var stateAfterStyle1 = ifElseState("Y", 49/* AfterStyle2 */ , 1/* Text */ );
var stateAfterStyle2 = ifElseState("L", 50/* AfterStyle3 */ , 1/* Text */ );
var stateAfterStyle3 = ifElseState("E", 51/* AfterStyle4 */ , 1/* Text */ );
var stateBeforeSpecialT = consumeSpecialNameChar("I", 54/* BeforeTitle1 */ );
var stateBeforeTitle1 = consumeSpecialNameChar("T", 55/* BeforeTitle2 */ );
var stateBeforeTitle2 = consumeSpecialNameChar("L", 56/* BeforeTitle3 */ );
var stateBeforeTitle3 = consumeSpecialNameChar("E", 57/* BeforeTitle4 */ );
var stateAfterSpecialTEnd = ifElseState("I", 58/* AfterTitle1 */ , 1/* Text */ );
var stateAfterTitle1 = ifElseState("T", 59/* AfterTitle2 */ , 1/* Text */ );
var stateAfterTitle2 = ifElseState("L", 60/* AfterTitle3 */ , 1/* Text */ );
var stateAfterTitle3 = ifElseState("E", 61/* AfterTitle4 */ , 1/* Text */ );
var stateBeforeEntity = ifElseState("#", 63/* BeforeNumericEntity */ , 64/* InNamedEntity */ );
var stateBeforeNumericEntity = ifElseState("X", 66/* InHexEntity */ , 65/* InNumericEntity */ );
var Tokenizer = function() {
    function Tokenizer1(options, cbs) {
        var _a;
        /** The current state the tokenizer is in. */ this._state = 1;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this._index = 0;
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */ this.bufferOffset = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = 1;
        /** For special parsing behavior inside of script and style tags. */ this.special = 1;
        /** Indicates whether the tokenizer has been paused. */ this.running = true;
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */ this.ended = false;
        this.cbs = cbs;
        this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
        this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
    }
    Tokenizer1.prototype.reset = function() {
        this._state = 1;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1;
        this.special = 1;
        this.running = true;
        this.ended = false;
    };
    Tokenizer1.prototype.write = function(chunk) {
        if (this.ended) this.cbs.onerror(Error(".write() after done!"));
        this.buffer += chunk;
        this.parse();
    };
    Tokenizer1.prototype.end = function(chunk) {
        if (this.ended) this.cbs.onerror(Error(".end() after done!"));
        if (chunk) this.write(chunk);
        this.ended = true;
        if (this.running) this.finish();
    };
    Tokenizer1.prototype.pause = function() {
        this.running = false;
    };
    Tokenizer1.prototype.resume = function() {
        this.running = true;
        if (this._index < this.buffer.length) this.parse();
        if (this.ended) this.finish();
    };
    /**
     * The current index within all of the written data.
     */ Tokenizer1.prototype.getAbsoluteIndex = function() {
        return this.bufferOffset + this._index;
    };
    Tokenizer1.prototype.stateText = function(c) {
        if (c === "<") {
            if (this._index > this.sectionStart) this.cbs.ontext(this.getSection());
            this._state = 2;
            this.sectionStart = this._index;
        } else if (this.decodeEntities && c === "&" && (this.special === 1 || this.special === 4)) {
            if (this._index > this.sectionStart) this.cbs.ontext(this.getSection());
            this.baseState = 1;
            this._state = 62;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateBeforeTagName = function(c) {
        if (c === "/") this._state = 5;
        else if (c === "<") {
            this.cbs.ontext(this.getSection());
            this.sectionStart = this._index;
        } else if (c === ">" || this.special !== 1 || whitespace(c)) this._state = 1;
        else if (c === "!") {
            this._state = 15;
            this.sectionStart = this._index + 1;
        } else if (c === "?") {
            this._state = 17;
            this.sectionStart = this._index + 1;
        } else if (!isASCIIAlpha(c)) this._state = 1;
        else {
            this._state = !this.xmlMode && (c === "s" || c === "S") ? 32 : !this.xmlMode && (c === "t" || c === "T") ? 52 : 3;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInTagName = function(c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this.emitToken("onopentagname");
            this._state = 8;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateBeforeClosingTagName = function(c) {
        if (whitespace(c)) ;
        else if (c === ">") this._state = 1;
        else if (this.special !== 1) {
            if (c === "s" || c === "S") this._state = 33;
            else if (c === "t" || c === "T") this._state = 53;
            else {
                this._state = 1;
                this._index--;
            }
        } else if (!isASCIIAlpha(c)) {
            this._state = 20;
            this.sectionStart = this._index;
        } else {
            this._state = 6;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInClosingTagName = function(c) {
        if (c === ">" || whitespace(c)) {
            this.emitToken("onclosetag");
            this._state = 7;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateAfterClosingTagName = function(c) {
        // Skip everything until ">"
        if (c === ">") {
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateBeforeAttributeName = function(c) {
        if (c === ">") {
            this.cbs.onopentagend();
            this._state = 1;
            this.sectionStart = this._index + 1;
        } else if (c === "/") this._state = 4;
        else if (!whitespace(c)) {
            this._state = 9;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInSelfClosingTag = function(c) {
        if (c === ">") {
            this.cbs.onselfclosingtag();
            this._state = 1;
            this.sectionStart = this._index + 1;
            this.special = 1; // Reset special state, in case of self-closing special tags
        } else if (!whitespace(c)) {
            this._state = 8;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateInAttributeName = function(c) {
        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateAfterAttributeName = function(c) {
        if (c === "=") this._state = 11;
        else if (c === "/" || c === ">") {
            this.cbs.onattribend(undefined);
            this._state = 8;
            this._index--;
        } else if (!whitespace(c)) {
            this.cbs.onattribend(undefined);
            this._state = 9;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateBeforeAttributeValue = function(c) {
        if (c === '"') {
            this._state = 12;
            this.sectionStart = this._index + 1;
        } else if (c === "'") {
            this._state = 13;
            this.sectionStart = this._index + 1;
        } else if (!whitespace(c)) {
            this._state = 14;
            this.sectionStart = this._index;
            this._index--; // Reconsume token
        }
    };
    Tokenizer1.prototype.handleInAttributeValue = function(c, quote) {
        if (c === quote) {
            this.emitToken("onattribdata");
            this.cbs.onattribend(quote);
            this._state = 8;
        } else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateInAttributeValueDoubleQuotes = function(c) {
        this.handleInAttributeValue(c, '"');
    };
    Tokenizer1.prototype.stateInAttributeValueSingleQuotes = function(c) {
        this.handleInAttributeValue(c, "'");
    };
    Tokenizer1.prototype.stateInAttributeValueNoQuotes = function(c) {
        if (whitespace(c) || c === ">") {
            this.emitToken("onattribdata");
            this.cbs.onattribend(null);
            this._state = 8;
            this._index--;
        } else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
        }
    };
    Tokenizer1.prototype.stateBeforeDeclaration = function(c) {
        this._state = c === "[" ? 23 : c === "-" ? 18 : 16;
    };
    Tokenizer1.prototype.stateInDeclaration = function(c) {
        if (c === ">") {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateInProcessingInstruction = function(c) {
        if (c === ">") {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateBeforeComment = function(c) {
        if (c === "-") {
            this._state = 19;
            this.sectionStart = this._index + 1;
        } else this._state = 16;
    };
    Tokenizer1.prototype.stateInComment = function(c) {
        if (c === "-") this._state = 21;
    };
    Tokenizer1.prototype.stateInSpecialComment = function(c) {
        if (c === ">") {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
            this._state = 1;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer1.prototype.stateAfterComment1 = function(c) {
        if (c === "-") this._state = 22;
        else this._state = 19;
    };
    Tokenizer1.prototype.stateAfterComment2 = function(c) {
        if (c === ">") {
            // Remove 2 trailing chars
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
        } else if (c !== "-") this._state = 19;
    // Else: stay in AFTER_COMMENT_2 (`--->`)
    };
    Tokenizer1.prototype.stateBeforeCdata6 = function(c) {
        if (c === "[") {
            this._state = 29;
            this.sectionStart = this._index + 1;
        } else {
            this._state = 16;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateInCdata = function(c) {
        if (c === "]") this._state = 30;
    };
    Tokenizer1.prototype.stateAfterCdata1 = function(c) {
        if (c === "]") this._state = 31;
        else this._state = 29;
    };
    Tokenizer1.prototype.stateAfterCdata2 = function(c) {
        if (c === ">") {
            // Remove 2 trailing chars
            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
        } else if (c !== "]") this._state = 29;
    // Else: stay in AFTER_CDATA_2 (`]]]>`)
    };
    Tokenizer1.prototype.stateBeforeSpecialS = function(c) {
        if (c === "c" || c === "C") this._state = 34;
        else if (c === "t" || c === "T") this._state = 44;
        else {
            this._state = 3;
            this._index--; // Consume the token again
        }
    };
    Tokenizer1.prototype.stateBeforeSpecialSEnd = function(c) {
        if (this.special === 2 && (c === "c" || c === "C")) this._state = 39;
        else if (this.special === 3 && (c === "t" || c === "T")) this._state = 48;
        else this._state = 1;
    };
    Tokenizer1.prototype.stateBeforeSpecialLast = function(c, special) {
        if (c === "/" || c === ">" || whitespace(c)) this.special = special;
        this._state = 3;
        this._index--; // Consume the token again
    };
    Tokenizer1.prototype.stateAfterSpecialLast = function(c, sectionStartOffset) {
        if (c === ">" || whitespace(c)) {
            this.special = 1;
            this._state = 6;
            this.sectionStart = this._index - sectionStartOffset;
            this._index--; // Reconsume the token
        } else this._state = 1;
    };
    // For entities terminated with a semicolon
    Tokenizer1.prototype.parseFixedEntity = function(map) {
        if (map === void 0) map = this.xmlMode ? xml_json_1.default : entities_json_1.default;
        // Offset = 1
        if (this.sectionStart + 1 < this._index) {
            var entity = this.buffer.substring(this.sectionStart + 1, this._index);
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
                this.emitPartial(map[entity]);
                this.sectionStart = this._index + 1;
            }
        }
    };
    // Parses legacy entities (without trailing semicolon)
    Tokenizer1.prototype.parseLegacyEntity = function() {
        var start = this.sectionStart + 1;
        // The max length of legacy entities is 6
        var limit = Math.min(this._index - start, 6);
        while(limit >= 2){
            // The min length of legacy entities is 2
            var entity = this.buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
                this.emitPartial(legacy_json_1.default[entity]);
                this.sectionStart += limit + 1;
                return;
            }
            limit--;
        }
    };
    Tokenizer1.prototype.stateInNamedEntity = function(c) {
        if (c === ";") {
            this.parseFixedEntity();
            // Retry as legacy entity if entity wasn't parsed
            if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) this.parseLegacyEntity();
            this._state = this.baseState;
        } else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
            if (this.xmlMode || this.sectionStart + 1 === this._index) ;
            else if (this.baseState !== 1) {
                if (c !== "=") // Parse as legacy entity, without allowing additional characters.
                this.parseFixedEntity(legacy_json_1.default);
            } else this.parseLegacyEntity();
            this._state = this.baseState;
            this._index--;
        }
    };
    Tokenizer1.prototype.decodeNumericEntity = function(offset, base, strict) {
        var sectionStart = this.sectionStart + offset;
        if (sectionStart !== this._index) {
            // Parse entity
            var entity = this.buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial(decode_codepoint_1.default(parsed));
            this.sectionStart = strict ? this._index + 1 : this._index;
        }
        this._state = this.baseState;
    };
    Tokenizer1.prototype.stateInNumericEntity = function(c) {
        if (c === ";") this.decodeNumericEntity(2, 10, true);
        else if (c < "0" || c > "9") {
            if (!this.xmlMode) this.decodeNumericEntity(2, 10, false);
            else this._state = this.baseState;
            this._index--;
        }
    };
    Tokenizer1.prototype.stateInHexEntity = function(c) {
        if (c === ";") this.decodeNumericEntity(3, 16, true);
        else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
            if (!this.xmlMode) this.decodeNumericEntity(3, 16, false);
            else this._state = this.baseState;
            this._index--;
        }
    };
    Tokenizer1.prototype.cleanup = function() {
        if (this.sectionStart < 0) {
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
        } else if (this.running) {
            if (this._state === 1) {
                if (this.sectionStart !== this._index) this.cbs.ontext(this.buffer.substr(this.sectionStart));
                this.buffer = "";
                this.bufferOffset += this._index;
                this._index = 0;
            } else if (this.sectionStart === this._index) {
                // The section just started
                this.buffer = "";
                this.bufferOffset += this._index;
                this._index = 0;
            } else {
                // Remove everything unnecessary
                this.buffer = this.buffer.substr(this.sectionStart);
                this._index -= this.sectionStart;
                this.bufferOffset += this.sectionStart;
            }
            this.sectionStart = 0;
        }
    };
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */ Tokenizer1.prototype.parse = function() {
        while(this._index < this.buffer.length && this.running){
            var c = this.buffer.charAt(this._index);
            if (this._state === 1) this.stateText(c);
            else if (this._state === 12) this.stateInAttributeValueDoubleQuotes(c);
            else if (this._state === 9) this.stateInAttributeName(c);
            else if (this._state === 19) this.stateInComment(c);
            else if (this._state === 20) this.stateInSpecialComment(c);
            else if (this._state === 8) this.stateBeforeAttributeName(c);
            else if (this._state === 3) this.stateInTagName(c);
            else if (this._state === 6) this.stateInClosingTagName(c);
            else if (this._state === 2) this.stateBeforeTagName(c);
            else if (this._state === 10) this.stateAfterAttributeName(c);
            else if (this._state === 13) this.stateInAttributeValueSingleQuotes(c);
            else if (this._state === 11) this.stateBeforeAttributeValue(c);
            else if (this._state === 5) this.stateBeforeClosingTagName(c);
            else if (this._state === 7) this.stateAfterClosingTagName(c);
            else if (this._state === 32) this.stateBeforeSpecialS(c);
            else if (this._state === 21) this.stateAfterComment1(c);
            else if (this._state === 14) this.stateInAttributeValueNoQuotes(c);
            else if (this._state === 4) this.stateInSelfClosingTag(c);
            else if (this._state === 16) this.stateInDeclaration(c);
            else if (this._state === 15) this.stateBeforeDeclaration(c);
            else if (this._state === 22) this.stateAfterComment2(c);
            else if (this._state === 18) this.stateBeforeComment(c);
            else if (this._state === 33) this.stateBeforeSpecialSEnd(c);
            else if (this._state === 53) stateAfterSpecialTEnd(this, c);
            else if (this._state === 39) stateAfterScript1(this, c);
            else if (this._state === 40) stateAfterScript2(this, c);
            else if (this._state === 41) stateAfterScript3(this, c);
            else if (this._state === 34) stateBeforeScript1(this, c);
            else if (this._state === 35) stateBeforeScript2(this, c);
            else if (this._state === 36) stateBeforeScript3(this, c);
            else if (this._state === 37) stateBeforeScript4(this, c);
            else if (this._state === 38) this.stateBeforeSpecialLast(c, 2/* Script */ );
            else if (this._state === 42) stateAfterScript4(this, c);
            else if (this._state === 43) this.stateAfterSpecialLast(c, 6);
            else if (this._state === 44) stateBeforeStyle1(this, c);
            else if (this._state === 29) this.stateInCdata(c);
            else if (this._state === 45) stateBeforeStyle2(this, c);
            else if (this._state === 46) stateBeforeStyle3(this, c);
            else if (this._state === 47) this.stateBeforeSpecialLast(c, 3/* Style */ );
            else if (this._state === 48) stateAfterStyle1(this, c);
            else if (this._state === 49) stateAfterStyle2(this, c);
            else if (this._state === 50) stateAfterStyle3(this, c);
            else if (this._state === 51) this.stateAfterSpecialLast(c, 5);
            else if (this._state === 52) stateBeforeSpecialT(this, c);
            else if (this._state === 54) stateBeforeTitle1(this, c);
            else if (this._state === 55) stateBeforeTitle2(this, c);
            else if (this._state === 56) stateBeforeTitle3(this, c);
            else if (this._state === 57) this.stateBeforeSpecialLast(c, 4/* Title */ );
            else if (this._state === 58) stateAfterTitle1(this, c);
            else if (this._state === 59) stateAfterTitle2(this, c);
            else if (this._state === 60) stateAfterTitle3(this, c);
            else if (this._state === 61) this.stateAfterSpecialLast(c, 5);
            else if (this._state === 17) this.stateInProcessingInstruction(c);
            else if (this._state === 64) this.stateInNamedEntity(c);
            else if (this._state === 23) stateBeforeCdata1(this, c);
            else if (this._state === 62) stateBeforeEntity(this, c);
            else if (this._state === 24) stateBeforeCdata2(this, c);
            else if (this._state === 25) stateBeforeCdata3(this, c);
            else if (this._state === 30) this.stateAfterCdata1(c);
            else if (this._state === 31) this.stateAfterCdata2(c);
            else if (this._state === 26) stateBeforeCdata4(this, c);
            else if (this._state === 27) stateBeforeCdata5(this, c);
            else if (this._state === 28) this.stateBeforeCdata6(c);
            else if (this._state === 66) this.stateInHexEntity(c);
            else if (this._state === 65) this.stateInNumericEntity(c);
            else if (this._state === 63) stateBeforeNumericEntity(this, c);
            else this.cbs.onerror(Error("unknown _state"), this._state);
            this._index++;
        }
        this.cleanup();
    };
    Tokenizer1.prototype.finish = function() {
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this._index) this.handleTrailingData();
        this.cbs.onend();
    };
    Tokenizer1.prototype.handleTrailingData = function() {
        var data = this.buffer.substr(this.sectionStart);
        if (this._state === 29 || this._state === 30 || this._state === 31) this.cbs.oncdata(data);
        else if (this._state === 19 || this._state === 21 || this._state === 22) this.cbs.oncomment(data);
        else if (this._state === 64 && !this.xmlMode) {
            this.parseLegacyEntity();
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        } else if (this._state === 65 && !this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        } else if (this._state === 66 && !this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) this.cbs.ontext(data);
    /*
         * Else, ignore remaining data
         * TODO add a way to remove current tag
         */ };
    Tokenizer1.prototype.getSection = function() {
        return this.buffer.substring(this.sectionStart, this._index);
    };
    Tokenizer1.prototype.emitToken = function(name) {
        this.cbs[name](this.getSection());
        this.sectionStart = -1;
    };
    Tokenizer1.prototype.emitPartial = function(value) {
        if (this.baseState !== 1) this.cbs.onattribdata(value); // TODO implement the new event
        else this.cbs.ontext(value);
    };
    return Tokenizer1;
}();
exports.default = Tokenizer;

},{"entities/lib/decode_codepoint":"21a99","entities/lib/maps/entities.json":"2HB26","entities/lib/maps/legacy.json":"2YMh2","entities/lib/maps/xml.json":"2Mdpw"}],"1q2qY":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DomHandler = void 0;
var node_1 = require("./node");
__exportStar(require("./node"), exports);
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false
};
var DomHandler = function() {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ function DomHandler1(callback, options, elementCB) {
        /** The constructed DOM */ this.dom = [];
        /** Indicated whether parsing has been completed. */ this._done = false;
        /** Stack of open tags. */ this._tagStack = [];
        /** A data node that is still being written to. */ this._lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this._parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this._callback = callback !== null && callback !== void 0 ? callback : null;
        this._options = options !== null && options !== void 0 ? options : defaultOpts;
        this._elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler1.prototype.onparserinit = function(parser) {
        this._parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler1.prototype.onreset = function() {
        var _a;
        this.dom = [];
        this._done = false;
        this._tagStack = [];
        this._lastNode = null;
        this._parser = (_a = this._parser) !== null && _a !== void 0 ? _a : null;
    };
    // Signals the handler that parsing is done
    DomHandler1.prototype.onend = function() {
        if (this._done) return;
        this._done = true;
        this._parser = null;
        this.handleCallback(null);
    };
    DomHandler1.prototype.onerror = function(error) {
        this.handleCallback(error);
    };
    DomHandler1.prototype.onclosetag = function() {
        this._lastNode = null;
        var elem = this._tagStack.pop();
        if (!elem || !this._parser) return;
        if (this._options.withEndIndices) elem.endIndex = this._parser.endIndex;
        if (this._elementCB) this._elementCB(elem);
    };
    DomHandler1.prototype.onopentag = function(name, attribs) {
        var element = new node_1.Element(name, attribs);
        this.addNode(element);
        this._tagStack.push(element);
    };
    DomHandler1.prototype.ontext = function(data) {
        var normalize = this._options.normalizeWhitespace;
        var _lastNode = this._lastNode;
        if (_lastNode && _lastNode.type === "text") {
            if (normalize) _lastNode.data = (_lastNode.data + data).replace(reWhitespace, " ");
            else _lastNode.data += data;
        } else {
            if (normalize) data = data.replace(reWhitespace, " ");
            var node = new node_1.Text(data);
            this.addNode(node);
            this._lastNode = node;
        }
    };
    DomHandler1.prototype.oncomment = function(data) {
        if (this._lastNode && this._lastNode.type === "comment") {
            this._lastNode.data += data;
            return;
        }
        var node = new node_1.Comment(data);
        this.addNode(node);
        this._lastNode = node;
    };
    DomHandler1.prototype.oncommentend = function() {
        this._lastNode = null;
    };
    DomHandler1.prototype.oncdatastart = function() {
        var text = new node_1.Text("");
        var node = new node_1.NodeWithChildren("cdata"/* CDATA */ , [
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this._lastNode = text;
    };
    DomHandler1.prototype.oncdataend = function() {
        this._lastNode = null;
    };
    DomHandler1.prototype.onprocessinginstruction = function(name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler1.prototype.handleCallback = function(error) {
        if (typeof this._callback === "function") this._callback(error, this.dom);
        else if (error) throw error;
    };
    DomHandler1.prototype.addNode = function(node) {
        var parent = this._tagStack[this._tagStack.length - 1];
        var siblings = parent ? parent.children : this.dom;
        var previousSibling = siblings[siblings.length - 1];
        if (this._parser) {
            if (this._options.withStartIndices) node.startIndex = this._parser.startIndex;
            if (this._options.withEndIndices) node.endIndex = this._parser.endIndex;
        }
        siblings.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        if (parent) node.parent = parent;
        this._lastNode = null;
    };
    DomHandler1.prototype.addDataNode = function(node) {
        this.addNode(node);
        this._lastNode = node;
    };
    return DomHandler1;
}();
exports.DomHandler = DomHandler;
exports.default = DomHandler;

},{"./node":"6maof"}],"6maof":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneNode = exports.Element = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
var nodeTypes = new Map([
    [
        "tag",
        1
    ],
    [
        "script",
        1
    ],
    [
        "style",
        1
    ],
    [
        "directive",
        1
    ],
    [
        "text",
        3
    ],
    [
        "cdata",
        4
    ],
    [
        "comment",
        8
    ], 
]);
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */ var Node1 = function() {
    /**
     *
     * @param type The type of the node.
     */ function Node2(type) {
        this.type = type;
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    Object.defineProperty(Node2.prototype, "nodeType", {
        // Read-only aliases
        get: function() {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node2.prototype, "parentNode", {
        // Read-write aliases for properties
        get: function() {
            return this.parent;
        },
        set: function(parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node2.prototype, "previousSibling", {
        get: function() {
            return this.prev;
        },
        set: function(prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node2.prototype, "nextSibling", {
        get: function() {
            return this.next;
        },
        set: function(next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ Node2.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) recursive = false;
        return cloneNode(this, recursive);
    };
    return Node2;
}();
exports.Node = Node1;
var DataNode1 = function(_super) {
    __extends(DataNode2, _super);
    /**
     * @param type The type of the node
     * @param data The content of the data node
     */ function DataNode2(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode2.prototype, "nodeValue", {
        get: function() {
            return this.data;
        },
        set: function(data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode2;
}(Node1);
exports.DataNode = DataNode1;
var Text1 = function(_super) {
    __extends(Text2, _super);
    function Text2(data) {
        return _super.call(this, "text"/* Text */ , data) || this;
    }
    return Text2;
}(DataNode1);
exports.Text = Text1;
var Comment1 = function(_super) {
    __extends(Comment2, _super);
    function Comment2(data) {
        return _super.call(this, "comment"/* Comment */ , data) || this;
    }
    return Comment2;
}(DataNode1);
exports.Comment = Comment1;
var ProcessingInstruction1 = function(_super) {
    __extends(ProcessingInstruction2, _super);
    function ProcessingInstruction2(name, data) {
        var _this = _super.call(this, "directive"/* Directive */ , data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction2;
}(DataNode1);
exports.ProcessingInstruction = ProcessingInstruction1;
var NodeWithChildren1 = function(_super) {
    __extends(NodeWithChildren2, _super);
    /**
     *
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */ function NodeWithChildren2(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
        // Aliases
        get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
        get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
        get: function() {
            return this.children;
        },
        set: function(children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren2;
}(Node1);
exports.NodeWithChildren = NodeWithChildren1;
var Element1 = function(_super) {
    __extends(Element2, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ function Element2(name, attribs, children) {
        if (children === void 0) children = [];
        var _this = _super.call(this, name === "script" ? "script" : name === "style" ? "style" : "tag"/* Tag */ , children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element2.prototype, "tagName", {
        // DOM Level 1 aliases
        get: function() {
            return this.name;
        },
        set: function(name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element2.prototype, "attributes", {
        get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
                return {
                    name: name,
                    value: _this.attribs[name]
                };
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element2;
}(NodeWithChildren1);
exports.Element = Element1;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */ function cloneNode(node, recursive) {
    if (recursive === void 0) recursive = false;
    switch(node.type){
        case "text":
            return new Text1(node.data);
        case "directive":
            var instr = node;
            return new ProcessingInstruction1(instr.name, instr.data);
        case "comment":
            return new Comment1(node.data);
        case "tag":
        case "script":
        case "style":
            var elem = node;
            var children = recursive ? cloneChildren(elem.children) : [];
            var clone_1 = new Element1(elem.name, __assign({
            }, elem.attribs), children);
            children.forEach(function(child) {
                return child.parent = clone_1;
            });
            return clone_1;
        case "cdata":
            var cdata = node;
            var children = recursive ? cloneChildren(cdata.children) : [];
            var clone_2 = new NodeWithChildren1("cdata"/* CDATA */ , children);
            children.forEach(function(child) {
                return child.parent = clone_2;
            });
            return clone_2;
        case "doctype":
            // This type isn't used yet.
            throw new Error("Not implemented yet: ElementType.Doctype case");
    }
}
exports.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function(child) {
        return cloneNode(child, true);
    });
    for(var i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

},{}],"1Pmi2":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseFeed = exports.FeedHandler = void 0;
var domhandler_1 = __importDefault(require("domhandler"));
var DomUtils = __importStar(require("domutils"));
var Parser_1 = require("./Parser");
var FeedItemMediaMedium;
(function(FeedItemMediaMedium1) {
    FeedItemMediaMedium1[FeedItemMediaMedium1["image"] = 0] = "image";
    FeedItemMediaMedium1[FeedItemMediaMedium1["audio"] = 1] = "audio";
    FeedItemMediaMedium1[FeedItemMediaMedium1["video"] = 2] = "video";
    FeedItemMediaMedium1[FeedItemMediaMedium1["document"] = 3] = "document";
    FeedItemMediaMedium1[FeedItemMediaMedium1["executable"] = 4] = "executable";
})(FeedItemMediaMedium || (FeedItemMediaMedium = {
}));
var FeedItemMediaExpression;
(function(FeedItemMediaExpression1) {
    FeedItemMediaExpression1[FeedItemMediaExpression1["sample"] = 0] = "sample";
    FeedItemMediaExpression1[FeedItemMediaExpression1["full"] = 1] = "full";
    FeedItemMediaExpression1[FeedItemMediaExpression1["nonstop"] = 2] = "nonstop";
})(FeedItemMediaExpression || (FeedItemMediaExpression = {
}));
// TODO: Consume data as it is coming in
var FeedHandler1 = function(_super) {
    __extends(FeedHandler2, _super);
    /**
     *
     * @param callback
     * @param options
     */ function FeedHandler2(callback, options) {
        var _this = this;
        if (typeof callback === "object") {
            callback = undefined;
            options = callback;
        }
        _this = _super.call(this, callback, options) || this;
        return _this;
    }
    FeedHandler2.prototype.onend = function() {
        var _a, _b;
        var feed = {
        };
        var feedRoot = getOneElement(isValidFeed, this.dom);
        if (feedRoot) {
            if (feedRoot.name === "feed") {
                var childs = feedRoot.children;
                feed.type = "atom";
                addConditionally(feed, "id", "id", childs);
                addConditionally(feed, "title", "title", childs);
                var href = getAttribute("href", getOneElement("link", childs));
                if (href) feed.link = href;
                addConditionally(feed, "description", "subtitle", childs);
                var updated = fetch("updated", childs);
                if (updated) feed.updated = new Date(updated);
                addConditionally(feed, "author", "email", childs, true);
                feed.items = getElements("entry", childs).map(function(item) {
                    var entry = {
                    };
                    var children = item.children;
                    addConditionally(entry, "id", "id", children);
                    addConditionally(entry, "title", "title", children);
                    var href1 = getAttribute("href", getOneElement("link", children));
                    if (href1) entry.link = href1;
                    var description = fetch("summary", children) || fetch("content", children);
                    if (description) entry.description = description;
                    var pubDate = fetch("updated", children);
                    if (pubDate) entry.pubDate = new Date(pubDate);
                    entry.media = getMediaElements(children);
                    return entry;
                });
            } else {
                var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
                feed.type = feedRoot.name.substr(0, 3);
                feed.id = "";
                addConditionally(feed, "title", "title", childs);
                addConditionally(feed, "link", "link", childs);
                addConditionally(feed, "description", "description", childs);
                var updated = fetch("lastBuildDate", childs);
                if (updated) feed.updated = new Date(updated);
                addConditionally(feed, "author", "managingEditor", childs, true);
                feed.items = getElements("item", feedRoot.children).map(function(item) {
                    var entry = {
                    };
                    var children = item.children;
                    addConditionally(entry, "id", "guid", children);
                    addConditionally(entry, "title", "title", children);
                    addConditionally(entry, "link", "link", children);
                    addConditionally(entry, "description", "description", children);
                    var pubDate = fetch("pubDate", children);
                    if (pubDate) entry.pubDate = new Date(pubDate);
                    entry.media = getMediaElements(children);
                    return entry;
                });
            }
        }
        this.feed = feed;
        this.handleCallback(feedRoot ? null : Error("couldn't find root of feed"));
    };
    return FeedHandler2;
}(domhandler_1.default);
exports.FeedHandler = FeedHandler1;
function getMediaElements(where) {
    return getElements("media:content", where).map(function(elem) {
        var media = {
            medium: elem.attribs.medium,
            isDefault: !!elem.attribs.isDefault
        };
        if (elem.attribs.url) media.url = elem.attribs.url;
        if (elem.attribs.fileSize) media.fileSize = parseInt(elem.attribs.fileSize, 10);
        if (elem.attribs.type) media.type = elem.attribs.type;
        if (elem.attribs.expression) media.expression = elem.attribs.expression;
        if (elem.attribs.bitrate) media.bitrate = parseInt(elem.attribs.bitrate, 10);
        if (elem.attribs.framerate) media.framerate = parseInt(elem.attribs.framerate, 10);
        if (elem.attribs.samplingrate) media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
        if (elem.attribs.channels) media.channels = parseInt(elem.attribs.channels, 10);
        if (elem.attribs.duration) media.duration = parseInt(elem.attribs.duration, 10);
        if (elem.attribs.height) media.height = parseInt(elem.attribs.height, 10);
        if (elem.attribs.width) media.width = parseInt(elem.attribs.width, 10);
        if (elem.attribs.lang) media.lang = elem.attribs.lang;
        return media;
    });
}
function getElements(tagName, where) {
    return DomUtils.getElementsByTagName(tagName, where, true);
}
function getOneElement(tagName, node) {
    return DomUtils.getElementsByTagName(tagName, node, true, 1)[0];
}
function fetch(tagName, where, recurse) {
    if (recurse === void 0) recurse = false;
    return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function getAttribute(name, elem) {
    if (!elem) return null;
    var attribs = elem.attribs;
    return attribs[name];
}
function addConditionally(obj, prop, what, where, recurse) {
    if (recurse === void 0) recurse = false;
    var tmp = fetch(what, where, recurse);
    if (tmp) obj[prop] = tmp;
}
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
var defaultOptions = {
    xmlMode: true
};
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this option, you probably want to set `xmlMode` to `true`.
 */ function parseFeed(feed, options) {
    if (options === void 0) options = defaultOptions;
    var handler = new FeedHandler1(options);
    new Parser_1.Parser(handler, options).end(feed);
    return handler.feed;
}
exports.parseFeed = parseFeed;

},{"domhandler":"1q2qY","domutils":"1w7IW","./Parser":"76s2Z"}],"1PotN":[function(require,module,exports) {
'use strict';
/**
 * @description Get the next tag from a node list
 *
 * @method getNextTag
 *
 * @param  {Array}   nodes Nodes
 * @param  {Number}  i     Accumulator
 *
 * @return {Array}   []    Array containing the next tag
 */ function getNextTag(nodes, i) {
    // loop until we get the next tag (bypassing newlines etc)
    while(i < nodes.length){
        const node = nodes[i];
        if (typeof node === 'object') return [
            i,
            node
        ];
        else if (typeof node === 'string' && node.trim().length > 0) return [
            i++,
            node
        ];
        else i++;
    }
    return [
        i,
        {
            tag: undefined
        }
    ];
}
/**
 * @module tags
 *
 * @type {Function}
 */ module.exports = getNextTag;

},{}],"4w0Oi":[function(require,module,exports) {
'use strict';
/**
 * @description Given a "loop" parameter from an "each" tag, parses out the param names and expression to be looped.
 *
 * @method parseLoopStatement
 *
 * @param {String}  input Input
 *
 * @return {Object} {}    Keys && Expression
 */ function parseLoopStatement(input) {
    // try to find ` in ` keyword
    const inKeywordIndex = input.search(/\sin\s/);
    // if we reach the end of the string without getting "in", it's an error
    if (inKeywordIndex === -1) throw new Error("Loop statement lacking 'in' keyword");
    // expression is always after `in` keyword
    const expression = input.substr(inKeywordIndex + 4);
    // keys is always before `in` keyword
    const keys = input.substr(0, inKeywordIndex).split(',');
    for(let i = 0; i < keys.length; i++)keys[i] = keys[i].trim();
    return {
        keys,
        expression
    };
}
/**
 * @module loops
 *
 * @type {Function}
 */ module.exports = parseLoopStatement;

},{}],"2FIl6":[function(require,module,exports) {
'use strict';
/**
 * @description Replace String based on RegExp
 *
 * @method escapeRegexpString
 *
 * @param  {String}   input Input
 *
 * @return {Function} input Replaced Input
 */ function escapeRegexpString(input) {
    // match Operators
    const match = /[|\\{}()[\]^$+*?.]/g;
    return input.replace(match, '\\$&');
}
/**
 * @module escape
 *
 * @type {Function}
 */ module.exports = escapeRegexpString;

},{}],"4kdmt":[function(require,module,exports) {
'use strict';
const cloneDeep = require('fclone');
/**
 * @description Creates a backup of keys values
 *
 * @method makeLocalsBackup
 *
 * @param {Object} keys Keys
 * @param {Object} locals Locals
 *
 * @return {Object} backup Backup Locals
 */ function makeLocalsBackup(keys, locals) {
    const backup = {
    };
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (Object.prototype.hasOwnProperty.call(locals, key)) backup[key] = cloneDeep(locals[key]);
    }
    return backup;
}
/**
 * @description Returns the original keys values
 *
 * @method revertBackupedLocals
 *
 * @param  {Object} keys   Keys
 * @param  {Object} locals Locals
 * @param  {Object} backup Backup
 *
 * @return {Object} locals Reverted Locals
 */ function revertBackupedLocals(keys, locals, backup) {
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        // remove key from locals
        delete locals[key];
        // revert copied key value
        if (Object.prototype.hasOwnProperty.call(backup, key)) locals[key] = backup[key];
    }
    return locals;
}
/**
 * @module backup
 *
 * @requires fclone
 *
 * @type {Object}
 *
 * @prop {Function} make   Make Locals backup
 * @prop {Function} revert Revert backuped Locals
 */ module.exports = {
    make: makeLocalsBackup,
    revert: revertBackupedLocals
};

},{"fclone":"23E32"}],"23E32":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) // AMD
    define('fclone', [], factory);
    else if (typeof module === 'object' && module.exports) //node
    module.exports = factory();
    else // Browser globals (root is window)
    root.fclone = factory();
})(this, function() {
    'use strict';
    // see if it looks and smells like an iterable object, and do accept length === 0
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function isArrayLike(item) {
        if (Array.isArray(item)) return true;
        var len = item && item.length;
        return typeof len === 'number' && (len === 0 || len - 1 in item) && typeof item.indexOf === 'function';
    }
    function fclone(obj, refs) {
        if (!obj || "object" !== (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;
        if (obj instanceof Date) return new Date(obj);
        if (typeof Buffer !== 'undefined' && Buffer.isBuffer(obj)) return new Buffer(obj);
        // typed array Int32Array etc.
        if (typeof obj.subarray === 'function' && /[A-Z][A-Za-z\d]+Array/.test(Object.prototype.toString.call(obj))) return obj.subarray(0);
        if (!refs) refs = [];
        if (isArrayLike(obj)) {
            refs[refs.length] = obj;
            var _l = obj.length;
            var i = -1;
            var _copy = [];
            while(_l > ++i)_copy[i] = ~refs.indexOf(obj[i]) ? '[Circular]' : fclone(obj[i], refs);
            refs.length && refs.length--;
            return _copy;
        }
        refs[refs.length] = obj;
        var copy = {
        };
        if (obj instanceof Error) {
            copy.name = obj.name;
            copy.message = obj.message;
            copy.stack = obj.stack;
        }
        var keys = Object.keys(obj);
        var l = keys.length;
        while(l--){
            var k = keys[l];
            copy[k] = ~refs.indexOf(obj[k]) ? '[Circular]' : fclone(obj[k], refs);
        }
        refs.length && refs.length--;
        return copy;
    }
    fclone.default = fclone;
    return fclone;
});

},{"buffer":"3susO"}],"3susO":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare1(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset; // Coerce to Number.
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255; // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset + --byteLength1];
    var mul = 1;
    while(byteLength1 > 0 && (mul *= 256))val += this[offset + --byteLength1] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var i = byteLength1;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528900000000000000000000000, -340282346638528900000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj; // eslint-disable-line no-self-compare
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"6UXZh","ieee754":"6YlQP"}],"6UXZh":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len1 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len1; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i1 = start; i1 < end; i1 += 3){
        tmp = (uint8[i1] << 16 & 16711680) + (uint8[i1 + 1] << 8 & 65280) + (uint8[i1 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len1 = uint8.length;
    var extraBytes = len1 % 3// if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383// must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i1 = 0, len2 = len1 - extraBytes; i1 < len2; i1 += maxChunkLength)parts.push(encodeChunk(uint8, i1, i1 + maxChunkLength > len2 ? len2 : i1 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len1 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len1 - 2] << 8) + uint8[len1 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"6YlQP":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"7D8bz":[function(require,module,exports) {
'use strict';
const vm = require('vm');
const htmlRegexp = /[&<>"']/g;
const htmlSymbols = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
};
/**
 * @description Escape HTML characters with their respective entities
 *
 * @method escapeHTML
 *
 * @param  {String} unescaped Unsafe HTML
 *
 * @return {String} escaped   Save HTML
 */ function escapeHTML(unescaped) {
    return unescaped.replace(htmlRegexp, (match)=>htmlSymbols[match]
    );
}
/**
 * @description Replace Expressions
 *
 * @method placeholders
 *
 * @param  {String} input Input
 * @param  {Object} ctx Context
 * @param  {Array}  settings Settings
 * @param  {Array}  opts Options
 *
 * @return {String} input Replaced Input
 */ function placeholders(input, ctx, settings, opts) {
    // Since we are matching multiple sets of delimiters, we need to run a loop
    // here to match each one.
    for(let i = 0; i < settings.length; i++){
        const matches = input.match(settings[i].regexp);
        if (!matches) continue;
        const delimiters = settings[i].text;
        for(let j = 0; j < matches.length; j++){
            const match = matches[j];
            const expression = match.substring(delimiters[0].length, match.length - delimiters[1].length).trim();
            // If expression has non-word characters then use VM
            let value;
            if (/\W+/.test(expression)) try {
                value = vm.runInContext(expression, ctx);
            } catch (error) {
                if (opts.strictMode) throw new SyntaxError(error);
            }
            else if (Object.prototype.hasOwnProperty.call(ctx, expression)) value = ctx[expression];
            // Escape html if necessary
            if (settings[i].escape && typeof value === 'string') value = escapeHTML(value);
            // Stringify if value object
            if (typeof value === 'object') value = JSON.stringify(value);
            // Replace placeholder on evaluated value
            input = input.replace(match, value);
        }
    }
    return input;
}
/**
 * @module placeholders
 *
 * @requires vm
 *
 * @type {Function}
 */ module.exports = placeholders;

},{"vm":"1GaCD"}],"7o2yX":[function() {},{}]},["39Mbm","5rkFb"], "5rkFb", "parcelRequirebb74")

//# sourceMappingURL=index.3fafb3e2.js.map
