!function(e){function t(t){for(var n,o,i=t[0],a=t[1],l=0,c=[];l<i.length;l++)o=i[l],r[o]&&c.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);c.length;)c.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a,l=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+e+".app.bundle.bf96bd7c70d08a25a1b2.js"}(e),a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,l.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=a;o(o.s=4)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t;throw t=null===e?"null":"object"===(t=r(e))&&e.constructor&&e.constructor.hasOwnProperty("name")?e.constructor.name:"a ".concat(t),new TypeError("Expected string but received ".concat(t,"."))}},e.exports=t.default,e.exports.default=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if((0,r.default)(e),!e||e.length>=2083||/[\s<>]/.test(e))return!1;if(0===e.indexOf("mailto:"))return!1;var n,l,u,d,h,p,m,v;if(t=(0,a.default)(t,s),m=e.split("#"),e=m.shift(),m=e.split("?"),e=m.shift(),(m=e.split("://")).length>1){if(n=m.shift().toLowerCase(),t.require_valid_protocol&&-1===t.protocols.indexOf(n))return!1}else{if(t.require_protocol)return!1;if("//"===e.substr(0,2)){if(!t.allow_protocol_relative_urls)return!1;m[0]=e.substr(2)}}if(""===(e=m.join("://")))return!1;if(m=e.split("/"),""===(e=m.shift())&&!t.require_host)return!0;if((m=e.split("@")).length>1){if(t.disallow_auth)return!1;if((l=m.shift()).indexOf(":")>=0&&l.split(":").length>2)return!1}d=m.join("@"),p=null,v=null;var g=d.match(c);g?(u="",v=g[1],p=g[2]||null):(m=d.split(":"),u=m.shift(),m.length&&(p=m.join(":")));if(null!==p&&(h=parseInt(p,10),!/^[0-9]+$/.test(p)||h<=0||h>65535))return!1;if(!((0,i.default)(u)||(0,o.default)(u,t)||v&&(0,i.default)(v,6)))return!1;if(u=u||v,t.host_whitelist&&!f(u,t.host_whitelist))return!1;if(t.host_blacklist&&f(u,t.host_blacklist))return!1;return!0};var r=l(n(0)),o=l(n(7)),i=l(n(8)),a=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}var s={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},c=/^\[([^\]]+)\](?::([0-9]+))?$/;function u(e){return"[object RegExp]"===Object.prototype.toString.call(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(e===r||u(r)&&r.test(e))return!0}return!1}e.exports=t.default,e.exports.default=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var n in t)void 0===e[n]&&(e[n]=t[n]);return e},e.exports=t.default,e.exports.default=t.default},function(e,t,n){const r=n(1);t.getAlternativeURL=(async(e,t)=>{let n=null;if("string"!=typeof e)throw new Error(`We expected a string as sourceURL we got ${typeof e}`);if(!r(e))throw new Error(`We expected an URL we got ${e}`);if("string"!=typeof t)throw new Error(`We expected a string as linkRelType we got ${typeof t}`);const o=await fetch(`https://cors-anywhere.herokuapp.com/${e}`,{mode:"cors"});if(!o.ok)throw new Error(`We received an invalid response when trying to get a CORS free version of ${e} ${await o.text()}`);const i=await o.text();if(n=(new DOMParser).parseFromString(i,"text/html").documentElement.querySelector(`link[rel="${t}"`).getAttribute("href"),!r(n))throw new Error(`We couldn't find a valid alternativeURL we got ${n}`);return n})},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";n.r(t);n(6);var r=n(3);const o=document.querySelector("form"),i=document.querySelectorAll('input[type="checkbox"]'),a=(e,t="")=>`<iframe id="${t}" class="u-shadowS" width="412" height="12000" src="${e}" frameborder="0"></iframe>`,l=(e,t="")=>`<img id="${t}" class="u-shadowS" width="412px" src="${e}"/>`;i.forEach(e=>e.addEventListener("click",function(e){i.forEach(e=>e.checked=!1),this.checked=!0}));const s=()=>{null!==document.querySelector(".errors-msg")&&o.removeChild(document.querySelector(".errors-msg"))},c=(e,t)=>{s(),o.insertAdjacentHTML("beforeend",`<p class="errors-msg msg--${t} u-pts u-pbs u-pls u-prs">${e}</p>`)},u=()=>{const e=o.querySelector("button");e.disabled?(e.innerHTML="Compare the two URLs",e.disabled=!1):(e.innerHTML="Loading URL comparison...",e.disabled=!0)},f=async(e,t,n)=>{if(null!==document.querySelector(".detector")){const e=document.querySelector(".detector");e.parentNode.removeChild(e)}t.previousElementSibling.insertAdjacentHTML("beforeend",'<a href="#" class="detector"> - Detect?</a>'),document.querySelector(".detector").addEventListener("click",async function(o){o.preventDefault(),this.disabled=!0,this.innerHTML=" - Detecting...";const i=await Object(r.getAlternativeURL)(e,n).catch(e=>{this.innerHTML=" - Detection failed. Try again?",this.disabled=!0,console.error(e)});t.value=i||"",i&&this.parentNode.removeChild(this)})};if(o.addEventListener("submit",async function(e){try{e.preventDefault(),s();let[t,r,i]=await Promise.all([n.e(1).then(n.t.bind(null,9,7)),Promise.resolve().then(n.t.bind(null,1,7)),n.e(2).then(n.bind(null,10))]);t=t.default,r=r.default,i=i.default;const f=this.cannonicalURL.value,d=this.ampURL.value;if(!r(this.cannonicalURL.value))return c("The Cannonical URL is not a valid URL","error"),!1;if(!r(this.ampURL.value))return c("The AMP URL is not a valid URL","error"),!1;u(),o.insertAdjacentHTML("beforeend",'\n\t\t<svg class="spinner u-dbma" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n\t\t\t<circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\n\t\t</svg>\n\t');const h=document.querySelector(".iframe-container");if(h.innerHTML="",h.insertAdjacentHTML("afterbegin",'\n\t\n\t\t<h2 class="cannonical"> Canonical </h2> \n\t\t\t\t\t\n\t\t<h2 class="amp"> AMP </h2>\n\t\t\n\t\t'),this.forceIframeMode.checked&&(h.insertAdjacentHTML("beforeend",a(`https://iframereplacement.speedwat.ch/?url=${this.ampURL.value}`,"iframe-amp")),h.insertAdjacentHTML("beforeend",a(`https://iframereplacement.speedwat.ch/?url=${this.cannonicalURL.value}`,"iframe-canonical")),c("We are forcing the site to display inside iFrames ! <strong>This can lead to visual differences</strong>","warning")),this.screenshotsOnlyMode.checked&&(h.insertAdjacentHTML("beforeend",l(`https://puppeteer.speedwat.ch/screenshot/?url=${this.cannonicalURL.value}`,"iframe-canonical")),h.insertAdjacentHTML("beforeend",l(`https://puppeteer.speedwat.ch/screenshot/?url=${this.ampURL.value}`,"iframe-amp")),c("You are in screenshot only mode ","success"),h.style.visibility="hidden",await i(".iframe-container"),h.style.visibility="visible"),this.autoMode.checked){const{cannonicalCanBeIframed:e,ampCanBeIframed:t}=await(async(e,t)=>{let[n,r]=await Promise.all([fetch(`https://authorizeiframe.speedwat.ch/url/?url=${e}`),fetch(`https://authorizeiframe.speedwat.ch/url/?url=${t}`)]);if(!n.ok)throw new Error(`We couldn't query the API to check if the iFrames on cannonical are authorized : ${await n.text()}`);if(!r.ok)throw new Error(`We couldn't query the API to check if the iFrames on AMP are authorized : ${await r.text()}`);const o=await n.json(),i=await r.json();return{cannonicalCanBeIframed:o.canBeIframed,ampCanBeIframed:i.canBeIframed}})(this.cannonicalURL.value,this.ampURL.value);if(e?h.insertAdjacentHTML("beforeend",a(this.cannonicalURL.value,"iframe-canonical")):h.insertAdjacentHTML("beforeend",l(`https://puppeteer.speedwat.ch/screenshot/?url=${this.cannonicalURL.value}`,"iframe-canonical")),t?h.insertAdjacentHTML("beforeend",a(this.ampURL.value,"iframe-amp")):h.insertAdjacentHTML("beforeend",l(`https://puppeteer.speedwat.ch/screenshot/?url=${this.ampURL.value}`,"iframe-amp")),!e||!t){let n="";e||(n="for the cannonical page only"),t||(n="for the ⚡️ amp page only"),e||t||(n="for both pages"),c(`The site blocked iframes ! We are falling back on screenshots <strong>${n}</strong>!`,"warning"),h.style.visibility="hidden",await i(".iframe-container"),h.style.visibility="visible"}}null!==document.querySelector(".spinner")&&o.removeChild(document.querySelector(".spinner")),u(),t(".iframe-container",{offset:-200,duration:700}),window.location.hash=`?ampURL=${d}&cannonicalURL=${f}`}catch(e){c(`Something wrong happened : ${e.toString()}`,"error")}}),o.cannonicalURL.addEventListener("change",async function(e){f(this.value,o.ampURL,"amphtml").catch(console.log)}),o.ampURL.addEventListener("change",async function(e){f(this.value,o.cannonicalURL,"canonical").catch(console.log)}),""!==window.location.hash&&window.location.hash.includes("ampURL")&&window.location.hash.includes("cannonicalURL")){const e=window.location.hash.replace("#",""),t=new URLSearchParams(e);t.has("ampURL")&&t.has("cannonicalURL")&&(o.cannonicalURL.value=t.get("cannonicalURL"),o.ampURL.value=t.get("ampURL"),document.querySelector("form button").click())}},function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,r.default)(e),(t=(0,o.default)(t,a)).allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));for(var n=e.split("."),i=0;i<n.length;i++)if(n[i].length>63)return!1;if(t.require_tld){var l=n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(l))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(l))return!1}for(var s,c=0;c<n.length;c++){if(s=n[c],t.allow_underscores&&(s=s.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(s))return!1;if(/[\uff01-\uff5e]/.test(s))return!1;if("-"===s[0]||"-"===s[s.length-1])return!1}return!0};var r=i(n(0)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t.default,e.exports.default=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,r.default)(t);n=String(n);if(!n)return e(t,4)||e(t,6);if("4"===n){if(!o.test(t))return!1;var a=t.split(".").sort(function(e,t){return e-t});return a[3]<=255}if("6"===n){var l=t.split(":"),s=!1,c=e(l[l.length-1],4),u=c?7:8;if(l.length>u)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(l.shift(),l.shift(),s=!0):"::"===t.substr(t.length-2)&&(l.pop(),l.pop(),s=!0);for(var f=0;f<l.length;++f)if(""===l[f]&&f>0&&f<l.length-1){if(s)return!1;s=!0}else if(c&&f===l.length-1);else if(!i.test(l[f]))return!1;return s?l.length>=1:l.length===u}return!1};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var o=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,i=/^[0-9A-F]{1,4}$/i;e.exports=t.default,e.exports.default=t.default}]);