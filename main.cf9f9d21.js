parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=t(r))){var e=0,n=function(){};return{s:n,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,l=!0,i=!1;return{s:function(){o=r[Symbol.iterator]()},n:function(){var r=o.next();return l=r.done,r},e:function(r){i=!0,a=r},f:function(){try{l||null==o.return||o.return()}finally{if(i)throw a}}}}function t(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var n=document.querySelectorAll("li"),o=Array.from(n);function a(r){return Array.from(r.childNodes).filter(function(r){return 3===r.nodeType})}for(var l=0,i=o;l<i.length;l++){var u=i[l],c=a(u);c.forEach(function(r){var t=document.createElement("span");r.after(t),t.appendChild(r)})}var f,y=document.querySelectorAll("span"),d=r(y);try{for(d.s();!(f=d.n()).done;){var s=f.value;s.addEventListener("click",function(r){var t=r.target.parentNode.querySelector("ul");t&&("none"!==t.style.display?t.style.display="none":t.style.display="block")})}}catch(v){d.e(v)}finally{d.f()}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.cf9f9d21.js.map