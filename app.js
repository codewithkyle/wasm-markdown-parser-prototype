!function(n){function e(e){for(var t,o,a=e[0],i=e[1],s=0,c=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t]);for(l&&l(e);c.length;)c.shift()()}var t={},r={0:0};var o={};var a={9:function(){return{}}};function i(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(n){var e=[],t=r[n];if(0!==t)if(t)e.push(t[2]);else{var s=new Promise((function(e,o){t=r[n]=[e,o]}));e.push(t[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(n){return i.p+""+n+".app.js"}(n);var l=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var t=r[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,t[1](l)}r[n]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return({1:[9]}[n]||[]).forEach((function(n){var t=o[n];if(t)e.push(t);else{var r,s=a[n](),c=fetch(i.p+""+{9:"2e7ef80a0c8a73f56116"}[n]+".module.wasm");if(s instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(c),s]).then((function(n){return WebAssembly.instantiate(n[0],n[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(c,s);else{r=c.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,s)}))}e.push(o[n]=r.then((function(e){return i.w[n]=(e.instance||e).exports})))}})),Promise.all(e)},i.m=n,i.c=t,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="",i.oe=function(n){throw console.error(n),n},i.w={};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i(i.s=2)}([function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var p=s(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(d)):i.push({identifier:l,updater:m(d,e),references:1}),r.push(l)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=p(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var b=null,g=0;function m(n,e){var t,r,o;if(e.singleton){var a=g++;t=b||(b=u(e)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=u(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var a=c(n,e),u=0;u<t.length;u++){var l=s(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";t.r(e);t(3),t(5);const r=t.e(1).then(t.bind(null,7)),o=document.body.querySelector("#output"),a=document.body.querySelector("#input"),i=document.body.querySelector("#output-raw");let s="text";r.then(n=>{a.addEventListener("focus",()=>{"Start typing to begin"===a.value&&(a.value="")}),a.addEventListener("blur",()=>{""===a.value&&(a.value="Start typing to begin")}),a.addEventListener("keyup",()=>{if("Start typing to begin"!==a.value){let e=n.parse(a.value);switch(s){case"html":i.value=e;break;default:o.innerHTML=e}}})}),document.body.querySelectorAll('input[type="radio"]').forEach(n=>{n.addEventListener("change",n=>{switch(s=n.currentTarget.value,s){case"html":i.value=o.innerHTML,i.style.display="inline-block",o.style.display="none";break;default:o.innerHTML=i.value,i.style.display="none",o.style.display="inline-block"}})})},function(n,e,t){var r=t(0),o=t(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});n.exports=i},function(n,e,t){(e=t(1)(!1)).push([n.i,':root\n{\n    --white: #fff;\n    --black: #000;\n    --dashboard-background: #F5F7F9;\n    --sidenav-background: #051E34;\n\n    --neutral-100: #f5f5f5;\n    --neutral-200: #eeeeee;\n    --neutral-300: #e0e0e0;\n    --neutral-400: #bdbdbd;\n    --neutral-500: #9e9e9e;\n    --neutral-600: #757575;\n    --neutral-700: #616161;\n    --neutral-800: #424242;\n    --neutral-900: #212121;\n    --gray-100: #F7FAFC;\n    --gray-200: #EDF2F7;\n    --gray-300: #E2E8F0;\n    --gray-400: #CBD5E0;\n    --gray-500: #A0AEC0;\n    --gray-600: #718096;\n    --gray-700: #4A5568;\n    --gray-800: #2D3748;\n    --gray-900: #1A202C;\n    --grey-100: #F7FAFC;\n    --grey-200: #EDF2F7;\n    --grey-300: #E2E8F0;\n    --grey-400: #CBD5E0;\n    --grey-500: #A0AEC0;\n    --grey-600: #718096;\n    --grey-700: #4A5568;\n    --grey-800: #2D3748;\n    --grey-900: #1A202C;\n\n    --success-100: #F0FFF4;\n    --success-200: #C6F6D5;\n    --success-300: #9AE6B4;\n    --success-400: #68D391;\n    --success-500: #48BB78;\n    --success-600: #38A169;\n    --success-700: #2F855A;\n    --success-800: #276749;\n    --success-900: #22543D;\n\n    --warning-100: #FFFFF0;\n    --warning-200: #FEFCBF;\n    --warning-300: #FAF089;\n    --warning-400: #F6E05E;\n    --warning-500: #ECC94B;\n    --warning-600: #D69E2E;\n    --warning-700: #B7791F;\n    --warning-800: #975A16;\n    --warning-900: #744210;\n\n    --danger-100: #FFF5F5;\n    --danger-200: #FED7D7;\n    --danger-300: #FEB2B2;\n    --danger-400: #FC8181;\n    --danger-500: #F56565;\n    --danger-600: #E53E3E;\n    --danger-700: #C53030;\n    --danger-800: #9B2C2C;\n    --danger-900: #742A2A;\n\n    --primary-100: #EBF8FF;\n    --primary-200: #BEE3F8;\n    --primary-300: #90CDF4;\n    --primary-400: #63B3ED;\n    --primary-500: #4299E1;\n    --primary-600: #3182CE;\n    --primary-700: #2B6CB0;\n    --primary-800: #2C5282;\n    --primary-900: #2A4365;\n\n    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n    --shadow-inner: inset 0 0 4px 0 rgba(0, 0, 0, 0.15);\n    \n    --font-hairline: 100;\n    --font-thin: 200;\n    --font-light: 300;\n    --font-normal: 400;\n    --font-medium: 500;\n    --font-semibold: 600;\n    --font-bold: 700;\n    --font-extrabold: 800;\n    --font-black: 900;\n\n    --text-xs: 0.75rem;\n    --text-sm: 0.875rem;\n    --text-base: 1rem;\n    --text-lg: 1.125rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.5rem;\n    --text-3xl: 1.875rem;\n    --text-4xl: 2.25rem;\n    --text-5xl: 3rem;\n    --text-6xl: 4rem;\n\n    --font-sans: \'Inter\', -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --font-serif: Georgia, Cambria, "Times New Roman", Times, serif;\n    --font-mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n    --font-system: -apple-system, system-ui, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Ubuntu, Arial, sans-serif;\n\n    --ease: cubic-bezier(0.4, 0.0, 0.2, 1);\n    --ease-in: cubic-bezier(0.0, 0.0, 0.2, 1);\n    --ease-out: cubic-bezier(0.4, 0.0, 1, 1);\n    --ease-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}',""]),n.exports=e},function(n,e,t){var r=t(0),o=t(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});n.exports=i},function(n,e,t){(e=t(1)(!1)).push([n.i,":root{\n    font-size: 100%;\n}\n\n*{\n    box-sizing: border-box;\n}\n\nbody{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    flex-flow: row nowrap;\n    font-size: 1rem;\n    color: var(--grey-700);\n    opacity: 1 !important;\n    transition: opacity 150ms var(--ease);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#input{\n    box-sizing: border-box;\n    padding: 3rem;\n    display: inline-block;\n    vertical-align: top;\n    width: 50%;\n    height: 100%;\n    overflow-y: auto;\n    background-color: var(--grey-100);\n    border: none;\n    outline: none;\n    box-shadow: none;\n    font-size: 1.25rem;\n    font-family: monospace;\n}\n\n#output{\n    box-sizing: border-box;\n    padding: 3rem;\n    display: inline-block;\n    vertical-align: top;\n    width: 50%;\n    height: 100%;\n    overflow-y: auto;\n    color: var(--grey-900);\n}\n\n#output-raw{\n    font-family: monospace;\n    box-sizing: border-box;\n    padding: 3rem;\n    vertical-align: top;\n    width: 50%;\n    height: 100%;\n    overflow-y: auto;\n    display: none;\n    border: none;\n    outline: none;\n    box-shadow: none;\n}\n\n#output-switcher{\n    position: absolute;\n    top: 1rem;\n    border-radius: 0.25rem;\n    padding: 0.5rem 0;\n    right: 1rem;\n    background-color: var(--white);\n    box-shadow: var(--shadow-md);\n    transition: all 150ms var(--ease);\n}\n\n#output-switcher input{\n    width: 0;\n    height: 0;\n    position: absolute;\n}\n\n#output-switcher label{\n    padding: 0 1rem;\n    text-transform: uppercase;\n    color: var(--grey-700);\n    transition: all 150ms var(--ease);\n    height: 36px;\n    line-height: 36px;\n    user-select: none;\n    cursor: pointer;\n    display: block;\n    font-size: 0.875rem;\n    font-weight: var(--font-medium);\n}\n\n#output-switcher label:hover{\n    background-color: var(--grey-100);\n}\n\n#output-switcher label:active{\n    background-color: var(--grey-200);\n}\n\n#output-switcher input:checked + label{\n    color: var(--primary-700);\n    background-color: var(--primary-100);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np{\n    margin: 0 0 1rem;\n    display: block;\n    box-sizing: border-box;\n}",""]),n.exports=e}]);