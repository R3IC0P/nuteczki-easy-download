/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Logo() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n    _ref$size = _ref.size,\n    size = _ref$size === void 0 ? '24px' : _ref$size,\n    _ref$variant = _ref.variant,\n    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,\n    _ref$animated = _ref.animated,\n    animated = _ref$animated === void 0 ? false : _ref$animated,\n    _ref$simplifiedLevel = _ref.simplifiedLevel,\n    simplifiedLevel = _ref$simplifiedLevel === void 0 ? 0 : _ref$simplifiedLevel;\n  var simplified = simplifiedLevel !== 0 ? \"simplified-\".concat(simplifiedLevel) : '';\n  return /*html*/\"\\n    <div\\n      class=\\\"ned-logo \".concat(animated !== null && animated !== void 0 ? animated : 'animated', \" \").concat(simplified, \"\\\"\\n      style=\\\"\\n          --ned-logo-size: \").concat(size, \"; \\n          \").concat(variant === 'secondary' ? '--ned-logo-color: var(--ned-white);' : '', \"\\n        \\\">\\n      <div class=\\\"ned-logo__icon\\\">\\n        <svg viewbox=\\\"0 0 100 100\\\" class=\\\"ned-logo__ring\\\">\\n          <path d=\\\"M 95 50 A 45 45 0 0 1 5 50 A 45 45 0 0 1 50 5\\\" />\\n          <path d=\\\"M 78 15 A 45 45 0 0 1 95 50\\\" />\\n        </svg>\\n        <div class=\\\"ned-logo__lines\\\">\\n          <span></span>\\n          <span></span>\\n          <span></span>\\n          <span></span>\\n          <span></span>\\n        </div>\\n      </div>\\n      <div class=\\\"ned-logo__text\\\">\\n        <p>NED</p>\\n        <p>Nuteczki Easy Download</p>\\n      </div>\\n    </div>\\n  \");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);\n\n//# sourceURL=webpack://nuteczki-easy-download/./src/components/Logo.js?");

/***/ }),

