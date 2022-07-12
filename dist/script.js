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

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

eval("var global = typeof self !== 'undefined' ? self : this;\nvar __self__ = (function () {\nfunction F() {\nthis.fetch = false;\nthis.DOMException = global.DOMException\n}\nF.prototype = global;\nreturn new F();\n})();\n(function(self) {\n\nvar irrelevant = (function (exports) {\n\n  var support = {\n    searchParams: 'URLSearchParams' in self,\n    iterable: 'Symbol' in self && 'iterator' in Symbol,\n    blob:\n      'FileReader' in self &&\n      'Blob' in self &&\n      (function() {\n        try {\n          new Blob();\n          return true\n        } catch (e) {\n          return false\n        }\n      })(),\n    formData: 'FormData' in self,\n    arrayBuffer: 'ArrayBuffer' in self\n  };\n\n  function isDataView(obj) {\n    return obj && DataView.prototype.isPrototypeOf(obj)\n  }\n\n  if (support.arrayBuffer) {\n    var viewClasses = [\n      '[object Int8Array]',\n      '[object Uint8Array]',\n      '[object Uint8ClampedArray]',\n      '[object Int16Array]',\n      '[object Uint16Array]',\n      '[object Int32Array]',\n      '[object Uint32Array]',\n      '[object Float32Array]',\n      '[object Float64Array]'\n    ];\n\n    var isArrayBufferView =\n      ArrayBuffer.isView ||\n      function(obj) {\n        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n      };\n  }\n\n  function normalizeName(name) {\n    if (typeof name !== 'string') {\n      name = String(name);\n    }\n    if (/[^a-z0-9\\-#$%&'*+.^_`|~]/i.test(name)) {\n      throw new TypeError('Invalid character in header field name')\n    }\n    return name.toLowerCase()\n  }\n\n  function normalizeValue(value) {\n    if (typeof value !== 'string') {\n      value = String(value);\n    }\n    return value\n  }\n\n  // Build a destructive iterator for the value list\n  function iteratorFor(items) {\n    var iterator = {\n      next: function() {\n        var value = items.shift();\n        return {done: value === undefined, value: value}\n      }\n    };\n\n    if (support.iterable) {\n      iterator[Symbol.iterator] = function() {\n        return iterator\n      };\n    }\n\n    return iterator\n  }\n\n  function Headers(headers) {\n    this.map = {};\n\n    if (headers instanceof Headers) {\n      headers.forEach(function(value, name) {\n        this.append(name, value);\n      }, this);\n    } else if (Array.isArray(headers)) {\n      headers.forEach(function(header) {\n        this.append(header[0], header[1]);\n      }, this);\n    } else if (headers) {\n      Object.getOwnPropertyNames(headers).forEach(function(name) {\n        this.append(name, headers[name]);\n      }, this);\n    }\n  }\n\n  Headers.prototype.append = function(name, value) {\n    name = normalizeName(name);\n    value = normalizeValue(value);\n    var oldValue = this.map[name];\n    this.map[name] = oldValue ? oldValue + ', ' + value : value;\n  };\n\n  Headers.prototype['delete'] = function(name) {\n    delete this.map[normalizeName(name)];\n  };\n\n  Headers.prototype.get = function(name) {\n    name = normalizeName(name);\n    return this.has(name) ? this.map[name] : null\n  };\n\n  Headers.prototype.has = function(name) {\n    return this.map.hasOwnProperty(normalizeName(name))\n  };\n\n  Headers.prototype.set = function(name, value) {\n    this.map[normalizeName(name)] = normalizeValue(value);\n  };\n\n  Headers.prototype.forEach = function(callback, thisArg) {\n    for (var name in this.map) {\n      if (this.map.hasOwnProperty(name)) {\n        callback.call(thisArg, this.map[name], name, this);\n      }\n    }\n  };\n\n  Headers.prototype.keys = function() {\n    var items = [];\n    this.forEach(function(value, name) {\n      items.push(name);\n    });\n    return iteratorFor(items)\n  };\n\n  Headers.prototype.values = function() {\n    var items = [];\n    this.forEach(function(value) {\n      items.push(value);\n    });\n    return iteratorFor(items)\n  };\n\n  Headers.prototype.entries = function() {\n    var items = [];\n    this.forEach(function(value, name) {\n      items.push([name, value]);\n    });\n    return iteratorFor(items)\n  };\n\n  if (support.iterable) {\n    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;\n  }\n\n  function consumed(body) {\n    if (body.bodyUsed) {\n      return Promise.reject(new TypeError('Already read'))\n    }\n    body.bodyUsed = true;\n  }\n\n  function fileReaderReady(reader) {\n    return new Promise(function(resolve, reject) {\n      reader.onload = function() {\n        resolve(reader.result);\n      };\n      reader.onerror = function() {\n        reject(reader.error);\n      };\n    })\n  }\n\n  function readBlobAsArrayBuffer(blob) {\n    var reader = new FileReader();\n    var promise = fileReaderReady(reader);\n    reader.readAsArrayBuffer(blob);\n    return promise\n  }\n\n  function readBlobAsText(blob) {\n    var reader = new FileReader();\n    var promise = fileReaderReady(reader);\n    reader.readAsText(blob);\n    return promise\n  }\n\n  function readArrayBufferAsText(buf) {\n    var view = new Uint8Array(buf);\n    var chars = new Array(view.length);\n\n    for (var i = 0; i < view.length; i++) {\n      chars[i] = String.fromCharCode(view[i]);\n    }\n    return chars.join('')\n  }\n\n  function bufferClone(buf) {\n    if (buf.slice) {\n      return buf.slice(0)\n    } else {\n      var view = new Uint8Array(buf.byteLength);\n      view.set(new Uint8Array(buf));\n      return view.buffer\n    }\n  }\n\n  function Body() {\n    this.bodyUsed = false;\n\n    this._initBody = function(body) {\n      this._bodyInit = body;\n      if (!body) {\n        this._bodyText = '';\n      } else if (typeof body === 'string') {\n        this._bodyText = body;\n      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n        this._bodyBlob = body;\n      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n        this._bodyFormData = body;\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this._bodyText = body.toString();\n      } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n        this._bodyArrayBuffer = bufferClone(body.buffer);\n        // IE 10-11 can't handle a DataView body.\n        this._bodyInit = new Blob([this._bodyArrayBuffer]);\n      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n        this._bodyArrayBuffer = bufferClone(body);\n      } else {\n        this._bodyText = body = Object.prototype.toString.call(body);\n      }\n\n      if (!this.headers.get('content-type')) {\n        if (typeof body === 'string') {\n          this.headers.set('content-type', 'text/plain;charset=UTF-8');\n        } else if (this._bodyBlob && this._bodyBlob.type) {\n          this.headers.set('content-type', this._bodyBlob.type);\n        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');\n        }\n      }\n    };\n\n    if (support.blob) {\n      this.blob = function() {\n        var rejected = consumed(this);\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return Promise.resolve(this._bodyBlob)\n        } else if (this._bodyArrayBuffer) {\n          return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as blob')\n        } else {\n          return Promise.resolve(new Blob([this._bodyText]))\n        }\n      };\n\n      this.arrayBuffer = function() {\n        if (this._bodyArrayBuffer) {\n          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)\n        } else {\n          return this.blob().then(readBlobAsArrayBuffer)\n        }\n      };\n    }\n\n    this.text = function() {\n      var rejected = consumed(this);\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return readBlobAsText(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as text')\n      } else {\n        return Promise.resolve(this._bodyText)\n      }\n    };\n\n    if (support.formData) {\n      this.formData = function() {\n        return this.text().then(decode)\n      };\n    }\n\n    this.json = function() {\n      return this.text().then(JSON.parse)\n    };\n\n    return this\n  }\n\n  // HTTP methods whose capitalization should be normalized\n  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];\n\n  function normalizeMethod(method) {\n    var upcased = method.toUpperCase();\n    return methods.indexOf(upcased) > -1 ? upcased : method\n  }\n\n  function Request(input, options) {\n    options = options || {};\n    var body = options.body;\n\n    if (input instanceof Request) {\n      if (input.bodyUsed) {\n        throw new TypeError('Already read')\n      }\n      this.url = input.url;\n      this.credentials = input.credentials;\n      if (!options.headers) {\n        this.headers = new Headers(input.headers);\n      }\n      this.method = input.method;\n      this.mode = input.mode;\n      this.signal = input.signal;\n      if (!body && input._bodyInit != null) {\n        body = input._bodyInit;\n        input.bodyUsed = true;\n      }\n    } else {\n      this.url = String(input);\n    }\n\n    this.credentials = options.credentials || this.credentials || 'same-origin';\n    if (options.headers || !this.headers) {\n      this.headers = new Headers(options.headers);\n    }\n    this.method = normalizeMethod(options.method || this.method || 'GET');\n    this.mode = options.mode || this.mode || null;\n    this.signal = options.signal || this.signal;\n    this.referrer = null;\n\n    if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n      throw new TypeError('Body not allowed for GET or HEAD requests')\n    }\n    this._initBody(body);\n  }\n\n  Request.prototype.clone = function() {\n    return new Request(this, {body: this._bodyInit})\n  };\n\n  function decode(body) {\n    var form = new FormData();\n    body\n      .trim()\n      .split('&')\n      .forEach(function(bytes) {\n        if (bytes) {\n          var split = bytes.split('=');\n          var name = split.shift().replace(/\\+/g, ' ');\n          var value = split.join('=').replace(/\\+/g, ' ');\n          form.append(decodeURIComponent(name), decodeURIComponent(value));\n        }\n      });\n    return form\n  }\n\n  function parseHeaders(rawHeaders) {\n    var headers = new Headers();\n    // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n    // https://tools.ietf.org/html/rfc7230#section-3.2\n    var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ');\n    preProcessedHeaders.split(/\\r?\\n/).forEach(function(line) {\n      var parts = line.split(':');\n      var key = parts.shift().trim();\n      if (key) {\n        var value = parts.join(':').trim();\n        headers.append(key, value);\n      }\n    });\n    return headers\n  }\n\n  Body.call(Request.prototype);\n\n  function Response(bodyInit, options) {\n    if (!options) {\n      options = {};\n    }\n\n    this.type = 'default';\n    this.status = options.status === undefined ? 200 : options.status;\n    this.ok = this.status >= 200 && this.status < 300;\n    this.statusText = 'statusText' in options ? options.statusText : 'OK';\n    this.headers = new Headers(options.headers);\n    this.url = options.url || '';\n    this._initBody(bodyInit);\n  }\n\n  Body.call(Response.prototype);\n\n  Response.prototype.clone = function() {\n    return new Response(this._bodyInit, {\n      status: this.status,\n      statusText: this.statusText,\n      headers: new Headers(this.headers),\n      url: this.url\n    })\n  };\n\n  Response.error = function() {\n    var response = new Response(null, {status: 0, statusText: ''});\n    response.type = 'error';\n    return response\n  };\n\n  var redirectStatuses = [301, 302, 303, 307, 308];\n\n  Response.redirect = function(url, status) {\n    if (redirectStatuses.indexOf(status) === -1) {\n      throw new RangeError('Invalid status code')\n    }\n\n    return new Response(null, {status: status, headers: {location: url}})\n  };\n\n  exports.DOMException = self.DOMException;\n  try {\n    new exports.DOMException();\n  } catch (err) {\n    exports.DOMException = function(message, name) {\n      this.message = message;\n      this.name = name;\n      var error = Error(message);\n      this.stack = error.stack;\n    };\n    exports.DOMException.prototype = Object.create(Error.prototype);\n    exports.DOMException.prototype.constructor = exports.DOMException;\n  }\n\n  function fetch(input, init) {\n    return new Promise(function(resolve, reject) {\n      var request = new Request(input, init);\n\n      if (request.signal && request.signal.aborted) {\n        return reject(new exports.DOMException('Aborted', 'AbortError'))\n      }\n\n      var xhr = new XMLHttpRequest();\n\n      function abortXhr() {\n        xhr.abort();\n      }\n\n      xhr.onload = function() {\n        var options = {\n          status: xhr.status,\n          statusText: xhr.statusText,\n          headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n        };\n        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');\n        var body = 'response' in xhr ? xhr.response : xhr.responseText;\n        resolve(new Response(body, options));\n      };\n\n      xhr.onerror = function() {\n        reject(new TypeError('Network request failed'));\n      };\n\n      xhr.ontimeout = function() {\n        reject(new TypeError('Network request failed'));\n      };\n\n      xhr.onabort = function() {\n        reject(new exports.DOMException('Aborted', 'AbortError'));\n      };\n\n      xhr.open(request.method, request.url, true);\n\n      if (request.credentials === 'include') {\n        xhr.withCredentials = true;\n      } else if (request.credentials === 'omit') {\n        xhr.withCredentials = false;\n      }\n\n      if ('responseType' in xhr && support.blob) {\n        xhr.responseType = 'blob';\n      }\n\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value);\n      });\n\n      if (request.signal) {\n        request.signal.addEventListener('abort', abortXhr);\n\n        xhr.onreadystatechange = function() {\n          // DONE (success or failure)\n          if (xhr.readyState === 4) {\n            request.signal.removeEventListener('abort', abortXhr);\n          }\n        };\n      }\n\n      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);\n    })\n  }\n\n  fetch.polyfill = true;\n\n  if (!self.fetch) {\n    self.fetch = fetch;\n    self.Headers = Headers;\n    self.Request = Request;\n    self.Response = Response;\n  }\n\n  exports.Headers = Headers;\n  exports.Request = Request;\n  exports.Response = Response;\n  exports.fetch = fetch;\n\n  Object.defineProperty(exports, '__esModule', { value: true });\n\n  return exports;\n\n})({});\n})(__self__);\n__self__.fetch.ponyfill = true;\n// Remove \"polyfill\" property added by whatwg-fetch\ndelete __self__.fetch.polyfill;\n// Choose between native implementation (global) or custom implementation (__self__)\n// var ctx = global.fetch ? global : __self__;\nvar ctx = __self__; // this line disable service worker support temporarily\nexports = ctx.fetch // To enable: import fetch from 'cross-fetch'\nexports[\"default\"] = ctx.fetch // For TypeScript consumers without esModuleInterop.\nexports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'\nexports.Headers = ctx.Headers\nexports.Request = ctx.Request\nexports.Response = ctx.Response\nmodule.exports = exports\n\n\n//# sourceURL=webpack://word-learning/./node_modules/cross-fetch/dist/browser-ponyfill.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./source/styles/main.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./source/styles/main.scss ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  padding: 15px 15px;\\n  max-width: 1200px;\\n  margin: auto;\\n}\\n@media screen and (max-width: 480px) {\\n  .container {\\n    width: 90%;\\n  }\\n}\\n\\nh1 {\\n  text-align: center;\\n}\\n\\n.word {\\n  width: 48%;\\n  display: inline-block;\\n}\\n@media screen and (max-width: 480px) {\\n  .word {\\n    width: 100%;\\n    display: block;\\n  }\\n}\\n.word p {\\n  font-size: 30px;\\n}\\n@media screen and (max-width: 480px) {\\n  .word p {\\n    text-align: center;\\n  }\\n}\\n\\n.translation {\\n  width: 48%;\\n  display: inline-block;\\n}\\n.translation p {\\n  text-align: center;\\n}\\n@media screen and (max-width: 480px) {\\n  .translation {\\n    width: 100%;\\n    display: block;\\n  }\\n}\\n.translation p {\\n  font-size: 30px;\\n}\\n@media screen and (max-width: 480px) {\\n  .translation p {\\n    text-align: center;\\n  }\\n}\\n\\n#change-text {\\n  margin-top: 10px;\\n  line-height: 38px;\\n  display: inline-block;\\n  text-align: left;\\n  width: 50%;\\n}\\n@media screen and (max-width: 480px) {\\n  #change-text {\\n    width: 100%;\\n    display: block;\\n    text-align: center;\\n  }\\n}\\n\\n#change-button {\\n  margin-top: 10px;\\n  display: inline-block;\\n  float: right;\\n  vertical-align: middle;\\n}\\n@media screen and (max-width: 480px) {\\n  #change-button {\\n    width: 100%;\\n    display: block;\\n    float: none;\\n    text-align: center;\\n  }\\n}\\n#change-button button {\\n  font-size: 24px;\\n  background-color: blue;\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n}\\n\\n.training-side {\\n  margin-top: 20px;\\n}\\n@media screen and (max-width: 480px) {\\n  .training-side {\\n    margin-top: 120px;\\n  }\\n}\\n\\n.total {\\n  position: fixed;\\n  top: 80%;\\n  left: 0;\\n  width: 100%;\\n}\\n.total p {\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://word-learning/./source/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./node_modules/g-sheets-api/build/gsheetsapi.js":
/*!*******************************************************!*\
  !*** ./node_modules/g-sheets-api/build/gsheetsapi.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _crossFetch = _interopRequireDefault(__webpack_require__(/*! cross-fetch */ \"./node_modules/cross-fetch/dist/browser-ponyfill.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar gsheetsAPI = function gsheetsAPI(_ref) {\n  var apiKey = _ref.apiKey,\n      sheetId = _ref.sheetId,\n      sheetName = _ref.sheetName,\n      _ref$sheetNumber = _ref.sheetNumber,\n      sheetNumber = _ref$sheetNumber === void 0 ? 1 : _ref$sheetNumber;\n\n  try {\n    var sheetNameStr = sheetName && sheetName !== '' ? encodeURIComponent(sheetName) : \"Sheet\".concat(sheetNumber);\n    var sheetsUrl = \"https://sheets.googleapis.com/v4/spreadsheets/\".concat(sheetId, \"/values/\").concat(sheetNameStr, \"?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=\").concat(apiKey);\n    return (0, _crossFetch.default)(sheetsUrl).then(function (response) {\n      if (!response.ok) {\n        console.log('there is an error in the gsheets response');\n        throw new Error('Error fetching GSheet');\n      }\n\n      return response.json();\n    }).then(function (data) {\n      return data;\n    }).catch(function (err) {\n      throw new Error('Failed to fetch from GSheets API. Check your Sheet Id and the public availability of your GSheet.');\n    });\n  } catch (err) {\n    throw new Error(\"General error when fetching GSheet: \".concat(err));\n  }\n};\n\nvar _default = gsheetsAPI;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://word-learning/./node_modules/g-sheets-api/build/gsheetsapi.js?");

