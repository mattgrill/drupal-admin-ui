!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["@drupal/admin-ui-utilities"]=e():t["@drupal/admin-ui-utilities"]=e()}(window,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=22)}([function(t,e,r){t.exports=r(13)},function(t){function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise(function(o,i){function a(t){e(u,o,i,a,c,"next",t)}function c(t){e(u,o,i,a,c,"throw",t)}var u=t.apply(r,n);a(void 0)})}}},function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e},function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e},function(t,e,r){var n=r(15);t.exports=function(t){for(var e=1;e<arguments.length;e++){var r=null==arguments[e]?{}:arguments[e],o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){n(t,e,r[e])})}return t}},function(t){"use strict";var e=Object.prototype.hasOwnProperty,r=function(){for(var t=[],e=0;256>e;++e)t.push("%"+((16>e?"0":"")+e.toString(16)).toUpperCase());return t}(),n=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r};t.exports={arrayToObject:n,assign:function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],i=o.obj[o.prop],a=Object.keys(i),c=0;c<a.length;++c){var u=a[c],s=i[u];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(e.push({obj:i,prop:u}),r.push(s))}return function(t){for(;1<t.length;){var e=t.pop(),r=e.obj[e.prop];if(Array.isArray(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);e.obj[e.prop]=n}}}(e),t},decode:function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(t,e,n){if(0===t.length)return t;var o="string"==typeof t?t:t+"";if("iso-8859-1"===n)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var i,a="",c=0;c<o.length;++c)45===(i=o.charCodeAt(c))||46===i||95===i||126===i||48<=i&&57>=i||65<=i&&90>=i||97<=i&&122>=i?a+=o.charAt(c):128>i?a+=r[i]:2048>i?a+=r[192|i>>6]+r[128|63&i]:55296>i||57344<=i?a+=r[224|i>>12]+r[128|63&i>>6]+r[128|63&i]:(c+=1,i=65536+((1023&i)<<10|1023&o.charCodeAt(c)),a+=r[240|i>>18]+r[128|63&i>>12]+r[128|63&i>>6]+r[128|63&i]);return a},isBuffer:function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(r,o,i){if(!o)return r;if("object"!=typeof o){if(Array.isArray(r))r.push(o);else{if("object"!=typeof r)return[r,o];(i&&(i.plainObjects||i.allowPrototypes)||!e.call(Object.prototype,o))&&(r[o]=!0)}return r}if("object"!=typeof r)return[r].concat(o);var a=r;return Array.isArray(r)&&!Array.isArray(o)&&(a=n(r,i)),Array.isArray(r)&&Array.isArray(o)?(o.forEach(function(n,o){e.call(r,o)?r[o]&&"object"==typeof r[o]?r[o]=t(r[o],n,i):r.push(n):r[o]=n}),r):Object.keys(o).reduce(function(r,n){var a=o[n];return r[n]=e.call(r,n)?t(r[n],a,i):a,r},a)}}},function(t){"use strict";var e=String.prototype.replace,r=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return e.call(t,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(t,e,r){"use strict";var n=r(16),o=r(17),i=r(6);t.exports={formats:i,parse:o,stringify:n}},function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t){function e(t,e){for(var r,n=0;n<e.length;n++)(r=e[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}t.exports=function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}},function(t,e,r){var n=r(18),o=r(19);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e,r){var n=r(2);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){function n(e){var r="function"==typeof Map?new Map:void 0;return t.exports=n=function(t){function e(){return c(t,arguments,o(this).constructor)}if(null===t||!a(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},n(e)}var o=r(3),i=r(2),a=r(20),c=r(21);t.exports=n},function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&0<=Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(14),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(t){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new d(n||[]);return a._invoke=s(t,r,c),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,i,a){var c=n(t[r],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}var r;this._invoke=function(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}}function s(t,e,r){var o=k;return function(i,a){if(o===A)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw a;return{value:void 0,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=p(c,r);if(u){if(u===E)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===k)throw o=S,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=A;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?S:_,s.arg===E)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=S,r.method="throw",r.arg=s.arg)}}}function p(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,p(t,e),"throw"===e.method))return E;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return E}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,E;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,E):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,E)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function y(t){if(t){var e=t[g];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:h}}function h(){return{value:void 0,done:!0}}var b=Object.prototype,m=b.hasOwnProperty,v="function"==typeof Symbol?Symbol:{},g=v.iterator||"@@iterator",j=v.asyncIterator||"@@asyncIterator",x=v.toStringTag||"@@toStringTag",w="object"==typeof t,O=e.regeneratorRuntime;if(O)w&&(t.exports=O);else{(O=e.regeneratorRuntime=w?t.exports:{}).wrap=r;var k="suspendedStart",_="suspendedYield",A="executing",S="completed",E={},P={};P[g]=function(){return this};var L=Object.getPrototypeOf,T=L&&L(L(y([])));T&&T!==b&&m.call(T,g)&&(P=T);var N=a.prototype=o.prototype=Object.create(P);i.prototype=N.constructor=a,a.constructor=i,a[x]=i.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,!(x in t)&&(t[x]="GeneratorFunction")),t.prototype=Object.create(N),t},O.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[j]=function(){return this},O.AsyncIterator=u,O.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return O.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(N),N[x]="Generator",N[g]=function(){return this},N.toString=function(){return"[object Generator]"},O.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},O.values=y,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r,n=this.tryEntries.length-1;0<=n;--n)if((r=this.tryEntries[n]).tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,E):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),E},finish:function(t){for(var e,r=this.tryEntries.length-1;0<=r;--r)if((e=this.tryEntries[r]).finallyLoc===t)return this.complete(e.completion,e.afterLoc),f(e),E},catch:function(t){for(var e,r=this.tryEntries.length-1;0<=r;--r)if((e=this.tryEntries[r]).tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;f(e)}return o}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:y(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),E}}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){"use strict";var n=r(5),o=r(6),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Array.isArray,c=Array.prototype.push,u=function(t,e){c.apply(t,a(e)?e:[e])},s=Date.prototype.toISOString,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,indices:!1,serializeDate:function(t){return s.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,r,o,i,a,c,s,l,f,d,y,h,b){var m=e;if("function"==typeof s?m=s(r,m):m instanceof Date&&(m=d(m)),null===m){if(i)return c&&!h?c(r,p.encoder,b):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m))return c?[y(h?r:c(r,p.encoder,b))+"="+y(c(m,p.encoder,b))]:[y(r)+"="+y(m+"")];var v,g=[];if(void 0===m)return g;if(Array.isArray(s))v=s;else{var j=Object.keys(m);v=l?j.sort(l):j}for(var x,w=0;w<v.length;++w)x=v[w],(!a||null!==m[x])&&(Array.isArray(m)?u(g,t(m[x],o(r,x),o,i,a,c,s,l,f,d,y,h,b)):u(g,t(m[x],r+(f?"."+x:"["+x+"]"),o,i,a,c,s,l,f,d,y,h,b)));return g};t.exports=function(t,e){var r=t,a=e?n.assign({},e):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===a.delimiter?p.delimiter:a.delimiter,s="boolean"==typeof a.strictNullHandling?a.strictNullHandling:p.strictNullHandling,f="boolean"==typeof a.skipNulls?a.skipNulls:p.skipNulls,d="boolean"==typeof a.encode?a.encode:p.encode,y="function"==typeof a.encoder?a.encoder:p.encoder,h="function"==typeof a.sort?a.sort:null,b=void 0===a.allowDots?p.allowDots:!!a.allowDots,m="function"==typeof a.serializeDate?a.serializeDate:p.serializeDate,v="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:p.encodeValuesOnly,g=a.charset||p.charset;if(void 0!==a.charset&&"utf-8"!==a.charset&&"iso-8859-1"!==a.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===a.format)a.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var j,x,w=o.formatters[a.format];"function"==typeof a.filter?r=(x=a.filter)("",r):Array.isArray(a.filter)&&(j=x=a.filter);var O=[];if("object"!=typeof r||null===r)return"";var k=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices",_=i[k];j||(j=Object.keys(r)),h&&j.sort(h);for(var A,S=0;S<j.length;++S)A=j[S],(!f||null!==r[A])&&u(O,l(r[A],A,_,s,f,d?y:null,x,h,b,m,w,v,g));var E=O.join(c),P=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&(P+="iso-8859-1"===g?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),0<E.length?P+E:""}},function(t,e,r){"use strict";var n=r(5),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},c=function(t,e){var r,c={},u=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,s=e.parameterLimit===1/0?void 0:e.parameterLimit,p=u.split(e.delimiter,s),l=-1,f=e.charset;if(e.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?f="utf-8":"utf8=%26%2310003%3B"===p[r]&&(f="iso-8859-1"),l=r,r=p.length);for(r=0;r<p.length;++r)if(r!==l){var d,y,h=p[r],b=h.indexOf("]="),m=-1===b?h.indexOf("="):b+1;-1===m?(d=e.decoder(h,i.decoder,f),y=e.strictNullHandling?null:""):(d=e.decoder(h.slice(0,m),i.decoder,f),y=e.decoder(h.slice(m+1),i.decoder,f)),y&&e.interpretNumericEntities&&"iso-8859-1"===f&&(y=a(y)),c[d]=o.call(c,d)?n.combine(c[d],y):y}return c},u=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(n),c=a?n.slice(0,a.index):n,u=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var s=0;null!==(a=i.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(a[1])}return a&&u.push("["+n.slice(a.index)+"]"),function(t,e,r){for(var n=e,o=t.length-1;0<=o;--o){var i,a=t[o];if("[]"===a&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,u=parseInt(c,10);r.parseArrays||""!==c?!isNaN(u)&&a!==c&&u+""===c&&0<=u&&r.parseArrays&&u<=r.arrayLimit?(i=[])[u]=n:i[c]=n:i={0:n}}n=i}return n}(u,e,r)}};t.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots=void 0===r.allowDots?i.allowDots:!!r.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,void 0!==r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===r.charset&&(r.charset=i.charset),""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof t?c(t,r):t,a=r.plainObjects?Object.create(null):{},s=Object.keys(o),p=0;p<s.length;++p){var l=s[p],f=u(l,o[l],r);a=n.merge(a,f,r)}return n.compact(a)}},function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(n){return t.exports=r="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},r(n)}t.exports=r},function(t){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,r){function n(){return t.exports=n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&o(i,r.prototype),i},n.apply(null,arguments)}var o=r(2);t.exports=n},function(t,e,r){"use strict";function n(){return o.apply(this,arguments)}function o(){return(o=p()(a.a.mark(function t(e,r){var o,i,c,s,p,l,d,y,h,b,m,v,g,j=arguments;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=2<j.length&&void 0!==j[2]?j[2]:{},i=o.queryString,c=void 0===i?null:i,s=o.parameters,p=void 0===s?{}:s,l=o.options,(d=void 0===l?{}:l).credentials="include",d.headers=d.headers||{},t.t0=r,t.next="menu"===t.t0?6:"dblog"===t.t0?8:"csrf_token"===t.t0?11:"dblog:types"===t.t0?14:"roles"===t.t0?16:"role"===t.t0?19:"role:patch"===t.t0?22:"file:upload"===t.t0?28:"permissions"===t.t0?34:"content"===t.t0?36:"content_single"===t.t0?39:"file"===t.t0?42:"actions"===t.t0?45:"contentTypes"===t.t0?48:"node:delete"===t.t0?51:"node:add"===t.t0?62:"node:save"===t.t0?81:"taxonomy_vocabulary"===t.t0?92:"taxonomy_term"===t.t0?95:"user"===t.t0?98:"schema"===t.t0?101:"schema_by_id"===t.t0?103:"field_schema"===t.t0?105:"form_display"===t.t0?107:"field_storage_config"===t.t0?109:"admin_ui_components"===t.t0?111:"admin_ui_routes"===t.t0?113:115;break;case 6:return y="/admin-api/menu?_format=json",t.abrupt("break",116);case 8:return y="/jsonapi/watchdog_entity/",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 11:return y="/session/token",d.text=!0,t.abrupt("break",116);case 14:return y="/admin-ui-support/dblog-types?_format=json",t.abrupt("break",116);case 16:return y="/jsonapi/user_role",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 19:return y="/jsonapi/user_role/".concat(p.role.id),d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 22:return y="/jsonapi/user_role/".concat(p.role.id),d.headers.Accept="application/vnd.api+json",d.method="PATCH",d.body=JSON.stringify({data:p.role}),d.headers["Content-Type"]="application/vnd.api+json",t.abrupt("break",116);case 28:return y="/file/upload/".concat(p.entityTypeId,"/").concat(p.bundle,"/").concat(p.fieldName),d.method="POST",d.headers["Content-Type"]="application/octet-stream",d.headers["Content-Disposition"]='file; filename="'.concat(p.fileName,'"'),d.body=p.body,t.abrupt("break",116);case 34:return y="/admin-api/permissions?_format=json",t.abrupt("break",116);case 36:return y="/jsonapi/node",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 39:return y="/jsonapi/node/".concat(p.bundle,"/").concat(p.id),d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 42:return y="/jsonapi/file",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 45:return y="/jsonapi/action",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 48:return y="/jsonapi/node_type",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 51:return p.node=u()({},p.node,{type:p.node.type.includes("--")?p.node.type:"node--".concat(p.node.type)}),t.next=54,n("csrf_token");case 54:return h=t.sent,d.text=!0,d.headers.Accept="application/vnd.api+json",d.headers["X-CSRF-Token"]=h,d.headers["Content-Type"]="application/vnd.api+json",d.method="DELETE",y=p.node.links.self.replace(e,""),t.abrupt("break",116);case 62:return(b=p.node).type=b.type.includes("--")?b.type:"node--".concat(b.type),delete b.id,delete b.attributes.nid,delete b.attributes.revision_timestamp,delete b.attributes.changed,delete b.relationships.revision_uid,delete b.relationships.type,delete b.relationships.uid,t.next=73,n("csrf_token");case 73:return m=t.sent,d.headers.Accept="application/vnd.api+json",d.headers["Content-Type"]="application/vnd.api+json",d.headers["X-CSRF-Token"]=m,d.method="POST",d.body=JSON.stringify({data:b}),y="/jsonapi/".concat(b.type.replace("--","/")),t.abrupt("break",116);case 81:return p.node=u()({},p.node,{type:p.node.type.includes("--")?p.node.type:"node--".concat(p.node.type)}),t.next=84,n("csrf_token");case 84:return v=t.sent,d.headers.Accept="application/vnd.api+json",d.headers["Content-Type"]="application/vnd.api+json",d.headers["X-CSRF-Token"]=v,d.method="PATCH",d.body=JSON.stringify({data:p.node}),y=p.node.links.self.href.replace(e,""),t.abrupt("break",116);case 92:return y="/jsonapi/taxonomy_vocabulary",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 95:return y="/jsonapi/taxonomy_term/".concat(p.type),d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 98:return y="/jsonapi/user",d.headers.Accept="application/vnd.api+json",t.abrupt("break",116);case 101:return y="/schemata/".concat([p.entityTypeId,p.bundle].join("/")),t.abrupt("break",116);case 103:return y="/admin-api/entity-schema/".concat(p.entityTypeId,"/").concat(p.entityId),t.abrupt("break",116);case 105:return y="/jsonapi/field_config",t.abrupt("break",116);case 107:return y="/jsonapi/entity_form_display",t.abrupt("break",116);case 109:return y="/jsonapi/field_storage_config",t.abrupt("break",116);case 111:return y="/jsdrupal/components",t.abrupt("break",116);case 113:return y="/jsdrupal/routes",t.abrupt("break",116);case 115:return t.abrupt("break",116);case 116:return t.next=118,fetch("".concat(e).concat(y).concat(c?"?".concat(f.a.stringify(c,{arrayFormat:"brackets"})):""),d).then(function(t){if(![200,201,204].includes(t.status))throw new k(t.status,t.statusText,t);return d.text?t.text():t.json()});case 118:return g=t.sent,t.abrupt("return",g);case 120:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}r.r(e);var i=r(0),a=r.n(i),c=r(4),u=r.n(c),s=r(1),p=r.n(s),l=r(7),f=r.n(l),d=r(8),y=r.n(d),h=r(9),b=r.n(h),m=r(10),v=r.n(m),g=r(3),j=r.n(g),x=r(11),w=r.n(x),O=r(12),k=function(t){function e(t,r,n){var o;return y()(this,e),(o=v()(this,j()(e).call(this))).name="ApiError",o.status=t,o.statusText=r,o.response=n,o.message="".concat(t," - ").concat(r),o}return w()(e,t),b()(e,null,[{key:"errorToHumanString",value:function(t){return"ApiError"===t.name?e.toHumanString(t):t.toString()}},{key:"toHumanString",value:function(){var t=p()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,t.t0=e.status,t.next=403===t.t0?4:404===t.t0?9:400===t.t0?14:500===t.t0?19:24;break;case 4:return t.t1="You don't have access: ",t.next=7,e.response.json();case 7:return t.t2=t.sent.message,t.abrupt("return",t.t1.concat.call(t.t1,t.t2," Maybe you aren't logged in."));case 9:return t.t3="Some page is missing: ",t.next=12,e.response.json();case 12:return t.t4=t.sent.message,t.abrupt("return",t.t3.concat.call(t.t3,t.t4));case 14:return t.t5="You posted some invalid data, contact the administration team: ",t.next=17,e.response.json();case 17:return t.t6=t.sent.message,t.abrupt("return",t.t5.concat.call(t.t5,t.t6));case 19:return t.t7="The server crashed, contact the administration team: ",t.next=22,e.response.json();case 22:return t.t8=t.sent.message,t.abrupt("return",t.t7.concat.call(t.t7,t.t8));case 24:return t.abrupt("return",e.toString());case 25:t.next=30;break;case 27:return t.prev=27,t.t9=t.catch(0),t.abrupt("return",e.toString());case 30:case"end":return t.stop()}},t,this,[[0,27]])}));return function(){return t.apply(this,arguments)}}()}]),e}(r.n(O)()(Error));r.d(e,"api",function(){return n}),r.d(e,"ApiError",function(){return k})}])});