/***/ "./src/components/Toast.js":
/*!*********************************!*\
  !*** ./src/components/Toast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }\nfunction _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\n\nvar _message = /*#__PURE__*/new WeakMap();\nvar _notification = /*#__PURE__*/new WeakMap();\nvar _timeout = /*#__PURE__*/new WeakMap();\nvar _progressBar = /*#__PURE__*/new WeakMap();\nvar _remainingTime = /*#__PURE__*/new WeakMap();\nvar _startTime = /*#__PURE__*/new WeakMap();\nvar _Toast_brand = /*#__PURE__*/new WeakSet();\nvar _hide = /*#__PURE__*/new WeakMap();\nvar Toast = /*#__PURE__*/function () {\n  function Toast() {\n    var _this = this;\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$message = _ref.message,\n      message = _ref$message === void 0 ? 'Nuteczki Easy Download' : _ref$message,\n      _ref$duration = _ref.duration,\n      duration = _ref$duration === void 0 ? 5000 : _ref$duration;\n    _classCallCheck(this, Toast);\n    _classPrivateMethodInitSpec(this, _Toast_brand);\n    _classPrivateFieldInitSpec(this, _message, void 0);\n    _classPrivateFieldInitSpec(this, _notification, void 0);\n    _classPrivateFieldInitSpec(this, _timeout, void 0);\n    _classPrivateFieldInitSpec(this, _progressBar, void 0);\n    _classPrivateFieldInitSpec(this, _remainingTime, void 0);\n    _classPrivateFieldInitSpec(this, _startTime, void 0);\n    _classPrivateFieldInitSpec(this, _hide, function () {\n      _classPrivateFieldGet(_notification, _this).classList.remove('ned-active');\n      _classPrivateFieldGet(_notification, _this).classList.add('ned-hide');\n    });\n    _classPrivateFieldSet(_message, this, message);\n    _classPrivateFieldSet(_remainingTime, this, duration);\n    _assertClassBrand(_Toast_brand, this, _create).call(this);\n    _assertClassBrand(_Toast_brand, this, _show).call(this);\n  }\n  return _createClass(Toast, null, [{\n    key: \"showWelcomeMessage\",\n    value: function showWelcomeMessage() {\n      var isFirstTime = localStorage.getItem('nedWelcomeShown') === null;\n      if (isFirstTime) {\n        new Notification({\n          message: 'Witaj w Nuteczki Easy Download! Teraz możesz łatwo pobierać swoje ulubione utwory.',\n          duration: 7000\n        });\n        localStorage.setItem('nedWelcomeShown', 'true');\n      }\n    }\n  }, {\n    key: \"showDownloadStart\",\n    value: function showDownloadStart(message) {\n      new Notification({\n        message: \"Pobieranie: \".concat(message)\n      });\n    }\n  }, {\n    key: \"showDownloadComplete\",\n    value: function showDownloadComplete() {\n      new Notification({\n        message: 'Pobieranie zakończone!'\n      });\n    }\n  }]);\n}();\nfunction _create() {\n  var _this2 = this;\n  _classPrivateFieldSet(_notification, this, document.createElement('div'));\n  _classPrivateFieldGet(_notification, this).className = 'ned ned-toast';\n  _classPrivateFieldGet(_notification, this).innerHTML = /*html*/\"\\n        <div class=\\\"ned-toast__header\\\">\\n          \".concat((0,_Logo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    size: '12px',\n    simplifiedLevel: 1\n  }), \"\\n          <button class=\\\"ned-toast__close\\\">\\n            <svg viewBox=\\\"0 0 460.775 460.775\\\">\\n              <path d=\\\"M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z\\\"/>\\n            </svg>\\n          </button>\\n        </div>\\n        <div class=\\\"ned-toast__message\\\">\\n          \").concat(_classPrivateFieldGet(_message, this), \"\\n        </div>\\n        <div class=\\\"ned-toast__footer\\\"></div>\\n        <div class=\\\"ned-toast__progress\\\"></div>\\n      \");\n  var notificationStack = document.querySelector('.ned-toast-stack');\n  if (!notificationStack) {\n    notificationStack = document.createElement('div');\n    notificationStack.className = 'ned-toast-stack';\n    document.body.appendChild(notificationStack);\n  }\n  notificationStack.appendChild(_classPrivateFieldGet(_notification, this));\n  _classPrivateFieldGet(_notification, this).addEventListener('mouseenter', function () {\n    return _assertClassBrand(_Toast_brand, _this2, _pause).call(_this2);\n  });\n  _classPrivateFieldGet(_notification, this).addEventListener('mouseleave', function () {\n    return _assertClassBrand(_Toast_brand, _this2, _resume).call(_this2);\n  });\n  _classPrivateFieldGet(_notification, this).querySelector('.ned-toast__close').addEventListener('click', function () {\n    return _classPrivateFieldGet(_hide, _this2).call(_this2);\n  });\n  _classPrivateFieldGet(_notification, this).addEventListener('animationend', function (event) {\n    if (event.animationName === 'slideOut') {\n      _classPrivateFieldGet(_notification, _this2).remove();\n    }\n  });\n}\nfunction _show() {\n  var _this3 = this;\n  requestAnimationFrame(function () {\n    _classPrivateFieldGet(_notification, _this3).classList.add('ned-active');\n  });\n  _classPrivateFieldSet(_startTime, this, Date.now());\n  _classPrivateFieldSet(_timeout, this, setTimeout(_classPrivateFieldGet(_hide, this), _classPrivateFieldGet(_remainingTime, this)));\n  _classPrivateFieldSet(_progressBar, this, _classPrivateFieldGet(_notification, this).querySelector('.ned-toast__progress').animate([{\n    width: '100%'\n  }, {\n    width: '0%'\n  }], {\n    duration: _classPrivateFieldGet(_remainingTime, this)\n  }));\n}\nfunction _pause() {\n  clearTimeout(_classPrivateFieldGet(_timeout, this));\n  var elapsed = Date.now() - _classPrivateFieldGet(_startTime, this);\n  console.log(elapsed);\n  _classPrivateFieldSet(_remainingTime, this, _classPrivateFieldGet(_remainingTime, this) - elapsed);\n  _classPrivateFieldGet(_progressBar, this).pause();\n}\nfunction _resume() {\n  _classPrivateFieldSet(_startTime, this, Date.now());\n  _classPrivateFieldSet(_timeout, this, setTimeout(_classPrivateFieldGet(_hide, this), _classPrivateFieldGet(_remainingTime, this)));\n  _classPrivateFieldGet(_progressBar, this).play();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);\n\n//# sourceURL=webpack://nuteczki-easy-download/./src/components/Toast.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Toast */ \"./src/components/Toast.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/constants */ \"./src/utils/constants.js\");\n\n\n\n\nif (localStorage.getItem('NED_USERDATA') === null) {\n  localStorage.setItem('NED_USERDATA', JSON.stringify(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.defaltUserData));\n}\nif (!(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.getStatus)()) {\n  (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.setStatus)(0); // 0 - default, 1 - btn clicked, 2 - in progress\n}\n_components_Toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showWelcomeMessage();\nvar _window$location = window.location,\n  hostname = _window$location.hostname,\n  pathname = _window$location.pathname;\nvar pathnameLength = pathname.split('/').filter(function (e) {\n  return e !== '';\n}).length;\nif (hostname === 'krakenfiles.com') {\n  if (pathnameLength === 3) {\n    var btn = document.querySelector('#dl-form > button[type=\"submit\"]');\n    window.addEventListener('blur', function () {\n      window.close();\n    });\n    requestAnimationFrame(function () {\n      btn.click();\n    });\n  }\n}\nif (hostname === 'nuteczki.top') {\n  if (pathnameLength === 2) {\n    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.prepareButtons)();\n    new _components_Toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      message: 'Pomyślnie dodano przyciski dla łatwego pobierania'\n    });\n  } else if (pathnameLength === 3) {\n    var href = document.querySelector('span.download-icon > a[target=\"_blank\"]').href;\n    window.open(href);\n    window.close();\n  }\n}\n\n//# sourceURL=webpack://nuteczki-easy-download/./src/content.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaltUserData: () => (/* binding */ defaltUserData)\n/* harmony export */ });\nvar defaltUserData = {\n  song: {\n    downloaded: []\n  }\n};\n\n\n//# sourceURL=webpack://nuteczki-easy-download/./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStatus: () => (/* binding */ getStatus),\n/* harmony export */   getUserData: () => (/* binding */ getUserData),\n/* harmony export */   prepareButtons: () => (/* binding */ prepareButtons),\n/* harmony export */   setStatus: () => (/* binding */ setStatus)\n/* harmony export */ });\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Toast */ \"./src/components/Toast.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/utils/constants.js\");\n\n\nfunction prepareButtons() {\n  var btns = document.querySelectorAll('.music-btn a.btn.btn-sm.btn-success');\n  if (btns.length === 0) return;\n  btns.forEach(function (btn) {\n    var easyBtn = /*html*/\"\\n      <button\\n        class=\\\"ned ned-download-btn ned-js-download-btn\\\"\\n        data-ned-href=\\\"\".concat(btn.href, \"\\\">\\n        <span class=\\\"ned-btn-icon\\\">\\n          <svg\\n            xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n            class=\\\"ned-svg\\\"\\n            viewBox=\\\"0 0 16 16\\\">\\n            <path\\n              d=\\\"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383\\\" />\\n            <path\\n              d=\\\"M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z\\\" />\\n          </svg>\\n        </span>\\n        Easy Download\\n      </button>\\n    \");\n    btn.insertAdjacentHTML('afterend', easyBtn);\n  });\n  var easyBtns = document.querySelectorAll('.ned-js-download-btn');\n  easyBtns.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      return handleBtnClick(btn);\n    });\n  });\n}\nfunction getStatus() {\n  return Number(localStorage.getItem('NED_STATUS'));\n}\nfunction setStatus() {\n  var statusCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  localStorage.setItem('NED_STATUS', statusCode);\n}\nfunction handleBtnClick(btn) {\n  var url = btn.getAttribute('data-ned-href');\n  new _components_Toast__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    message: 'Rozpoczęto pobieranie'\n  });\n  markAsDownloaded(url);\n  window.open(url);\n}\nfunction markAsDownloaded(url) {\n  var data = JSON.parse(localStorage.getItem('NED_USERDATA'));\n  data.song.downloaded.push(url);\n  localStorage.setItem('NED_USERDATA', JSON.stringify(data));\n}\nfunction getUserData() {\n  if (localStorage.getItem('NED_USERDATA') === null) {\n    localStorage.setItem('NED_USERDATA', JSON.stringify(_constants__WEBPACK_IMPORTED_MODULE_1__.defaltUserData));\n  }\n  var data = localStorage.getItem('NED_USERDATA');\n  return JSON.parse(data);\n}\n\n\n//# sourceURL=webpack://nuteczki-easy-download/./src/utils/helpers.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/global.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.ned {\n  --ned-blue: #0d6efd;\n  --ned-blue-600: #0a58ca;\n  --ned-blue-700: #084298;\n  --ned-white: #fff;\n  --ned-border: 4px;\n  --ned-logo-size: 24px;\n  --ned-logo-color: var(--ned-blue);\n}\n\n.ned-svg {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n  user-select: none;\n}\n\n.ned-toast-stack {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  z-index: 1400;\n}\n\n@keyframes slideIn {\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideOut {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n}\n\n.ned-toast {\n  z-index: 1400;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  width: 280px;\n  padding: 14px 16px;\n  border-radius: var(--ned-border);\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.025em;\n  color: #000000de;\n  background-color: #fafafa;\n  box-shadow: #0003 0px 3px 5px -1px, #00000024 0px 6px 10px 0px,\n    #0000001f 0px 1px 18px 0px;\n  opacity: 0;\n  transform: translateY(100%);\n  animation: slideIn 0.3s ease-in-out forwards;\n}\n\n.ned-toast__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.ned-toast__close {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.ned-toast__close svg {\n  width: 1em;\n  height: 1em;\n  fill: var(--ned-blue);\n}\n\n.ned-toast__close:hover svg {\n  fill: var(--ned-blue-700);\n}\n\n.ned-toast__progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--ned-blue);\n}\n\n.ned-toast.ned-active {\n  transform: translateY(0px);\n  opacity: 1;\n  visibility: visible;\n}\n\n.ned-toast.ned-hide {\n  animation: slideOut 0.3s ease-in-out forwards;\n}\n\n.ned-toast.ned-hide .ned-toast__progress {\n  width: 0;\n}\n\n.ned-download-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  border: 0px;\n  border-radius: var(--ned-border);\n  cursor: pointer;\n  user-select: none;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: var(--ned-white);\n  background-color: var(--ned-blue);\n}\n\n.ned-download-btn:hover {\n  color: var(--ned-white);\n  background-color: var(--ned-blue-600);\n}\n\n.ned-download-btn:active {\n  background-color: var(--ned-blue-700);\n}\n\n.ned-btn-icon {\n  display: inherit;\n  margin-right: 6px;\n}\n\n.ned-logo {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  min-width: calc(var(--ned-logo-size) * 2);\n  height: calc(var(--ned-logo-size) * 2);\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  user-select: none;\n}\n\n.ned-logo__icon {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ned-logo__ring {\n  --ned-ring-size: calc(var(--ned-logo-size) * 2);\n  position: absolute;\n  width: var(--ned-ring-size);\n  height: var(--ned-ring-size);\n  fill: none;\n  stroke: var(--ned-logo-color);\n  stroke-width: 6;\n  stroke-linecap: round;\n  border-radius: 50%;\n}\n\n.ned-logo__lines {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: calc(var(--ned-logo-size) / 8);\n}\n\n.ned-logo__lines > span {\n  display: block;\n  width: calc(var(--ned-logo-size) / 8);\n  border-radius: 16px;\n  background-color: var(--ned-logo-color);\n}\n\n.ned-logo__lines > span:nth-child(1) {\n  height: calc(var(--ned-logo-size) / 3);\n}\n.ned-logo__lines > span:nth-child(2) {\n  height: calc(var(--ned-logo-size) / 1.5);\n}\n.ned-logo__lines > span:nth-child(3) {\n  height: calc(var(--ned-logo-size));\n}\n.ned-logo__lines > span:nth-child(4) {\n  height: calc(var(--ned-logo-size) / 1.5);\n}\n.ned-logo__lines > span:nth-child(5) {\n  height: calc(var(--ned-logo-size) / 3);\n}\n\n.ned-logo__text p {\n  margin: 0;\n  line-height: 0.85;\n  color: var(--ned-logo-color);\n}\n\n.ned-logo__text p:first-of-type {\n  font-size: calc(var(--ned-logo-size) * 2);\n  font-weight: 900;\n}\n\n.ned-logo__text p:last-of-type {\n  margin-left: calc(var(--ned-logo-size) / 10);\n  font-size: calc(var(--ned-logo-size) / 2.625);\n}\n\n@keyframes nedLineAnim {\n  0% {\n    height: calc(var(--ned-logo-size) / 3);\n  }\n  50% {\n    height: calc(var(--ned-logo-size));\n  }\n  100% {\n    height: calc(var(--ned-logo-size) / 3);\n  }\n}\n\n.ned-logo.animated .ned-logo__lines > span:nth-child(1) {\n  animation: nedLineAnim 1s ease-in-out 0s infinite;\n}\n.ned-logo.animated .ned-logo__lines > span:nth-child(2) {\n  animation: nedLineAnim 2s ease-in-out 0.1s infinite;\n}\n.ned-logo.animated .ned-logo__lines > span:nth-child(3) {\n  animation: nedLineAnim 1s ease-in-out 0.2s infinite;\n}\n.ned-logo.animated .ned-logo__lines > span:nth-child(4) {\n  animation: nedLineAnim 2s ease-in-out 0.3s infinite;\n}\n.ned-logo.animated .ned-logo__lines > span:nth-child(5) {\n  animation: nedLineAnim 1s ease-in-out 0.4s infinite;\n}\n\n@keyframes nedRingAnim {\n  0% {\n    rotate: 0deg;\n  }\n  50% {\n    rotate: 35deg;\n  }\n  100% {\n    rotate: 0deg;\n  }\n}\n\n.ned-logo.animated .ned-logo__ring {\n  animation: nedRingAnim 2s ease-in-out infinite;\n}\n\n.ned-logo.simplified-1 .ned-logo__text p:first-of-type {\n  margin-top: calc((var(--ned-logo-size) / 4) * -1);\n}\n\n.ned-logo.simplified-1 .ned-logo__text p:last-of-type {\n  display: none;\n}\n\n.ned-logo.simplified-2 {\n  grid-template-columns: 1fr;\n}\n\n.ned-logo.simplified-2 .ned-logo__text {\n  display: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://nuteczki-easy-download/./src/styles/global.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./global.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/global.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://nuteczki-easy-download/./src/styles/global.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://nuteczki-easy-download/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/content.js");
/******/ 	
/******/ })()
;