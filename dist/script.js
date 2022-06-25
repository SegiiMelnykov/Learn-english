/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  padding: 15px 15px;\\n  max-width: 1200px;\\n  margin: auto;\\n}\\n\\nh1 {\\n  text-align: center;\\n}\\n\\n.word {\\n  width: 48%;\\n  display: inline-block;\\n}\\n.word p {\\n  font-size: 30px;\\n}\\n\\n.translation {\\n  width: 48%;\\n  display: inline-block;\\n}\\n.translation p {\\n  font-size: 30px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://word-learning/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://word-learning/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://word-learning/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n\nJSZip v3.10.0 - A JavaScript class for generating and reading zip files\n<http://stuartk.com/jszip>\n\n(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>\nDual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.\n\nJSZip uses the library pako released under the MIT license :\nhttps://github.com/nodeca/pako/blob/main/LICENSE\n*/\n\n!function(e){if(true)module.exports=e();else {}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t=undefined;if(!e&&t)return require(r,!0);if(l)return l(r,!0);var n=new Error(\"Cannot find module '\"+r+\"'\");throw n.code=\"MODULE_NOT_FOUND\",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){\"use strict\";var d=e(\"./utils\"),c=e(\"./support\"),p=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c=\"string\"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join(\"\")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u=\"data:\";if(e.substr(0,u.length)===u)throw new Error(\"Invalid base64 input, it looks like a data url.\");var l,f=3*(e=e.replace(/[^A-Za-z0-9\\+\\/\\=]/g,\"\")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error(\"Invalid base64 input, bad content length.\");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{\"./support\":30,\"./utils\":32}],2:[function(e,t,r){\"use strict\";var n=e(\"./external\"),i=e(\"./stream/DataWorker\"),s=e(\"./stream/Crc32Probe\"),a=e(\"./stream/DataLengthProbe\");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a(\"data_length\")),t=this;return e.on(\"end\",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error(\"Bug : uncompressed data size mismatch\")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo(\"compressedSize\",this.compressedSize).withStreamInfo(\"uncompressedSize\",this.uncompressedSize).withStreamInfo(\"crc32\",this.crc32).withStreamInfo(\"compression\",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a(\"uncompressedSize\")).pipe(t.compressWorker(r)).pipe(new a(\"compressedSize\")).withStreamInfo(\"compression\",t)},t.exports=o},{\"./external\":6,\"./stream/Crc32Probe\":25,\"./stream/DataLengthProbe\":26,\"./stream/DataWorker\":27}],3:[function(e,t,r){\"use strict\";var n=e(\"./stream/GenericWorker\");r.STORE={magic:\"\\0\\0\",compressWorker:function(e){return new n(\"STORE compression\")},uncompressWorker:function(){return new n(\"STORE decompression\")}},r.DEFLATE=e(\"./flate\")},{\"./flate\":7,\"./stream/GenericWorker\":28}],4:[function(e,t,r){\"use strict\";var n=e(\"./utils\");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?\"string\"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{\"./utils\":32}],5:[function(e,t,r){\"use strict\";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){\"use strict\";var n=null;n=\"undefined\"!=typeof Promise?Promise:e(\"lie\"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){\"use strict\";var n=\"undefined\"!=typeof Uint8Array&&\"undefined\"!=typeof Uint16Array&&\"undefined\"!=typeof Uint32Array,i=e(\"pako\"),s=e(\"./utils\"),a=e(\"./stream/GenericWorker\"),o=n?\"uint8array\":\"array\";function h(e,t){a.call(this,\"FlateWorker/\"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic=\"\\b\\0\",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h(\"Deflate\",e)},r.uncompressWorker=function(){return new h(\"Inflate\",{})}},{\"./stream/GenericWorker\":28,\"./utils\":32,pako:38}],8:[function(e,t,r){\"use strict\";function A(e,t){var r,n=\"\";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo(\"string\",s(h.name)),c=I.transformTo(\"string\",O.utf8encode(h.name)),d=h.comment,p=I.transformTo(\"string\",s(d)),m=I.transformTo(\"string\",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b=\"\",v=\"\",y=\"\",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),\"UNIX\"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+=\"up\"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+=\"uc\"+A(y.length,2)+y);var E=\"\";return E+=\"\\n\\0\",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+\"\\0\\0\\0\\0\"+A(z,4)+A(n,4)+f+b+p}}var I=e(\"../utils\"),i=e(\"../stream/GenericWorker\"),O=e(\"../utf8\"),B=e(\"../crc32\"),R=e(\"../signature\");function s(e,t,r,n){i.call(this,\"ZipFileWorker\"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo(\"string\",i(n));return R.CENTRAL_DIRECTORY_END+\"\\0\\0\\0\\0\"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(\"data\",function(e){t.processChunk(e)}),e.on(\"end\",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(\"error\",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{\"../crc32\":4,\"../signature\":23,\"../stream/GenericWorker\":28,\"../utf8\":31,\"../utils\":32}],9:[function(e,t,r){\"use strict\";var u=e(\"../compressions\"),n=e(\"./ZipFileWorker\");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+\" is not a valid compression method !\");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo(\"file\",{name:e,dir:i,date:s,comment:t.comment||\"\",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{\"../compressions\":3,\"./ZipFileWorker\":8}],10:[function(e,t,r){\"use strict\";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error(\"The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.\");this.files=Object.create(null),this.comment=null,this.root=\"\",this.clone=function(){var e=new n;for(var t in this)\"function\"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e(\"./object\")).loadAsync=e(\"./load\"),n.support=e(\"./support\"),n.defaults=e(\"./defaults\"),n.version=\"3.10.0\",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e(\"./external\"),t.exports=n},{\"./defaults\":5,\"./external\":6,\"./load\":11,\"./object\":15,\"./support\":30}],11:[function(e,t,r){\"use strict\";var u=e(\"./utils\"),i=e(\"./external\"),n=e(\"./utf8\"),s=e(\"./zipEntries\"),a=e(\"./stream/Crc32Probe\"),l=e(\"./nodejsUtils\");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on(\"error\",function(e){t(e)}).on(\"end\",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error(\"Corrupted zip : CRC32 mismatch\")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error(\"JSZip can't accept a stream when loading a zip file.\")):u.prepareContent(\"the loaded zip file\",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{\"./external\":6,\"./nodejsUtils\":14,\"./stream/Crc32Probe\":25,\"./utf8\":31,\"./utils\":32,\"./zipEntries\":33}],12:[function(e,t,r){\"use strict\";var n=e(\"../utils\"),i=e(\"../stream/GenericWorker\");function s(e,t){i.call(this,\"Nodejs stream input adapter for \"+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(\"data\",function(e){t.push({data:e,meta:{percent:0}})}).on(\"error\",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(\"end\",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{\"../stream/GenericWorker\":28,\"../utils\":32}],13:[function(e,t,r){\"use strict\";var i=e(\"readable-stream\").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on(\"data\",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on(\"error\",function(e){n.emit(\"error\",e)}).on(\"end\",function(){n.push(null)})}e(\"../utils\").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{\"../utils\":32,\"readable-stream\":16}],14:[function(e,t,r){\"use strict\";t.exports={isNode:\"undefined\"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(\"number\"==typeof e)throw new Error('The \"data\" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&\"function\"==typeof e.on&&\"function\"==typeof e.pause&&\"function\"==typeof e.resume}}},{}],15:[function(e,t,r){\"use strict\";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),\"string\"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a=\"string\"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t=\"\",s.compression=\"STORE\",i=\"string\");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e(\"./utf8\"),u=e(\"./utils\"),l=e(\"./stream/GenericWorker\"),a=e(\"./stream/StreamHelper\"),f=e(\"./defaults\"),c=e(\"./compressedObject\"),d=e(\"./zipObject\"),o=e(\"./generate\"),p=e(\"./nodejsUtils\"),m=e(\"./nodejs/NodejsStreamInputAdapter\"),_=function(e){\"/\"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(\"/\");return 0<t?e.substring(0,t):\"\"},g=function(e){return\"/\"!==e.slice(-1)&&(e+=\"/\"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return\"[object RegExp]\"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error(\"This method has been removed in JSZip 3.0, please check the upgrade guide.\")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||(\"/\"!==r.slice(-1)&&(r+=\"/\"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(e){throw new Error(\"This method has been removed in JSZip 3.0, please check the upgrade guide.\")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:\"STORE\",compressionOptions:null,type:\"\",platform:\"DOS\",comment:null,mimeType:\"application/zip\",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),\"binarystring\"===r.type&&(r.type=\"string\"),!r.type)throw new Error(\"No output type specified.\");u.checkSupport(r.type),\"darwin\"!==r.platform&&\"freebsd\"!==r.platform&&\"linux\"!==r.platform&&\"sunos\"!==r.platform||(r.platform=\"UNIX\"),\"win32\"===r.platform&&(r.platform=\"DOS\");var n=r.comment||this.comment||\"\";t=o.generateWorker(this,r,n)}catch(e){(t=new l(\"error\")).error(e)}return new a(t,r.type||\"string\",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type=\"nodebuffer\"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{\"./compressedObject\":2,\"./defaults\":5,\"./generate\":9,\"./nodejs/NodejsStreamInputAdapter\":12,\"./nodejsUtils\":14,\"./stream/GenericWorker\":28,\"./stream/StreamHelper\":29,\"./utf8\":31,\"./utils\":32,\"./zipObject\":35}],16:[function(e,t,r){t.exports=e(\"stream\")},{stream:void 0}],17:[function(e,t,r){\"use strict\";var n=e(\"./DataReader\");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(\"../utils\").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{\"../utils\":32,\"./DataReader\":18}],18:[function(e,t,r){\"use strict\";var n=e(\"../utils\");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error(\"End of data reached (data length = \"+this.length+\", asked index = \"+e+\"). Corrupted zip ?\")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(e){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo(\"string\",this.readData(e))},readData:function(e){},lastIndexOfSignature:function(e){},readAndCheckSignature:function(e){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{\"../utils\":32}],19:[function(e,t,r){\"use strict\";var n=e(\"./Uint8ArrayReader\");function i(e){n.call(this,e)}e(\"../utils\").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{\"../utils\":32,\"./Uint8ArrayReader\":21}],20:[function(e,t,r){\"use strict\";var n=e(\"./DataReader\");function i(e){n.call(this,e)}e(\"../utils\").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{\"../utils\":32,\"./DataReader\":18}],21:[function(e,t,r){\"use strict\";var n=e(\"./ArrayReader\");function i(e){n.call(this,e)}e(\"../utils\").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{\"../utils\":32,\"./ArrayReader\":17}],22:[function(e,t,r){\"use strict\";var n=e(\"../utils\"),i=e(\"../support\"),s=e(\"./ArrayReader\"),a=e(\"./StringReader\"),o=e(\"./NodeBufferReader\"),h=e(\"./Uint8ArrayReader\");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),\"string\"!==t||i.uint8array?\"nodebuffer\"===t?new o(e):i.uint8array?new h(n.transformTo(\"uint8array\",e)):new s(n.transformTo(\"array\",e)):new a(e)}},{\"../support\":30,\"../utils\":32,\"./ArrayReader\":17,\"./NodeBufferReader\":19,\"./StringReader\":20,\"./Uint8ArrayReader\":21}],23:[function(e,t,r){\"use strict\";r.LOCAL_FILE_HEADER=\"PK\u0003\u0004\",r.CENTRAL_FILE_HEADER=\"PK\u0001\u0002\",r.CENTRAL_DIRECTORY_END=\"PK\u0005\u0006\",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR=\"PK\u0006\u0007\",r.ZIP64_CENTRAL_DIRECTORY_END=\"PK\u0006\u0006\",r.DATA_DESCRIPTOR=\"PK\u0007\\b\"},{}],24:[function(e,t,r){\"use strict\";var n=e(\"./GenericWorker\"),i=e(\"../utils\");function s(e){n.call(this,\"ConvertWorker to \"+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{\"../utils\":32,\"./GenericWorker\":28}],25:[function(e,t,r){\"use strict\";var n=e(\"./GenericWorker\"),i=e(\"../crc32\");function s(){n.call(this,\"Crc32Probe\"),this.withStreamInfo(\"crc32\",0)}e(\"../utils\").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{\"../crc32\":4,\"../utils\":32,\"./GenericWorker\":28}],26:[function(e,t,r){\"use strict\";var n=e(\"../utils\"),i=e(\"./GenericWorker\");function s(e){i.call(this,\"DataLengthProbe for \"+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{\"../utils\":32,\"./GenericWorker\":28}],27:[function(e,t,r){\"use strict\";var n=e(\"../utils\"),i=e(\"./GenericWorker\");function s(e){i.call(this,\"DataWorker\");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=\"\",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case\"string\":e=this.data.substring(this.index,t);break;case\"uint8array\":e=this.data.subarray(this.index,t);break;case\"array\":case\"nodebuffer\":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{\"../utils\":32,\"./GenericWorker\":28}],28:[function(e,t,r){\"use strict\";function n(e){this.name=e||\"default\",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit(\"data\",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(\"end\"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(\"error\",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(\"error\",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error(\"The stream '\"+this+\"' has already been used.\");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(\"data\",function(e){t.processChunk(e)}),e.on(\"end\",function(){t.end()}),e.on(\"error\",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error(\"The stream '\"+this+\"' has already been used.\");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=\"Worker \"+this.name;return this.previous?this.previous+\" -> \"+e:e}},t.exports=n},{}],29:[function(e,t,r){\"use strict\";var h=e(\"../utils\"),i=e(\"./ConvertWorker\"),s=e(\"./GenericWorker\"),u=e(\"../base64\"),n=e(\"../support\"),a=e(\"../external\"),o=null;if(n.nodestream)try{o=e(\"../nodejs/NodejsStreamOutputAdapter\")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on(\"data\",function(e,t){n.push(e),o&&o(t)}).on(\"error\",function(e){n=[],r(e)}).on(\"end\",function(){try{var e=function(e,t,r){switch(e){case\"blob\":return h.newBlob(h.transformTo(\"arraybuffer\",t),r);case\"base64\":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case\"string\":return t.join(\"\");case\"array\":return Array.prototype.concat.apply([],t);case\"uint8array\":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case\"nodebuffer\":return Buffer.concat(t);default:throw new Error(\"concat : unsupported type '\"+e+\"'\")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case\"blob\":case\"arraybuffer\":n=\"uint8array\";break;case\"base64\":n=\"string\"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s(\"error\"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return\"data\"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport(\"nodestream\"),\"nodebuffer\"!==this._outputType)throw new Error(this._outputType+\" is not supported by this method\");return new o(this,{objectMode:\"nodebuffer\"!==this._outputType},e)}},t.exports=f},{\"../base64\":1,\"../external\":6,\"../nodejs/NodejsStreamOutputAdapter\":13,\"../support\":30,\"../utils\":32,\"./ConvertWorker\":24,\"./GenericWorker\":28}],30:[function(e,t,r){\"use strict\";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=\"undefined\"!=typeof ArrayBuffer&&\"undefined\"!=typeof Uint8Array,r.nodebuffer=\"undefined\"!=typeof Buffer,r.uint8array=\"undefined\"!=typeof Uint8Array,\"undefined\"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:\"application/zip\"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob(\"application/zip\").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e(\"readable-stream\").Readable}catch(e){r.nodestream=!1}},{\"readable-stream\":16}],31:[function(e,t,s){\"use strict\";for(var o=e(\"./utils\"),h=e(\"./support\"),r=e(\"./nodejsUtils\"),n=e(\"./stream/GenericWorker\"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,\"utf-8 decode\"),this.leftOver=null}function l(){n.call(this,\"utf-8 encode\")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,\"utf-8\"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo(\"nodebuffer\",e).toString(\"utf-8\"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?\"uint8array\":\"array\",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?\"uint8array\":\"array\",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{\"./nodejsUtils\":14,\"./stream/GenericWorker\":28,\"./support\":30,\"./utils\":32}],32:[function(e,t,a){\"use strict\";var o=e(\"./support\"),h=e(\"./base64\"),r=e(\"./nodejsUtils\"),u=e(\"./external\");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e(\"setimmediate\"),a.newBlob=function(t,r){a.checkSupport(\"blob\");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error(\"Bug : can't construct the Blob.\")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)\"array\"===t||\"nodebuffer\"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join(\"\")},stringifyByChar:function(e){for(var t=\"\",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if(\"uint8array\"===r?n=i.applyCanBeUsed.uint8array:\"nodebuffer\"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||\"\",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split(\"/\"),r=[],n=0;n<t.length;n++){var i=t[n];\".\"===i||\"\"===i&&0!==n&&n!==t.length-1||(\"..\"===i?r.pop():r.push(i))}return r.join(\"/\")},a.getTypeOf=function(e){return\"string\"==typeof e?\"string\":\"[object Array]\"===Object.prototype.toString.call(e)?\"array\":o.nodebuffer&&r.isBuffer(e)?\"nodebuffer\":o.uint8array&&e instanceof Uint8Array?\"uint8array\":o.arraybuffer&&e instanceof ArrayBuffer?\"arraybuffer\":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+\" is not supported by this platform\")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n=\"\";for(r=0;r<(e||\"\").length;r++)n+=\"\\\\x\"+((t=e.charCodeAt(r))<16?\"0\":\"\")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])arguments[e].hasOwnProperty(t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==[\"[object File]\",\"[object Blob]\"].indexOf(Object.prototype.toString.call(n)))&&\"undefined\"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?(\"arraybuffer\"===t?e=a.transformTo(\"uint8array\",e):\"string\"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error(\"Can't read the data of '\"+r+\"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?\"))})}},{\"./base64\":1,\"./external\":6,\"./nodejsUtils\":14,\"./support\":30,setimmediate:54}],33:[function(e,t,r){\"use strict\";var n=e(\"./reader/readerFor\"),i=e(\"./utils\"),s=e(\"./signature\"),a=e(\"./zipEntry\"),o=(e(\"./utf8\"),e(\"./support\"));function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error(\"Corrupted zip or bug: unexpected signature (\"+i.pretty(t)+\", expected \"+i.pretty(e)+\")\")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?\"uint8array\":\"array\",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error(\"Multi-volumes zip are not supported\")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error(\"Corrupted zip or bug: expected \"+this.centralDirRecords+\" records in central dir, got \"+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error(\"Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html\"):new Error(\"Corrupted zip: can't find end of central directory\");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error(\"Corrupted zip: can't find the ZIP64 end of central directory locator\");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error(\"Corrupted zip: can't find the ZIP64 end of central directory\");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error(\"Corrupted zip: missing \"+Math.abs(n)+\" bytes.\")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{\"./reader/readerFor\":22,\"./signature\":23,\"./support\":30,\"./utf8\":31,\"./utils\":32,\"./zipEntry\":34}],34:[function(e,t,r){\"use strict\";var n=e(\"./reader/readerFor\"),s=e(\"./utils\"),i=e(\"./compressedObject\"),a=e(\"./crc32\"),o=e(\"./utf8\"),h=e(\"./compressions\"),u=e(\"./support\");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error(\"Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)\");if(null===(t=function(e){for(var t in h)if(h.hasOwnProperty(t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error(\"Corrupted zip : compression \"+s.pretty(this.compressionMethod)+\" unknown (inner file : \"+s.transformTo(\"string\",this.fileName)+\")\");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error(\"Encrypted zip are not supported\");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||\"/\"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(e){if(this.extraFields[1]){var t=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=t.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=t.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=t.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=t.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?\"uint8array\":\"array\";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{\"./compressedObject\":2,\"./compressions\":3,\"./crc32\":4,\"./reader/readerFor\":22,\"./support\":30,\"./utf8\":31,\"./utils\":32}],35:[function(e,t,r){\"use strict\";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e(\"./stream/StreamHelper\"),i=e(\"./stream/DataWorker\"),a=e(\"./utf8\"),o=e(\"./compressedObject\"),h=e(\"./stream/GenericWorker\");n.prototype={internalStream:function(e){var t=null,r=\"string\";try{if(!e)throw new Error(\"No output type specified.\");var n=\"string\"===(r=e.toLowerCase())||\"text\"===r;\"binarystring\"!==r&&\"text\"!==r||(r=\"string\"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h(\"error\")).error(e)}return new s(t,r,\"\")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||\"nodebuffer\").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=[\"asText\",\"asBinary\",\"asNodeBuffer\",\"asUint8Array\",\"asArrayBuffer\"],l=function(){throw new Error(\"This method has been removed in JSZip 3.0, please check the upgrade guide.\")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{\"./compressedObject\":2,\"./stream/DataWorker\":27,\"./stream/GenericWorker\":28,\"./stream/StreamHelper\":29,\"./utf8\":31}],36:[function(e,l,t){(function(t){\"use strict\";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode(\"\");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r=\"document\"in t&&\"onreadystatechange\"in t.document.createElement(\"script\")?function(){var e=t.document.createElement(\"script\");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,\"undefined\"!=typeof __webpack_require__.g?__webpack_require__.g:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}],37:[function(e,t,r){\"use strict\";var i=e(\"immediate\");function u(){}var l={},s=[\"REJECTED\"],a=[\"FULFILLED\"],n=[\"PENDING\"];function o(e){if(\"function\"!=typeof e)throw new TypeError(\"resolver must be a function\");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,\"function\"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),\"function\"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError(\"Cannot resolve promise with itself\")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&(\"object\"==typeof e||\"function\"==typeof e)&&\"function\"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});\"error\"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status=\"success\"}catch(e){r.status=\"error\",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if(\"function\"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if(\"function\"!=typeof e&&this.state===a||\"function\"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if(\"error\"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if(\"[object Array]\"!==Object.prototype.toString.call(e))return this.reject(new TypeError(\"must be an array\"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if(\"[object Array]\"!==Object.prototype.toString.call(e))return this.reject(new TypeError(\"must be an array\"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){\"use strict\";var n={};(0,e(\"./lib/utils/common\").assign)(n,e(\"./lib/deflate\"),e(\"./lib/inflate\"),e(\"./lib/zlib/constants\")),t.exports=n},{\"./lib/deflate\":39,\"./lib/inflate\":40,\"./lib/utils/common\":41,\"./lib/zlib/constants\":44}],39:[function(e,t,r){\"use strict\";var a=e(\"./zlib/deflate\"),o=e(\"./utils/common\"),h=e(\"./utils/strings\"),i=e(\"./zlib/messages\"),s=e(\"./zlib/zstream\"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:\"\"},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=\"\",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n=\"string\"==typeof t.dictionary?h.string2buf(t.dictionary):\"[object ArrayBuffer]\"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,\"string\"==typeof e?i.input=h.string2buf(e):\"[object ArrayBuffer]\"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||(\"string\"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(\"string\"===this.options.to?this.result=this.chunks.join(\"\"):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{\"./utils/common\":41,\"./utils/strings\":42,\"./zlib/deflate\":46,\"./zlib/messages\":51,\"./zlib/zstream\":53}],40:[function(e,t,r){\"use strict\";var c=e(\"./zlib/inflate\"),d=e(\"./utils/common\"),p=e(\"./utils/strings\"),m=e(\"./zlib/constants\"),n=e(\"./zlib/messages\"),i=e(\"./zlib/zstream\"),s=e(\"./zlib/gzheader\"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:\"\"},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=\"\",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,\"string\"==typeof e?h.input=p.binstring2buf(e):\"[object ArrayBuffer]\"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o=\"string\"==typeof l?p.string2buf(l):\"[object ArrayBuffer]\"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||(\"string\"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&(\"string\"===this.options.to?this.result=this.chunks.join(\"\"):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{\"./utils/common\":41,\"./utils/strings\":42,\"./zlib/constants\":44,\"./zlib/gzheader\":47,\"./zlib/inflate\":49,\"./zlib/messages\":51,\"./zlib/zstream\":53}],41:[function(e,t,r){\"use strict\";var n=\"undefined\"!=typeof Uint8Array&&\"undefined\"!=typeof Uint16Array&&\"undefined\"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if(\"object\"!=typeof r)throw new TypeError(r+\"must be non-object\");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){\"use strict\";var h=e(\"./common\"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r=\"\",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{\"./common\":41}],43:[function(e,t,r){\"use strict\";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){\"use strict\";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){\"use strict\";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){\"use strict\";var h,c=e(\"../utils/common\"),u=e(\"./trees\"),d=e(\"./adler32\"),p=e(\"./crc32\"),n=e(\"./messages\"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo=\"pako deflate (from Nodeca project)\"},{\"../utils/common\":41,\"./adler32\":43,\"./crc32\":45,\"./messages\":51,\"./trees\":52}],47:[function(e,t,r){\"use strict\";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=\"\",this.comment=\"\",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){\"use strict\";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg=\"invalid literal/length code\",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg=\"invalid distance code\",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg=\"invalid distance too far back\",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg=\"invalid distance too far back\",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){\"use strict\";var I=e(\"../utils/common\"),O=e(\"./adler32\"),B=e(\"./crc32\"),R=e(\"./inffast\"),T=e(\"./inftrees\"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=\"\",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg=\"incorrect header check\",r.mode=30;break}if(8!=(15&u)){e.msg=\"unknown compression method\",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg=\"invalid window size\",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg=\"unknown compression method\",r.mode=30;break}if(57344&r.flags){e.msg=\"unknown header flags set\",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg=\"header crc mismatch\",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg=\"invalid block type\",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg=\"invalid stored block lengths\",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg=\"too many length or distance symbols\",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg=\"invalid code lengths set\",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg=\"invalid bit length repeat\",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg=\"invalid bit length repeat\",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg=\"invalid code -- missing end-of-block\",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg=\"invalid literal/lengths set\",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg=\"invalid distances set\",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg=\"invalid literal/length code\",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg=\"invalid distance code\",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg=\"invalid distance too far back\",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg=\"invalid distance too far back\",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg=\"incorrect data check\",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg=\"incorrect length check\",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo=\"pako inflate (from Nodeca project)\"},{\"../utils/common\":41,\"./adler32\":43,\"./crc32\":45,\"./inffast\":48,\"./inftrees\":50}],50:[function(e,t,r){\"use strict\";var D=e(\"../utils/common\"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{\"../utils/common\":41}],51:[function(e,t,r){\"use strict\";t.exports={2:\"need dictionary\",1:\"stream end\",0:\"\",\"-1\":\"file error\",\"-2\":\"stream error\",\"-3\":\"data error\",\"-4\":\"insufficient memory\",\"-5\":\"buffer error\",\"-6\":\"incompatible version\"}},{}],52:[function(e,t,r){\"use strict\";var i=e(\"../utils/common\"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{\"../utils/common\":41}],53:[function(e,t,r){\"use strict\";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=\"\",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){\"use strict\";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i=\"[object process]\"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage(\"\",\"*\"),r.onmessage=t,e}}()?(a=\"setImmediate$\"+Math.random()+\"$\",r.addEventListener?r.addEventListener(\"message\",d,!1):r.attachEvent(\"onmessage\",d),function(e){r.postMessage(a+e,\"*\")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&\"onreadystatechange\"in l.createElement(\"script\")?(s=l.documentElement,function(e){var t=l.createElement(\"script\");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){\"function\"!=typeof e&&(e=new Function(\"\"+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&\"string\"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}(\"undefined\"==typeof self?void 0===e?this:e:self)}).call(this,\"undefined\"!=typeof __webpack_require__.g?__webpack_require__.g:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}]},{},[10])(10)});\n\n//# sourceURL=webpack://word-learning/./node_modules/jszip/dist/jszip.min.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://word-learning/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://word-learning/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://word-learning/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://word-learning/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://word-learning/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://word-learning/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://word-learning/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! read-excel-file */ \"./node_modules/read-excel-file/modules/read/readXlsxFileBrowser.js\");\n\r\n\r\n\r\nlet space = false;\r\nlet url = 'https://docs.google.com/spreadsheets/d/1aqssJJ9IvDDO21ylxiXSW2SjuPK5iO8r3tdZhGjGgBk/edit?usp=sharing'\r\n\r\nfetch(url).then(response => console.log(response));\r\nlet input = document.getElementById('input')\r\nlet words = []\r\nlet word = document.getElementById('word')\r\nlet translation = document.getElementById('translation')\r\nconsole.log(translation)\r\n\r\n\r\ninput.addEventListener('change', () => {\r\n  \r\n})\r\n;(0,read_excel_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('./words.').then((rows) => {\r\n    words = rows.slice(1);\r\n    console.log(words)\r\n    start();\r\n  })\r\n\r\nfunction start() {\r\n  let id = Math.floor(Math.random() * words.length);\r\n  showWord(id);\r\n  document.addEventListener(\"keypress\", function(event) {\r\n    if (event.keyCode == 32) {\r\n      if(space === true) {\r\n        id = Math.floor(Math.random() * words.length)\r\n        showWord(id)\r\n        space = !space;\r\n      } else {\r\n        showTranslation(id)\r\n        space = !space;\r\n      }\r\n\r\n    }\r\n  });\r\n}\r\n\r\nfunction showWord (id) {\r\n  word.innerHTML = words[id][0]\r\n  translation.innerHTML = \"?\"\r\n}\r\nfunction showTranslation(id) {\r\n   translation.innerHTML = words[id][1]\r\n}\n\n//# sourceURL=webpack://word-learning/./src/js/script.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/coordinates.js":
/*!******************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/coordinates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateDimensions\": () => (/* binding */ calculateDimensions),\n/* harmony export */   \"parseCellCoordinates\": () => (/* binding */ parseCellCoordinates)\n/* harmony export */ });\n// Maps \"A1\"-like coordinates to `{ row, column }` numeric coordinates.\nvar LETTERS = [\"\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"U\", \"V\", \"W\", \"X\", \"Y\", \"Z\"];\nfunction calculateDimensions(cells) {\n  var comparator = function comparator(a, b) {\n    return a - b;\n  };\n\n  var allRows = cells.map(function (cell) {\n    return cell.row;\n  }).sort(comparator);\n  var allCols = cells.map(function (cell) {\n    return cell.column;\n  }).sort(comparator);\n  var minRow = allRows[0];\n  var maxRow = allRows[allRows.length - 1];\n  var minCol = allCols[0];\n  var maxCol = allCols[allCols.length - 1];\n  return [{\n    row: minRow,\n    column: minCol\n  }, {\n    row: maxRow,\n    column: maxCol\n  }];\n} // Converts a letter coordinate to a digit coordinate.\n// Examples: \"A\" -> 1, \"B\" -> 2, \"Z\" -> 26, \"AA\" -> 27, etc.\n\nfunction columnLettersToNumber(columnLetters) {\n  // `for ... of ...` would require Babel polyfill for iterating a string.\n  var n = 0;\n  var i = 0;\n\n  while (i < columnLetters.length) {\n    n *= 26;\n    n += LETTERS.indexOf(columnLetters[i]);\n    i++;\n  }\n\n  return n;\n}\n\nfunction parseCellCoordinates(coords) {\n  // Coordinate examples: \"AA2091\", \"R988\", \"B1\".\n  coords = coords.split(/(\\d+)/);\n  return [// Row.\n  parseInt(coords[1]), // Column.\n  columnLettersToNumber(coords[0].trim())];\n}\n//# sourceMappingURL=coordinates.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/coordinates.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/dropEmptyColumns.js":
/*!***********************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/dropEmptyColumns.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropEmptyColumns)\n/* harmony export */ });\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction dropEmptyColumns(data) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$accessor = _ref.accessor,\n      accessor = _ref$accessor === void 0 ? function (_) {\n    return _;\n  } : _ref$accessor,\n      onlyTrimAtTheEnd = _ref.onlyTrimAtTheEnd;\n\n  var i = data[0].length - 1;\n\n  while (i >= 0) {\n    var empty = true;\n\n    for (var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;) {\n      var row = _step.value;\n\n      if (accessor(row[i]) !== null) {\n        empty = false;\n        break;\n      }\n    }\n\n    if (empty) {\n      var j = 0;\n\n      while (j < data.length) {\n        data[j].splice(i, 1);\n        j++;\n      }\n    } else if (onlyTrimAtTheEnd) {\n      break;\n    }\n\n    i--;\n  }\n\n  return data;\n}\n//# sourceMappingURL=dropEmptyColumns.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/dropEmptyColumns.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/dropEmptyRows.js":
/*!********************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/dropEmptyRows.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropEmptyRows)\n/* harmony export */ });\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction dropEmptyRows(data) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      rowMap = _ref.rowMap,\n      _ref$accessor = _ref.accessor,\n      accessor = _ref$accessor === void 0 ? function (_) {\n    return _;\n  } : _ref$accessor,\n      onlyTrimAtTheEnd = _ref.onlyTrimAtTheEnd;\n\n  // Drop empty rows.\n  var i = data.length - 1;\n\n  while (i >= 0) {\n    // Check if the row is empty.\n    var empty = true;\n\n    for (var _iterator = _createForOfIteratorHelperLoose(data[i]), _step; !(_step = _iterator()).done;) {\n      var cell = _step.value;\n\n      if (accessor(cell) !== null) {\n        empty = false;\n        break;\n      }\n    } // Remove the empty row.\n\n\n    if (empty) {\n      data.splice(i, 1);\n\n      if (rowMap) {\n        rowMap.splice(i, 1);\n      }\n    } else if (onlyTrimAtTheEnd) {\n      break;\n    }\n\n    i--;\n  }\n\n  return data;\n}\n//# sourceMappingURL=dropEmptyRows.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/dropEmptyRows.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/getData.js":
/*!**************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/getData.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _dropEmptyRows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropEmptyRows.js */ \"./node_modules/read-excel-file/modules/read/dropEmptyRows.js\");\n/* harmony import */ var _dropEmptyColumns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropEmptyColumns.js */ \"./node_modules/read-excel-file/modules/read/dropEmptyColumns.js\");\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction getData(sheet, options) {\n  var dimensions = sheet.dimensions,\n      cells = sheet.cells; // If the sheet is empty.\n\n  if (cells.length === 0) {\n    return [];\n  }\n\n  var _dimensions = _slicedToArray(dimensions, 2),\n      leftTop = _dimensions[0],\n      rightBottom = _dimensions[1]; // Don't discard empty rows or columns at the start.\n  // https://github.com/catamphetamine/read-excel-file/issues/102\n  // const colsCount = (rightBottom.column - leftTop.column) + 1\n  // const rowsCount = (rightBottom.row - leftTop.row) + 1\n\n\n  var colsCount = rightBottom.column;\n  var rowsCount = rightBottom.row; // Initialize spreadsheet data structure.\n\n  var data = new Array(rowsCount);\n  var i = 0;\n\n  while (i < rowsCount) {\n    data[i] = new Array(colsCount);\n    var j = 0;\n\n    while (j < colsCount) {\n      data[i][j] = null;\n      j++;\n    }\n\n    i++;\n  } // Fill in spreadsheet `data`.\n  // (this code implies that `cells` aren't necessarily sorted by row and column:\n  //  maybe that's not correct, this piece code was initially copy-pasted\n  //  from some other library that used `XPath`)\n\n\n  for (var _iterator = _createForOfIteratorHelperLoose(cells), _step; !(_step = _iterator()).done;) {\n    var cell = _step.value;\n    // Don't discard empty rows or columns at the start.\n    // https://github.com/catamphetamine/read-excel-file/issues/102\n    // const rowIndex = cell.row - leftTop.row\n    // const columnIndex = cell.column - leftTop.column\n    var rowIndex = cell.row - 1;\n    var columnIndex = cell.column - 1; // Ignore the data in the cell if it's outside of the spreadsheet's \"dimensions\".\n\n    if (columnIndex < colsCount && rowIndex < rowsCount) {\n      data[rowIndex][columnIndex] = cell.value;\n    }\n  } // Fill in the row map.\n\n\n  var rowMap = options.rowMap;\n\n  if (rowMap) {\n    var _i2 = 0;\n\n    while (_i2 < data.length) {\n      rowMap[_i2] = _i2;\n      _i2++;\n    }\n  } // Drop empty columns or rows.\n\n\n  data = (0,_dropEmptyRows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_dropEmptyColumns_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, {\n    onlyTrimAtTheEnd: true\n  }), {\n    onlyTrimAtTheEnd: true,\n    rowMap: rowMap\n  }); // Optionally transform data before applying `schema`.\n\n  if (options.transformData) {\n    data = options.transformData(data); // data = options.transformData(data, {\n    //   dropEmptyRowsAndColumns(data) {\n    //     return dropEmptyRows(dropEmptyColumns(data), { rowMap })\n    //   }\n    // })\n  }\n\n  return data;\n}\n//# sourceMappingURL=getData.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/getData.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/isDateTimestamp.js":
/*!**********************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/isDateTimestamp.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isDateTimestamp)\n/* harmony export */ });\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// XLSX does have \"d\" type for dates, but it's not commonly used.\n// Instead, it prefers using \"n\" type for storing dates as timestamps.\n//\n// Whether a numeric value is a number or a date timestamp, it sometimes could be\n// detected by looking at the value \"format\" and seeing if it's a date-specific one.\n// https://github.com/catamphetamine/read-excel-file/issues/3#issuecomment-395770777\n//\n// The list of generic numeric value \"formats\":\n// https://xlsxwriter.readthedocs.io/format.html#format-set-num-format\n//\nfunction isDateTimestamp(value, styleId, styles, options) {\n  if (styleId) {\n    var style = styles[styleId];\n\n    if (!style) {\n      throw new Error(\"Cell style not found: \".concat(styleId));\n    }\n\n    if ( // Whether it's a \"number format\" that's conventionally used for storing date timestamps.\n    BUILT_IN_DATE_NUMBER_FORMAT_IDS.indexOf(parseInt(style.numberFormat.id)) >= 0 || // Whether it's a \"number format\" that uses a \"formatting template\"\n    // that the developer is certain is a date formatting template.\n    options.dateFormat && style.numberFormat.template === options.dateFormat || // Whether the \"smart formatting template\" feature is not disabled\n    // and it has detected that it's a date formatting template by looking at it.\n    options.smartDateParser !== false && style.numberFormat.template && isDateTemplate(style.numberFormat.template)) {\n      return true;\n    }\n  }\n} // https://hexdocs.pm/xlsxir/number_styles.html\n\nvar BUILT_IN_DATE_NUMBER_FORMAT_IDS = [14, 15, 16, 17, 18, 19, 20, 21, 22, 27, 30, 36, 45, 46, 47, 50, 57]; // On some date formats, there's an \"[$-414]\" prefix.\n// I don't have any idea what that is.\n//\n// https://stackoverflow.com/questions/4730152/what-indicates-an-office-open-xml-cell-contains-a-date-time-value\n//\n// Examples:\n//\n// * 27 (built-in format) \"[$-404]e/m/d\"\n// * 164 (custom format) \"[$-414]mmmm\\ yyyy;@\"\n//\n\nvar DATE_FORMAT_WEIRD_PREFIX = /^\\[\\$-414\\]/; // On some date formats, there's an \";@\" postfix.\n// I don't have any idea what that is.\n// Examples:\n//\n// * 164 (custom format) \"m/d/yyyy;@\"\n// * 164 (custom format) \"[$-414]mmmm\\ yyyy;@\"\n//\n\nvar DATE_FORMAT_WEIRD_POSTFIX = /;@$/;\n\nfunction isDateTemplate(template) {\n  // Date format tokens could be in upper case or in lower case.\n  // There seems to be no single standard.\n  // So lowercase the template first.\n  template = template.toLowerCase(); // On some date formats, there's an \"[$-414]\" prefix.\n  // I don't have any idea what that is. Trim it.\n\n  template = template.replace(DATE_FORMAT_WEIRD_PREFIX, ''); // On some date formats, there's an \";@\" postfix.\n  // I don't have any idea what that is. Trim it.\n\n  template = template.replace(DATE_FORMAT_WEIRD_POSTFIX, '');\n  var tokens = template.split(/\\W+/);\n\n  for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {\n    var token = _step.value;\n\n    if (DATE_TEMPLATE_TOKENS.indexOf(token) < 0) {\n      return false;\n    }\n  }\n\n  return true;\n} // These tokens could be in upper case or in lower case.\n// There seems to be no single standard, so using lower case.\n\n\nvar DATE_TEMPLATE_TOKENS = [// Seconds (min two digits). Example: \"05\".\n'ss', // Minutes (min two digits). Example: \"05\". Could also be \"Months\". Weird.\n'mm', // Hours. Example: \"1\".\n'h', // Hours (min two digits). Example: \"01\".\n'hh', // \"AM\" part of \"AM/PM\". Lowercased just in case.\n'am', // \"PM\" part of \"AM/PM\". Lowercased just in case.\n'pm', // Day. Example: \"1\"\n'd', // Day (min two digits). Example: \"01\"\n'dd', // Month (numeric). Example: \"1\".\n'm', // Month (numeric, min two digits). Example: \"01\". Could also be \"Minutes\". Weird.\n'mm', // Month (shortened month name). Example: \"Jan\".\n'mmm', // Month (full month name). Example: \"January\".\n'mmmm', // Two-digit year. Example: \"20\".\n'yy', // Full year. Example: \"2020\".\n'yyyy', // I don't have any idea what \"e\" means.\n// It's used in \"built-in\" XLSX formats:\n// * 27 '[$-404]e/m/d';\n// * 36 '[$-404]e/m/d';\n// * 50 '[$-404]e/m/d';\n// * 57 '[$-404]e/m/d';\n'e'];\n//# sourceMappingURL=isDateTimestamp.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/isDateTimestamp.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseCell.js":
/*!****************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseCell.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseCell)\n/* harmony export */ });\n/* harmony import */ var _parseCellValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseCellValue.js */ \"./node_modules/read-excel-file/modules/read/parseCellValue.js\");\n/* harmony import */ var _coordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinates.js */ \"./node_modules/read-excel-file/modules/read/coordinates.js\");\n/* harmony import */ var _xml_xlsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xml/xlsx.js */ \"./node_modules/read-excel-file/modules/xml/xlsx.js\");\n/* harmony import */ var _xml_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xml/dom.js */ \"./node_modules/read-excel-file/modules/xml/dom.js\");\n\n\n\n // Example of a `<c/>`ell element:\n//\n// <c>\n//    <f>string</f> — formula.\n//    <v>string</v> — formula pre-computed value.\n//    <is>\n//       <t>string</t> — an `inlineStr` string (rather than a \"common string\" from a dictionary).\n//       <r>\n//          <rPr>\n//            ...\n//          </rPr>\n//          <t>string</t>\n//       </r>\n//       <rPh sb=\"1\" eb=\"1\">\n//          <t>string</t>\n//       </rPh>\n//       <phoneticPr fontId=\"1\"/>\n//    </is>\n//    <extLst>\n//       <ext>\n//          <!--any element-->\n//       </ext>\n//    </extLst>\n// </c>\n//\n\nfunction parseCell(node, sheet, xml, values, styles, properties, options) {\n  var coords = (0,_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.parseCellCoordinates)(node.getAttribute('r'));\n  var valueElement = (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_1__.getCellValue)(sheet, node); // For `xpath`, `value` can be `undefined` while for native `DOMParser` it's `null`.\n  // So using `value && ...` instead of `if (value !== undefined) { ... }` here\n  // for uniform compatibility with both `xpath` and native `DOMParser`.\n\n  var value = valueElement && valueElement.textContent;\n  var type;\n\n  if (node.hasAttribute('t')) {\n    type = node.getAttribute('t');\n  }\n\n  return {\n    row: coords[0],\n    column: coords[1],\n    value: (0,_parseCellValue_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(value, type, {\n      getInlineStringValue: function getInlineStringValue() {\n        return (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_1__.getCellInlineStringValue)(sheet, node);\n      },\n      getInlineStringXml: function getInlineStringXml() {\n        return (0,_xml_dom_js__WEBPACK_IMPORTED_MODULE_3__.getOuterXml)(node);\n      },\n      getStyleId: function getStyleId() {\n        return node.getAttribute('s');\n      },\n      styles: styles,\n      values: values,\n      properties: properties,\n      options: options\n    })\n  };\n}\n//# sourceMappingURL=parseCell.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseCell.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseCellValue.js":
/*!*********************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseCellValue.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseCellValue)\n/* harmony export */ });\n/* harmony import */ var _parseDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseDate.js */ \"./node_modules/read-excel-file/modules/read/parseDate.js\");\n/* harmony import */ var _isDateTimestamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDateTimestamp.js */ \"./node_modules/read-excel-file/modules/read/isDateTimestamp.js\");\n\n // Parses a string `value` of a cell.\n\nfunction parseCellValue(value, type, _ref) {\n  var getInlineStringValue = _ref.getInlineStringValue,\n      getInlineStringXml = _ref.getInlineStringXml,\n      getStyleId = _ref.getStyleId,\n      styles = _ref.styles,\n      values = _ref.values,\n      properties = _ref.properties,\n      options = _ref.options;\n\n  if (!type) {\n    // Default cell type is \"n\" (numeric).\n    // http://www.datypic.com/sc/ooxml/t-ssml_CT_Cell.html\n    type = 'n';\n  } // Available Excel cell types:\n  // https://github.com/SheetJS/sheetjs/blob/19620da30be2a7d7b9801938a0b9b1fd3c4c4b00/docbits/52_datatype.md\n  //\n  // Some other document (seems to be old):\n  // http://webapp.docx4java.org/OnlineDemo/ecma376/SpreadsheetML/ST_CellType.html\n  //\n\n\n  switch (type) {\n    // XLSX tends to store all strings as \"shared\" (indexed) ones\n    // using \"s\" cell type (for saving on strage space).\n    // \"str\" cell type is then generally only used for storing\n    // formula-pre-calculated cell values.\n    case 'str':\n      value = parseString(value, options);\n      break;\n    // Sometimes, XLSX stores strings as \"inline\" strings rather than \"shared\" (indexed) ones.\n    // Perhaps the specification doesn't force it to use one or another.\n    // Example: `<sheetData><row r=\"1\"><c r=\"A1\" s=\"1\" t=\"inlineStr\"><is><t>Test 123</t></is></c></row></sheetData>`.\n\n    case 'inlineStr':\n      value = getInlineStringValue();\n\n      if (value === undefined) {\n        throw new Error(\"Unsupported \\\"inline string\\\" cell value structure: \".concat(getInlineStringXml()));\n      }\n\n      value = parseString(value, options);\n      break;\n    // XLSX tends to store string values as \"shared\" (indexed) ones.\n    // \"Shared\" strings is a way for an Excel editor to reduce\n    // the file size by storing \"commonly used\" strings in a dictionary\n    // and then referring to such strings by their index in that dictionary.\n    // Example: `<sheetData><row r=\"1\"><c r=\"A1\" s=\"1\" t=\"s\"><v>0</v></c></row></sheetData>`.\n\n    case 's':\n      // If a cell has no value then there's no `<c/>` element for it.\n      // If a `<c/>` element exists then it's not empty.\n      // The `<v/>`alue is a key in the \"shared strings\" dictionary of the\n      // XLSX file, so look it up in the `values` dictionary by the numeric key.\n      var sharedStringIndex = Number(value);\n\n      if (isNaN(sharedStringIndex)) {\n        throw new Error(\"Invalid \\\"shared\\\" string index: \".concat(value));\n      }\n\n      if (sharedStringIndex >= values.length) {\n        throw new Error(\"An out-of-bounds \\\"shared\\\" string index: \".concat(value));\n      }\n\n      value = values[sharedStringIndex];\n      value = parseString(value, options);\n      break;\n    // Boolean (TRUE/FALSE) values are stored as either \"1\" or \"0\"\n    // in cells of type \"b\".\n\n    case 'b':\n      if (value === '1') {\n        value = true;\n      } else if (value === '0') {\n        value = false;\n      } else {\n        throw new Error(\"Unsupported \\\"boolean\\\" cell value: \".concat(value));\n      }\n\n      break;\n    // XLSX specification seems to support cells of type \"z\":\n    // blank \"stub\" cells that should be ignored by data processing utilities.\n\n    case 'z':\n      value = undefined;\n      break;\n    // XLSX specification also defines cells of type \"e\" containing a numeric \"error\" code.\n    // It's not clear what that means though.\n    // They also wrote: \"and `w` property stores its common name\".\n    // It's unclear what they meant by that.\n\n    case 'e':\n      value = decodeError(value);\n      break;\n    // XLSX supports date cells of type \"d\", though seems like it (almost?) never\n    // uses it for storing dates, preferring \"n\" numeric timestamp cells instead.\n    // The value of a \"d\" cell is supposedly a string in \"ISO 8601\" format.\n    // I haven't seen an XLSX file having such cells.\n    // Example: `<sheetData><row r=\"1\"><c r=\"A1\" s=\"1\" t=\"d\"><v>2021-06-10T00:47:45.700Z</v></c></row></sheetData>`.\n\n    case 'd':\n      if (value === undefined) {\n        break;\n      }\n\n      var parsedDate = new Date(value);\n\n      if (isNaN(parsedDate)) {\n        throw new Error(\"Unsupported \\\"date\\\" cell value: \".concat(value));\n      }\n\n      value = parsedDate;\n      break;\n    // Numeric cells have type \"n\".\n\n    case 'n':\n      if (value === undefined) {\n        break;\n      }\n\n      var parsedNumber = Number(value);\n\n      if (isNaN(parsedNumber)) {\n        throw new Error(\"Invalid \\\"numeric\\\" cell value: \".concat(value));\n      }\n\n      value = parsedNumber; // XLSX does have \"d\" type for dates, but it's not commonly used.\n      // Instead, it prefers using \"n\" type for storing dates as timestamps.\n\n      if ((0,_isDateTimestamp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value, getStyleId(), styles, options)) {\n        // Parse the number as a date timestamp.\n        value = (0,_parseDate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, properties);\n      }\n\n      break;\n\n    default:\n      throw new TypeError(\"Cell type not supported: \".concat(type));\n  } // Convert empty values to `null`.\n\n\n  if (value === undefined) {\n    value = null;\n  }\n\n  return value;\n} // Decodes numeric error code to a string code.\n// https://github.com/SheetJS/sheetjs/blob/19620da30be2a7d7b9801938a0b9b1fd3c4c4b00/docbits/52_datatype.md\n\nfunction decodeError(errorCode) {\n  // While the error values are determined by the application,\n  // the following are some example error values that could be used:\n  switch (errorCode) {\n    case 0x00:\n      return '#NULL!';\n\n    case 0x07:\n      return '#DIV/0!';\n\n    case 0x0F:\n      return '#VALUE!';\n\n    case 0x17:\n      return '#REF!';\n\n    case 0x1D:\n      return '#NAME?';\n\n    case 0x24:\n      return '#NUM!';\n\n    case 0x2A:\n      return '#N/A';\n\n    case 0x2B:\n      return '#GETTING_DATA';\n\n    default:\n      // Such error code doesn't exist. I made it up.\n      return \"#ERROR_\".concat(errorCode);\n  }\n}\n\nfunction parseString(value, options) {\n  // In some weird cases, a developer might want to disable\n  // the automatic trimming of all strings.\n  // For example, leading spaces might express a tree-like hierarchy.\n  // https://github.com/catamphetamine/read-excel-file/pull/106#issuecomment-1136062917\n  if (options.trim !== false) {\n    value = value.trim();\n  }\n\n  if (value === '') {\n    value = undefined;\n  }\n\n  return value;\n}\n//# sourceMappingURL=parseCellValue.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseCellValue.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseCells.js":
/*!*****************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseCells.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseCells)\n/* harmony export */ });\n/* harmony import */ var _parseCell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseCell.js */ \"./node_modules/read-excel-file/modules/read/parseCell.js\");\n/* harmony import */ var _xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xml/xlsx.js */ \"./node_modules/read-excel-file/modules/xml/xlsx.js\");\n\n\nfunction parseCells(sheet, xml, values, styles, properties, options) {\n  var cells = (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getCells)(sheet);\n\n  if (cells.length === 0) {\n    return [];\n  } // const mergedCells = getMergedCells(sheet)\n  // for (const mergedCell of mergedCells) {\n  //   const [from, to] = mergedCell.split(':').map(parseCellCoordinates)\n  //   console.log('Merged Cell.', 'From:', from, 'To:', to)\n  // }\n\n\n  return cells.map(function (node) {\n    return (0,_parseCell_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node, sheet, xml, values, styles, properties, options);\n  });\n}\n//# sourceMappingURL=parseCells.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseCells.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseDate.js":
/*!****************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseDate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseExcelDate)\n/* harmony export */ });\n// Parses an Excel Date (\"serial\") into a corresponding javascript Date in UTC+0 timezone.\n// (with time equal to 00:00)\n//\n// https://www.pcworld.com/article/3063622/software/mastering-excel-date-time-serial-numbers-networkdays-datevalue-and-more.html\n// \"If you need to calculate dates in your spreadsheets,\n//  Excel uses its own unique system, which it calls Serial Numbers\".\n//\nfunction parseExcelDate(excelSerialDate, options) {\n  // https://support.microsoft.com/en-gb/help/214330/differences-between-the-1900-and-the-1904-date-system-in-excel\n  if (options && options.epoch1904) {\n    excelSerialDate += 1462;\n  } // \"Excel serial date\" is just\n  // the count of days since `01/01/1900`\n  // (seems that it may be even fractional).\n  //\n  // The count of days elapsed\n  // since `01/01/1900` (Excel epoch)\n  // till `01/01/1970` (Unix epoch).\n  // Accounts for leap years\n  // (19 of them, yielding 19 extra days).\n\n\n  var daysBeforeUnixEpoch = 70 * 365 + 19; // An hour, approximately, because a minute\n  // may be longer than 60 seconds, due to \"leap seconds\".\n  //\n  // Still, Javascript `Date` (and UNIX time in general) intentionally\n  // drops the concept of \"leap seconds\" in order to make things simpler.\n  // So it's fine.\n  // https://stackoverflow.com/questions/53019726/where-are-the-leap-seconds-in-javascript\n  //\n  // \"The JavaScript Date object specifically adheres to the concept of Unix Time\n  //  (albeit with higher precision). This is part of the POSIX specification,\n  //  and thus is sometimes called \"POSIX Time\". It does not count leap seconds,\n  //  but rather assumes every day had exactly 86,400 seconds. You can read about\n  //  this in section 20.3.1.1 of the current ECMAScript specification, which states:\n  //\n  //  \"Time is measured in ECMAScript in milliseconds since 01 January, 1970 UTC.\n  //   In time values leap seconds are ignored. It is assumed that there are exactly\n  //   86,400,000 milliseconds per day.\"\n  //\n  //  The fact is, that the unpredictable nature of leap seconds makes them very\n  //  difficult to work with in APIs. One can't generally pass timestamps around\n  //  that need leap seconds tables to be interpreted correctly, and expect that\n  //  one system will interpret them the same as another. For example, while your\n  //  example timestamp 1483228826 is 2017-01-01T00:00:00Z on your system,\n  //  it would be interpreted as 2017-01-01T00:00:26Z on POSIX based systems,\n  //  or systems without leap second tables. So they aren't portable.\n  //  Even on systems that have full updated tables, there's no telling what those\n  //  tables will contain in the future (beyond the 6-month IERS announcement period),\n  //  so I can't produce a future timestamp without risk that it may eventually change.\n  //\n  //  To be clear - to support leap seconds in a programming language, the implementation\n  //  must go out of its way to do so, and must make tradeoffs that are not always acceptable.\n  //  Though there are exceptions, the general position is to not support them - not because\n  //  of any subversion or active countermeasures, but because supporting them properly is much,\n  //  much harder.\"\n  //\n  // https://en.wikipedia.org/wiki/Unix_time#Leap_seconds\n  // https://en.wikipedia.org/wiki/Leap_year\n  // https://en.wikipedia.org/wiki/Leap_second\n  //\n\n  var hour = 60 * 60 * 1000;\n  return new Date(Math.round((excelSerialDate - daysBeforeUnixEpoch) * 24 * hour));\n}\n//# sourceMappingURL=parseDate.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseDate.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseDimensions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseDimensions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseDimensions)\n/* harmony export */ });\n/* harmony import */ var _coordinates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinates.js */ \"./node_modules/read-excel-file/modules/read/coordinates.js\");\n/* harmony import */ var _xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xml/xlsx.js */ \"./node_modules/read-excel-file/modules/xml/xlsx.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // `dimensions` defines the spreadsheet area containing all non-empty cells.\n// https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheetdimension?view=openxml-2.8.1\n\nfunction parseDimensions(sheet) {\n  var dimensions = (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getDimensions)(sheet);\n\n  if (dimensions) {\n    dimensions = dimensions.split(':').map(_coordinates_js__WEBPACK_IMPORTED_MODULE_1__.parseCellCoordinates).map(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n          row = _ref2[0],\n          column = _ref2[1];\n\n      return {\n        row: row,\n        column: column\n      };\n    }); // Sometimes there can be just a single cell as a spreadsheet's \"dimensions\".\n    // For example, the default \"dimensions\" in Apache POI library is \"A1\",\n    // meaning that only the first cell in the spreadsheet is used.\n    //\n    // A quote from Apache POI library:\n    // \"Single cell ranges are formatted like single cell references (e.g. 'A1' instead of 'A1:A1').\"\n    //\n\n    if (dimensions.length === 1) {\n      dimensions = [dimensions[0], dimensions[0]];\n    }\n\n    return dimensions;\n  }\n}\n//# sourceMappingURL=parseDimensions.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseDimensions.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseFilePaths.js":
/*!*********************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseFilePaths.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseFilePaths)\n/* harmony export */ });\n/* harmony import */ var _xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xml/xlsx.js */ \"./node_modules/read-excel-file/modules/xml/xlsx.js\");\n\n/**\r\n * Returns sheet file paths.\r\n * Seems that the correct place to look for the `sheetId` -> `filename` mapping\r\n * is `xl/_rels/workbook.xml.rels` file.\r\n * https://github.com/tidyverse/readxl/issues/104\r\n * @param  {string} content — `xl/_rels/workbook.xml.rels` file contents.\r\n * @param  {object} xml\r\n * @return {object}\r\n */\n\nfunction parseFilePaths(content, xml) {\n  // Example:\n  // <Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\n  //   ...\n  //   <Relationship\n  //     Id=\"rId3\"\n  //     Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet\"\n  //     Target=\"worksheets/sheet1.xml\"/>\n  // </Relationships>\n  var document = xml.createDocument(content);\n  var filePaths = {\n    sheets: {},\n    sharedStrings: undefined,\n    styles: undefined\n  };\n\n  var addFilePathInfo = function addFilePathInfo(relationship) {\n    var filePath = relationship.getAttribute('Target');\n    var fileType = relationship.getAttribute('Type');\n\n    switch (fileType) {\n      case 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles':\n        filePaths.styles = getFilePath(filePath);\n        break;\n\n      case 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings':\n        filePaths.sharedStrings = getFilePath(filePath);\n        break;\n\n      case 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet':\n        filePaths.sheets[relationship.getAttribute('Id')] = getFilePath(filePath);\n        break;\n    }\n  };\n\n  (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getRelationships)(document).forEach(addFilePathInfo); // Seems like \"sharedStrings.xml\" is not required to exist.\n  // For example, when the spreadsheet doesn't contain any strings.\n  // https://github.com/catamphetamine/read-excel-file/issues/85\n  // if (!filePaths.sharedStrings) {\n  //   throw new Error('\"sharedStrings.xml\" file not found in the *.xlsx file')\n  // }\n\n  return filePaths;\n}\n\nfunction getFilePath(path) {\n  // Normally, `path` is a relative path inside the ZIP archive,\n  // like \"worksheets/sheet1.xml\", or \"sharedStrings.xml\", or \"styles.xml\".\n  // There has been one weird case when file path was an absolute path,\n  // like \"/xl/worksheets/sheet1.xml\" (specifically for sheets):\n  // https://github.com/catamphetamine/read-excel-file/pull/95\n  // Other libraries (like `xlsx`) and software (like Google Docs)\n  // seem to support such absolute file paths, so this library does too.\n  if (path[0] === '/') {\n    return path.slice('/'.length);\n  } // // Seems like a path could also be a URL.\n  // // http://officeopenxml.com/anatomyofOOXML-xlsx.php\n  // if (/^[a-z]+\\:\\/\\//.test(path)) {\n  //   return path\n  // }\n\n\n  return 'xl/' + path;\n}\n//# sourceMappingURL=parseFilePaths.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseFilePaths.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseProperties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseProperties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseProperties)\n/* harmony export */ });\n/* harmony import */ var _xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xml/xlsx.js */ \"./node_modules/read-excel-file/modules/xml/xlsx.js\");\n // I guess `xl/workbook.xml` file should always be present inside the *.xlsx archive.\n\nfunction parseProperties(content, xml) {\n  var book = xml.createDocument(content);\n  var properties = {}; // Read `<workbookPr/>` element to detect whether dates are 1900-based or 1904-based.\n  // https://support.microsoft.com/en-gb/help/214330/differences-between-the-1900-and-the-1904-date-system-in-excel\n  // http://webapp.docx4java.org/OnlineDemo/ecma376/SpreadsheetML/workbookPr.html\n\n  var workbookProperties = (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getWorkbookProperties)(book);\n\n  if (workbookProperties && workbookProperties.getAttribute('date1904') === '1') {\n    properties.epoch1904 = true;\n  } // Get sheets info (indexes, names, if they're available).\n  // Example:\n  // <sheets>\n  //   <sheet\n  //     xmlns:ns=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\"\n  //     name=\"Sheet1\"\n  //     sheetId=\"1\"\n  //     ns:id=\"rId3\"/>\n  // </sheets>\n  // http://www.datypic.com/sc/ooxml/e-ssml_sheet-1.html\n\n\n  properties.sheets = [];\n\n  var addSheetInfo = function addSheetInfo(sheet) {\n    if (sheet.getAttribute('name')) {\n      properties.sheets.push({\n        id: sheet.getAttribute('sheetId'),\n        name: sheet.getAttribute('name'),\n        relationId: sheet.getAttribute('r:id')\n      });\n    }\n  };\n\n  (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getSheets)(book).forEach(addSheetInfo);\n  return properties;\n}\n//# sourceMappingURL=parseProperties.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseProperties.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseSharedStrings.js":
/*!*************************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseSharedStrings.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseSharedStrings)\n/* harmony export */ });\n/* harmony import */ var _xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xml/xlsx.js */ \"./node_modules/read-excel-file/modules/xml/xlsx.js\");\n\nfunction parseSharedStrings(content, xml) {\n  if (!content) {\n    return [];\n  }\n\n  return (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getSharedStrings)(xml.createDocument(content));\n}\n//# sourceMappingURL=parseSharedStrings.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseSharedStrings.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseSheet.js":
/*!*****************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseSheet.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseSheet)\n/* harmony export */ });\n/* harmony import */ var _parseCells_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseCells.js */ \"./node_modules/read-excel-file/modules/read/parseCells.js\");\n/* harmony import */ var _parseDimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseDimensions.js */ \"./node_modules/read-excel-file/modules/read/parseDimensions.js\");\n/* harmony import */ var _coordinates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coordinates.js */ \"./node_modules/read-excel-file/modules/read/coordinates.js\");\n\n\n\nfunction parseSheet(content, xml, values, styles, properties, options) {\n  var sheet = xml.createDocument(content);\n  var cells = (0,_parseCells_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sheet, xml, values, styles, properties, options); // `dimensions` defines the spreadsheet area containing all non-empty cells.\n  // https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sheetdimension?view=openxml-2.8.1\n\n  var dimensions = (0,_parseDimensions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sheet) || (0,_coordinates_js__WEBPACK_IMPORTED_MODULE_2__.calculateDimensions)(cells);\n  return {\n    cells: cells,\n    dimensions: dimensions\n  };\n}\n//# sourceMappingURL=parseSheet.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseSheet.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/parseStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/parseStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseStyles)\n/* harmony export */ });\n/* harmony import */ var _xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../xml/xlsx.js */ \"./node_modules/read-excel-file/modules/xml/xlsx.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // http://officeopenxml.com/SSstyles.php\n// Returns an array of cell styles.\n// A cell style index is its ID.\n\nfunction parseStyles(content, xml) {\n  if (!content) {\n    return {};\n  } // https://social.msdn.microsoft.com/Forums/sqlserver/en-US/708978af-b598-45c4-a598-d3518a5a09f0/howwhen-is-cellstylexfs-vs-cellxfs-applied-to-a-cell?forum=os_binaryfile\n  // https://www.office-forums.com/threads/cellxfs-cellstylexfs.2163519/\n\n\n  var doc = xml.createDocument(content);\n  var baseStyles = (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getBaseStyles)(doc).map(parseCellStyle);\n  var numberFormats = (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getNumberFormats)(doc).map(parseNumberFormatStyle).reduce(function (formats, format) {\n    // Format ID is a numeric index.\n    // There're some standard \"built-in\" formats (in Excel) up to about `100`.\n    formats[format.id] = format;\n    return formats;\n  }, []);\n\n  var getCellStyle = function getCellStyle(xf) {\n    if (xf.hasAttribute('xfId')) {\n      return _objectSpread(_objectSpread({}, baseStyles[xf.xfId]), parseCellStyle(xf, numberFormats));\n    }\n\n    return parseCellStyle(xf, numberFormats);\n  };\n\n  return (0,_xml_xlsx_js__WEBPACK_IMPORTED_MODULE_0__.getCellStyles)(doc).map(getCellStyle);\n}\n\nfunction parseNumberFormatStyle(numFmt) {\n  return {\n    id: numFmt.getAttribute('numFmtId'),\n    template: numFmt.getAttribute('formatCode')\n  };\n} // http://www.datypic.com/sc/ooxml/e-ssml_xf-2.html\n\n\nfunction parseCellStyle(xf, numFmts) {\n  var style = {};\n\n  if (xf.hasAttribute('numFmtId')) {\n    var numberFormatId = xf.getAttribute('numFmtId'); // Built-in number formats don't have a `<numFmt/>` element in `styles.xml`.\n    // https://hexdocs.pm/xlsxir/number_styles.html\n\n    if (numFmts[numberFormatId]) {\n      style.numberFormat = numFmts[numberFormatId];\n    } else {\n      style.numberFormat = {\n        id: numberFormatId\n      };\n    }\n  }\n\n  return style;\n}\n//# sourceMappingURL=parseStyles.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/parseStyles.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/readXlsx.js":
/*!***************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/readXlsx.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ readXlsx)\n/* harmony export */ });\n/* harmony import */ var _parseProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseProperties.js */ \"./node_modules/read-excel-file/modules/read/parseProperties.js\");\n/* harmony import */ var _parseFilePaths_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseFilePaths.js */ \"./node_modules/read-excel-file/modules/read/parseFilePaths.js\");\n/* harmony import */ var _parseStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseStyles.js */ \"./node_modules/read-excel-file/modules/read/parseStyles.js\");\n/* harmony import */ var _parseSharedStrings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseSharedStrings.js */ \"./node_modules/read-excel-file/modules/read/parseSharedStrings.js\");\n/* harmony import */ var _parseSheet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parseSheet.js */ \"./node_modules/read-excel-file/modules/read/parseSheet.js\");\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getData.js */ \"./node_modules/read-excel-file/modules/read/getData.js\");\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // For an introduction in reading `*.xlsx` files see \"The minimum viable XLSX reader\":\n// https://www.brendanlong.com/the-minimum-viable-xlsx-reader.html\n\n/**\r\n * Reads an (unzipped) XLSX file structure into a 2D array of cells.\r\n * @param  {object} contents - A list of XML files inside XLSX file (which is a zipped directory).\r\n * @param  {number?} options.sheet - Workbook sheet id (`1` by default).\r\n * @param  {string?} options.dateFormat - Date format, e.g. \"mm/dd/yyyy\". Values having this format template set will be parsed as dates.\r\n * @param  {object} contents - A list of XML files inside XLSX file (which is a zipped directory).\r\n * @return {object} An object of shape `{ data, cells, properties }`. `data: string[][]` is an array of rows, each row being an array of cell values. `cells: string[][]` is an array of rows, each row being an array of cells. `properties: object` is the spreadsheet properties (e.g. whether date epoch is 1904 instead of 1900).\r\n */\n\nfunction readXlsx(contents, xml) {\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  if (!options.sheet) {\n    options = _objectSpread({\n      sheet: 1\n    }, options);\n  }\n\n  var getXmlFileContent = function getXmlFileContent(filePath) {\n    if (!contents[filePath]) {\n      throw new Error(\"\\\"\".concat(filePath, \"\\\" file not found inside the *.xlsx file zip archive\"));\n    }\n\n    return contents[filePath];\n  }; // Some Excel editors don't want to use standard naming scheme for sheet files.\n  // https://github.com/tidyverse/readxl/issues/104\n\n\n  var filePaths = (0,_parseFilePaths_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(getXmlFileContent('xl/_rels/workbook.xml.rels'), xml); // Default file path for \"shared strings\": \"xl/sharedStrings.xml\".\n\n  var values = filePaths.sharedStrings ? (0,_parseSharedStrings_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getXmlFileContent(filePaths.sharedStrings), xml) : []; // Default file path for \"styles\": \"xl/styles.xml\".\n\n  var styles = filePaths.styles ? (0,_parseStyles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getXmlFileContent(filePaths.styles), xml) : {};\n  var properties = (0,_parseProperties_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(getXmlFileContent('xl/workbook.xml'), xml); // A feature for getting the list of sheets in an Excel file.\n  // https://github.com/catamphetamine/read-excel-file/issues/14\n\n  if (options.getSheets) {\n    return properties.sheets.map(function (_ref) {\n      var name = _ref.name;\n      return {\n        name: name\n      };\n    });\n  } // Find the sheet by name, or take the first one.\n\n\n  var sheetId = getSheetId(options.sheet, properties.sheets); // If the sheet wasn't found then throw an error.\n  // Example: \"xl/worksheets/sheet1.xml\".\n\n  if (!sheetId || !filePaths.sheets[sheetId]) {\n    throw createSheetNotFoundError(options.sheet, properties.sheets);\n  } // Parse sheet data.\n\n\n  var sheet = (0,_parseSheet_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(getXmlFileContent(filePaths.sheets[sheetId]), xml, values, styles, properties, options); // Get spreadsheet data.\n\n  var data = (0,_getData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(sheet, options); // Can return properties, if required.\n\n  if (options.properties) {\n    return {\n      data: data,\n      properties: properties\n    };\n  } // Return spreadsheet data.\n\n\n  return data;\n}\n\nfunction getSheetId(sheet, sheets) {\n  if (typeof sheet === 'number') {\n    var _sheet = sheets[sheet - 1];\n    return _sheet && _sheet.relationId;\n  }\n\n  for (var _iterator = _createForOfIteratorHelperLoose(sheets), _step; !(_step = _iterator()).done;) {\n    var _sheet2 = _step.value;\n\n    if (_sheet2.name === sheet) {\n      return _sheet2.relationId;\n    }\n  }\n}\n\nfunction createSheetNotFoundError(sheet, sheets) {\n  var sheetsList = sheets && sheets.map(function (sheet, i) {\n    return \"\\\"\".concat(sheet.name, \"\\\" (#\").concat(i + 1, \")\");\n  }).join(', ');\n  return new Error(\"Sheet \".concat(typeof sheet === 'number' ? '#' + sheet : '\"' + sheet + '\"', \" not found in the *.xlsx file.\").concat(sheets ? ' Available sheets: ' + sheetsList + '.' : ''));\n}\n//# sourceMappingURL=readXlsx.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/readXlsx.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/readXlsxFileBrowser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/readXlsxFileBrowser.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ readXlsxFile)\n/* harmony export */ });\n/* harmony import */ var _xml_xmlBrowser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xml/xmlBrowser.js */ \"./node_modules/read-excel-file/modules/xml/xmlBrowser.js\");\n/* harmony import */ var _unpackXlsxFileBrowser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unpackXlsxFileBrowser.js */ \"./node_modules/read-excel-file/modules/read/unpackXlsxFileBrowser.js\");\n/* harmony import */ var _readXlsxFileContents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readXlsxFileContents.js */ \"./node_modules/read-excel-file/modules/read/readXlsxFileContents.js\");\n\n\n\n/**\r\n * Reads XLSX file into a 2D array of cells in a browser.\r\n * @param  {file} file - A file being uploaded in the browser.\r\n * @param  {object?} options\r\n * @param  {(number|string)?} options.sheet - Excel document sheet to read. Defaults to `1`. Will only read this sheet and skip others.\r\n * @return {Promise} Resolves to a 2D array of cells: an array of rows, each row being an array of cells.\r\n */\n\nfunction readXlsxFile(file) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return (0,_unpackXlsxFileBrowser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(file).then(function (entries) {\n    return (0,_readXlsxFileContents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(entries, _xml_xmlBrowser_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], options);\n  });\n}\n//# sourceMappingURL=readXlsxFileBrowser.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/readXlsxFileBrowser.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/readXlsxFileContents.js":
/*!***************************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/readXlsxFileContents.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ readXlsxFileContents)\n/* harmony export */ });\n/* harmony import */ var _readXlsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readXlsx.js */ \"./node_modules/read-excel-file/modules/read/readXlsx.js\");\n/* harmony import */ var _schema_convertToJson_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema/convertToJson.js */ \"./node_modules/read-excel-file/modules/read/schema/convertToJson.js\");\n/* harmony import */ var _schema_convertMapToSchema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema/convertMapToSchema.js */ \"./node_modules/read-excel-file/modules/read/schema/convertMapToSchema.js\");\nvar _excluded = [\"schema\", \"map\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nfunction readXlsxFileContents(entries, xml, _ref) {\n  var schema = _ref.schema,\n      map = _ref.map,\n      options = _objectWithoutProperties(_ref, _excluded);\n\n  if (!schema && map) {\n    schema = (0,_schema_convertMapToSchema_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(map);\n  }\n\n  var result = (0,_readXlsx_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(entries, xml, _objectSpread(_objectSpread({}, options), {}, {\n    properties: schema || options.properties\n  }));\n\n  if (schema) {\n    return (0,_schema_convertToJson_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(result.data, schema, _objectSpread(_objectSpread({}, options), {}, {\n      properties: result.properties\n    }));\n  }\n\n  return result;\n}\n//# sourceMappingURL=readXlsxFileContents.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/readXlsxFileContents.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/schema/convertMapToSchema.js":
/*!********************************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/schema/convertMapToSchema.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ convertMapToSchema)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction convertMapToSchema(map) {\n  var schema = {};\n\n  for (var _i = 0, _Object$keys = Object.keys(map); _i < _Object$keys.length; _i++) {\n    var key = _Object$keys[_i];\n    var prop = map[key];\n    var type = void 0;\n\n    if (_typeof(prop) === 'object') {\n      prop = Object.keys(map[key])[0];\n      type = convertMapToSchema(map[key][prop]);\n    }\n\n    schema[key] = {\n      prop: prop\n    };\n\n    if (type) {\n      schema[key].type = type;\n    }\n  }\n\n  return schema;\n}\n//# sourceMappingURL=convertMapToSchema.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/schema/convertMapToSchema.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/schema/convertToJson.js":
/*!***************************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/schema/convertToJson.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getBlock\": () => (/* binding */ getBlock),\n/* harmony export */   \"parseArray\": () => (/* binding */ parseArray),\n/* harmony export */   \"parseValue\": () => (/* binding */ parseValue)\n/* harmony export */ });\n/* harmony import */ var _parseDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parseDate.js */ \"./node_modules/read-excel-file/modules/read/parseDate.js\");\n/* harmony import */ var _types_Integer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/Integer.js */ \"./node_modules/read-excel-file/modules/types/Integer.js\");\n/* harmony import */ var _types_URL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/URL.js */ \"./node_modules/read-excel-file/modules/types/URL.js\");\n/* harmony import */ var _types_Email_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/Email.js */ \"./node_modules/read-excel-file/modules/types/Email.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar DEFAULT_OPTIONS = {\n  isColumnOriented: false\n};\n/**\r\n * Convert 2D array to nested objects.\r\n * If row oriented data, row 0 is dotted key names.\r\n * Column oriented data is transposed.\r\n * @param {any[][]} data - An array of rows, each row being an array of cells.\r\n * @param {object} schema\r\n * @return {object[]}\r\n */\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data, schema, options) {\n  if (options) {\n    options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);\n  } else {\n    options = DEFAULT_OPTIONS;\n  }\n\n  var _options = options,\n      isColumnOriented = _options.isColumnOriented,\n      rowMap = _options.rowMap;\n  validateSchema(schema);\n\n  if (isColumnOriented) {\n    data = transpose(data);\n  }\n\n  var columns = data[0];\n  var results = [];\n  var errors = [];\n\n  for (var i = 1; i < data.length; i++) {\n    var result = read(schema, data[i], i - 1, columns, errors, options);\n\n    if (result) {\n      results.push(result);\n    }\n  } // Correct error rows.\n\n\n  if (rowMap) {\n    for (var _iterator = _createForOfIteratorHelperLoose(errors), _step; !(_step = _iterator()).done;) {\n      var error = _step.value;\n      // Convert the `row` index in `data` to the\n      // actual `row` index in the spreadsheet.\n      // The `1` compensates for the header row.\n      error.row = rowMap[error.row] + 1;\n    }\n  }\n\n  return {\n    rows: results,\n    errors: errors\n  };\n}\n\nfunction read(schema, row, rowIndex, columns, errors, options) {\n  var object = {};\n\n  var _loop = function _loop() {\n    var key = _Object$keys[_i];\n    var schemaEntry = schema[key];\n    var isNestedSchema = _typeof(schemaEntry.type) === 'object' && !Array.isArray(schemaEntry.type);\n    var rawValue = row[columns.indexOf(key)];\n\n    if (rawValue === undefined) {\n      rawValue = null;\n    }\n\n    var value = void 0;\n    var error = void 0;\n    var reason = void 0;\n\n    if (isNestedSchema) {\n      value = read(schemaEntry.type, row, rowIndex, columns, errors, options);\n    } else {\n      if (rawValue === null) {\n        value = null;\n      } else if (Array.isArray(schemaEntry.type)) {\n        var notEmpty = false;\n        var array = parseArray(rawValue).map(function (_value) {\n          var result = parseValue(_value, schemaEntry, options);\n\n          if (result.error) {\n            value = _value;\n            error = result.error;\n            reason = result.reason;\n          }\n\n          if (result.value !== null) {\n            notEmpty = true;\n          }\n\n          return result.value;\n        });\n\n        if (!error) {\n          value = notEmpty ? array : null;\n        }\n      } else {\n        var result = parseValue(rawValue, schemaEntry, options);\n        error = result.error;\n        reason = result.reason;\n        value = error ? rawValue : result.value;\n      }\n    }\n\n    if (!error && value === null && schemaEntry.required) {\n      error = 'required';\n    }\n\n    if (error) {\n      error = {\n        error: error,\n        row: rowIndex + 1,\n        column: key,\n        value: value\n      };\n\n      if (reason) {\n        error.reason = reason;\n      }\n\n      if (schemaEntry.type) {\n        error.type = schemaEntry.type;\n      }\n\n      errors.push(error);\n    } else if (value !== null) {\n      object[schemaEntry.prop] = value;\n    }\n  };\n\n  for (var _i = 0, _Object$keys = Object.keys(schema); _i < _Object$keys.length; _i++) {\n    _loop();\n  }\n\n  if (Object.keys(object).length > 0) {\n    return object;\n  }\n\n  return null;\n}\n/**\r\n * Converts textual value to a javascript typed value.\r\n * @param  {any} value\r\n * @param  {object} schemaEntry\r\n * @return {{ value: any, error: string }}\r\n */\n\n\nfunction parseValue(value, schemaEntry, options) {\n  if (value === null) {\n    return {\n      value: null\n    };\n  }\n\n  var result;\n\n  if (schemaEntry.parse) {\n    result = parseCustomValue(value, schemaEntry.parse);\n  } else if (schemaEntry.type) {\n    result = parseValueOfType(value, // Supports parsing array types.\n    // See `parseArray()` function for more details.\n    // Example `type`: String[]\n    // Input: 'Barack Obama, \"String, with, colons\", Donald Trump'\n    // Output: ['Barack Obama', 'String, with, colons', 'Donald Trump']\n    Array.isArray(schemaEntry.type) ? schemaEntry.type[0] : schemaEntry.type, options);\n  } else {\n    result = {\n      value: value\n    }; // throw new Error('Invalid schema entry: no .type and no .parse():\\n\\n' + JSON.stringify(schemaEntry, null, 2))\n  } // If errored then return the error.\n\n\n  if (result.error) {\n    return result;\n  }\n\n  if (result.value !== null) {\n    if (schemaEntry.oneOf && schemaEntry.oneOf.indexOf(result.value) < 0) {\n      return {\n        error: 'invalid',\n        reason: 'unknown'\n      };\n    }\n\n    if (schemaEntry.validate) {\n      try {\n        schemaEntry.validate(result.value);\n      } catch (error) {\n        return {\n          error: error.message\n        };\n      }\n    }\n  }\n\n  return result;\n}\n/**\r\n * Converts textual value to a custom value using supplied `.parse()`.\r\n * @param  {any} value\r\n * @param  {function} parse\r\n * @return {{ value: any, error: string }}\r\n */\n\nfunction parseCustomValue(value, parse) {\n  try {\n    value = parse(value);\n\n    if (value === undefined) {\n      return {\n        value: null\n      };\n    }\n\n    return {\n      value: value\n    };\n  } catch (error) {\n    return {\n      error: error.message\n    };\n  }\n}\n/**\r\n * Converts textual value to a javascript typed value.\r\n * @param  {any} value\r\n * @param  {} type\r\n * @return {{ value: (string|number|Date|boolean), error: string, reason?: string }}\r\n */\n\n\nfunction parseValueOfType(value, type, options) {\n  switch (type) {\n    case String:\n      if (typeof value === 'string') {\n        return {\n          value: value\n        };\n      } // Excel tends to perform a forced automatic convertion of string-type values\n      // to number-type ones when the user has input them. Otherwise, users wouldn't\n      // be able to perform formula calculations on those cell values because users\n      // won't bother manually choosing a \"numeric\" cell type for each cell, and\n      // even if they did, choosing a \"numeric\" cell type every time wouldn't be an\n      // acceptable \"user experience\".\n      //\n      // So, if a cell value is supposed to be a string and Excel has automatically\n      // converted it to a number, perform a backwards conversion.\n      //\n\n\n      if (typeof value === 'number') {\n        // The global `isFinite()` function filters out:\n        // * NaN\n        // * -Infinity\n        // * Infinity\n        //\n        // All other values pass (including non-numbers).\n        //\n        if (isFinite(value)) {\n          return {\n            value: String(value)\n          };\n        }\n\n        return {\n          error: 'invalid',\n          reason: 'not_a_number'\n        };\n      }\n\n      return {\n        error: 'invalid',\n        reason: 'not_a_string'\n      };\n\n    case Number:\n    case _types_Integer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]:\n      // An XLSX file editing software might not always correctly\n      // detect numeric values in string-type cells. Users won't bother\n      // manually selecting a cell type, so the editing software has to guess\n      // based on the user's input. One can assume that such auto-detection\n      // might not always work.\n      //\n      // So, if a cell is supposed to be a numeric one, convert a string value to a number.\n      //\n      if (typeof value === 'string') {\n        var stringifiedValue = value;\n        value = Number(value);\n\n        if (String(value) !== stringifiedValue) {\n          return {\n            error: 'invalid',\n            reason: 'not_a_number_string'\n          };\n        }\n      } else if (typeof value !== 'number') {\n        return {\n          error: 'invalid',\n          reason: 'not_a_number'\n        };\n      } // At this point, `value` can only be a number.\n      //\n      // The global `isFinite()` function filters out:\n      // * NaN\n      // * -Infinity\n      // * Infinity\n      //\n      // All other values pass (including non-numbers).\n      //\n\n\n      if (!isFinite(value)) {\n        return {\n          error: 'invalid',\n          reason: 'not_a_number'\n        };\n      }\n\n      if (type === _types_Integer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] && !(0,_types_Integer_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(value)) {\n        return {\n          error: 'invalid',\n          reason: 'not_an_integer'\n        };\n      }\n\n      return {\n        value: value\n      };\n\n    case _types_URL_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]:\n      if (typeof value === 'string') {\n        if ((0,_types_URL_js__WEBPACK_IMPORTED_MODULE_1__.isURL)(value)) {\n          return {\n            value: value\n          };\n        }\n\n        return {\n          error: 'invalid',\n          reason: 'not_a_url'\n        };\n      }\n\n      return {\n        error: 'invalid',\n        reason: 'not_a_string'\n      };\n\n    case _types_Email_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]:\n      if (typeof value === 'string') {\n        if ((0,_types_Email_js__WEBPACK_IMPORTED_MODULE_2__.isEmail)(value)) {\n          return {\n            value: value\n          };\n        }\n\n        return {\n          error: 'invalid',\n          reason: 'not_an_email'\n        };\n      }\n\n      return {\n        error: 'invalid',\n        reason: 'not_a_string'\n      };\n\n    case Date:\n      // XLSX has no specific format for dates.\n      // Sometimes a date can be heuristically detected.\n      // https://github.com/catamphetamine/read-excel-file/issues/3#issuecomment-395770777\n      if (value instanceof Date) {\n        if (isNaN(value)) {\n          return {\n            error: 'invalid',\n            reason: 'out_of_bounds'\n          };\n        }\n\n        return {\n          value: value\n        };\n      }\n\n      if (typeof value === 'number') {\n        if (!isFinite(value)) {\n          return {\n            error: 'invalid',\n            reason: 'not_a_number'\n          };\n        }\n\n        value = Number(value);\n        var date = (0,_parseDate_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value, options.properties);\n\n        if (isNaN(date)) {\n          return {\n            error: 'invalid',\n            reason: 'out_of_bounds'\n          };\n        }\n\n        return {\n          value: date\n        };\n      }\n\n      return {\n        error: 'invalid',\n        reason: 'not_a_number'\n      };\n\n    case Boolean:\n      if (typeof value === 'boolean') {\n        return {\n          value: value\n        };\n      }\n\n      return {\n        error: 'invalid',\n        reason: 'not_a_boolean'\n      };\n\n    default:\n      if (typeof type === 'function') {\n        return parseCustomValue(value, type);\n      }\n\n      throw new Error(\"Unknown schema type: \".concat(type && type.name || type));\n  }\n}\n\nfunction getBlock(string, endCharacter, startIndex) {\n  var i = 0;\n  var substring = '';\n  var character;\n\n  while (startIndex + i < string.length) {\n    var _character = string[startIndex + i];\n\n    if (_character === endCharacter) {\n      return [substring, i];\n    } else if (_character === '\"') {\n      var block = getBlock(string, '\"', startIndex + i + 1);\n      substring += block[0];\n      i += '\"'.length + block[1] + '\"'.length;\n    } else {\n      substring += _character;\n      i++;\n    }\n  }\n\n  return [substring, i];\n}\n/**\r\n * Parses a string of comma-separated substrings into an array of substrings.\r\n * (the `export` is just for tests)\r\n * @param  {string} string — A string of comma-separated substrings.\r\n * @return {string[]} An array of substrings.\r\n */\n\nfunction parseArray(string) {\n  var blocks = [];\n  var index = 0;\n\n  while (index < string.length) {\n    var _getBlock = getBlock(string, ',', index),\n        _getBlock2 = _slicedToArray(_getBlock, 2),\n        substring = _getBlock2[0],\n        length = _getBlock2[1];\n\n    index += length + ','.length;\n    blocks.push(substring.trim());\n  }\n\n  return blocks;\n} // Transpose a 2D array.\n// https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript\n\nvar transpose = function transpose(array) {\n  return array[0].map(function (_, i) {\n    return array.map(function (row) {\n      return row[i];\n    });\n  });\n};\n\nfunction validateSchema(schema) {\n  for (var _i2 = 0, _Object$keys2 = Object.keys(schema); _i2 < _Object$keys2.length; _i2++) {\n    var key = _Object$keys2[_i2];\n    var entry = schema[key];\n\n    if (!entry.prop) {\n      throw new Error(\"\\\"prop\\\" not defined for schema entry \\\"\".concat(key, \"\\\".\"));\n    }\n  }\n}\n//# sourceMappingURL=convertToJson.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/schema/convertToJson.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/read/unpackXlsxFileBrowser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/read/unpackXlsxFileBrowser.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ unpackXlsxFile)\n/* harmony export */ });\n/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ \"./node_modules/jszip/dist/jszip.min.js\");\n\n/**\r\n * Reads XLSX file in a browser.\r\n * @param  {file} file - A file being uploaded in the browser.\r\n * @return {Promise} Resolves to an object holding XLSX file entries.\r\n */\n\nfunction unpackXlsxFile(file) {\n  var files = {};\n  return jszip__WEBPACK_IMPORTED_MODULE_0__.loadAsync(file).then(function (zip) {\n    var files = [];\n    zip.forEach(function (relativePath, zipEntry) {\n      if (!zipEntry.dir) {\n        files.push(zipEntry.name);\n      }\n    });\n    var entries = {};\n    return Promise.all(files.map(function (file) {\n      return zip.file(file).async('string').then(function (content) {\n        return entries[file] = content;\n      });\n    })).then(function () {\n      return entries;\n    });\n  });\n}\n//# sourceMappingURL=unpackXlsxFileBrowser.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/read/unpackXlsxFileBrowser.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/types/Email.js":
/*!*************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/types/Email.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Email),\n/* harmony export */   \"isEmail\": () => (/* binding */ isEmail)\n/* harmony export */ });\nfunction Email() {}\nvar regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i;\nfunction isEmail(value) {\n  return regexp.test(value);\n}\n//# sourceMappingURL=Email.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/types/Email.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/types/Integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/types/Integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Integer),\n/* harmony export */   \"isInteger\": () => (/* binding */ isInteger)\n/* harmony export */ });\nfunction Integer() {}\nfunction isInteger(x) {\n  // https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript\n  return (x | 0) === x;\n}\n//# sourceMappingURL=Integer.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/types/Integer.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/types/URL.js":
/*!***********************************************************!*\
  !*** ./node_modules/read-excel-file/modules/types/URL.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ URL),\n/* harmony export */   \"isURL\": () => (/* binding */ isURL)\n/* harmony export */ });\nfunction URL() {} // URL regexp explanation:\n//\n// /^\n//\n// \t(?:\n// \t  // Matches optional \"http(s):\" or \"ftp:\":\n// \t\t(?:\n// \t\t\t(?:https?|ftp):\n// \t\t)?\n//\n// \t  // Matches \"//\" (required):\n// \t\t\\/\\/\n// \t)\n//\n// \t// Matches a valid non-local IP address:\n// \t(?:\n// \t\t(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])\n// \t\t(?:\n// \t\t\t\\.\n// \t\t\t(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])\n// \t\t){2}\n// \t\t(?:\n// \t\t\t\\.\n// \t\t\t(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4])\n// \t\t)\n//\n// \t  // Or,\n// \t\t|\n//\n// \t  // Matches an alpha-numeric domain name.\n// \t\t(?:\n// \t\t\t(?:\n// \t\t\t\t[a-z0-9\\u00a1-\\uffff]\n// \t\t\t\t[a-z0-9\\u00a1-\\uffff_-]{0,62}\n// \t\t\t)?\n// \t\t\t[a-z0-9\\u00a1-\\uffff]\n// \t\t\t\\.\n// \t\t)*\n// \t\t(?:\n// \t    // Domain zone: \"com\", \"net\", etc (required):\n// \t\t\t[a-z\\u00a1-\\uffff]{2,}\n// \t\t)\n// \t)\n//\n// \t// Matches a colon and a port number:\n// \t(?::\\d{2,5})?\n//\n// \t// Matches everything after the \"origin\":\n// \t// * pathname\n// \t// * query\n// \t// * hash\n// \t(?:[/?#]\\S*)?\n//\n// $/i\n\nvar regexp = /^(?:(?:(?:https?|ftp):)?\\/\\/)(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)*(?:[a-z\\u00a1-\\uffff]{2,}))(?::\\d{2,5})?(?:[/?#]\\S*)?$/i; // https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url\n\nfunction isURL(value) {\n  return regexp.test(value);\n}\n//# sourceMappingURL=URL.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/types/URL.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/xml/dom.js":
