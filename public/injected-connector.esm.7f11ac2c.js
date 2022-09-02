parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ip13":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserRejectedRequestError=exports.NoEthereumProviderError=exports.InjectedConnector=void 0;var e=require("@web3-react/abstract-connector"),t=n(require("tiny-warning"));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function h(e,t,n){return(h=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function a(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return h(e,arguments,i(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator",w="undefined"!=typeof Symbol?Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")):"@@asyncIterator";function l(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}function m(e){return e.hasOwnProperty("result")?e.result:e}var v=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="No Ethereum provider was found on window.ethereum.",t}return o(t,e),t}(s(Error));exports.NoEthereumProviderError=v;var p=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return o(t,e),t}(s(Error));exports.UserRejectedRequestError=p;var y=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleNetworkChanged=n.handleNetworkChanged.bind(d(n)),n.handleChainChanged=n.handleChainChanged.bind(d(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(d(n)),n.handleClose=n.handleClose.bind(d(n)),n}o(t,e);var n=t.prototype;return n.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},n.handleAccountsChanged=function(e){0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},n.handleClose=function(e,t){this.emitDeactivate()},n.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:window.ethereum})},n.activate=function(){try{var e,t=function(t){if(n)return t;function o(){return r({provider:window.ethereum},e?{account:e}:{})}var i=function(){if(!e)return Promise.resolve(window.ethereum.enable().then(function(e){return e&&m(e)[0]})).then(function(t){e=t})}();return i&&i.then?i.then(o):o()},n=!1;if(!window.ethereum)throw new v;window.ethereum.on&&(window.ethereum.on("chainChanged",this.handleChainChanged),window.ethereum.on("accountsChanged",this.handleAccountsChanged),window.ethereum.on("close",this.handleClose),window.ethereum.on("networkChanged",this.handleNetworkChanged)),window.ethereum.isMetaMask&&(window.ethereum.autoRefreshOnNetworkChange=!1);var o=l(function(){return Promise.resolve(window.ethereum.send("eth_requestAccounts").then(function(e){return m(e)[0]})).then(function(t){e=t})},function(e){if(4001===e.code)throw new p});return Promise.resolve(o&&o.then?o.then(t):t(o))}catch(i){return Promise.reject(i)}},n.getProvider=function(){try{return Promise.resolve(window.ethereum)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{var e,t=function(){function t(){if(!e)try{e=m(window.ethereum.send({method:"net_version"}))}catch(t){}return e||(e=window.ethereum.isDapper?m(window.ethereum.cachedResults.net_version):window.ethereum.chainId||window.ethereum.netVersion||window.ethereum.networkVersion||window.ethereum._chainId),e}var n=function(){if(!e){var t=l(function(){return Promise.resolve(window.ethereum.send("net_version").then(m)).then(function(t){e=t})},function(){});if(t&&t.then)return t.then(function(){})}}();return n&&n.then?n.then(t):t()};if(!window.ethereum)throw new v;var n=l(function(){return Promise.resolve(window.ethereum.send("eth_chainId").then(m)).then(function(t){e=t})},function(){});return Promise.resolve(n&&n.then?n.then(t):t())}catch(r){return Promise.reject(r)}},n.getAccount=function(){try{var e,t=function(){function t(){return e||(e=m(window.ethereum.send({method:"eth_accounts"}))[0]),e}var n=function(){if(!e){var t=l(function(){return Promise.resolve(window.ethereum.enable().then(function(e){return m(e)[0]})).then(function(t){e=t})},function(){});if(t&&t.then)return t.then(function(){})}}();return n&&n.then?n.then(t):t()};if(!window.ethereum)throw new v;var n=l(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(e){return m(e)[0]})).then(function(t){e=t})},function(){});return Promise.resolve(n&&n.then?n.then(t):t())}catch(r){return Promise.reject(r)}},n.deactivate=function(){window.ethereum&&window.ethereum.removeListener&&(window.ethereum.removeListener("chainChanged",this.handleChainChanged),window.ethereum.removeListener("accountsChanged",this.handleAccountsChanged),window.ethereum.removeListener("close",this.handleClose),window.ethereum.removeListener("networkChanged",this.handleNetworkChanged))},n.isAuthorized=function(){try{return window.ethereum?Promise.resolve(l(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(e){return m(e).length>0}))},function(){return!1})):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},t}(e.AbstractConnector);exports.InjectedConnector=y;
},{"@web3-react/abstract-connector":"xxwS","tiny-warning":"sIbj"}]},{},[], null)
//# sourceMappingURL=injected-connector.esm.7f11ac2c.js.map