/***/ }),

/***/ "./node_modules/g-sheets-api/build/gsheetsprocessor.js":
/*!*************************************************************!*\
  !*** ./node_modules/g-sheets-api/build/gsheetsprocessor.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _gsheetsapi = _interopRequireDefault(__webpack_require__(/*! ./gsheetsapi.js */ \"./node_modules/g-sheets-api/build/gsheetsapi.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction matchValues(valToMatch, valToMatchAgainst, matchingType) {\n  try {\n    if (typeof valToMatch != 'undefined') {\n      valToMatch = valToMatch.toLowerCase().trim();\n      valToMatchAgainst = valToMatchAgainst.toLowerCase().trim();\n\n      if (matchingType === 'strict') {\n        return valToMatch === valToMatchAgainst;\n      }\n\n      if (matchingType === 'loose') {\n        return valToMatch.includes(valToMatchAgainst) || valToMatch == valToMatchAgainst;\n      }\n    }\n  } catch (e) {\n    console.log(\"error in matchValues: \".concat(e.message));\n    return false;\n  }\n\n  return false;\n}\n\nfunction filterResults(resultsToFilter, filter, options) {\n  var filteredData = []; // now we have a list of rows, we can filter by various things\n\n  return resultsToFilter.filter(function (item) {\n    // item data shape\n    // item = {\n    //   'Module Name': 'name of module',\n    //   ...\n    //   Department: 'Computer science'\n    // }\n    var addRow = null;\n    var filterMatches = [];\n\n    if (typeof item === 'undefined' || item.length <= 0 || Object.keys(item).length <= 0) {\n      return false;\n    }\n\n    Object.keys(filter).forEach(function (key) {\n      var filterValue = filter[key]; // e.g. 'archaeology'\n      // need to find a matching item object key in case of case differences\n\n      var itemKey = Object.keys(item).find(function (thisKey) {\n        return thisKey.toLowerCase().trim() === key.toLowerCase().trim();\n      });\n      var itemValue = item[itemKey]; // e.g. 'department' or 'undefined'\n\n      filterMatches.push(matchValues(itemValue, filterValue, options.matching || 'loose'));\n    });\n\n    if (options.operator === 'or') {\n      addRow = filterMatches.some(function (match) {\n        return match === true;\n      });\n    }\n\n    if (options.operator === 'and') {\n      addRow = filterMatches.every(function (match) {\n        return match === true;\n      });\n    }\n\n    return addRow;\n  });\n}\n\nfunction processGSheetResults(JSONResponse, returnAllResults, filter, filterOptions) {\n  var data = JSONResponse.values;\n  var startRow = 1; // skip the header row(1), don't need it\n\n  var processedResults = [{}];\n  var colNames = {};\n\n  for (var i = 0; i < data.length; i++) {\n    // Rows\n    var thisRow = data[i];\n\n    for (var j = 0; j < thisRow.length; j++) {\n      // Columns/cells\n      var cellValue = thisRow[j];\n      var colNameToAdd = colNames[j]; // this will be undefined on the first pass\n\n      if (i < startRow) {\n        colNames[j] = cellValue;\n        continue; // skip the header row\n      }\n\n      if (typeof processedResults[i] === 'undefined') {\n        processedResults[i] = {};\n      }\n\n      if (typeof colNameToAdd !== 'undefined' && colNameToAdd.length > 0) {\n        processedResults[i][colNameToAdd] = cellValue;\n      }\n    }\n  } // make sure we're only returning valid, filled data items\n\n\n  processedResults = processedResults.filter(function (result) {\n    return Object.keys(result).length;\n  }); // if we're not filtering, then return all results\n\n  if (returnAllResults || !filter) {\n    return processedResults;\n  }\n\n  return filterResults(processedResults, filter, filterOptions);\n}\n\nvar gsheetProcessor = function gsheetProcessor(options, callback, onError) {\n  var apiKey = options.apiKey,\n      sheetId = options.sheetId,\n      sheetName = options.sheetName,\n      sheetNumber = options.sheetNumber,\n      returnAllResults = options.returnAllResults,\n      filter = options.filter,\n      filterOptions = options.filterOptions;\n\n  if (!options.apiKey || options.apiKey === undefined) {\n    throw new Error('Missing Sheets API key');\n  }\n\n  return (0, _gsheetsapi.default)({\n    apiKey: apiKey,\n    sheetId: sheetId,\n    sheetName: sheetName,\n    sheetNumber: sheetNumber\n  }).then(function (result) {\n    var filteredResults = processGSheetResults(result, returnAllResults || false, filter || false, filterOptions || {\n      operator: 'or',\n      matching: 'loose'\n    });\n    callback(filteredResults);\n  }).catch(function (err) {\n    return onError(err.message);\n  });\n};\n\nvar _default = gsheetProcessor;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://word-learning/./node_modules/g-sheets-api/build/gsheetsprocessor.js?");