/*!*********************************************************!*\
  !*** ./node_modules/read-excel-file/modules/xml/dom.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findChild\": () => (/* binding */ findChild),\n/* harmony export */   \"findChildren\": () => (/* binding */ findChildren),\n/* harmony export */   \"forEach\": () => (/* binding */ forEach),\n/* harmony export */   \"getOuterXml\": () => (/* binding */ getOuterXml),\n/* harmony export */   \"getTagName\": () => (/* binding */ getTagName),\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\nfunction findChild(node, tagName) {\n  var i = 0;\n\n  while (i < node.childNodes.length) {\n    var childNode = node.childNodes[i]; // `nodeType: 1` means \"Element\".\n    // https://www.w3schools.com/xml/prop_element_nodetype.asp\n\n    if (childNode.nodeType === 1 && getTagName(childNode) === tagName) {\n      return childNode;\n    }\n\n    i++;\n  }\n}\nfunction findChildren(node, tagName) {\n  var results = [];\n  var i = 0;\n\n  while (i < node.childNodes.length) {\n    var childNode = node.childNodes[i]; // `nodeType: 1` means \"Element\".\n    // https://www.w3schools.com/xml/prop_element_nodetype.asp\n\n    if (childNode.nodeType === 1 && getTagName(childNode) === tagName) {\n      results.push(childNode);\n    }\n\n    i++;\n  }\n\n  return results;\n}\nfunction forEach(node, tagName, func) {\n  // if (typeof tagName === 'function') {\n  // \tfunc = tagName\n  // \ttagName = undefined\n  // }\n  var i = 0;\n\n  while (i < node.childNodes.length) {\n    var childNode = node.childNodes[i];\n\n    if (tagName) {\n      // `nodeType: 1` means \"Element\".\n      // https://www.w3schools.com/xml/prop_element_nodetype.asp\n      if (childNode.nodeType === 1 && getTagName(childNode) === tagName) {\n        func(childNode, i);\n      }\n    } else {\n      func(childNode, i);\n    }\n\n    i++;\n  }\n}\nfunction map(node, tagName, func) {\n  var results = [];\n  forEach(node, tagName, function (node, i) {\n    results.push(func(node, i));\n  });\n  return results;\n}\nvar NAMESPACE_REG_EXP = /.+\\:/;\nfunction getTagName(element) {\n  // For some weird reason, if an element is declared as,\n  // for example, `<x:sheets/>`, then its `.tagName` will be\n  // \"x:sheets\" instead of just \"sheets\".\n  // https://gitlab.com/catamphetamine/read-excel-file/-/issues/25\n  // Its not clear how to tell it to ignore any namespaces\n  // when getting `.tagName`, so just replacing anything\n  // before a colon, if any.\n  return element.tagName.replace(NAMESPACE_REG_EXP, '');\n} // This function is only used for occasional debug messages.\n\nfunction getOuterXml(node) {\n  // `nodeType: 1` means \"Element\".\n  // https://www.w3schools.com/xml/prop_element_nodetype.asp\n  if (node.nodeType !== 1) {\n    return node.textContent;\n  }\n\n  var xml = '<' + getTagName(node);\n  var j = 0;\n\n  while (j < node.attributes.length) {\n    xml += ' ' + node.attributes[j].name + '=' + '\"' + node.attributes[j].value + '\"';\n    j++;\n  }\n\n  xml += '>';\n  var i = 0;\n\n  while (i < node.childNodes.length) {\n    xml += getOuterXml(node.childNodes[i]);\n    i++;\n  }\n\n  xml += '</' + getTagName(node) + '>';\n  return xml;\n}\n//# sourceMappingURL=dom.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/xml/dom.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/xml/xlsx.js":
