parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=new Promise(function(n,e){document.addEventListener("click",function(){n("first")}),setTimeout(function(){e(new Error("first"))},3e3)}),e=new Promise(function(n){document.addEventListener("click",function(){n("second")}),document.addEventListener("contextmenu",function(e){e.preventDefault(),n("second")})}),t=new Promise(function(n){var e=!1,t=!1;function c(){t&&e&&n("third")}document.addEventListener("click",function(){t=!0,c()}),document.addEventListener("contextmenu",function(){e=!0,c()})});function c(n){i(n,"success")}function o(n){i(n.message,"error")}function i(n,e){var t=s(n,e);document.body.insertAdjacentHTML("beforeend",t)}function s(n,e){var t="success"===e?"resolved":"rejected";return'\n    <div\n      class="message message--'.concat(n," message--").concat(e,'"\n      data-qa="notification"\n    >\n      ').concat(r(n)," promise was ").concat(t,"\n    </div>\n  ")}function r(n){return n.slice(0,1).toUpperCase()+n.slice(1)}n.then(c).catch(o),e.then(c),t.then(c);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.78656c44.js.map