/***/ }),

/***/ "./node_modules/g-sheets-api/build/index.js":
/*!**************************************************!*\
  !*** ./node_modules/g-sheets-api/build/index.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _gsheetsprocessor = _interopRequireDefault(__webpack_require__(/*! ./gsheetsprocessor.js */ \"./node_modules/g-sheets-api/build/gsheetsprocessor.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reader = function reader(options, callback, onError) {\n  return (0, _gsheetsprocessor.default)(options, function (results) {\n    callback(results);\n  }, function (error) {\n    if (onError) {\n      onError(error);\n    } else {\n      throw new Error(\"g-sheets-api error: \".concat(error));\n    }\n  });\n};\n\nmodule.exports = reader;\nvar _default = reader;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://word-learning/./node_modules/g-sheets-api/build/index.js?");

/***/ }),

/***/ "./source/styles/main.scss":
/*!*********************************!*\
  !*** ./source/styles/main.scss ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./source/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./source/styles/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./source/styles/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://word-learning/./source/styles/main.scss?");

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

/***/ "./source/js/getData.js":
/*!******************************!*\
  !*** ./source/js/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getLocalStorege\": () => (/* binding */ getLocalStorege)\n/* harmony export */ });\nconst reader = __webpack_require__(/*! g-sheets-api */ \"./node_modules/g-sheets-api/build/index.js\");\r\n\r\nconst readerOptions = {\r\n  apiKey: 'AIzaSyBGIB_zTm4GCRAIChXoqtSTEUpVujf_sxU',\r\n  sheetId: '1aqssJJ9IvDDO21ylxiXSW2SjuPK5iO8r3tdZhGjGgBk',\r\n  sheetNumber: 1,\r\n  returnAllResults: false,\r\n};\r\n\r\n\r\n\r\nasync function getLocalStorege() {\r\n  let res = []\r\n  res =  await JSON.parse(localStorage.getItem('words'));\r\n  if(res) {\r\n    await console.log('getting cashe - ' + res.length + ' words')\r\n  }\r\n  \r\n  return res\r\n}\r\n\r\n\r\nasync function getData() {\r\n        let res = []\r\n        await reader(readerOptions, (results) => {\r\n            res = results\r\n            console.log('getting data from google spreadsheets - ' + res.length + ' words')\r\n        })\r\n        return res\r\n    }\r\n\n\n//# sourceURL=webpack://word-learning/./source/js/getData.js?");