/*!**********************************************************!*\
  !*** ./node_modules/read-excel-file/modules/xml/xlsx.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBaseStyles\": () => (/* binding */ getBaseStyles),\n/* harmony export */   \"getCellInlineStringValue\": () => (/* binding */ getCellInlineStringValue),\n/* harmony export */   \"getCellStyles\": () => (/* binding */ getCellStyles),\n/* harmony export */   \"getCellValue\": () => (/* binding */ getCellValue),\n/* harmony export */   \"getCells\": () => (/* binding */ getCells),\n/* harmony export */   \"getDimensions\": () => (/* binding */ getDimensions),\n/* harmony export */   \"getMergedCells\": () => (/* binding */ getMergedCells),\n/* harmony export */   \"getNumberFormats\": () => (/* binding */ getNumberFormats),\n/* harmony export */   \"getRelationships\": () => (/* binding */ getRelationships),\n/* harmony export */   \"getSharedStrings\": () => (/* binding */ getSharedStrings),\n/* harmony export */   \"getSheets\": () => (/* binding */ getSheets),\n/* harmony export */   \"getWorkbookProperties\": () => (/* binding */ getWorkbookProperties)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./node_modules/read-excel-file/modules/xml/dom.js\");\n\nfunction getCells(document) {\n  var worksheet = document.documentElement;\n  var sheetData = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(worksheet, 'sheetData');\n  var cells = [];\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(sheetData, 'row', function (row) {\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(row, 'c', function (cell) {\n      cells.push(cell);\n    });\n  });\n  return cells;\n}\nfunction getMergedCells(document) {\n  var worksheet = document.documentElement;\n  var mergedCells = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(worksheet, 'mergeCells');\n  var mergedCellsInfo = [];\n\n  if (mergedCells) {\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(mergedCells, 'mergeCell', function (mergedCell) {\n      mergedCellsInfo.push(mergedCell.getAttribute('ref'));\n    });\n  }\n\n  return mergedCellsInfo;\n}\nfunction getCellValue(document, node) {\n  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(node, 'v');\n}\nfunction getCellInlineStringValue(document, node) {\n  if (node.firstChild && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.getTagName)(node.firstChild) === 'is' && node.firstChild.firstChild && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.getTagName)(node.firstChild.firstChild) === 't') {\n    return node.firstChild.firstChild.textContent;\n  }\n}\nfunction getDimensions(document) {\n  var worksheet = document.documentElement;\n  var dimensions = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(worksheet, 'dimension');\n\n  if (dimensions) {\n    return dimensions.getAttribute('ref');\n  }\n}\nfunction getBaseStyles(document) {\n  var styleSheet = document.documentElement;\n  var cellStyleXfs = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(styleSheet, 'cellStyleXfs');\n\n  if (cellStyleXfs) {\n    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChildren)(cellStyleXfs, 'xf');\n  }\n\n  return [];\n}\nfunction getCellStyles(document) {\n  var styleSheet = document.documentElement;\n  var cellXfs = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(styleSheet, 'cellXfs');\n\n  if (!cellXfs) {\n    return [];\n  }\n\n  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChildren)(cellXfs, 'xf');\n}\nfunction getNumberFormats(document) {\n  var styleSheet = document.documentElement;\n  var numberFormats = [];\n  var numFmts = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(styleSheet, 'numFmts');\n\n  if (numFmts) {\n    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChildren)(numFmts, 'numFmt');\n  }\n\n  return [];\n}\nfunction getSharedStrings(document) {\n  // An `<si/>` element can contain a `<t/>` (simplest case) or a set of `<r/>` (\"rich formatting\") elements having `<t/>`.\n  // https://docs.microsoft.com/en-us/dotnet/api/documentformat.openxml.spreadsheet.sharedstringitem?redirectedfrom=MSDN&view=openxml-2.8.1\n  // http://www.datypic.com/sc/ooxml/e-ssml_si-1.html\n  var sst = document.documentElement;\n  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.map)(sst, 'si', function (string) {\n    var t = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(string, 't');\n\n    if (t) {\n      return t.textContent;\n    }\n\n    var value = '';\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.forEach)(string, 'r', function (r) {\n      value += (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(r, 't').textContent;\n    });\n    return value;\n  });\n}\nfunction getWorkbookProperties(document) {\n  var workbook = document.documentElement;\n  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(workbook, 'workbookPr');\n}\nfunction getRelationships(document) {\n  var relationships = document.documentElement;\n  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChildren)(relationships, 'Relationship');\n}\nfunction getSheets(document) {\n  var workbook = document.documentElement;\n  var sheets = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChild)(workbook, 'sheets');\n  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.findChildren)(sheets, 'sheet');\n}\n//# sourceMappingURL=xlsx.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/xml/xlsx.js?");

/***/ }),

/***/ "./node_modules/read-excel-file/modules/xml/xmlBrowser.js":
/*!****************************************************************!*\
  !*** ./node_modules/read-excel-file/modules/xml/xmlBrowser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createDocument: function createDocument(content) {\n    // if (!content) {\n    // \tthrow new Error('No *.xml content')\n    // }\n    // A weird bug: it won't parse XML unless it's trimmed.\n    // https://github.com/catamphetamine/read-excel-file/issues/21\n    return new DOMParser().parseFromString(content.trim(), 'text/xml');\n  }\n});\n//# sourceMappingURL=xmlBrowser.js.map\n\n//# sourceURL=webpack://word-learning/./node_modules/read-excel-file/modules/xml/xmlBrowser.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("2e0c368fba71c9017125")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "word-learning:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateword_learning"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;