parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FOZT":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){r(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,r){return t(t({},e),r)}function o(e,t){var r=document.createElement(e);t&&Object.assign(r,t);for(var n=arguments.length,o=new Array(n>2?n-2:0),c=2;c<n;c++)o[c-2]=arguments[c];for(var i=0,p=o;i<p.length;i++){var u=p[i];"string"!=typeof u?r.appendChild(u):r.appendChild(document.createTextNode(u))}return r}function c(e){return e.toString(16).padStart(2,"0")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateState=n,exports.elt=o,exports.hex=c;
},{}],"Yh5O":[function(require,module,exports) {
"use strict";function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=e(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawPicture=u,exports.Picture=void 0;var a=function(){function e(t,r,i){n(this,e),this.width=t,this.height=r,this.pixels=i}return o(e,[{key:"pixel",value:function(t,e){return this.pixels[t+e*this.width]}},{key:"draw",value:function(r){var n,i=this.pixels.slice(),o=t(r);try{for(o.s();!(n=o.n()).done;){var a=n.value,u=a.x,l=a.y,f=a.color;i[u+l*this.width]=f}}catch(c){o.e(c)}finally{o.f()}return new e(this.width,this.height,i)}}],[{key:"empty",value:function(t,r,n){return new e(t,r,new Array(t*r).fill(n))}}]),e}();function u(t,e,r){e.width=t.width*r,e.height=t.height*r;for(var n=e.getContext("2d"),i=0;i<t.height;i++)for(var o=0;o<t.width;o++)n.fillStyle=t.pixel(o,i),n.fillRect(o*r,i*r,r,r)}exports.Picture=a;
},{}],"PgY4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PictureCanvas=void 0;var t=require("../utils"),e=require("./picture");function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var i=10,u=function(){function o(e,r){var i=this;n(this,o),this.dom=(0,t.elt)("canvas",{onmousedown:function(t){return i.mouse(t,r)},ontouchstart:function(t){return i.touch(t,r)}}),this.syncState(e)}return r(o,[{key:"syncState",value:function(t){this.picture!=t&&(this.picture=t,(0,e.drawPicture)(this.picture,this.dom,i))}}]),o}();function s(t,e){var n=e.getBoundingClientRect();return{x:Math.floor((t.clientX-n.left)/i),y:Math.floor((t.clientY-n.top)/i)}}exports.PictureCanvas=u,u.prototype.mouse=function(t,e){var n=this;if(0==t.button){var o=s(t,this.dom),r=e(o);if(r){this.dom.addEventListener("mousemove",function t(e){if(0==e.buttons)n.dom.removeEventListener("mousemove",t);else{var i=s(e,n.dom);if(i.x==o.x&&i.y==o.y)return;r(i)}})}}},u.prototype.touch=function(t,e){var n=this,o=s(t.touches[0],this.dom),r=e(o);if(t.preventDefault(),r){var i=function(t){var e=s(t.touches[0],n.dom);e.x==o.x&&e.y==o.y||(o=e,r(e))};this.dom.addEventListener("touchmove",i),this.dom.addEventListener("touchend",function(){n.dom.removeEventListener("touchmove",i),n.dom.removeEventListener("touchend",i)})}};
},{"../utils":"FOZT","./picture":"Yh5O"}],"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PixelEditor=void 0;var t=require("./components/picture-canvas"),r=require("./utils");function n(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=a(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function e(t){return u(t)||i(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,r){if(t){if("string"==typeof t)return c(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,r):void 0}}function i(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function u(t){if(Array.isArray(t))return c(t)}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function l(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function s(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function f(t,r,n){return r&&s(t.prototype,r),n&&s(t,n),t}var y=function(){function o(n,a){var i=this;l(this,o);var u=a.tools,c=a.controls,s=a.dispatch;this.state=n,this.canvas=new t.PictureCanvas(n.picture,function(t){var r=(0,u[i.state.tool])(t,i.state,s);if(r)return function(t){return r(t,i.state)}}),this.controls=c.map(function(t){return new t(n,a)}),this.dom=r.elt.apply(void 0,["div",{},this.canvas.dom,(0,r.elt)("br")].concat(e(this.controls.reduce(function(t,r){return t.concat(" ",r.dom)},[]))))}return f(o,[{key:"syncState",value:function(t){this.state=t,this.canvas.syncState(t.picture);var r,e=n(this.controls);try{for(e.s();!(r=e.n()).done;){r.value.syncState(t)}}catch(o){e.e(o)}finally{e.f()}}}]),o}();exports.PixelEditor=y;
},{"./components/picture-canvas":"PgY4","./utils":"FOZT"}],"yK8H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColorSelect=void 0;var e=require("../utils");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}var r=function(){function n(o,r){var i=this,l=r.dispatch;t(this,n),this.input=(0,e.elt)("input",{type:"color",value:o.color,onchange:function(){return l({color:i.input.value})}}),this.dom=(0,e.elt)("label",null,"🎨 Color: ",this.input)}return o(n,[{key:"syncState",value:function(e){this.input.value=e.color}}]),n}();exports.ColorSelect=r;
},{"../utils":"FOZT"}],"EC4A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ToolSelect=void 0;var t=require("../utils");function e(t){return l(t)||o(t)||n(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}var s=function(){function r(n,o){var l=this,a=o.tools,c=o.dispatch;i(this,r),this.select=t.elt.apply(void 0,["select",{onchange:function(){return c({tool:l.select.value})}}].concat(e(Object.keys(a).map(function(e){return(0,t.elt)("option",{selected:e==n.tool},e)})))),this.dom=(0,t.elt)("label",null,"Tool: ",this.select)}return u(r,[{key:"syncState",value:function(t){this.select.value=t.tool}}]),r}();exports.ToolSelect=s;
},{"../utils":"FOZT"}],"nQgO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"ColorSelect",{enumerable:!0,get:function(){return e.ColorSelect}}),Object.defineProperty(exports,"ToolSelect",{enumerable:!0,get:function(){return r.ToolSelect}});var e=require("./color-select"),r=require("./tool-select");
},{"./color-select":"yK8H","./tool-select":"EC4A"}],"SY57":[function(require,module,exports) {
"use strict";function r(r,e){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=t(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,a=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return c=r.done,r},e:function(r){a=!0,u=r},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw u}}}}function t(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function n(r,t,e){function n(r,t){var n={x:r.x,y:r.y,color:t.color};e({picture:t.picture.draw([n])})}return n(r,t),n}function o(r,t,e){function n(n){for(var o=Math.min(r.x,n.x),i=Math.min(r.y,n.y),u=Math.max(r.x,n.x),c=Math.max(r.y,n.y),a=[],l=i;l<=c;l++)for(var f=o;f<=u;f++)a.push({x:f,y:l,color:t.color});e({picture:t.picture.draw(a)})}return n(r),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.draw=n,exports.rectangle=o,exports.fill=u,exports.pick=c;var i=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}];function u(t,e,n){for(var o=t.x,u=t.y,c=e.picture.pixel(o,u),a=[{x:o,y:u,color:e.color}],l=0;l<a.length;l++){var f,y=r(i);try{var p=function(){var r=f.value,t=r.dx,n=r.dy,o=a[l].x+t,i=a[l].y+n;o>=0&&o<e.picture.width&&i>=0&&i<e.picture.height&&e.picture.pixel(o,i)==c&&!a.some(function(r){return r.x==o&&r.y==i})&&a.push({x:o,y:i,color:e.color})};for(y.s();!(f=y.n()).done;)p()}catch(x){y.e(x)}finally{y.f()}}n({picture:e.picture.draw(a)})}function c(r,t,e){e({color:t.picture.pixel(r.x,r.y)})}
},{}],"LbAf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadButton=void 0;var t=require("../utils"),e=require("./picture");function n(t,e){return u(t)||i(t,e)||o(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}function u(t){if(Array.isArray(t))return t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var s=function(){function e(n,r){var o=r.dispatch;c(this,e),this.dom=(0,t.elt)("button",{onclick:function(){return d(o)}},"📁 Load")}return f(e,[{key:"syncState",value:function(){}}]),e}();function d(e){var n=(0,t.elt)("input",{type:"file",onchange:function(){return h(n.files[0],e)}});document.body.appendChild(n),n.click(),n.remove()}function h(e,n){if(null!=e){var r=new FileReader;r.addEventListener("load",function(){var e=(0,t.elt)("img",{onload:function(){return n({picture:v(e)})},src:r.result})}),r.readAsDataURL(e)}}function v(r){var o=Math.min(100,r.width),a=Math.min(100,r.height),i=(0,t.elt)("canvas",{width:o,height:a}).getContext("2d");i.drawImage(r,0,0);for(var u=[],c=i.getImageData(0,0,o,a).data,l=0;l<c.length;l+=4){var f=n(c.slice(l,l+3),3),s=f[0],d=f[1],h=f[2];u.push("#".concat((0,t.hex)(s)).concat((0,t.hex)(d)).concat((0,t.hex)(h)))}return new e.Picture(o,a,u)}exports.LoadButton=s;
},{"../utils":"FOZT","./picture":"Yh5O"}],"TesK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SaveButton=void 0;var e=require("../utils"),t=require("./picture");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var a=function(){function n(t){var i=this;r(this,n),this.picture=t.picture,this.dom=(0,e.elt)("button",{onclick:function(){return i.save()}},"💾 Save")}return i(n,[{key:"save",value:function(){var r=(0,e.elt)("canvas");(0,t.drawPicture)(this.picture,r,10);var n=(0,e.elt)("a",{href:r.toDataURL(),download:"pixel-art.png"});document.body.appendChild(n),n.click(),n.remove()}},{key:"syncState",value:function(e){this.picture=e.picture}}]),n}();exports.SaveButton=a;
},{"../utils":"FOZT","./picture":"Yh5O"}],"eccM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UndoButton=void 0;var e=require("../utils");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}var r=function(){function t(o,r){var i=r.dispatch;n(this,t),this.dom=(0,e.elt)("button",{onclick:function(){return i({undo:!0})},disabled:0==o.done.length},"⤴ Undo")}return o(t,[{key:"syncState",value:function(e){this.dom.disabled=0==e.done.length}}]),t}();exports.UndoButton=r;
},{"../utils":"FOZT"}],"T3Bf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RedoButton=void 0;var e=require("../utils");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}var r=function(){function n(o,r){var i=r.dispatch;t(this,n),this.dom=(0,e.elt)("button",{onclick:function(){return i({redo:!0})},disabled:0==o.done.length},"⤵ Redo")}return o(n,[{key:"syncState",value:function(e){this.dom.disabled=0==e.done.length}}]),n}();exports.RedoButton=r;
},{"../utils":"FOZT"}],"iA92":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadButton",{enumerable:!0,get:function(){return e.LoadButton}}),Object.defineProperty(exports,"PictureCanvas",{enumerable:!0,get:function(){return t.PictureCanvas}}),Object.defineProperty(exports,"Picture",{enumerable:!0,get:function(){return r.Picture}}),Object.defineProperty(exports,"SaveButton",{enumerable:!0,get:function(){return n.SaveButton}}),Object.defineProperty(exports,"UndoButton",{enumerable:!0,get:function(){return u.UndoButton}}),Object.defineProperty(exports,"RedoButton",{enumerable:!0,get:function(){return o.RedoButton}});var e=require("./load-button"),t=require("./picture-canvas"),r=require("./picture"),n=require("./save-button"),u=require("./undo-button"),o=require("./redo-button");
},{"./load-button":"LbAf","./picture-canvas":"PgY4","./picture":"Yh5O","./save-button":"TesK","./undo-button":"eccM","./redo-button":"T3Bf"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./app"),t=require("./controls"),r=require("./tools"),n=require("./components");function o(e){return l(e)||u(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function u(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s={tool:"draw",color:"#000000",picture:n.Picture.empty(60,30,"#f0f0f0"),done:[],doneAt:0},y={draw:r.draw,fill:r.fill,rectangle:r.rectangle,pick:r.pick},b=[t.ToolSelect,t.ColorSelect,n.SaveButton,n.LoadButton,n.UndoButton,n.RedoButton];function m(e,t){if(1==t.undo)return 0==e.done.length?e:d(d({},e),{},{picture:e.done[0],done:e.done.slice(1),doneAt:0});if(1==t.redo){if(0==e.done.length)return e;console.log(e)}return t.picture&&e.doneAt<Date.now()-1e3?d(d(d({},e),t),{},{done:[e.picture].concat(o(e.done)),doneAt:Date.now()}):d(d({},e),t)}function O(t){var r=t.state,n=void 0===r?s:r,o=t.tools,i=void 0===o?y:o,c=t.controls,u=void 0===c?b:c,l=new e.PixelEditor(n,{tools:i,controls:u,dispatch:function(e){n=m(n,e),l.syncState(n)}});return l.dom}document.getElementById("root").appendChild(O({}));
},{"./app":"A2T1","./controls":"nQgO","./tools":"SY57","./components":"iA92"}]},{},["Focm"], null)
//# sourceMappingURL=src.c850dc5c.js.map