/***/ }),

/***/ "./source/js/lib.js":
/*!**************************!*\
  !*** ./source/js/lib.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeLang\": () => (/* binding */ changeLang),\n/* harmony export */   \"nextWord\": () => (/* binding */ nextWord),\n/* harmony export */   \"saveChangeToLocalStorage\": () => (/* binding */ saveChangeToLocalStorage),\n/* harmony export */   \"saveDataToLocalStorage\": () => (/* binding */ saveDataToLocalStorage),\n/* harmony export */   \"setTotalWords\": () => (/* binding */ setTotalWords),\n/* harmony export */   \"showTranslation\": () => (/* binding */ showTranslation),\n/* harmony export */   \"showWord\": () => (/* binding */ showWord)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./source/js/script.js\");\n/* harmony import */ var easy_speech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! easy-speech */ \"./node_modules/easy-speech/index.js\");\n\r\n\r\n\r\neasy_speech__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init()\r\n\r\nlet space = false\r\nlet lang\r\nlet id = 0\r\nlet word = document.getElementById('word')\r\nlet translation = document.getElementById('translation')\r\nlet changeText = document.getElementById('change-text')\r\nlet changeButton = document.getElementById('change-button')\r\nlet totalWords = document.getElementById('total-words')\r\nlet speakEnglish = document.getElementById('speak')\r\nlet speakVariable = ''\r\n\r\n\r\n// upload lang variables\r\nif (localStorage.getItem('сhange') != 1) {\r\n  lang = Boolean(localStorage.getItem('lang'))\r\n    changeText.innerHTML = \"English word - Russian word\"\r\n} else {\r\n  lang = true\r\n  changeText.innerHTML = \"Russian word - English word\"\r\n  console.log('are been set Russians ' + lang)\r\n}\r\n\r\n\r\n\r\n\r\n  function nextWord() {\r\n        console.log('next word')\r\n        if(space === true) {\r\n          id = Math.floor(Math.random() * _script__WEBPACK_IMPORTED_MODULE_0__.words.length)\r\n          showWord(id)\r\n          space = !space;\r\n        } else {\r\n          showTranslation(id)\r\n          space = !space;\r\n        }\r\n  }\r\n  function changeLang() {\r\n    id = Math.floor(Math.random() * _script__WEBPACK_IMPORTED_MODULE_0__.words.length)\r\n    showWord(id);\r\n    space = !space;\r\n  }\r\n  function showWord(id) {\r\n    if (lang) {\r\n      word.innerHTML = _script__WEBPACK_IMPORTED_MODULE_0__.words[id].translation\r\n    } else {\r\n      word.innerHTML = _script__WEBPACK_IMPORTED_MODULE_0__.words[id].word\r\n    }\r\n    speakVariable = _script__WEBPACK_IMPORTED_MODULE_0__.words[id].word\r\n    translation.innerHTML = \"?\"\r\n    setTotalWords()\r\n  }\r\n  function showTranslation(id) {\r\n    if (lang) {\r\n      translation.innerHTML = _script__WEBPACK_IMPORTED_MODULE_0__.words[id].word\r\n    } else {\r\n      translation.innerHTML = _script__WEBPACK_IMPORTED_MODULE_0__.words[id].translation\r\n    }\r\n    _script__WEBPACK_IMPORTED_MODULE_0__.words.splice(id, 1);\r\n    saveDataToLocalStorage()\r\n  }\r\n// managing words\r\n\r\ndocument.addEventListener('swiped-up', function(e) {\r\n\r\n    (0,_script__WEBPACK_IMPORTED_MODULE_0__.refreshData)() // the element that was swiped\r\n});\r\ndocument.addEventListener('swiped', function(e) {\r\n   if(_script__WEBPACK_IMPORTED_MODULE_0__.words.length > 0) {\r\n        nextWord()\r\n      } else {\r\n        (0,_script__WEBPACK_IMPORTED_MODULE_0__.refreshData)()\r\n      }\r\n});\r\nchangeButton.addEventListener(\"click\", event => {\r\n  if (lang) {\r\n    let promise = new Promise((resolve, reject)=> {\r\n    console.log('changing h2')\r\n    changeText.innerHTML = \"English word - Russian word\"\r\n    lang = !lang\r\n    space = false\r\n    resolve()\r\n    })\r\n    promise.then(()=> {\r\n    ;(0,_script__WEBPACK_IMPORTED_MODULE_0__.refreshData)()\r\n    }).then(()=>{\r\n      console.log('done')\r\n    })\r\n  } else {\r\n    changeText.innerHTML = \"Russian word - English word\"\r\n    lang = !lang\r\n    ;(0,_script__WEBPACK_IMPORTED_MODULE_0__.refreshData)()\r\n\r\n  }\r\n})\r\ndocument.addEventListener(\"keypress\", function(event) {\r\n      // push space button \r\n      if (event.keyCode === 32) {\r\n        if(_script__WEBPACK_IMPORTED_MODULE_0__.words.length > 0) {\r\n          nextWord()\r\n        } else {\r\n          (0,_script__WEBPACK_IMPORTED_MODULE_0__.refreshData)()\r\n        }\r\n      }\r\n      // push page up button \r\n      if (event.keyCode === 82) {\r\n        console.log('request from the user to update the data')\r\n        ;(0,_script__WEBPACK_IMPORTED_MODULE_0__.refreshData)()\r\n      }\r\n    \r\n    });\r\nspeakEnglish.addEventListener('click', (item) => {\r\n  Speak(speakVariable);\r\n})\r\n \r\nfunction setTotalWords() {\r\n    totalWords.innerHTML = _script__WEBPACK_IMPORTED_MODULE_0__.words.length\r\n}\r\n\r\nfunction saveDataToLocalStorage() {\r\n  localStorage.setItem('words', JSON.stringify(_script__WEBPACK_IMPORTED_MODULE_0__.words));\r\n}\r\nfunction saveChangeToLocalStorage(){\r\n  if(lang) {\r\n    localStorage.setItem('lang', '1');\r\n  } else {\r\n    localStorage.setItem('lang', '');\r\n  }\r\n  console.log('saved the Lang to local storage')\r\n}\r\n\r\nasync function Speak(words) {\r\n  await easy_speech__WEBPACK_IMPORTED_MODULE_1__[\"default\"].speak({\r\n    rate: 1, // 0.1 to 10\r\n    pitch: 1, //0 to 2\r\n    text: speakVariable,\r\n    lang: 'en-US',\r\n  })\r\n}\n\n//# sourceURL=webpack://word-learning/./source/js/lib.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshData\": () => (/* binding */ refreshData),\n/* harmony export */   \"words\": () => (/* binding */ words)\n/* harmony export */ });\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./source/styles/main.scss\");\n/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swipe */ \"./source/js/swipe.js\");\n/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swipe__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ \"./source/js/getData.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib */ \"./source/js/lib.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet words = []\r\nlet id = 0\r\n;\r\n\r\n\r\n\r\n\r\nfunction refreshData() {\r\n    const promise = new Promise((resolve, reject) => {\r\n      resolve((0,_getData__WEBPACK_IMPORTED_MODULE_2__.getData)())\r\n    })\r\n    promise.then(result => {\r\n      words = result\r\n    }).then(()=>{\r\n      if(words.length > 0) {\r\n            (0,_lib__WEBPACK_IMPORTED_MODULE_3__.saveDataToLocalStorage)()\r\n            ;(0,_lib__WEBPACK_IMPORTED_MODULE_3__.showWord)(id)\r\n          }\r\n    })\r\n}\r\n\r\n\r\nasync function start() {\r\n  let cashe = []\r\n  await console.log('before get cashe')\r\n  cashe = await (0,_getData__WEBPACK_IMPORTED_MODULE_2__.getLocalStorege)()\r\n  await console.log('after got cashe')\r\n  if (cashe && cashe.length > 0) {\r\n    console.log('first condition')\r\n    words =  await cashe\r\n    await (0,_lib__WEBPACK_IMPORTED_MODULE_3__.setTotalWords)()\r\n    await (0,_lib__WEBPACK_IMPORTED_MODULE_3__.showWord)(id)\r\n  } else {\r\n    await console.log('second condition')\r\n    await refreshData()\r\n  }\r\n  await console.log('finish')\r\n}\r\n\r\nstart()\r\n\r\n\r\n\r\n\r\n\r\n  \n\n//# sourceURL=webpack://word-learning/./source/js/script.js?");

