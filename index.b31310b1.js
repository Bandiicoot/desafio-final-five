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
        this
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
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
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
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
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
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
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
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptRun(bundle, id) {
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
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _router = require("./router");
var _state = require("./state");
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _game = require("./pages/game");
var _results = require("./pages/results");
var _buttonStart = require("./components/button-start");
var _hands = require("./components/move/hands");
(function() {
    const root = document.querySelector(".root");
    _router.initRouter(root);
    _state.state.getStorage();
})();

},{"./router":"b2iia","./state":"28XHA","./pages/welcome":"bFh5y","./pages/instructions":"iaM8p","./pages/game":"d7f6n","./pages/results":"8GXDd","./components/button-start":"9F0Ma","./components/move/hands":"29pjG"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _game = require("./pages/game");
var _results = require("./pages/results");
function initRouter(container) {
    const routes = [
        {
            path: /\/desafio-final-five/,
            component: _welcome.initWelcomePage
        },
        {
            path: /\/desafio-final-five\/welcome/,
            component: _welcome.initWelcomePage
        },
        {
            path: /\/desafio-final-five\/instructions/,
            component: _instructions.initInstructionsPage
        },
        {
            path: /\/desafio-final-five\/game/,
            component: _game.initGame
        },
        {
            path: /\/desafio-final-five\/results/,
            component: _results.initResults
        }, 
    ];
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    location.host.includes("github.io") || "/";
    goTo("/desafio-final-five/welcome");
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"bFh5y","./pages/instructions":"iaM8p","./pages/game":"d7f6n","./pages/results":"8GXDd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage
);
var _router = require("../../router");
function initWelcomePage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `\n  *{\n    caret-color: transparent;\n  }\n    .container{\n       display:flex;\n       flex-direction: column;\n       justify-content:space-between;\n        max-width: 500px;\n        margin: 0 auto;\n        height: 100vh;\n    }\n    .title{\n        font-family: "dosis";\n        font-size: 100px;\n        color: #009048;\n        text-align: center;\n    }\n\n    @media (min-width: 769px){\n    .title{\n         margin-top: 10%;\n         margin-bottom: 5%;\n    }}\n    .button{\n        margin-left: 10%;\n    }\n    @media (min-width: 769px) {\n    .button{\n        margin-left: 60px;\n    }}\n\n    .container-hands{\n        display: flex;\n        justify-content: space-between;\n        position:relative ;\n        max-width: 100%;\n      \n    }\n\n    `;
    div.innerHTML = `\n    <div class="container">\n\n    <h1 class="title">Piedra Papel ó Tijera</h1>\n    <button-start class="button">Empezar</button-start>\n    \n    <div class="container-hands">\n\n    <div class="hand"><movimiento-de-manos hand="piedra"></movimiento-de-manos></div>\n    <div class="hand"><movimiento-de-manos hand="papel"></movimiento-de-manos></div>\n    <div class="hand"><movimiento-de-manos hand="tijera"></movimiento-de-manos></div>\n    \n    </div>\n\n    </div>\n    `;
    const buttonEl = div.querySelector(".button");
    buttonEl.addEventListener("click", ()=>{
        params.goTo("/desafio-final-five/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"../../router":"b2iia","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iaM8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructionsPage", ()=>initInstructionsPage
);
var _router = require("../../router");
function initInstructionsPage(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `\n*{\n  caret-color: transparent;\n}\n    .container{\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin-top:-40px;\n        align-items: center;\n        max-width:800px;\n        margin:0 auto;\n    }\n    .instructions{\n        font-family: "odibee sans";\n        font-size: 60px;\n        color: #000000;\n        text-align: center;\n        max-width: 80%;\n    }\n    .container-hands{\n        display: flex;\n        justify-content: space-between;\n        position: relative;\n        top: 100px;\n        margin: 0px 60px;\n        width: 80%;\n        }\n    `;
    div.innerHTML = `\n    <div class="container">\n\n    <p class="instructions">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>\n    <button-start class="button">¡Jugar!</button-start>\n\n    <div class="container-hands">\n\n    <div class="hand"><movimiento-de-manos hand="piedra"></movimiento-de-manos></div>\n    <div class="hand"><movimiento-de-manos hand="papel"></movimiento-de-manos></div>\n    <div class="hand"><movimiento-de-manos hand="tijera"></movimiento-de-manos></div>\n\n    </div>\n\n    </div>\n    `;
    const buttonEl = div.querySelector(".button");
    buttonEl.addEventListener("click", ()=>{
        params.goTo("/desafio-final-five/game");
    });
    div.appendChild(style);
    return div;
}

},{"../../router":"b2iia","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d7f6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGame", ()=>initGame
);
var _router = require("../../router");
var _state = require("../../state");
function initGame(params) {
    const options = [
        "piedra",
        "papel",
        "tijera"
    ];
    const randomOption = Math.floor(Math.random() * options.length);
    var botRandomPlay = options[randomOption];
    const div = document.createElement("div");
    const style = document.createElement("style");
    var counter = 3;
    const countdown = setInterval(()=>{
        counter--;
        const counterEl = div.querySelector(".countdown");
        counterEl.textContent = String(counter);
        if (counter < 1) clearInterval(countdown);
    }, 1000);
    style.innerHTML = `\n  *{\n    caret-color: transparent;\n  }\n    .container{\n		height: 100vh;\n		display: flex;\n		flex-direction: column;\n		justify-content: space-between;\n		align-items: center;\n		overflow-y: hidden;\n    }\n\n    .bot-hands{\n	   display: none;\n	   transform: rotate(180deg);\n	   position: relative;\n	   top: -20px;\n    }\n\n    .countdown{\n		font-family: 'Luckiest Guy', cursive;  \n		font-size: 150px;\n		margin-top: 150px;\n    }\n\n	@media (min-width: 769px) {\n		.countdown{\n			font-size: 250px;\n		}}\n\n    .container-hands{\n		display: flex;\n		position: relative;\n		top: 20px;\n    }\n\n	.bot-paper, .bot-rock, .bot-scissor{\n		padding: 0px 25px;	\n	}\n\n	@media (min-width: 769px) {\n		.bot-paper, .bot-rock, .bot-scissor{\n			padding: 0 150px;\n		}}\n\n    .handview{\n	    padding: 0px 25px;\n		opacity: 0.5;\n		cursor: pointer;\n    }\n\n	@media (min-width: 769px) {\n		.handview{\n			padding: 0 150px;\n		}}\n\n	.handview:hover{\n		top: 0px;\n		opacity: 1;\n		display: inherit;\n		transform: translateY(-30px);\n		transition: all 1s;\n	  }\n	  .selected {\n		position: absolut;\n		opacity: 1;\n	  }\n    `;
    div.innerHTML = `\n	<div class="container">\n\n    <div class="bot-hands">\n    <movimiento-de-manos hand="piedra" class="bot-rock"></movimiento-de-manos>\n  	<movimiento-de-manos hand="papel" class="bot-paper"></movimiento-de-manos>\n  	<movimiento-de-manos hand="tijera" class="bot-scissor"></movimiento-de-manos>\n    </div>\n\n	<div>\n    	<div class="countdown">${counter}</div>\n	</div>\n\n    <div class="container-hands">\n    <movimiento-de-manos hand="piedra" class="handview rock"></movimiento-de-manos>\n		<movimiento-de-manos hand="papel" class="handview paper"></movimiento-de-manos>\n  	<movimiento-de-manos hand="tijera" class="handview scissor"></movimiento-de-manos>\n    </div>\n\n    </div>\n    `;
    const handsCont = div.querySelector(".container-hands");
    const rockEl = div.querySelector(".piedra");
    const paperEl = div.querySelector(".papel");
    const scissorEl = div.querySelector(".tijera");
    const botHandsStyles = document.createElement("style");
    function botGame(params1) {
        if (params1 == "piedra") botHandsStyles.innerHTML = `\n			.bot-hands {display: inherit;}\n			.bot-rock {display: inherit;}\n			.bot-paper {display: none;}\n			.bot-scissor {display: none;}\n			.countdown {display: none;}\n			`;
        else if (params1 == "papel") botHandsStyles.innerHTML = `\n			.bot-hands {display: inherit;}\n			.bot-rock {display: none;}\n			.bot-paper {display: inherit;}\n			.bot-scissor {display: none;}\n			.countdown {display: none;}\n			`;
        else if (params1 == "tijera") botHandsStyles.innerHTML = `\n			.bot-hands {display: inherit;}\n			.bot-rock {display: none;}\n			.bot-paper {display: none;}\n			.bot-scissor {display: inherit;}\n			.countdown {display: none;}\n			`;
    }
    setTimeout(()=>{
        botGame(botRandomPlay);
        currentState.currentGame.botPlay = `${botRandomPlay}`;
        console.log(currentState.currentGame);
    }, 4000);
    const currentState = _state.state.getState();
    function playGame(hand) {
        if (hand == "piedra") {
            paperEl.style.display = "none";
            scissorEl.style.display = "none";
            handsCont.style.justifyContent = "center";
            rockEl.classList.remove(".handview");
            rockEl.classList.add("selected");
        } else if (hand == "papel") {
            rockEl.style.display = "none";
            scissorEl.style.display = "none";
            handsCont.style.justifyContent = "center";
            paperEl.classList.remove(".handview");
            paperEl.classList.add("selected");
        } else if (hand == "tijera") {
            paperEl.style.display = "none";
            rockEl.style.display = "none";
            handsCont.style.justifyContent = "center";
            scissorEl.classList.remove(".handview");
            scissorEl.classList.add("selected");
        }
    }
    for (const h of handsCont.children)h.addEventListener("click", ()=>{
        const select = h.getAttribute("hand");
        if (select == "piedra") {
            _state.state.setMove("piedra");
            setTimeout(()=>{
                playGame("piedra");
            }, 4000);
        } else if (select == "papel") {
            _state.state.setMove("papel");
            setTimeout(()=>{
                playGame("papel");
            }, 4000);
        } else if (select == "tijera") {
            _state.state.setMove("tijera");
            setTimeout(()=>{
                playGame("tijera");
            }, 4000);
        }
    });
    setTimeout(()=>{
        if (currentState.currentGame.myPlay == "") params.goTo("/desafio-final-five/instructions/");
        else params.goTo("/desafio-final-five/results/");
    }, 5000);
    div.appendChild(style);
    div.appendChild(botHandsStyles);
    return div;
}

},{"../../router":"b2iia","../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            botPlay: ""
        },
        history: {
            myScore: 0,
            botScore: 0
        }
    },
    listeners: [],
    getStorage () {
        const localData = JSON.parse(localStorage.getItem("data"));
        if (localData) {
            console.log(localData);
            this.setState(localData);
        } else return;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        this.savedData();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setScore (result) {
        const currentState = this.getState();
        if (result == "win") currentState.history.myScore++;
        else if (result == "lose") currentState.history.botScore++;
        this.setState(currentState);
    },
    restartGame () {
        const currentState = this.getState();
        currentState.currentGame.myPlay = "";
        currentState.currentGame.botPlay = "";
        this.setState(currentState);
    },
    whoWins (myPlay, botPlay) {
        const ganasteConPapel = myPlay == "papel" && botPlay == "piedra";
        const ganasteConTijera = myPlay == "tijera" && botPlay == "papel";
        const ganasteConPiedra = myPlay == "piedra" && botPlay == "tijera";
        const ganaste = [
            ganasteConPiedra,
            ganasteConPapel,
            ganasteConTijera, 
        ].includes(true);
        const perdisteConPiedra = myPlay == "piedra" && botPlay == "papel";
        const perdisteConPapel = myPlay == "papel" && botPlay == "tijera";
        const perdisteConTijera = myPlay == "tijera" && botPlay == "piedra";
        const perdiste = [
            perdisteConPiedra,
            perdisteConPapel,
            perdisteConTijera, 
        ].includes(true);
        if (ganaste == true) return "win";
        else if (perdiste == true) return "lose";
        else return "tie";
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        this.setScore();
    },
    savedData () {
        const currentHistory = this.getState();
        localStorage.setItem("data", JSON.stringify(currentHistory));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8GXDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResults", ()=>initResults
);
var _router = require("../../router");
var _state = require("../../state");
const results = {
    victoria: require("url:../../images/ganasteS.svg"),
    derrota: require("url:../../images/perdiste.svg"),
    empate: require("url:../../images/empate.svg")
};
function initResults(params) {
    const currentState = _state.state.getState();
    const whoWins = _state.state.whoWins(currentState.currentGame.myPlay, currentState.currentGame.botPlay);
    _state.state.setScore(whoWins);
    _state.state.restartGame();
    const div = document.createElement("div");
    const style = document.createElement("style");
    var myScore = _state.state.data.history.myScore;
    var botScore = _state.state.data.history.botScore;
    style.innerHTML = `\n*{\n}\n.container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height:105vh;\n}\n\n.victoria{\n  display: none;\n  padding: 20px;\n  }\n  .derrota{\n    display: none;\n    padding: 20px;\n  }\n\n  .empate{\n    display: none;\n    padding: 20px;\n  }\n\n  .score{\n    border: solid 10px;\n    background-color: white;\n  }\n  .caret{\n    caret-color: transparent;\n  }\n\n  .score-title{\n    font-family: "titan one";  \n		font-size: 60px;\n    margin: 5px;\n    padding: 5px 80px;\n    text-align: center;\n  }\n  \n  .score-participant{\n    font-family: "titan one";  \n		font-size: 40px;\n    margin: 5px;\n    padding: 5px 10px;\n    text-align: center;\n\n  }\n\n  .go-back{\n    margin-top: 20px;\n\n  }\n  \n  .go-back-button{\n    margin-left: -11px;\n    border-radius: 50%;\n  }\n  `;
    div.innerHTML = `\n  <div class="container">\n\n    <div class="victoria">\n      <img class="win-img caret" src=${results.victoria} width= 350px height= 350px></img>\n    </div>\n\n    <div class="derrota">\n      <img class="lose-img caret " src=${results.derrota} width= 350px height= 350px></img>\n    </div>\n\n    <div class="empate">\n      <img class="tie-img caret " src=${results.empate} width= 350px height= 300px></img>\n    </div>\n\n    <div class="score">\n      <h2 class="score-title caret ">Puntuacion</h2>\n      <h3 class="score-participant caret ">Vos :  ${myScore}</h3>\n      <h3 class="score-participant caret ">Skynet :  ${botScore}</h3>\n    </div>\n\n    <div class="go-back">\n      <button-start class="go-back-button caret ">Volver a jugar</button-start>\n    </div>\n    <div class="go-back restart">\n      <button-start class="go-back-button caret "> Reiniciar Puntaje</button-start>\n    </div>\n\n  </div>\n  `;
    const victoria = div.querySelector(".victoria");
    const derrota = div.querySelector(".derrota");
    const empate = div.querySelector(".empate");
    const continent = div.querySelector(".container");
    if (whoWins == "win") {
        victoria.style.display = "inherit";
        continent.style.background = "rgba(106, 146, 74, 0.6)";
    } else if (whoWins == "lose") {
        derrota.style.display = "inherit";
        continent.style.background = "rgba(137, 73, 73, 0.6)";
    } else if (whoWins == "tie") {
        empate.style.display = "inherit";
        continent.style.background = "rgba(106, 112, 101, 0.6)";
    }
    const goBack = div.querySelector(".go-back");
    goBack.addEventListener("click", (e)=>{
        e.preventDefault();
        params.goTo("/desafio-final-five/instructions/");
    });
    const resetPoints = div.querySelector(".restart");
    resetPoints.addEventListener("click", (e)=>{
        e.preventDefault();
        const newData = _state.state.getState();
        newData.history = {
            myScore: 0,
            botScore: 0
        }, _state.state.setState(newData);
        params.goTo("/desafio-final-five/instructions/");
    });
    div.appendChild(style);
    return div;
}

},{"../../router":"b2iia","../../state":"28XHA","url:../../images/ganasteS.svg":"anHnC","url:../../images/perdiste.svg":"53PIf","url:../../images/empate.svg":"gMPhD","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"anHnC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "ganasteS.9e020e84.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"53PIf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "perdiste.3c175a61.svg";

},{"./helpers/bundle-url":"8YnfL"}],"gMPhD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "empate.1747cbd5.svg";

},{"./helpers/bundle-url":"8YnfL"}],"9F0Ma":[function(require,module,exports) {
class ButtonStart extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const style = document.createElement("style");
        const button = document.createElement("button");
        button.className = "root btn-hover color ";
        style.innerHTML = `\n    .root{\n           font-size: 35px;\n          //  color: #D8FCFC;\n          //  background-color: #006CFC;\n          //  border: 10px solid #001997;\n            padding: 10px 87px;\n          //  cursor: pointer;\n          //  border-radius:45%;\n          margin: 0 auto;\n        }\n\n        .btn-hover {\n          width:auto !important;\n          // font-size: 16px;\n          font-weight: 600;\n          color: #fff;\n          cursor: pointer;\n          margin: 20px;\n          height: 100px;\n          text-align:center;\n          border: none;\n          background-size: 300% 100%;\n      \n          border-radius: 50px;\n          moz-transition: all .4s ease-in-out;\n          -o-transition: all .4s ease-in-out;\n          -webkit-transition: all .4s ease-in-out;\n          transition: all .4s ease-in-out;\n      }\n      \n      .btn-hover:hover {\n          background-position: 100% 0;\n          moz-transition: all .4s ease-in-out;\n          -o-transition: all .4s ease-in-out;\n          -webkit-transition: all .4s ease-in-out;\n          transition: all .4s ease-in-out;\n      }\n      \n      .btn-hover:focus {\n          outline: none;\n      }\n      \n      .btn-hover.color {\n          background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);\n          box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);\n      }\n\n\n\n\n\n       \n}\n        \n        `;
        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
    }
}
customElements.define("button-start", ButtonStart);

},{}],"29pjG":[function(require,module,exports) {
const hands = {
    piedra: require("url:../../images/piedra.png"),
    papel: require("url:../../images/papel.png"),
    tijera: require("url:../../images/tijeras.png")
};
class Movimientos extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const div = document.createElement("div");
        const style = document.createElement("style");
        const hand = this.getAttribute("hand");
        style.innerHTML = `\n            .hand{\n                height: 150px;\n                width: 80px;\n             \n            }\n            `;
        div.innerHTML = `\n            <img class="hand" src=${hands[hand]}></img>\n            `;
        this.shadow.appendChild(style);
        this.shadow.appendChild(div);
    }
}
customElements.define("movimiento-de-manos", Movimientos);

},{"url:../../images/piedra.png":"jQlP3","url:../../images/papel.png":"8lgLG","url:../../images/tijeras.png":"klX5l"}],"jQlP3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.a3b6d156.png";

},{"./helpers/bundle-url":"8YnfL"}],"8lgLG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.135c8552.png";

},{"./helpers/bundle-url":"8YnfL"}],"klX5l":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijeras.599651f3.png";

},{"./helpers/bundle-url":"8YnfL"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire5eb3")

//# sourceMappingURL=index.b31310b1.js.map
