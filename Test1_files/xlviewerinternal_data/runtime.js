var runtime=function(e){function t(t){for(var n,a,u=t[0],c=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={2:0},i=[];function a(e){var t=function(e){return u.p+""+({0:"common",1:"common50",3:"AtMentionLazy",4:"LPPLazy",6:"appChromeLazy",17:"mspdf-string-resource",18:"pdfViewerChunk",21:"reactdnd",24:"sharedCommentsLazy",26:"uiFabricLazy",27:"uiSlice20"}[e]||e)+".min.js"}(e);if(window.g_versionedUrlHashFunction){var r=window.g_versionedUrlHashFunction(t);if(r)return r}return t}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var i=new Error;var c=function t(r,n){var c,s=document.createElement("script"),f="&retry-attempt="+(5-n+1);s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),c=function(r){s.onerror=s.onload=null,clearTimeout(l);var u=o[e];if(0!==u)if(u)if(0===n){var c=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed after 5 retries.\n("+c+": "+d+")",i.name="ChunkLoadError",i.type=c,i.request=d,u[1](i),o[e]=void 0}else{var p="cache-bust=true"+f,g=t(a(e)+"?"+p,n-1);document.head.appendChild(g)}else o[e]=void 0};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);return s.onerror=s.onload=c,s}(a(e),5);document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp_name_=window.webpackJsonp_name_||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=s;return i.push([1852]),r()}({1:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return i})),r.d(t,"__rest",(function(){return a})),r.d(t,"__decorate",(function(){return u})),r.d(t,"__param",(function(){return c})),r.d(t,"__metadata",(function(){return s})),r.d(t,"__awaiter",(function(){return f})),r.d(t,"__generator",(function(){return l})),r.d(t,"__createBinding",(function(){return d})),r.d(t,"__exportStar",(function(){return p})),r.d(t,"__values",(function(){return g})),r.d(t,"__read",(function(){return y})),r.d(t,"__spread",(function(){return v})),r.d(t,"__spreadArrays",(function(){return h})),r.d(t,"__spreadArray",(function(){return m})),r.d(t,"__await",(function(){return b})),r.d(t,"__asyncGenerator",(function(){return _})),r.d(t,"__asyncDelegator",(function(){return w})),r.d(t,"__asyncValues",(function(){return T})),r.d(t,"__makeTemplateObject",(function(){return x})),r.d(t,"__importStar",(function(){return O})),r.d(t,"__importDefault",(function(){return S})),r.d(t,"__classPrivateFieldGet",(function(){return C})),r.d(t,"__classPrivateFieldSet",(function(){return j}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function u(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function u(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function p(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function h(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}function m(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function _(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,s):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function c(e){u("next",e)}function s(e){u("throw",e)}function f(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function T(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=g(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return P(t,e),t}function S(e){return e&&e.__esModule?e:{default:e}}function C(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function j(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},1852:function(e,t,r){"use strict";r.r(t);var n=r(272);r.d(t,"setWebpackPublicPath",(function(){return n.a}));var o=r(23);r.d(t,"setAppSettings",(function(){return o.e})),r.d(t,"setIsFeatureEnabledCallback",(function(){return o.f}));var i=r(314);r.d(t,"setFeatureGateManager",(function(){return i.b}));var a=r(228);r.d(t,"setFeatureGateDictionaryGetter",(function(){return a.setFeatureGateDictionaryGetter})),r.d(t,"setChangeGateDictionaryGetter",(function(){return a.setChangeGateDictionaryGetter}));var u=r(83);r.d(t,"initEwaUtils",(function(){return u.initEwaUtils}))},219:function(e,t,r){"use strict";r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return l}));var n,o,i=r(314);function a(e){n=e}function u(e){o=e}function c(e,t){return void 0===t&&(t=!1),(o?o(e):!!n&&!!n[e]&&"true"===n[e].toLowerCase())||Object(i.a)(e,t)}function s(e,t){return n&&n[e]?n[e]:t}function f(e){var t=s(e,"[]");return JSON.parse(t)}function l(e,t){return!s(e,"").split(",").some((function(e){return e===t}))}},228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);(0,n.__exportStar)(r(435),t),(0,n.__exportStar)(r(929),t),(0,n.__exportStar)(r(436),t),(0,n.__exportStar)(r(930),t),(0,n.__exportStar)(r(931),t),(0,n.__exportStar)(r(932),t)},23:function(e,t,r){"use strict";var n=r(219);r.d(t,"e",(function(){return n.e})),r.d(t,"f",(function(){return n.f})),r.d(t,"d",(function(){return n.d})),r.d(t,"a",(function(){return n.a})),r.d(t,"c",(function(){return n.c})),r.d(t,"b",(function(){return n.b}))},272:function(e,t,r){"use strict";var n=r(23);function o(e){var t=e;Object(n.d)("AppChromeOverrideEnabled")&&(t=Object(n.a)("AppChromeBaseScriptUrlOverride","")),Object(n.d)("ExperimentalBundleIsEnabled")&&(t+="exp/"),r.p=r.p||t}r.d(t,"a",(function(){return o}))},314:function(e,t,r){"use strict";var n,o=function(e){n=e},i=function(e,t){return void 0===t&&(t=!1),n?n.getBooleanFeatureGate(e,t):t};r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}))},435:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setFeatureGateDictionaryGetter=t.getIntFeatureGate=t.getNumberFeatureGate=t.getBooleanFeatureGate=t.getStringFeatureGate=t.getFeatureGateDictionary=void 0;var n=r(566),o={};function i(){return"undefined"==typeof __get_feature_gate_dictionary_variable?o:__get_feature_gate_dictionary_variable()}function a(e,t){var r;return null!==(r=i()[e])&&void 0!==r?r:t}t.getFeatureGateDictionary=i,t.getStringFeatureGate=a,t.getBooleanFeatureGate=function(e,t){var r,n=null===(r=a(e))||void 0===r?void 0:r.trim().toLowerCase();return"true"===n||"false"!==n&&t},t.getNumberFeatureGate=function(e,t){var r,n=null===(r=a(e))||void 0===r?void 0:r.trim().toLowerCase();if(void 0===n)return t;if("infinity"===n||"+infinity"===n)return 1/0;if("-infinity"===n)return-1/0;var o=parseFloat(n);return isNaN(o)?t:o},t.getIntFeatureGate=function(e,t){var r,n=null===(r=a(e))||void 0===r?void 0:r.trim();if(void 0===n)return t;var o=parseInt(n,10);return isNaN(o)?t:o},t.setFeatureGateDictionaryGetter=function(e){var t=n.globalThis.__get_feature_gate_dictionary_variable;return n.globalThis.__get_feature_gate_dictionary_variable=e,t}},436:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setChangeGateDictionaryGetter=t.isChangeGateEnabled=t.getChangeGateDictionary=void 0;var n=r(566);function o(){return"undefined"==typeof __get_change_gate_dictionary_variable?null:__get_change_gate_dictionary_variable()}t.getChangeGateDictionary=o,t.isChangeGateEnabled=function(e){var t,r=o();return null!==r&&(null===(t=r[e])||void 0===t||t)},t.setChangeGateDictionaryGetter=function(e){var t=n.globalThis.__get_change_gate_dictionary_variable;return n.globalThis.__get_change_gate_dictionary_variable=e,t}},566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.globalThis=void 0;var n=r(926);t.globalThis=n},583:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);(0,n.__exportStar)(r(920),t),(0,n.__exportStar)(r(921),t)},83:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TelemetryCollector=t.initStopwatchFactory=t.ewaUtils=t.initEwaUtils=t.ConsoleLogger=t.NulLogger=t.perfWatch=t.browserSupport=t.LogCategory=t.TraceLevel=t.ULS=t.utils=t.TextAreaInputMode=t.TextAreaVirtualKeyboardPolicy=t.getNewGuid=void 0;var n=r(915);t.utils=n;var o=r(916);Object.defineProperty(t,"ULS",{enumerable:!0,get:function(){return o.ULS}}),Object.defineProperty(t,"TraceLevel",{enumerable:!0,get:function(){return o.TraceLevel}}),Object.defineProperty(t,"LogCategory",{enumerable:!0,get:function(){return o.LogCategory}}),Object.defineProperty(t,"NulLogger",{enumerable:!0,get:function(){return o.NulLogger}}),Object.defineProperty(t,"ConsoleLogger",{enumerable:!0,get:function(){return o.ConsoleLogger}});var i=r(917);t.browserSupport=i;var a=r(918);t.perfWatch=a;var u=r(919);Object.defineProperty(t,"initEwaUtils",{enumerable:!0,get:function(){return u.initEwaUtils}}),Object.defineProperty(t,"ewaUtils",{enumerable:!0,get:function(){return u.ewaUtils}});var c=r(922);Object.defineProperty(t,"initStopwatchFactory",{enumerable:!0,get:function(){return c.initStopwatchFactory}});var s=r(923);Object.defineProperty(t,"TelemetryCollector",{enumerable:!0,get:function(){return s.TelemetryCollector}});var f=r(924);Object.defineProperty(t,"getNewGuid",{enumerable:!0,get:function(){return f.getNewGuid}});var l=r(925);Object.defineProperty(t,"TextAreaVirtualKeyboardPolicy",{enumerable:!0,get:function(){return l.TextAreaVirtualKeyboardPolicy}}),Object.defineProperty(t,"TextAreaInputMode",{enumerable:!0,get:function(){return l.TextAreaInputMode}})},915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBoundingRectForText=t.getCharIndexInTextFromPoint=t.calcHashCode=t.decodeHtml=t.getQueryParameterByName=t.chainFallbackPromises=t.retry=t.getPerfWatchMarkName=t.getStringifiedError=t.defaultToJSONResultWhenStringifyFails=t.forEachPromise=void 0,t.forEachPromise=function(e,t,r){return e.reduce((function(e,n){return e.then((function(){return r&&r.stop?Promise.resolve(void 0):t(n,r)}))}),Promise.resolve(void 0))},t.defaultToJSONResultWhenStringifyFails="...",t.getStringifiedError=function(e){if(0===e)return"0";if(!e)return"";try{return JSON.stringify(function e(t,r){void 0===r&&(r=0);if(r<0||r>5)return t;if(null==t||"object"!=typeof t)return t;var n={};Object.getOwnPropertyNames(t).forEach((function(e){"stack"!==e&&e.toUpperCase()!==e&&(n[e]=t[e])}));var o=Object.getPrototypeOf(t);o&&"object"==typeof o&&Object.keys(o).forEach((function(e){"stack"!==e&&e.toUpperCase()!==e&&(n[e]=t[e])}));var i={};return Object.keys(n).forEach((function(t){i[t]=e(n[t],r+1)})),i}(e))}catch(e){return t.defaultToJSONResultWhenStringifyFails}};var n=new RegExp("".concat("\\W","+"),"g");t.getPerfWatchMarkName=function(e){if(!e)return"";var t=e.trim().substring(0,200).trim().replace(n,"_").substring(0,80);return t&&t.length>0&&"_"===t.substr(t.length-1,1)&&(t=t.substr(0,t.length-1)),t&&t.length>0&&"_"===t.substr(0,1)&&(t=t.substr(1)),t},t.retry=function(e,t){if(!e)return Promise.reject(new Error("utils.retry: action can't be null or undefined"));if(t<1)return Promise.reject(new Error("utils.retry: attempts expected to be greater than 0 but got ".concat(t)));for(var r=Promise.reject(),n=function(t){r=r.catch((function(r){return e(t,r)}))},o=1;o<=t;o+=1)n(o);return r},t.chainFallbackPromises=function(e,t){if(!e||0===e.length)return Promise.reject();for(var r=t(e[0]),n=function(n){var o=e[n];r=r.catch((function(){return t(o)}))},o=1;o<e.length;o+=1)n(o);return r},t.getQueryParameterByName=function(e,t){var r=new RegExp("[?&]".concat(t,"(=([^&#]*)|&|#|$)")).exec(e);if(r)return r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):""},t.decodeHtml=function(e){return"string"==typeof e?(new DOMParser).parseFromString(e,"text/html").documentElement.textContent:e},t.calcHashCode=function(e){if(!e)return 0;for(var t=5381,r=t,n=e.length,o=0;o<n&&(t=4294967295&((t<<5)+t^e.charCodeAt(o)),o!==n-1);o+=2)r=4294967295&((r<<5)+r^e.charCodeAt(o+1));var i=t+35685*r+(23896*r<<16)&4294967295;return i<0&&(i+=4294967296),i},t.getCharIndexInTextFromPoint=function(e,t,r){void 0===r&&(r=!1);var n=-1,o=null;if(void 0!==document.caretPositionFromPoint)null!==(i=document.caretPositionFromPoint(e,t))&&(n=i.offset,o=null!=i.offsetNode&&null!=i.offsetNode.parentElement&&"SPAN"===i.offsetNode.parentElement.nodeName?i.offsetNode.parentElement:i.offsetNode);else if(void 0!==document.caretRangeFromPoint){null!==(i=document.caretRangeFromPoint(e,t))&&(n=i.startOffset,o=null!=i.startContainer&&null!=i.startContainer.parentElement&&"SPAN"===i.startContainer.parentElement.nodeName?i.startContainer.parentElement:i.startContainer)}else try{var i;o=document.elementFromPoint(e,t),(i=document.body.createTextRange()).moveToPoint(e,t);var a=document.body.createTextRange();a.moveToElementText(o),a.setEndPoint("EndToStart",i),n=a.text.length}catch(e){return n}if(r)for(var u=!1;null!=o;)null===o.previousSibling&&null!==o.parentNode&&null!==o.parentNode.parentNode&&o.parentNode.parentNode.childNodes.length>1&&!u?(o=o.parentNode,u=!0):null!=(o=o.previousSibling)&&null!=o.textContent&&(n+=o.textContent.length,u&&(n+=1));else for(;null!=o;)null!=(o=o.previousSibling)&&null!=o.textContent&&(n+=o.textContent.length);return n},t.getBoundingRectForText=function(e,t,r,n){function o(e,t,r){if(!e||!e.textContent)return t;if(n&&(t<0||t>e.textContent.length&&(0===e.childNodes.length||"DIV"!==e.childNodes[0].nodeName)))return t-e.textContent.length;if(t<0||t>e.textContent.length)return t-e.textContent.length;if(!e.hasChildNodes())return r(e,t),t-e.textContent.length;for(var i=e.childNodes,a=0;a<i.length&&t>=0;a+=1)t=o(i[a],t,r),n&&"DIV"===i[a].nodeName&&(t-=1);return t}void 0===n&&(n=!1);var i=document.createRange();return o(e,t,(function(e,t){return i.setStart(e,t)})),o(e,r,(function(e,t){return i.setEnd(e,t)})),i.getBoundingClientRect()}},916:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NulLogger=t.ConsoleLogger=t.ULS=t.LogCategory=t.TraceLevel=void 0,function(e){e[e.Error=10]="Error",e[e.Warning=15]="Warning",e[e.Info=50]="Info",e[e.Verbose=100]="Verbose",e[e.Spam=200]="Spam"}(t.TraceLevel||(t.TraceLevel={})),function(e){e[e.msoulscat_ES_EWAJS=0]="msoulscat_ES_EWAJS"}(t.LogCategory||(t.LogCategory={})),t.ULS={getFromExternalLogger:function(e){var t=e;return{ULS:{trace:function(e,r,n){return t.traceTag(0,e,r,n)},traceTag:function(e,r,n,o){return t.traceTag(e,r,n,o)},debugTrace:function(e,r,n){return t.debugTraceTag(0,e,r,n)},debugTraceTag:function(e,r,n,o){return t.debugTraceTag(e,r,n,o)},assert:function(e,r,n){return t.assertTag(0,e,r,n)},assertTag:function(e,r,n,o){return t.assertTag(e,r,n,o)},shipAssert:function(e,r,n){return t.shipAssertTag(0,e,r,n)},shipAssertTag:function(e,r,n,o){return t.shipAssertTag(e,r,n,o)},dnmTrace:function(e,r,n){return t.dnmTraceTag(0,e,r,n)},dnmTraceTag:function(e,r,n,o){return t.dnmTraceTag(e,r,n,o)}}}}};var n=function(){function e(){}return e.prototype.shipAssertTag=function(e,t,r,n){console.assert(r,"shipAssertTag:",e,t,n)},e.prototype.assertTag=function(e,t,r,n){console.assert(r,"assertTag",e,t,n)},e.prototype.traceTag=function(e,t,r,n){console.log("traceTag",e,n,t,r)},e.prototype.dnmTraceTag=function(e,t,r,n){console.log("dnmTraceTag",e,n,t,r)},e.prototype.debugTraceTag=function(e,t,r,n){console.log("debugTraceTag",e,n,t,r)},e}();t.ConsoleLogger=n;var o=function(){function e(){}return e.prototype.shipAssertTag=function(){},e.prototype.assertTag=function(){},e.prototype.traceTag=function(){},e.prototype.debugTraceTag=function(){},e.prototype.dnmTraceTag=function(){},e}();t.NulLogger=o},917:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.promises=void 0;var n={};t.promises=function(){return void 0===n.promises&&(n.promises="undefined"!=typeof Promise&&"function"==typeof Promise.resolve&&Promise.resolve(0)&&"function"==typeof Promise.resolve(0).then),n.promises}},918:function(e,t,r){"use strict";function n(){var e="undefined"!=typeof self?self:window;return e.performance&&e.performance.now?e.performance.now():Date.now()}function o(e,t,r){e[t]=n()-r}Object.defineProperty(t,"__esModule",{value:!0}),t.timeStamp=t.failure=t.success=t.end=t.mark=t.start=void 0,t.start=function(e){var t=n(),r=e,i=t,a={},u=function(e,t,n){return function(e,t,r,n,i,a){o(e,"end",r);var u={sessionName:t,result:n?"success":"failure",message:a,marks:e},c=JSON.stringify(u);i(c)}(a,r,i,e,t,n)};return a.start=0,{mark:function(e){return function(e){return o(a,e,i)}(e)},end:function(e){return u(!0,e)},success:function(e,t){return u(!0,e,t)},failure:function(e,t){return u(!1,e,t)}}},t.mark=function(e,t){void 0!==e&&e.mark(t)},t.end=function(e,t){void 0!==e&&e.end(t)},t.success=function(e,t,r){void 0!==e&&e.success(t,r)},t.failure=function(e,t,r){void 0!==e&&e.failure(t,r)},t.timeStamp=n},919:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initEwaUtils=t.ewaUtils=void 0;var n=r(583),o={isChangeGateEnabled:function(e){return!1}};t.ewaUtils=function(){return o},t.initEwaUtils=function(e){if(!e)throw new Error("the 'ewaUtils' argument is missing");(0,n.setChangeGatesManager)({isChangeGateEnabled:e.isChangeGateEnabled}),o=e}},920:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.isChangeGateEnabled=t.setChangeGatesManager=void 0;t.setChangeGatesManager=function(e){n=e};t.isChangeGateEnabled=function(e){return!n||n.isChangeGateEnabled(e)}},921:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initStopwatchFactory=void 0;var n=function(){return Date.now()};t.initStopwatchFactory=function(e,t){return void 0===t&&(t=1),"undefined"!=typeof self&&self.performance&&self.performance.now&&(n=function(){return self.performance.now()}),function(r){var o=n(),i=r;return{reset:function(e){null!=e&&(i=e),o=n()},stop:function(r){var a=n()-o,u=JSON.stringify({Target:i,Duration:a.toFixed(t),StopInfo:r});e(u)}}}}},923:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TelemetryCollector=void 0;var n=function(){function e(){this.counters={},this.timers={},this.events={}}return e.prototype.getJsonForLogging=function(){return'{"Events":'+this.getEventsLoggableString()+',"Counters":'+this.getCountersLoggableString()+',"Timers":'+this.getTimersLoggableString()+"}"},e.prototype.addEvent=function(e,t){null!=e&&null!=t&&(this.events[e]=t)},e.prototype.clearEvents=function(){this.events={}},e.prototype.getEventsLoggableString=function(){return JSON.stringify(this.events)},e.prototype.incrementCounter=function(e){null!=e&&(this.counters.hasOwnProperty(e)?this.counters[e]+=1:this.counters[e]=1)},e.prototype.getCountersLoggableString=function(){return JSON.stringify(this.counters)},e.prototype.clearCounters=function(){this.counters={}},e.prototype.startTimer=function(e){null!=e&&(this.timers[e]={name:e,startTime:Date.now(),endTime:void 0,isRunning:!0,duration:void 0})},e.prototype.endTimer=function(e){null!=e&&this.timers.hasOwnProperty(e)&&(this.timers[e].endTime=Date.now(),this.timers[e].isRunning=!1,this.timers[e].duration=this.timers[e].endTime-this.timers[e].startTime)},e.prototype.getTimerDuration=function(e){return null==e?"-1":this.timers.hasOwnProperty(e)&&void 0!==this.timers[e].duration?this.timers[e].duration:"-1"},e.prototype.getTimersLoggableString=function(){return JSON.stringify(this.timers)},e}();t.TelemetryCollector=n},924:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNewGuid=void 0,t.getNewGuid=function(){var e=new Uint8Array(31),t=function(e){var t={crypto:!1,perfNow:!1,exceptions:[]},r="undefined"!=typeof self?self:window,n=r.crypto||r.msCrypto;if(n){t.crypto=!0;try{return n.getRandomValues(e),t}catch(e){t.exceptions.push("crypto: ".concat(JSON.stringify(e)))}}var o=!1,i=r.performance;try{i&&i.now&&i.now()!==1/0&&(o=!0)}catch(e){t.exceptions.push("perfNow: ".concat(JSON.stringify(e)))}for(var a=0;a<e.length;a+=1){try{if(o){t.perfNow=!0;var u=Math.floor(100*i.now())%10;(u<0||u>9)&&(u=0);for(var c=0;c<u;c+=1)Math.random()}}catch(e){t.exceptions.push("Math.random: ".concat(JSON.stringify(e)))}e[a]=Math.floor(16*Math.random())}return t}(e),r=0;return["xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=15&e[r];return r+=1,("x"===t?n:3&n|8).toString(16)})),t]}},925:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextAreaInputMode=t.TextAreaVirtualKeyboardPolicy=void 0,function(e){e.Auto="auto",e.Manual="manual"}(t.TextAreaVirtualKeyboardPolicy||(t.TextAreaVirtualKeyboardPolicy={})),function(e){e.None="none",e.Text="text",e.Tel="tel",e.Url="url",e.Email="email",e.Numeric="numeric",e.Decimal="decimal",e.Search="search"}(t.TextAreaInputMode||(t.TextAreaInputMode={}))},926:function(e,t,r){"use strict";e.exports=r(927)()?globalThis:r(928)},927:function(e,t,r){"use strict";e.exports=function(){return"object"==typeof globalThis&&(!!globalThis&&globalThis.Array===Array)}},928:function(e,t){var r=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()},929:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeGetTypedFeatureGate=void 0;var n=r(435);t.makeGetTypedFeatureGate=function(e){return function(t){var r=e[t];switch(typeof r){case"boolean":return(0,n.getBooleanFeatureGate)(t,r);case"number":return(0,n.getNumberFeatureGate)(t,r);case"string":return(0,n.getStringFeatureGate)(t,r);default:throw new Error("Wrong defaultValue type")}}}},930:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeTypedIsChangeGateEnabled=void 0;var n=r(436);t.makeTypedIsChangeGateEnabled=function(e){return function(e){return(0,n.isChangeGateEnabled)(e)}}},931:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.overrideTypedChangeGates=t.overrideChangeGates=void 0;var n=r(1),o=r(436);function i(e){var t=(0,o.setChangeGateDictionaryGetter)(void 0);return void 0===t?(0,o.setChangeGateDictionaryGetter)(void 0):(0,o.setChangeGateDictionaryGetter)((function(){var r=t();return null===r?null:(0,n.__assign)((0,n.__assign)({},r),e)})),t}t.overrideChangeGates=i,t.overrideTypedChangeGates=function(e,t){return i(t)}},932:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.overrideTypedFeatureGates=t.overrideFeatureGates=void 0;var n=r(1),o=r(435);function i(e){for(var t,r,i={},a=0,u=Object.keys(e);a<u.length;a++){var c=u[a];i[c]=null===(t=e[c])||void 0===t?void 0:t.toString()}var s=null!==(r=(0,o.setFeatureGateDictionaryGetter)(void 0))&&void 0!==r?r:function(){return{}};return(0,o.setFeatureGateDictionaryGetter)((function(){return(0,n.__assign)((0,n.__assign)({},s()),i)})),s}t.overrideFeatureGates=i,t.overrideTypedFeatureGates=function(e,t){return i(t)}}});
//# sourceMappingURL=runtime.min.js.map