/***/ }),

/***/ "./source/js/swipe.js":
/*!****************************!*\
  !*** ./source/js/swipe.js ***!
  \****************************/
/***/ (() => {

eval("/*!\r\n * swiped-events.js - v@version@\r\n * Pure JavaScript swipe events\r\n * https://github.com/john-doherty/swiped-events\r\n * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element\r\n * @author John Doherty <www.johndoherty.info>\r\n * @license MIT\r\n */\r\n(function (window, document) {\r\n\r\n    'use strict';\r\n\r\n    // patch CustomEvent to allow constructor creation (IE/Chrome)\r\n    if (typeof window.CustomEvent !== 'function') {\r\n\r\n        window.CustomEvent = function (event, params) {\r\n\r\n            params = params || { bubbles: false, cancelable: false, detail: undefined };\r\n\r\n            var evt = document.createEvent('CustomEvent');\r\n            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\r\n            return evt;\r\n        };\r\n\r\n        window.CustomEvent.prototype = window.Event.prototype;\r\n    }\r\n\r\n    document.addEventListener('touchstart', handleTouchStart, false);\r\n    document.addEventListener('touchmove', handleTouchMove, false);\r\n    document.addEventListener('touchend', handleTouchEnd, false);\r\n\r\n    var xDown = null;\r\n    var yDown = null;\r\n    var xDiff = null;\r\n    var yDiff = null;\r\n    var timeDown = null;\r\n    var startEl = null;\r\n\r\n    /**\r\n     * Fires swiped event if swipe detected on touchend\r\n     * @param {object} e - browser event object\r\n     * @returns {void}\r\n     */\r\n    function handleTouchEnd(e) {\r\n\r\n        // if the user released on a different target, cancel!\r\n        if (startEl !== e.target) return;\r\n\r\n        var swipeThreshold = parseInt(getNearestAttribute(startEl, 'data-swipe-threshold', '20'), 10); // default 20px\r\n        var swipeTimeout = parseInt(getNearestAttribute(startEl, 'data-swipe-timeout', '500'), 10);    // default 500ms\r\n        var timeDiff = Date.now() - timeDown;\r\n        var eventType = '';\r\n        var changedTouches = e.changedTouches || e.touches || [];\r\n\r\n        if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant\r\n            if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {\r\n                if (xDiff > 0) {\r\n                    eventType = 'swiped-left';\r\n                }\r\n                else {\r\n                    eventType = 'swiped-right';\r\n                }\r\n            }\r\n        }\r\n        else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {\r\n            if (yDiff > 0) {\r\n                eventType = 'swiped-up';\r\n            }\r\n            else {\r\n                eventType = 'swiped-down';\r\n            }\r\n        }\r\n\r\n        if (eventType !== '') {\r\n\r\n            var eventData = {\r\n                dir: eventType.replace(/swiped-/, ''),\r\n                touchType: (changedTouches[0] || {}).touchType || 'direct',\r\n                xStart: parseInt(xDown, 10),\r\n                xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),\r\n                yStart: parseInt(yDown, 10),\r\n                yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)\r\n            };\r\n\r\n            // fire `swiped` event event on the element that started the swipe\r\n            startEl.dispatchEvent(new CustomEvent('swiped', { bubbles: true, cancelable: true, detail: eventData }));\r\n\r\n            // fire `swiped-dir` event on the element that started the swipe\r\n            startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));\r\n        }\r\n\r\n        // reset values\r\n        xDown = null;\r\n        yDown = null;\r\n        timeDown = null;\r\n    }\r\n\r\n    /**\r\n     * Records current location on touchstart event\r\n     * @param {object} e - browser event object\r\n     * @returns {void}\r\n     */\r\n    function handleTouchStart(e) {\r\n\r\n        // if the element has data-swipe-ignore=\"true\" we stop listening for swipe events\r\n        if (e.target.getAttribute('data-swipe-ignore') === 'true') return;\r\n\r\n        startEl = e.target;\r\n\r\n        timeDown = Date.now();\r\n        xDown = e.touches[0].clientX;\r\n        yDown = e.touches[0].clientY;\r\n        xDiff = 0;\r\n        yDiff = 0;\r\n    }\r\n\r\n    /**\r\n     * Records location diff in px on touchmove event\r\n     * @param {object} e - browser event object\r\n     * @returns {void}\r\n     */\r\n    function handleTouchMove(e) {\r\n\r\n        if (!xDown || !yDown) return;\r\n\r\n        var xUp = e.touches[0].clientX;\r\n        var yUp = e.touches[0].clientY;\r\n\r\n        xDiff = xDown - xUp;\r\n        yDiff = yDown - yUp;\r\n    }\r\n\r\n    /**\r\n     * Gets attribute off HTML element or nearest parent\r\n     * @param {object} el - HTML element to retrieve attribute from\r\n     * @param {string} attributeName - name of the attribute\r\n     * @param {any} defaultValue - default value to return if no match found\r\n     * @returns {any} attribute value or defaultValue\r\n     */\r\n    function getNearestAttribute(el, attributeName, defaultValue) {\r\n\r\n        // walk up the dom tree looking for attributeName\r\n        while (el && el !== document.documentElement) {\r\n\r\n            var attributeValue = el.getAttribute(attributeName);\r\n\r\n            if (attributeValue) {\r\n                return attributeValue;\r\n            }\r\n\r\n            el = el.parentNode;\r\n        }\r\n\r\n        return defaultValue;\r\n    }\r\n\r\n}(window, document));\n\n//# sourceURL=webpack://word-learning/./source/js/swipe.js?");

/***/ }),

/***/ "./node_modules/easy-speech/index.js":
/*!*******************************************!*\
  !*** ./node_modules/easy-speech/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @module EasySpeech\n * @typicalname EasySpeech\n */\n\n/**\n * Cross browser Speech Synthesis with easy API.\n * This project was created, because it's always a struggle to get the synthesis\n * part of `Web Speech API` running on most major browsers.\n *\n * Setup is very straight forward (see example).\n *\n * @example\n * import EasySpeech from 'easy-speech'\n *\n * const example = async () => {\n *   await EasySpeech.init() // required\n *   await EasySpeech.speak({ 'Hello, world' })\n * }\n *\n * @see https://wicg.github.io/speech-api/#tts-section\n * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis\n * @type {Object}\n */\nconst EasySpeech = {}\n\n/**\n * To support multiple environments (browser, node) we define scope, based\n * on what's available with window as priority, since Browsers are main target.\n * @private\n */\nconst scope = globalThis\n\n/**\n * @private\n * @type {{\n *  status: String,\n    initialized: Boolean,\n    speechSynthesis: null|SpeechSynthesis,\n    speechSynthesisUtterance: null|SpeechSynthesisUtterance,\n    speechSynthesisVoice: null|SpeechSynthesisVoice,\n    speechSynthesisEvent: null|SpeechSynthesisEvent,\n    speechSynthesisErrorEvent: null|SpeechSynthesisErrorEvent,\n    voices: null|Array<SpeechSynthesisVoice>,\n    defaults: {\n      pitch: Number,\n      rate: Number,\n      volume: Number,\n      voice: null|SpeechSynthesisVoice\n    },\n    handlers: {}\n * }}\n */\nconst internal = {\n  status: 'created'\n}\n\nconst patches = {}\n\n/*******************************************************************************\n *\n * AVAILABLE WITHOUT INIT\n *\n ******************************************************************************/\n\n/**\n * Enable module-internal debugging by passing your own callback function.\n * Debug will automatically pass through all updates to `status`\n *\n * @example\n * import EasySpeech from 'easy-speech'\n * import Log from '/path/to/my/Log'\n *\n * EasySpeech.debug(arg => Log.debug('EasySpeech:', arg))\n *\n * @param {Function} fn A function, which always receives one argument, that\n *  represents a current debug message\n */\nEasySpeech.debug = fn => {\n  debug = typeof fn === 'function' ? fn : () => {}\n}\n\nlet debug = () => {}\n\n/**\n * Detects all possible occurrences of the main Web Speech API components\n * in the global scope.\n *\n * The returning object will have the following structure (see example).\n *\n * @example\n * EasySpeech.detect()\n *\n * {\n *     speechSynthesis: SpeechSynthesis|undefined,\n *     speechSynthesisUtterance: SpeechSynthesisUtterance|undefined,\n *     speechSynthesisVoice: SpeechSynthesisVoice|undefined,\n *     speechSynthesisEvent: SpeechSynthesisEvent|undefined,\n *     speechSynthesisErrorEvent: SpeechSynthesisErrorEvent|undefined,\n *     onvoiceschanged: Boolean,\n *     onboundary: Boolean,\n *     onend: Boolean,\n *     onerror: Boolean,\n *     onmark: Boolean,\n *     onpause: Boolean,\n *     onresume: Boolean,\n *     onstart: Boolean\n * }\n *\n * @returns {object} An object containing all possible features and their status\n */\nEasySpeech.detect = () => detectFeatures()\n\n/** @private **/\nconst detectFeatures = () => {\n  const features = {}\n  ;[\n    'speechSynthesis',\n    'speechSynthesisUtterance',\n    'speechSynthesisVoice',\n    'speechSynthesisEvent',\n    'speechSynthesisErrorEvent'\n  ].forEach(feature => {\n    features[feature] = detect(feature)\n  })\n\n  features.onvoiceschanged = hasProperty(features.speechSynthesis, 'onvoiceschanged')\n\n  const hasUtterance = hasProperty(features.speechSynthesisUtterance, 'prototype')\n\n  utteranceEvents.forEach(event => {\n    const name = `on${event}`\n    features[name] = hasUtterance && hasProperty(features.speechSynthesisUtterance.prototype, name)\n  })\n\n  // not published to the outside\n  patches.isAndroid = isAndroid()\n  patches.isFirefox = isFirefox()\n  patches.isSafari = isSafari()\n\n  debug(`is android: ${!!patches.isAndroid}`)\n  debug(`is firefox: ${!!patches.isFirefox}`)\n  debug(`is safari: ${!!patches.isSafari}`)\n\n  return features\n}\n\n/** @private **/\nconst hasProperty = (target = {}, prop) => Object.hasOwnProperty.call(target, prop) || prop in target || !!target[prop]\n\n/** @private **/\nconst isAndroid = () => {\n  const ua = (scope.navigator || {}).userAgent || ''\n  return /android/i.test(ua)\n}\n\n/** @private **/\nconst isFirefox = () => typeof scope.InstallTrigger !== 'undefined'\nconst isSafari = () => typeof scope.GestureEvent !== 'undefined'\n\n/**\n * Common prefixes for browsers that tend to implement their custom names for\n * certain parts of their API.\n * @private\n **/\nconst prefixes = ['webKit', 'moz', 'ms', 'o']\n\n/**\n * Make the first character of a String uppercase\n * @private\n **/\nconst capital = s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`\n\n/**\n * Find a feature in global scope by checking for various combinations and\n * variations of the base-name\n * @param {String} baseName name of the component to look for, must begin with\n *   lowercase char\n * @return {Object|undefined} The component from global scope, if found\n * @private\n **/\nconst detect = baseName => {\n  const capitalBaseName = capital(baseName)\n  const baseNameWithPrefixes = prefixes.map(p => `${p}${capitalBaseName}`)\n  const found = [baseName, capitalBaseName]\n    .concat(baseNameWithPrefixes)\n    .find(inGlobalScope)\n\n  return scope[found]\n}\n\n/**\n * Returns, if a given name exists in global scope\n * @private\n * @param name\n * @return {boolean}\n */\nconst inGlobalScope = name => scope[name]\n\n/**\n * Returns a shallow copy of the current internal status. Depending of the\n * current state this might return an object with only a single field `status`\n * or a complete Object, including detected features, `defaults`, `handlers`\n * and supported `voices`.\n *\n * @example\n * import EasySpeech from 'easy-speech'\n *\n * // uninitialized\n * EasySpeech.status() // { status: 'created' }\n *\n * // after EasySpeech.init\n * EasySpeech.status()\n *\n * {\n *   status: 'init: complete',\n *   initialized: true,\n *   speechSynthesis: speechSynthesis,\n *   speechSynthesisUtterance: SpeechSynthesisUtterance,\n *   speechSynthesisVoice: SpeechSynthesisVoice,\n *   speechSynthesisEvent: SpeechSynthesisEvent,\n *   speechSynthesisErrorEvent: SpeechSynthesisErrorEvent,\n *   voices: [...],\n *   defaults: {\n *     pitch: 1,\n *     rate: 1,\n *     volume: 1,\n *     voice: null\n *   },\n *   handlers: {}\n * }\n *\n * @return {Object} the internal status\n */\nEasySpeech.status = () => ({ ...internal })\n\n/**\n * Updates the internal status\n * @private\n * @param {String} s the current status to set\n */\nconst status = s => {\n  debug(s)\n  internal.status = s\n}\n\n/**\n * This is the function you need to run, before being able to speak.\n * It includes:\n * - feature detection\n * - feature assignment (into internal state)\n * - voices loading\n * - state update\n * - inform caller about success\n *\n * It will load voices by a variety of strategies:\n *\n * - detect and that SpeechSynthesis is basically supported, if not -> fail\n * - load voices directly\n * - if not loaded but `onvoiceschanged` is available: use `onvoiceschanged`\n * - if `onvoiceschanged` is not available: fallback to timeout\n * - if `onvoiceschanged` is fired but no voices available: fallback to timeout\n * - timeout reloads voices in a given `interval` until a `maxTimeout` is reached\n * - if voices are loaded until then -> complete\n * - if no voices found -> fail\n *\n * Note: if once initialized you can't re-init (will skip and resolve to\n * `false`) unless you run `EasySpeech.reset()`.\n *\n * @return {Promise<Boolean>}\n * @fulfil {Boolean} true, if initialized, false, if skipped (because already\n *   initialized)\n * @reject {Error} - The error `message` property will always begin with\n *   `EasySpeech: ` and contain one of the following:\n *\n *   - `browser misses features` - The browser will not be able to use speech\n *      synthesis at all as it misses crucial features\n *   - `browser has no voices (timeout)` - No voice could be loaded with neither\n *      of the given strategies; chances are high the browser does not have\n *      any voices embedded (example: Chromium on *buntu os')\n */\n\nEasySpeech.init = function ({ maxTimeout = 5000, interval = 250 } = {}) {\n  return new Promise((resolve, reject) => {\n    if (internal.initialized) { return resolve(false) }\n    EasySpeech.reset()\n    status('init: start')\n\n    // there may be the case, that the browser needs to load using a timer\n    // so we declare it at the top to make sure the interval is always cleared\n    // when we exit the Promise via fail / complete\n    let timer\n    let voicesChangedListener\n    let completeCalled = false\n\n    const fail = (errorMessage) => {\n      status(`init: failed (${errorMessage})`)\n      clearInterval(timer)\n      internal.initialized = false\n      return reject(new Error(`EasySpeech: ${errorMessage}`))\n    }\n\n    const complete = () => {\n      // avoid race-conditions between listeners and timeout\n      if (completeCalled) { return }\n      status('init: complete')\n\n      // set flags immediately\n      completeCalled = true\n      internal.initialized = true\n\n      // cleanup events and timer\n      clearInterval(timer)\n      speechSynthesis.onvoiceschanged = null\n\n      if (voicesChangedListener) {\n        speechSynthesis.removeEventListener('voiceschanged', voicesChangedListener)\n      }\n\n      // all done\n      return resolve(true)\n    }\n\n    // before initializing we force-detect all required browser features\n    const features = detectFeatures()\n    const hasAllFeatures = !!features.speechSynthesis && !!features.speechSynthesisUtterance\n\n    if (!hasAllFeatures) {\n      return fail('browser misses features')\n    }\n\n    // assign all detected features to our internal definitions\n    Object.keys(features).forEach(feature => {\n      internal[feature] = features[feature]\n    })\n\n    // start initializing\n    const { speechSynthesis } = internal\n    const voicesLoaded = () => {\n      const voices = speechSynthesis.getVoices() || []\n      if (voices.length > 0) {\n        internal.voices = voices\n        status(`voices loaded: ${voices.length}`)\n\n        // if we find a default voice, set it as default\n        internal.defaultVoice = voices.find(v => v.default)\n\n        // otherwise let's stick to the first one we can find by locale\n        if (!internal.defaultVoice) {\n          const language = (scope.navigator || {}).language || ''\n          const lang = language.split('-')[0]\n\n          internal.defaultVoice = voices.find(v => {\n            return v.lang && (v.lang.indexOf(`${lang}-`) > -1 || v.lang.indexOf(`${lang}_`) > -1)\n          })\n        }\n\n        // otherwise let's use the first element in the array\n        if (!internal.defaultVoice) {\n          internal.defaultVoice = voices[0]\n        }\n\n        return true\n      }\n      return false\n    }\n\n    status('init: voices')\n\n    // best case: detect if voices can be loaded directly\n    if (voicesLoaded()) { return complete() }\n\n    // last possible fallback method: run a timer until max. timeout and reload\n    const loadViaTimeout = () => {\n      status('init: voices (timer)')\n      let timeout = 0\n      timer = setInterval(() => {\n        if (voicesLoaded()) {\n          return complete()\n        }\n\n        if (timeout > maxTimeout) {\n          return fail('browser has no voices (timeout)')\n        }\n\n        timeout += interval\n      }, interval)\n    }\n\n    // detect if voices can be loaded after onveoiceschanged,\n    // but only if the browser supports this event\n    if (features.onvoiceschanged) {\n      status('init: voices (onvoiceschanged)')\n\n      speechSynthesis.onvoiceschanged = () => {\n        if (voicesLoaded()) { return complete() }\n\n        // xxx: some browsers (like chrome on android still have not all\n        // voices loaded at this point, whichs is why we need to enter\n        // the timeout-based method here.\n        return loadViaTimeout()\n      }\n\n      // xxx: there is an edge-case where browser provide onvoiceschanged,\n      // but they never load the voices, so init would never complete\n      // in such case we need to fail after maxTimeout\n      setTimeout(() => {\n        if (voicesLoaded()) {\n          return complete()\n        }\n        return fail('browser has no voices (timeout)')\n      }, maxTimeout)\n    } else {\n      // this is a very problematic case, since we don't really know, whether\n      // this event will fire at all, so we need to setup both a listener AND\n      // run the timeout and make sure on of them \"wins\"\n      // affected browsers may be: MacOS Safari\n      if (hasProperty(speechSynthesis, 'addEventListener')) {\n        status('init: voices (addEventListener)')\n\n        voicesChangedListener = () => {\n          if (voicesLoaded()) { return complete() }\n        }\n\n        speechSynthesis.addEventListener('voiceschanged', voicesChangedListener)\n      }\n\n      // for all browser not supporting onveoiceschanged we start a timer\n      // until we reach a certain timeout and try to get the voices\n      loadViaTimeout()\n    }\n  })\n}\n\n/**\n * Placed as first line in functions that require `EasySpeech.init` before they\n * can run.\n * @param {boolean=} force set to true to force-skip check\n * @private\n */\nconst ensureInit = ({ force } = {}) => {\n  if (!force && !internal.initialized) {\n    throw new Error('EasySpeech: not initialized. Run EasySpeech.init() first')\n  }\n}\n\n/*******************************************************************************\n *\n * AVAILABLE ONLY AFTER INIT\n *\n ******************************************************************************/\n\n/**\n * Returns all available voices.\n *\n * @condition `EasySpeech.init` must have been called and resolved to `true`\n * @return {Array<SpeechSynthesisVoice>}\n */\nEasySpeech.voices = () => {\n  ensureInit()\n  return internal.voices\n}\n\n/**\n * Attaches global/default handlers to every utterance instance. The handlers\n * will run in parallel to any additional handlers, attached when calling\n * `EasySpeech.speak`\n *\n * @condition `EasySpeech.init` must have been called and resolved to `true`\n *\n * @param {Object} handlers\n * @param {function=} handlers.boundary - optional, event handler\n * @param {function=} handlers.end - optional, event handler\n * @param {function=} handlers.error - optional, event handler\n * @param {function=} handlers.mark - optional, event handler\n * @param {function=} handlers.pause - optional, event handler\n * @param {function=} handlers.resume - optional, event handler\n * @param {function=} handlers.start - optional, event handler\n *\n * @return {Object} a shallow copy of the Object, containing all global handlers\n */\nEasySpeech.on = (handlers) => {\n  ensureInit()\n\n  utteranceEvents.forEach(name => {\n    const handler = handlers[name]\n    if (validate.handler(handler)) {\n      internal.handlers[name] = handler\n    }\n  })\n\n  return { ...internal.handlers }\n}\n\n/**\n * We use these keys to search for these events in handler objects and defaults\n * @private\n */\nconst utteranceEvents = [\n  'boundary',\n  'end',\n  'error',\n  'mark',\n  'pause',\n  'resume',\n  'start'\n]\n\n/**\n * Internal validation of passed parameters\n * @private\n */\nconst validate = {\n  isNumber: n => typeof n === 'number' && !Number.isNaN(n),\n  pitch: p => validate.isNumber(p) && p >= 0 && p <= 2,\n  volume: v => validate.isNumber(v) && v >= 0 && v <= 1,\n  rate: r => validate.isNumber(r) && r >= 0.1 && r <= 10,\n  text: t => typeof t === 'string',\n  handler: h => typeof h === 'function',\n  // we prefer duck typing here, mostly because there are cases where\n  // SpeechSynthesisVoice is not defined on global scope but is supported\n  // when using getVoices().\n  voice: v => v && v.lang && v.name && v.voiceURI\n}\n\n/**\n * Sets defaults for utterances. Invalid values will be ignored without error\n * or warning.\n *\n * @see https://wicg.github.io/speech-api/#utterance-attributes\n * @param {object=} options - Optional object containing values to set values\n * @param {object=} options.voice - Optional `SpeechSynthesisVoice` instance or\n *  `SpeechSynthesisVoice`-like Object\n * @param {number=} options.pitch - Optional pitch value >= 0 and <= 2\n * @param {number=} options.rate - Optional rate value >= 0.1 and <= 10\n * @param {number=} options.volume - Optional volume value >= 0 and <= 1\n *\n * @return {object} a shallow copy of the current defaults\n */\nEasySpeech.defaults = (options) => {\n  ensureInit()\n\n  if (options) {\n    internal.defaults = internal.defaults || {}\n\n    ;['voice', 'pitch', 'rate', 'volume'].forEach(name => {\n      const value = options[name]\n      const isValid = validate[name]\n\n      if (isValid(value)) {\n        internal.defaults[name] = value\n      }\n    })\n  }\n\n  return { ...internal.defaults }\n}\n\n/**\n * Determines the current voice and makes sure, there is always a voice returned\n * @private\n * @param voice\n * @return {*|SpeechSynthesisVoice|{}}\n */\nconst getCurrentVoice = voice => voice ||\n  internal.defaults?.voice ||\n  internal.defaultVoice ||\n  internal.voices?.[0]\n\n/**\n * Creates a new `SpeechSynthesisUtterance` instance\n * @private\n * @param text\n */\nconst createUtterance = text => {\n  const UtteranceClass = internal.speechSynthesisUtterance\n  return new UtteranceClass(text)\n}\n\n/**\n * Speaks a voice by given parameters, constructs utterance by best possible\n * combinations of parameters and defaults.\n *\n * If the given utterance parameters are missing or invalid, defaults will be\n * used as fallback.\n *\n * @example\n * const voice = EasySpeech.voices()[10] // get a voice you like\n *\n * EasySpeech.speak({\n *   text: 'Hello, world',\n *   voice: voice,\n *   pitch: 1.2,  // a little bit higher\n *   rate: 1.7, // a little bit faster\n *   boundary: event => console.debug('word boundary reached', event.charIndex),\n *   error: e => notify(e)\n * })\n *\n * @param {object} options - required options\n * @param {string} text - required text to speak\n * @param {object=} voice - optional `SpeechSynthesisVoice` instance or\n *   structural similar object (if `SpeechSynthesisUtterance` is not supported)\n * @param {number=} options.pitch - Optional pitch value >= 0 and <= 2\n * @param {number=} options.rate - Optional rate value >= 0.1 and <= 10\n * @param {number=} options.volume - Optional volume value >= 0 and <= 1\n * @param {boolean=} options.force - Optional set to true to force speaking, no matter the internal state\n * @param {object=} handlers - optional additional local handlers, can be\n *   directly added as top-level properties of the options\n * @param {function=} handlers.boundary - optional, event handler\n * @param {function=} handlers.end - optional, event handler\n * @param {function=} handlers.error - optional, event handler\n * @param {function=} handlers.mark - optional, event handler\n * @param {function=} handlers.pause - optional, event handler\n * @param {function=} handlers.resume - optional, event handler\n * @param {function=} handlers.start - optional, event handler\n *\n *\n * @return {Promise<SpeechSynthesisEvent|SpeechSynthesisErrorEvent>}\n * @fulfill {SpeechSynthesisEvent} Resolves to the `end` event\n * @reject {SpeechSynthesisEvent} rejects using the `error` event\n */\nEasySpeech.speak = ({ text, voice, pitch, rate, volume, force, ...handlers }) => {\n  ensureInit({ force })\n\n  if (!validate.text(text)) {\n    throw new Error('EasySpeech: at least some valid text is required to speak')\n  }\n\n  const getValue = options => {\n    const [name, value] = Object.entries(options)[0]\n\n    if (validate[name](value)) {\n      return value\n    }\n\n    return internal.defaults?.[name]\n  }\n\n  return new Promise((resolve, reject) => {\n    status('init speak')\n\n    const utterance = createUtterance(text)\n    const currentVoice = getCurrentVoice(voice)\n\n    // XXX: if we force-speak, we may not get a current voice!\n    // This may occur when the browser won't load voices but\n    // provides SpeechSynth and SpeechSynthUtterance.\n    // We then might at least try to speak something with defaults\n    if (currentVoice) {\n      utterance.voice = currentVoice\n      utterance.lang = currentVoice.lang\n      utterance.voiceURI = currentVoice.voiceURI\n    }\n\n    utterance.text = text\n    utterance.pitch = getValue({ pitch })\n    utterance.rate = getValue({ rate })\n    utterance.volume = getValue({ volume })\n    debugUtterance(utterance)\n\n    utteranceEvents.forEach(name => {\n      const fn = handlers[name]\n\n      if (validate.handler(fn)) {\n        utterance.addEventListener(name, fn)\n      }\n\n      if (internal.handlers?.[name]) {\n        utterance.addEventListener(name, internal.handlers[name])\n      }\n    })\n\n    // always attached are start, end and error listeners\n\n    // XXX: chrome won't play longer tts texts in one piece and stops after a few\n    // words. We need to add an intervall here in order prevent this. See:\n    // https://stackoverflow.com/questions/21947730/chrome-speech-synthesis-with-longer-texts\n    //\n    // XXX: this apparently works only on chrome desktop, while it breaks chrome\n    // mobile (android), so we need to detect chrome desktop\n    //\n    // XXX: resumeInfinity breaks on firefox macOs so we need to avoid it there\n    // as well. Since we don't need it in FF anyway, we can safely skip there\n    //\n    // XXX: resumeInfinity is also incompatible with older safari ios versions\n    // so we skip it on safari, too.\n    utterance.addEventListener('start', () => {\n      patches.paused = false\n      patches.speaking = true\n\n      if (!patches.isFirefox && !patches.isSafari && patches.isAndroid !== true) {\n        resumeInfinity(utterance)\n      }\n    })\n\n    utterance.addEventListener('end', endEvent => {\n      status('speak complete')\n      patches.paused = false\n      patches.speaking = false\n      clearTimeout(timeoutResumeInfinity)\n      resolve(endEvent)\n    })\n\n    utterance.addEventListener('error', (errorEvent = {}) => {\n      status(`speak failed: ${errorEvent.message}`)\n      patches.paused = false\n      patches.speaking = false\n      clearTimeout(timeoutResumeInfinity)\n      reject(errorEvent)\n    })\n\n    // make sure we have no mem-leak\n    clearTimeout(timeoutResumeInfinity)\n    internal.speechSynthesis.cancel()\n\n    setTimeout(() => {\n      internal.speechSynthesis.speak(utterance)\n    }, 10)\n  })\n}\n\n/** @private **/\nconst debugUtterance = ({ voice, pitch, rate, volume }) => {\n  debug(`utterance: voice=${voice?.name} volume=${volume} rate=${rate} pitch=${pitch}`)\n}\n\n/**\n * Timer variable to clear interval\n * @private\n */\nlet timeoutResumeInfinity\n\n/**\n * Fixes long texts in some browsers\n * @private\n * @param target\n */\nfunction resumeInfinity (target) {\n  // prevent memory-leak in case utterance is deleted, while this is ongoing\n  if (!target && timeoutResumeInfinity) {\n    debug('force-clear timeout')\n    return scope.clearTimeout(timeoutResumeInfinity)\n  }\n\n  // only execute on speaking utterances, otherwise paused\n  // utterances will get resumed, thus breaking user experience\n  // include internal patching, since some systems have problems with\n  // pause/resume and updateing the internal state on speechSynthesis\n  const { paused, speaking } = internal.speechSynthesis\n  const isSpeaking = speaking || patches.speaking\n  const isPaused = paused || patches.paused\n  debug(`resumeInfinity isSpeaking=${isSpeaking} isPaused=${isPaused}`)\n\n  if (isSpeaking && !isPaused) {\n    internal.speechSynthesis.pause()\n    internal.speechSynthesis.resume()\n  }\n  timeoutResumeInfinity = scope.setTimeout(function () {\n    resumeInfinity(target)\n  }, 5000)\n}\n\n/**\n * Cancels the current speaking, if any running\n */\nEasySpeech.cancel = () => {\n  ensureInit()\n  status('cancelling')\n  internal.speechSynthesis.cancel()\n  patches.paused = false\n  patches.speaking = false\n}\n\n/**\n * Resumes to speak, if any paused\n */\nEasySpeech.resume = () => {\n  ensureInit()\n  status('resuming')\n\n  patches.paused = false\n  patches.speaking = true\n  internal.speechSynthesis.resume()\n}\n\n/**\n * Pauses the current speaking, if any running\n */\nEasySpeech.pause = () => {\n  ensureInit()\n  status('pausing')\n\n  // exec pause on Android causes speech to end but not to fire end-event\n  // se we simply do it manually instead of pausing\n  if (patches.isAndroid) {\n    debug('patch pause on Android with cancel')\n    return internal.speechSynthesis.cancel()\n  }\n\n  internal.speechSynthesis.pause()\n  // in some cases, pause does not update the internal state,\n  // so we need to update it manually using an own state\n  patches.paused = true\n  patches.speaking = false\n}\n\n/**\n * Resets the internal state to a default-uninitialized state\n */\nEasySpeech.reset = () => {\n  Object.assign(internal, {\n    status: 'reset',\n    initialized: false,\n    speechSynthesis: null,\n    speechSynthesisUtterance: null,\n    speechSynthesisVoice: null,\n    speechSynthesisEvent: null,\n    speechSynthesisErrorEvent: null,\n    voices: null,\n    defaultVoice: null,\n    defaults: {\n      pitch: 1,\n      rate: 1,\n      volume: 1,\n      voice: null\n    },\n    handlers: {}\n  })\n}\n\n/**\n * EasySpeech is the default export; you can import it with whichever name you\n * like\n *\n * @example\n * import EasySpeech from 'easy-speech'\n * @example\n * import Easy from 'easy-speech'\n */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EasySpeech);\n\n\n//# sourceURL=webpack://word-learning/./node_modules/easy-speech/index.js?");

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
/******/ 		__webpack_require__.h = () => ("a50ef7d2272e167aa278")
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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/script.js");
/******/ 	
/******/ })()
;