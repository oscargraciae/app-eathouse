module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/.next/dist/" + ({"0":"chunks/components_map_MapZone_49a06d2b3ff73dc2fdb3ce0b400916f7"}[chunkId]||chunkId) + "-" + {"0":"430f40f0f7d3768ec4ba"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return require('next/dynamic').SameLoopPromise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


// import fetch from 'isomorphic-unfetch';

var baseUrl = 'http://localhost:3001';
// const baseUrl = 'http://127.0.0.1:3000';
// const baseUrl = 'https://api.gigbox.mx';
// axios.defaults.baseURL = 'http://localhost:3001/api/v1';

__WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.baseURL = 'http://www.api.eathouse.mx/api/v1';

var api = {
  user: {
    authentication: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(email, password) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/users/login', { email: email, password: password });

              case 2:
                response = _context.sent;
                return _context.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function authentication(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return authentication;
    }(),
    create: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(userData) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/users/signup', userData);

              case 2:
                response = _context2.sent;
                return _context2.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x3) {
        return _ref2.apply(this, arguments);
      }

      return create;
    }(),
    get: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(id) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/users/' + id);

              case 2:
                response = _context3.sent;
                return _context3.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get(_x4) {
        return _ref3.apply(this, arguments);
      }

      return get;
    }(),
    createAddress: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(data) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/users/address', data);

              case 2:
                response = _context4.sent;
                return _context4.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createAddress(_x5) {
        return _ref4.apply(this, arguments);
      }

      return createAddress;
    }(),
    getAddress: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/address');

              case 2:
                response = _context5.sent;
                return _context5.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAddress() {
        return _ref5.apply(this, arguments);
      }

      return getAddress;
    }()
  },
  creditCard: {
    create: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(data) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/credit-cards', data);

              case 2:
                response = _context6.sent;
                return _context6.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function create(_x6) {
        return _ref6.apply(this, arguments);
      }

      return create;
    }(),
    getAll: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/credit-cards');

              case 2:
                response = _context7.sent;
                return _context7.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getAll() {
        return _ref7.apply(this, arguments);
      }

      return getAll;
    }()
  },
  suscriptions: {
    get: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8(id) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/suscriptions/' + id);

              case 2:
                response = _context8.sent;
                return _context8.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function get(_x7) {
        return _ref8.apply(this, arguments);
      }

      return get;
    }()
  },
  dish: {
    getAll: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/dishes');

              case 2:
                response = _context9.sent;
                return _context9.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getAll() {
        return _ref9.apply(this, arguments);
      }

      return getAll;
    }(),
    get: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee10(id) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/dishes/' + id);

              case 2:
                response = _context10.sent;
                return _context10.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function get(_x8) {
        return _ref10.apply(this, arguments);
      }

      return get;
    }()
  },
  orders: {
    getAll: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee11() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/orders');

              case 2:
                response = _context11.sent;
                return _context11.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getAll() {
        return _ref11.apply(this, arguments);
      }

      return getAll;
    }(),
    create: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee12(order) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/orders', order);

              case 2:
                response = _context12.sent;
                return _context12.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function create(_x9) {
        return _ref12.apply(this, arguments);
      }

      return create;
    }(),
    estimateOrder: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee13(order) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/orders/estimate-order', order);

              case 2:
                response = _context13.sent;
                return _context13.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function estimateOrder(_x10) {
        return _ref13.apply(this, arguments);
      }

      return estimateOrder;
    }(),
    getDetail: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee14(id) {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/orders/order-detail/' + id);

              case 2:
                response = _context14.sent;
                return _context14.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getDetail(_x11) {
        return _ref14.apply(this, arguments);
      }

      return getDetail;
    }(),
    getSchedules: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee15() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/orders/schedules');

              case 2:
                response = _context15.sent;
                return _context15.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getSchedules() {
        return _ref15.apply(this, arguments);
      }

      return getSchedules;
    }()
  }
};

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);




function ButtonApp(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-4162521388' + ' ' + 'containerAppButon'
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'button',
      { onClick: props.click, disabled: props.disabled || props.loading, className: 'jsx-4162521388' + ' ' + (props.buttonStyle || '')
      },
      props.loading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        {
          className: 'jsx-4162521388'
        },
        'Cargando...'
      ),
      !props.loading && props.text
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4162521388',
      css: ['.containerAppButon{padding:5px;}', '.btn{display:inline-block;margin-bottom:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:1px solid;text-align:center;vertical-align:middle;font-weight:bold;line-height:1.43;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;cursor:pointer;}', '.btn[disabled]{opacity:.3;cursor:not-allowed;}', '.btn-large{padding:10px 32px;font-size:16px;}', '.btn-block{display:block;white-space:normal;width:100%;}', '.btn-primary{border-color:#FF7901 !important;background-color:#FF7901 !important;color:#fff;}', '.btn-primary:hover,.btn-primary:focus{background:#cc1433;}', '.btn-blue{border-color:#3498db;background-color:#3498db;color:#fff;}', '.btn-blue:hover,.btn-blue:focus{background:#2980b9;}', '.btn-default{background:#fff;border-color:#9a9a9a;color:#000;}', '.btn-default:hover{background:#e8e8e8;}', '.btn-facebook{border-color:#3B5999;background-color:#3B5999;color:#fff;}', '.btn-facebook:hover,.btn-facebook:focus{background:#3B5999;}']
    })
  );
}

ButtonApp.defaultProps = {
  text: 'default',
  buttonStyle: 'default',
  loading: false,
  disabled: false,
  click: null
};

/* harmony default export */ __webpack_exports__["a"] = (ButtonApp);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-geosuggest"
var external__react_geosuggest_ = __webpack_require__(20);
var external__react_geosuggest__default = /*#__PURE__*/__webpack_require__.n(external__react_geosuggest_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(5);
var dynamic__default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "validator"
var external__validator_ = __webpack_require__(12);
var external__validator__default = /*#__PURE__*/__webpack_require__.n(external__validator_);

// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(13);
var isEmpty__default = /*#__PURE__*/__webpack_require__.n(isEmpty_);

// CONCATENATED MODULE: ./validations/address.js



/* harmony default export */ var validations_address = (function (data) {
  var errors = {};

  if (external__validator__default.a.isEmpty(data.street)) {
    errors.street = "La calle y el Nº es obligatorio. ";
  }

  if (external__validator__default.a.isEmpty(data.area)) {
    errors.area = "La colonia es obligatoria. ";
  }

  if (external__validator__default.a.isEmpty(data.zipcode)) {
    errors.zipcode = "El codigo postal es obligatorio. ";
  }

  return {
    errors: errors,
    isValid: isEmpty__default()(errors)
  };
});
// EXTERNAL MODULE: ./api.js
var api = __webpack_require__(4);

// EXTERNAL MODULE: ./utils/geospatial.js
var geospatial = __webpack_require__(18);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(3);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/general/InputTextIdSmall.js




function TextFieldIdGroup(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      focus = _ref.focus,
      _ref$id = _ref.id,
      id = _ref$id === undefined ? '' : _ref$id,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled;

  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-495829068' + ' ' + 'controls controls-small'
    },
    external__react__default.a.createElement('input', {
      value: value,
      onChange: onChange,
      type: type,
      name: name,
      id: id,
      placeholder: label,
      disabled: disabled,

      autoFocus: focus,
      className: 'jsx-495829068' + ' ' + 'input control-input'
    }),
    error && external__react__default.a.createElement(
      'span',
      {
        className: 'jsx-495829068' + ' ' + 'lbl lbl-danger'
      },
      error
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '495829068',
      css: ['.input.jsx-495829068{-moz-border-radius:2px;-webkit-border-radius:2px;background-color:#fff;border-radius:2px;border:1px solid #c4c4c4;color:#565a5c;padding:8px 10px;width:100%;font-size:14px;}', '.control-input.jsx-495829068{border:1px solid #ccc;}', '.input-root.jsx-495829068{margin-bottom:18px;vertical-align:top;}', '.input-label.jsx-495829068{color:#2e343b;float:left;font-weight:bold;margin-bottom:7px;}', '.lbl.jsx-495829068{padding-left:3px;margin-top:3px;color:#B31E0B;}', '.input-margin-left.jsx-495829068{margin-left:12px;}', '.input-form.jsx-495829068{background-color:#fff;border:1px solid #ccc;border-radius:3px;box-sizing:border-box;color:#2e343b;display:block;outline:none;padding:10px 12px 11px;-webkit-transition:.2s;-webkit-transition:.2s;transition:.2s;width:100%;height:42px;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}', '.controls.jsx-495829068{padding:10px 0px;position:relative;width:100%;}', '.controls-small.jsx-495829068{padding:5px 0;}']
    })
  );
}

TextFieldIdGroup.defaultProps = {
  type: 'text',
  focus: false
};

/* harmony default export */ var InputTextIdSmall = (TextFieldIdGroup);
// EXTERNAL MODULE: ./components/general/ButtonBlock.js
var ButtonBlock = __webpack_require__(8);

// EXTERNAL MODULE: external "apollo-utilities"
var external__apollo_utilities_ = __webpack_require__(21);
var external__apollo_utilities__default = /*#__PURE__*/__webpack_require__.n(external__apollo_utilities_);

// CONCATENATED MODULE: ./components/user/AddressForm.js


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import libraries




// import local libraries




// import components



// import MapZone from '../map/MapZone';
var MapZone = dynamic__default()(new (__webpack_require__(5).SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/(43);

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(0).then((function (require) {
    try {
      var m = __webpack_require__(43);

      m.__webpackChunkName = 'components_map_MapZone_49a06d2b3ff73dc2fdb3ce0b400916f7';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var AddressForm_AddressForm = function (_React$Component) {
  _inherits(AddressForm, _React$Component);

  function AddressForm() {
    var _this2 = this;

    _classCallCheck(this, AddressForm);

    var _this = _possibleConstructorReturn(this, (AddressForm.__proto__ || Object.getPrototypeOf(AddressForm)).call(this));

    _this.onSubmit = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(e) {
        var response, ok, address;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (!_this.isValid()) {
                  _context.next = 8;
                  break;
                }

                _this.setState({ isLoading: true });
                _context.next = 5;
                return api["a" /* default */].user.createAddress(_this.state);

              case 5:
                response = _context.sent;
                ok = response.ok, address = response.address;


                if (ok) {
                  _this.setState({ isLoading: false });
                  if (_this.props.afterSave) {
                    _this.props.afterSave();
                  }
                } else {
                  console.log("Ha ocurrido un error");
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };

    _this.onSuggestSelect = function (suggest) {
      console.log("Datos mapa-->", suggest);
      if (suggest) {
        if (Object(geospatial["b" /* isPointAvailable */])([suggest.location.lng, suggest.location.lat])) {
          _this.setState({ address: suggest.description, latLng: suggest.location, lat: suggest.location.lat, lng: suggest.location.lng, addressMap: suggest.label, addressNotAvailable: false }, function () {
            _this.fillInAddress(suggest.gmaps);
          });
        } else {
          _this.setState({ addressNotAvailable: true, userLocation: [suggest.location.lng, suggest.location.lat], address: '' });
        }
      }
    };

    _this.fillInAddress = function (place) {
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        postal_code: 'short_name'
      };

      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          var name = document.getElementById(addressType).name;
          _this.setState(_defineProperty({}, name, val));
        }
      }
    };

    _this.state = {
      street: '',
      area: '',
      zipcode: '',
      city: '',
      state: '',
      addressMap: '',
      description: '',
      lat: 0,
      lng: 0,
      userId: 0,
      addressNotAvailable: false,
      address: '',
      latLng: null,
      userLocation: null,
      isLoading: false,
      errors: {}
    };
    return _this;
  }

  _createClass(AddressForm, [{
    key: 'isValid',
    value: function isValid() {
      var _validation = validations_address(this.state),
          errors = _validation.errors,
          isValid = _validation.isValid;

      if (!isValid) {
        this.setState({ errors: errors });
      }

      return isValid;
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = this.state.errors;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-4210009551'
        },
        external__react__default.a.createElement(
          'form',
          { onSubmit: this.onSubmit, autoComplete: 'off', className: 'jsx-4210009551' + ' ' + 'signupForm'
          },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-4210009551' + ' ' + 'row'
            },
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-4210009551' + ' ' + 'col-md-12'
              },
              external__react__default.a.createElement(
                'label',
                {
                  className: 'jsx-4210009551'
                },
                'Direcci\xF3n'
              ),
              external__react__default.a.createElement(external__react_geosuggest__default.a, {
                placeholder: 'Escribe correctamente la direcci\xF3n (Colonia, Ciudad, Estado)',
                onSuggestSelect: this.onSuggestSelect,
                suggestsClassName: 'suggest',
                suggestItemClassName: 'suggestItem',
                inputClassName: 'input control-input'
              })
            )
          ),
          this.state.address && external__react__default.a.createElement(
            'div',
            { id: 'rowFormAddress', className: 'jsx-4210009551'
            },
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-4210009551' + ' ' + 'row'
              },
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-4210009551' + ' ' + 'col-md-6'
                },
                external__react__default.a.createElement(
                  'label',
                  {
                    className: 'jsx-4210009551'
                  },
                  'Calle y No.'
                ),
                external__react__default.a.createElement(InputTextIdSmall, {
                  error: errors.street,
                  value: this.state.street,
                  onChange: this.onChange,
                  type: 'text',
                  name: 'street',
                  id: 'street_number',
                  label: ''
                })
              ),
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-4210009551' + ' ' + 'col-md-6'
                },
                external__react__default.a.createElement(
                  'label',
                  {
                    className: 'jsx-4210009551'
                  },
                  'Colonia'
                ),
                external__react__default.a.createElement(InputTextIdSmall, {
                  error: errors.area,
                  value: this.state.area,
                  onChange: this.onChange,
                  type: 'text',
                  name: 'area',
                  id: 'route',
                  label: ''
                })
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-4210009551' + ' ' + 'row'
              },
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-4210009551' + ' ' + 'col-md-6'
                },
                external__react__default.a.createElement('input', { type: 'hidden', name: 'state', id: 'administrative_area_level_1', value: this.state.state, className: 'jsx-4210009551'
                })
              ),
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-4210009551' + ' ' + 'col-md-6'
                },
                external__react__default.a.createElement('input', { type: 'hidden', name: 'city', id: 'locality', value: this.state.city, className: 'jsx-4210009551'
                })
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-4210009551' + ' ' + 'row'
              },
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-4210009551' + ' ' + 'col-md-6'
                },
                external__react__default.a.createElement(
                  'label',
                  {
                    className: 'jsx-4210009551'
                  },
                  'Codigo Postal'
                ),
                external__react__default.a.createElement(InputTextIdSmall, {
                  error: errors.zipcode,
                  value: this.state.zipcode,
                  onChange: this.onChange,
                  type: 'text',
                  name: 'zipcode',
                  id: 'postal_code',
                  label: ''
                })
              ),
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-4210009551' + ' ' + 'col-md-6'
                },
                external__react__default.a.createElement(
                  'label',
                  {
                    className: 'jsx-4210009551'
                  },
                  'Agregar Notas (Opcional)'
                ),
                external__react__default.a.createElement(InputTextIdSmall, {
                  error: errors.description,
                  value: this.state.description,
                  onChange: this.onChange,
                  type: 'text',
                  name: 'description',
                  id: 'postal_code',
                  label: ''
                })
              )
            ),
            external__react__default.a.createElement(
              'div',
              {
                className: 'jsx-4210009551' + ' ' + 'row'
              },
              external__react__default.a.createElement(
                'div',
                {
                  className: 'jsx-4210009551' + ' ' + 'col-md-4'
                },
                external__react__default.a.createElement(ButtonBlock["a" /* default */], {
                  text: 'Guardar',
                  buttonStyle: 'btn btn-primary btn-large btn-block',
                  loading: this.state.isLoading
                })
              )
            )
          ),
          this.state.addressNotAvailable && external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-4210009551'
            },
            external__react__default.a.createElement(
              'p',
              {
                className: 'jsx-4210009551'
              },
              'Por el moment no tenemos covertura en en tu zona.'
            ),
            external__react__default.a.createElement(MapZone, { userLocation: this.state.userLocation })
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '4210009551',
          css: ['label.jsx-4210009551{font-size:12px;}', '.input.jsx-4210009551{-moz-border-radius:2px;-webkit-border-radius:2px;background-color:#fff;border-radius:2px;border:1px solid #c4c4c4;color:#565a5c;padding:12px 10px;width:100%;font-size:14px;}', '.input.jsx-4210009551:disabled{background:#dddddd;}', '.control-input.jsx-4210009551{border:1px solid #ccc;}', '.containerButton.jsx-4210009551{padding:10px 0px;}', '.geosuggest__suggests--hidden.jsx-4210009551{max-height:0;overflow:hidden;border-width:0;}', '.suggest.jsx-4210009551{border:1px solid #DDD;}', '.suggestItem.jsx-4210009551:hover{color:green;cursor:pointer;}', '.suggestItem.jsx-4210009551{padding:10px;}', '.inputCity.jsx-4210009551{font-size:24px;width:100%;padding:0px 10px;padding-left:5px;line-height:35px;border:none;color:#565a5c;border:none;border-bottom:1px solid #DDDDDD !important;}', '.inputCity.jsx-4210009551:focus{outline:0px;border-bottom:2px solid #ff1940 !important;}', '.form-group.jsx-4210009551{display:inline-block;margin-left:auto;margin-right:auto;margin-top:5rem;width:100%;}', '.autocomplete-container.jsx-4210009551{border-bottom:honeydew;border-left:honeydew;border-right:honeydew;border-top:1px solid #e6e6e6;box-shadow:0 2px 4px rgba(0,0,0,0.2);border-radius:0 0 2px 2px;}', '.loadingSpinner.jsx-4210009551{color:#18bc9c;font-size:30px;}']
        })
      );
    }
  }]);

  return AddressForm;
}(external__react__default.a.Component);

/* harmony default export */ var user_AddressForm = __webpack_exports__["a"] = (AddressForm_AddressForm);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@turf/turf");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unsetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTokenFromCookie; });
/* unused harmony export getUserFromLocalStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTokenFromLocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);


var setToken = function setToken(token) {
  if (!process.browser) {
    return;
  }

  window.localStorage.setItem('token', token);
  __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set('token', token, { expires: 365 });
};

var unsetToken = function unsetToken() {
  if (!process.browser) {
    return;
  }
  window.localStorage.removeItem('token');
  __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove('token');
};

var getTokenFromCookie = function getTokenFromCookie(req) {
  if (!req.headers.cookie) {
    return undefined;
  }
  var jwtCookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith('token=');
  });
  if (!jwtCookie) {
    return undefined;
  }
  var jwt = jwtCookie.split('=')[1];
  return jwt;
};

var getUserFromLocalStorage = function getUserFromLocalStorage() {
  var json = window.localStorage.user;
  return json ? JSON.parse(json) : undefined;
};

var getTokenFromLocalStorage = function getTokenFromLocalStorage() {
  var json = window.localStorage.token;
  return json ? json : undefined;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isPointAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return availableAreaPolygon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_turf__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__turf_turf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__turf_turf__);


var availableAreaPolygon = [[[-100.43014526367188, 25.750424835909385], [-100.36920547485352, 25.704804791228057], [-100.3626823425293, 25.71315688761512], [-100.37023544311522, 25.726766455170058], [-100.3681755065918, 25.727848967542563], [-100.37195205688477, 25.73341601835119], [-100.36731719970703, 25.737281872476796], [-100.36405563354492, 25.739292066931647], [-100.3652572631836, 25.742539232302107], [-100.35907745361328, 25.745940929423043], [-100.36422729492188, 25.75104329248735], [-100.3707504272461, 25.762947953929974], [-100.38654327392578, 25.777943036216094], [-100.40645599365234, 25.76263875704196], [-100.42207717895508, 25.770986790341], [-100.43014526367188, 25.750424835909385]]];

function isPointAvailable(coor) {
  var pnt = Object(__WEBPACK_IMPORTED_MODULE_0__turf_turf__["point"])(coor);
  var zone = Object(__WEBPACK_IMPORTED_MODULE_0__turf_turf__["polygon"])(availableAreaPolygon);
  return Object(__WEBPACK_IMPORTED_MODULE_0__turf_turf__["booleanPointInPolygon"])(pnt, zone);
};



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-geosuggest");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(17);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "jwt-decode"
var external__jwt_decode_ = __webpack_require__(11);
var external__jwt_decode__default = /*#__PURE__*/__webpack_require__.n(external__jwt_decode_);

// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(23);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(24);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/common/Header.js






router__default.a.onRouteChangeStart = function () {
  return external__nprogress__default.a.start();
};
router__default.a.onRouteChangeComplete = function () {
  return external__nprogress__default.a.done();
};
router__default.a.onRouteChangeError = function () {
  return external__nprogress__default.a.done();
};

var Header_menuGuest = function menuGuest() {
  return external__react__default.a.createElement(
    'ul',
    { className: 'nav navbar-nav navbar-right' },
    external__react__default.a.createElement(
      'li',
      null,
      external__react__default.a.createElement(
        link__default.a,
        { href: '/login' },
        external__react__default.a.createElement(
          'a',
          { className: 'btn_nav' },
          external__react__default.a.createElement(
            'span',
            null,
            'Iniciar sesi\xF3n'
          )
        )
      )
    ),
    external__react__default.a.createElement(
      'li',
      null,
      external__react__default.a.createElement(
        link__default.a,
        { href: '/signup' },
        external__react__default.a.createElement(
          'a',
          { className: 'btn_navf' },
          external__react__default.a.createElement(
            'span',
            null,
            'Reg\xEDstrate'
          )
        )
      )
    )
  );
};

var Header_menuAuth = function menuAuth(props) {
  return external__react__default.a.createElement(
    'ul',
    { className: 'nav navbar-nav navbar-right' },
    props.user.user_address.length > 0 && external__react__default.a.createElement(
      'li',
      null,
      external__react__default.a.createElement(
        'a',
        null,
        external__react__default.a.createElement('i', { className: 'fas fa-map-marker-alt' }),
        ' ',
        props.user.user_address[0].addressMap.substr(0, 30),
        '...'
      )
    ),
    external__react__default.a.createElement(
      'li',
      { className: 'dropdown' },
      external__react__default.a.createElement(
        'a',
        {
          className: 'dropdown-toggle',
          'data-toggle': 'dropdown',
          role: 'button',
          'aria-haspopup': 'true',
          'aria-expanded': 'false'
        },
        'Cuenta ',
        external__react__default.a.createElement('span', { className: 'caret' })
      ),
      external__react__default.a.createElement(
        'ul',
        { className: 'dropdown-menu' },
        external__react__default.a.createElement(
          'li',
          null,
          external__react__default.a.createElement(
            'a',
            {
              'data-toggle': 'collapse',
              'data-target': '.navbar-collapse.in',
              href: '/orders',
              className: 'btn_nav nav-lbl-principal'
            },
            'Mis ordenes'
          )
        ),
        external__react__default.a.createElement('li', { role: 'separator', className: 'divider' }),
        external__react__default.a.createElement(
          'li',
          null,
          external__react__default.a.createElement(
            'a',
            {
              'data-toggle': 'collapse',
              'data-target': '.navbar-collapse.in',
              href: '/schedules',
              className: 'btn_nav nav-lbl-principal'
            },
            'Mi agenda'
          )
        ),
        external__react__default.a.createElement('li', { role: 'separator', className: 'divider' }),
        external__react__default.a.createElement(
          'li',
          null,
          external__react__default.a.createElement(
            'a',
            {
              'data-toggle': 'collapse',
              'data-target': '.navbar-collapse.in',
              href: '/logout',
              className: 'btn_nav'
            },
            'Salir'
          )
        )
      )
    )
  );
};

function Header(props) {
  return external__react__default.a.createElement(
    'header',
    {
      className: 'jsx-1435664258'
    },
    external__react__default.a.createElement(
      'nav',
      {
        className: 'jsx-1435664258' + ' ' + 'navbar navbar-default'
      },
      external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-1435664258' + ' ' + 'container-fluid'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-1435664258' + ' ' + 'navbar-header'
          },
          external__react__default.a.createElement(
            'button',
            {
              type: 'button',

              'data-toggle': 'collapse',
              'data-target': '.navbar-collapse',
              className: 'jsx-1435664258' + ' ' + 'navbar-toggle'
            },
            external__react__default.a.createElement(
              'span',
              {
                className: 'jsx-1435664258' + ' ' + 'sr-only'
              },
              'Toggle navigation'
            ),
            external__react__default.a.createElement('span', {
              className: 'jsx-1435664258' + ' ' + 'icon-bar'
            }),
            external__react__default.a.createElement('span', {
              className: 'jsx-1435664258' + ' ' + 'icon-bar'
            }),
            external__react__default.a.createElement('span', {
              className: 'jsx-1435664258' + ' ' + 'icon-bar'
            })
          ),
          external__react__default.a.createElement(
            link__default.a,
            { href: '/' },
            external__react__default.a.createElement(
              'a',
              {
                className: 'jsx-1435664258' + ' ' + 'navbar-brand'
              },
              external__react__default.a.createElement('img', {
                src: '/static/logo2.png',
                alt: 'eathouse',
                width: '120',
                className: 'jsx-1435664258'
              }),
              external__react__default.a.createElement(
                'h2',
                {
                  className: 'jsx-1435664258'
                },
                props.isAuthenticated
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-1435664258' + ' ' + 'collapse navbar-collapse'
          },
          props.isAuthenticated ? Header_menuAuth(props) : Header_menuGuest()
        )
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1435664258',
      css: ['header{position:fixed;width:100%;z-index:100;box-shadow:initial;}', '.navbar-brand{height:40px;}', '.navbar-default{background:#FFF;border:1px solid #e8ebe9;margin-bottom:0px;}', '#nprogress{pointer-events:none;}', '#nprogress .bar{background:#ff9300;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}', '#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #ff9300,0 0 5px #ff9300;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}', '@media (max-width:600px){.navbar-default{box-shadow:0 1px 10px 0 rgba(0,0,0,.1);}.navbar-default .navbar-toggle{border:none;}}']
    })
  );
}
// CONCATENATED MODULE: ./components/common/Footer.js



/* harmony default export */ var Footer = (function () {
  return external__react__default.a.createElement(
    "div",
    {
      className: "jsx-1887945511"
    },
    external__react__default.a.createElement(
      "footer",
      {
        className: "jsx-1887945511"
      },
      external__react__default.a.createElement(
        "div",
        {
          className: "jsx-1887945511" + " " + "container"
        },
        external__react__default.a.createElement(
          "div",
          {
            className: "jsx-1887945511" + " " + "row"
          },
          external__react__default.a.createElement(
            "div",
            {
              className: "jsx-1887945511" + " " + "footernav col-md-3"
            },
            external__react__default.a.createElement(
              "h4",
              {
                className: "jsx-1887945511" + " " + "footer-title"
              },
              "EMPRESA"
            ),
            external__react__default.a.createElement(
              "ul",
              {
                className: "jsx-1887945511"
              },
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { href: "https://gigbox.mx/app/faq", className: "jsx-1887945511"
                  },
                  "Preguntas frecuentes"
                )
              ),
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { href: "https://gigbox.mx/app/privacy-policy", className: "jsx-1887945511"
                  },
                  "Pol\xEDtica de privacidad"
                )
              ),
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { href: "https://gigbox.mx/app/terms_of_service", className: "jsx-1887945511"
                  },
                  " T\xE9rminos y condiciones"
                )
              )
            )
          ),
          external__react__default.a.createElement(
            "div",
            {
              className: "jsx-1887945511" + " " + "footernav footernav-right col-md-3"
            },
            external__react__default.a.createElement(
              "h4",
              {
                className: "jsx-1887945511" + " " + "footer-title"
              },
              "CONTACTANOS"
            ),
            external__react__default.a.createElement(
              "ul",
              {
                className: "jsx-1887945511"
              },
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { href: "mailto:ayuda@gigbox.mx", className: "jsx-1887945511"
                  },
                  " ayuda@eathouse.mx"
                )
              ),
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { target: "_blank", rel: "noopener noreferrer", href: "https://www.messenger.com/t/gigboxmx/", className: "jsx-1887945511"
                  },
                  " Deja tu Mensaje en Facebook"
                )
              ),
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  {
                    className: "jsx-1887945511"
                  },
                  " (81) 8182002386"
                )
              )
            )
          ),
          external__react__default.a.createElement(
            "div",
            {
              className: "jsx-1887945511" + " " + "footernav footernav-right col-md-3"
            },
            external__react__default.a.createElement(
              "h4",
              {
                className: "jsx-1887945511" + " " + "footer-title"
              },
              "SIGUENOS EN"
            ),
            external__react__default.a.createElement(
              "ul",
              {
                className: "jsx-1887945511"
              },
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { target: "_blank", rel: "noopener noreferrer", href: "https://www.facebook.com/gigboxmx", className: "jsx-1887945511" + " " + "social-button"
                  },
                  external__react__default.a.createElement("i", {
                    className: "jsx-1887945511" + " " + "fab fa-facebook-f fa-lg"
                  })
                )
              ),
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { target: "_blank", rel: "noopener noreferrer", href: "https://twitter.com/gigboxmx", className: "jsx-1887945511" + " " + "social-button"
                  },
                  external__react__default.a.createElement("i", {
                    className: "jsx-1887945511" + " " + "fab fa-twitter fa-lg"
                  })
                )
              ),
              external__react__default.a.createElement(
                "li",
                {
                  className: "jsx-1887945511" + " " + "footernav-item"
                },
                external__react__default.a.createElement(
                  "a",
                  { target: "_blank", rel: "noopener noreferrer", href: "https://www.instagram.com/gigboxmx/", className: "jsx-1887945511" + " " + "social-button"
                  },
                  " ",
                  external__react__default.a.createElement("i", {
                    className: "jsx-1887945511" + " " + "fab fa-instagram fa-lg"
                  })
                )
              )
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          {
            className: "jsx-1887945511" + " " + "row"
          },
          external__react__default.a.createElement(
            "div",
            {
              className: "jsx-1887945511" + " " + "footernav col-md-8"
            },
            external__react__default.a.createElement("hr", {
              className: "jsx-1887945511"
            }),
            external__react__default.a.createElement("img", { alt: "Gigbox Footer", src: "/static/logo-eathouse.png", width: "100", className: "jsx-1887945511"
            }),
            external__react__default.a.createElement(
              "p",
              {
                className: "jsx-1887945511"
              },
              "Hecho con ",
              external__react__default.a.createElement("i", {
                className: "jsx-1887945511" + " " + "fa fa-heart lbl-danger"
              }),
              " en Monterrey (Mexico)",
              external__react__default.a.createElement("br", {
                className: "jsx-1887945511"
              }),
              external__react__default.a.createElement(
                "span",
                {
                  className: "jsx-1887945511"
                },
                "\xA9 eathouse. Todos los derechos reservados"
              )
            )
          )
        )
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: "1887945511",
      css: ["footer.jsx-1887945511{border-top:1px solid #EEE;background:#FFF;color:#42413E;margin-top:10px;}", ".footer-title.jsx-1887945511{font-family:\"BentonSans\",Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;color:#515252;font-size:14px;text-align:left;text-transform:uppercase;line-height:normal;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;cursor:pointer;}", ".footernav.jsx-1887945511{padding:20px 10px;}", ".footernav.jsx-1887945511 ul.jsx-1887945511{margin:0px;padding:0px;}", ".footernav-item.jsx-1887945511{padding:0px 0px;list-style:none;margin-top:12px;}", ".footernav-item.jsx-1887945511,.footernav.jsx-1887945511 a.jsx-1887945511{color:#79776B;font-size:14px;}", ".social-button.jsx-1887945511{border-radius:50%;border:2px solid #42413E;padding:7px 0 0;width:40px;height:40px;margin-bottom:0;text-align:center;display:inline-block;font-size:14px;float:left;margin:0 5px;}", ".footernav-item.jsx-1887945511 .social-button.jsx-1887945511:hover{color:#FF7901;border-color:#FF7901;}", ".arrow.jsx-1887945511{border-bottom-color:#ddd;border-color:transparent;border-style:solid;border-top-width:0;border-width:11px;height:0;left:75px;margin-left:-11px;position:absolute;top:-11px;width:0;}", ".footernav-ul.jsx-1887945511{float:left;padding-right:50px !important;}", "@media (max-width:600px){.footernav-ul.jsx-1887945511{float:left;padding-right:0;width:100%;}}"]
    })
  );
});
// EXTERNAL MODULE: external "react-bootstrap"
var external__react_bootstrap_ = __webpack_require__(7);
var external__react_bootstrap__default = /*#__PURE__*/__webpack_require__.n(external__react_bootstrap_);

// EXTERNAL MODULE: ./components/user/AddressForm.js + 2 modules
var AddressForm = __webpack_require__(9);

// CONCATENATED MODULE: ./components/general/ModalGeneralAddress.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ModalGeneralAddress_ModalGeneralAddress = function (_React$Component) {
  _inherits(ModalGeneralAddress, _React$Component);

  function ModalGeneralAddress() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalGeneralAddress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalGeneralAddress.__proto__ || Object.getPrototypeOf(ModalGeneralAddress)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: _this.props.show
    }, _this.afterSave = function () {
      _this.setState({ show: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalGeneralAddress, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        null,
        external__react__default.a.createElement(
          external__react_bootstrap_["Modal"],
          { show: this.state.show },
          external__react__default.a.createElement(
            external__react_bootstrap_["Modal"].Body,
            null,
            external__react__default.a.createElement(
              'h4',
              { className: 'text-center' },
              '\xA1Ingresa tu direcci\xF3n y empieza a ordenar!'
            ),
            external__react__default.a.createElement('br', null),
            external__react__default.a.createElement(AddressForm["a" /* default */], { afterSave: this.afterSave })
          )
        )
      );
    }
  }]);

  return ModalGeneralAddress;
}(external__react__default.a.Component);

/* harmony default export */ var general_ModalGeneralAddress = (ModalGeneralAddress_ModalGeneralAddress);
// CONCATENATED MODULE: ./components/common/Layout.js


// import libraries



// import components




/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      loggedUser = _ref.loggedUser,
      isAuthenticated = _ref.isAuthenticated,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'eathouse' : _ref$title,
      user = _ref.user;

  return external__react__default.a.createElement(
    'div',
    { id: 'layout', className: 'jsx-3928600279'
    },
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement(
        'title',
        {
          className: 'jsx-3928600279'
        },
        title
      ),
      external__react__default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('link', { href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css', rel: 'stylesheet', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('script', { defer: true, src: 'https://use.fontawesome.com/releases/v5.0.8/js/all.js', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('script', { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA-yTAH4cD5Lq3VDwysl-Me5bBek1phNBY&libraries=places', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', className: 'jsx-3928600279'
      }),
      external__react__default.a.createElement('script', { type: 'text/javascript', src: 'https://cdn.conekta.io/js/latest/conekta.js', className: 'jsx-3928600279'
      })
    ),
    external__react__default.a.createElement(Header, { loggedUser: loggedUser, isAuthenticated: isAuthenticated, user: user }),
    isAuthenticated && external__react__default.a.createElement(general_ModalGeneralAddress, { show: !user.withAddress }),
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-3928600279' + ' ' + 'container-margin-top'
      },
      children
    ),
    external__react__default.a.createElement(Footer, null),
    external__react__default.a.createElement(style__default.a, {
      styleId: '3928600279',
      css: ['body{color:#42413E;background:#FAFAFA;}', '.container-margin-top{padding-top:50px;}', '.container-box{border-radius:3px;background-color:#fff;border:1px solid #e8ebe9;margin-top:15px;padding:15px 40px;}', '.modal-credit-card{min-height:490px;}', '.containerAppButon{padding:5px;}', '.btn{display:inline-block;margin-bottom:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:1px solid;text-align:center;vertical-align:middle;font-weight:bold;line-height:1.43;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;cursor:pointer;}', '.btn[disabled]{opacity:.3;cursor:not-allowed;}', '.btn-large{padding:10px 32px;font-size:16px;}', '.btn-block{display:block;white-space:normal;width:100%;}', '.btn-primary{border-color:#FF7901 !important;background-color:#FF7901 !important;color:#fff;}', '.btn-primary:hover,.btn-primary:focus{background:#cc1433;}', '.btn-blue{border-color:#3498db;background-color:#3498db;color:#fff;}', '.btn-blue:hover,.btn-blue:focus{background:#2980b9;}', '.btn-default{background:#fff;border-color:#9a9a9a;color:#000;}', '.btn-default:hover{background:#e8e8e8;}', '.btn-facebook{border-color:#3B5999;background-color:#3B5999;color:#fff;}', '.btn-facebook:hover,.btn-facebook:focus{background:#3B5999;}']
    })
  );
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);


/* harmony default export */ __webpack_exports__["a"] = (function (target) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (ctx.res) {
    // Si el rediccionamiento se produce en el servidor,
    // usamos la respuesta HTTP 303 con la cabecera "Location".
    // Esto producirá el redireccionamiento.
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    // En el navegador, usamos el componente router de Next.js
    // para reemplazar la ubicación actual por el destino
    // de redireccionamiento.
    __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.replace(target);
  }
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return clearCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
var SET_ITEM = 'SET_ITEM';
var UPDATE_ITEM = 'UPDATE_ITEM';
var REMOVE_ITEM = 'REMOVE_ITEM';
var CLEAR_ITEMS = 'CLEAR_ITEMS';



function add(data) {
  return {
    type: SET_ITEM,
    payload: data,
    date: __WEBPACK_IMPORTED_MODULE_0_moment___default()().add(180, 'm').format()
  };
}

function update(data, index) {
  return {
    type: UPDATE_ITEM,
    payload: data,
    index: index,
    date: __WEBPACK_IMPORTED_MODULE_0_moment___default()().add(180, 'm').format()
  };
}

function remove(index) {
  return {
    type: REMOVE_ITEM,
    index: index
  };
}

function clearItems() {
  return {
    type: CLEAR_ITEMS
  };
}

var addToCart = function addToCart(dish, quantity, deliveryDate) {
  return function (dispatch, getState) {
    var data = getState().cart.data;

    var isExist = false;
    var index = void 0;

    data.map(function (item, i) {
      if (item.id === dish.id) {
        isExist = true;
        index = i;
      }
    });

    var id = dish.id,
        name = dish.name,
        price = dish.price,
        image = dish.image;

    var item = { id: id, name: name, price: price, image: image, quantity: quantity, total: Number(price) * quantity, availableOn: '04-10-2018', deliveryDate: deliveryDate };

    if (isExist) {
      if (quantity === 0) {
        dispatch(remove(index));
      } else {
        dispatch(update(item, index));
      }
    } else {
      dispatch(add(item));
    }
  };
};

var clearCart = function clearCart() {
  return function (dispatch, getState) {
    dispatch(clearItems());
  };
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);




function TextFieldGroup(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      type = _ref.type,
      onChange = _ref.onChange,
      focus = _ref.focus,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-236169890' + ' ' + 'controls controls-small'
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
      value: value,
      onChange: onChange,
      type: type,
      name: name,
      placeholder: label,
      disabled: disabled,

      autoFocus: focus,
      className: 'jsx-236169890' + ' ' + 'input control-input'
    }),
    error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'span',
      {
        className: 'jsx-236169890' + ' ' + 'lbl lbl-danger'
      },
      error
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '236169890',
      css: ['.input.jsx-236169890{-moz-border-radius:2px;-webkit-border-radius:2px;background-color:#fff;border-radius:2px;border:1px solid #c4c4c4;color:#565a5c;padding:12px 10px;width:100%;font-size:14px;}', '.control-input.jsx-236169890{border:1px solid #ccc;}', '.input-root.jsx-236169890{margin-bottom:18px;vertical-align:top;}', '.input-label.jsx-236169890{color:#2e343b;float:left;font-weight:bold;margin-bottom:7px;}', '.lbl.jsx-236169890{padding-left:3px;margin-top:3px;color:#B31E0B;}', '.input-margin-left.jsx-236169890{margin-left:12px;}', '.input-form.jsx-236169890{background-color:#fff;border:1px solid #ccc;border-radius:3px;box-sizing:border-box;color:#2e343b;display:block;outline:none;padding:10px 12px 11px;-webkit-transition:.2s;-webkit-transition:.2s;transition:.2s;width:100%;height:42px;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}', '.controls.jsx-236169890{padding:10px 0px;position:relative;width:100%;}', '.controls-small.jsx-236169890{padding:5px 0;}']
    })
  );
}

TextFieldGroup.defaultProps = {
  type: 'text',
  focus: false
};

/* harmony default export */ __webpack_exports__["a"] = (TextFieldGroup);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
/* harmony export (immutable) */ __webpack_exports__["b"] = formatDateString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment_timezone__);


function formatDate(value) {
  var newDate = new Date(value);
  var date = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.tz(newDate, "America/Monterrey");
  var dateFormat = date.format('DD MMMM YYYY hh:mm');
  return dateFormat;
}

function formatDateString(value, format) {
  var newDate = new Date(value);
  var date = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.tz(newDate, "America/Monterrey");
  var dateFormat = date.format(format);
  return dateFormat;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export thousandSpace */
/* unused harmony export toMoney */
/* harmony export (immutable) */ __webpack_exports__["a"] = moneyThousand;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);


function thousandSpace(value) {
  var numStr = 0;
  var regex = /(\d+)(\d{3})/;

  if (typeof value === 'number') {
    numStr = String(value);
  } else {
    numStr = value;
  }

  return numStr.replace(/^\d+/, function (w) {
    while (regex.test(w)) {
      w = w.replace(regex, '$1,$2');
    }

    return w;
  });
}

function toMoney(value) {
  var num = 0;

  if (typeof value === 'number') {
    num = value;
  } else if (typeof value === 'string') {
    num = parseFloat(value);
  } else {
    throw new Error('Cannot parse number');
  }

  return num.toFixed(2);
}

function moneyThousand(value) {

  var _money = toMoney(value);

  return thousandSpace(_money);
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(19);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-promise-middleware"
var external__redux_promise_middleware_ = __webpack_require__(34);
var external__redux_promise_middleware__default = /*#__PURE__*/__webpack_require__.n(external__redux_promise_middleware_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(35);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// EXTERNAL MODULE: external "redux-persist"
var external__redux_persist_ = __webpack_require__(25);
var external__redux_persist__default = /*#__PURE__*/__webpack_require__.n(external__redux_persist_);

// EXTERNAL MODULE: external "redux-logger"
var external__redux_logger_ = __webpack_require__(36);
var external__redux_logger__default = /*#__PURE__*/__webpack_require__.n(external__redux_logger_);

// EXTERNAL MODULE: external "redux-reset"
var external__redux_reset_ = __webpack_require__(37);
var external__redux_reset__default = /*#__PURE__*/__webpack_require__.n(external__redux_reset_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external__redux_devtools_extension_ = __webpack_require__(38);
var external__redux_devtools_extension__default = /*#__PURE__*/__webpack_require__.n(external__redux_devtools_extension_);

// EXTERNAL MODULE: ./actions/cart.js
var cart = __webpack_require__(29);

// CONCATENATED MODULE: ./reducer/cart.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



// const INITIAL_STATE = [{
//     id: 0,
//     name: '',
//     quantity: 0,
//     price: 0,
//     total: 0,
//     availableOn: '',
// }];

var INITIAL_STATE = {
  data: []
};

/* harmony default export */ var reducer_cart = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case cart["c" /* SET_ITEM */]:
      return {
        data: [].concat(_toConsumableArray(state.data), [action.payload]),
        persistExpiresAt: action.date
      };
    case cart["d" /* UPDATE_ITEM */]:
      return {
        data: [].concat(_toConsumableArray(state.data.slice(0, action.index)), [Object.assign({}, state.data[action.index], action.payload)], _toConsumableArray(state.data.slice(action.index + 1))),
        persistExpiresAt: action.date
      };
    case cart["b" /* REMOVE_ITEM */]:
      return {
        data: [].concat(_toConsumableArray(state.data.slice(0, action.index)), _toConsumableArray(state.data.slice(action.index + 1)))
      };
    case cart["a" /* CLEAR_ITEMS */]:
      return {
        data: []
      };
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducer.js




/* harmony default export */ var reducer = (Object(external__redux_["combineReducers"])({
  cart: reducer_cart
}));
// CONCATENATED MODULE: ./redux/store.js











var middlewares = [external__redux_promise_middleware__default()(), external__redux_thunk__default.a];

// if (__DEV__) { // eslint-disable-line
//   middlewares.push(createLogger());
// }

/* harmony default export */ var store = __webpack_exports__["a"] = (Object(external__redux_["createStore"])(reducer, undefined, Object(external__redux_devtools_extension_["composeWithDevTools"])(external__redux_["applyMiddleware"].apply(undefined, middlewares), Object(external__redux_persist_["autoRehydrate"])(), external__redux_reset__default()())));

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-reset");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_AddressForm__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ModalAddress = function (_React$Component) {
  _inherits(ModalAddress, _React$Component);

  function ModalAddress() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalAddress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalAddress.__proto__ || Object.getPrototypeOf(ModalAddress)).call.apply(_ref, [this].concat(args))), _this), _this.afterSave = function () {
      if (_this.props.responseModal) {
        _this.props.responseModal();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // state = {
  //   show: ,
  // }

  _createClass(ModalAddress, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"],
          { show: this.props.show },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Modal"].Body,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              { className: 'text-center' },
              '\xA1Ingresa tu direcci\xF3n y empieza a ordenar!'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__user_AddressForm__["a" /* default */], { afterSave: this.afterSave })
          )
        )
      );
    }
  }]);

  return ModalAddress;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ModalAddress);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_persist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_transform_expire__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_transform_expire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_persist_transform_expire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_auth__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_redirect__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redux_store__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_general_ModalAddress__ = __webpack_require__(39);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




//import storage from 'redux-persist/lib/storage'









// import components


/* harmony default export */ __webpack_exports__["a"] = (function (Page) {
  return function (_React$Component) {
    _inherits(DefaultPage, _React$Component);

    function DefaultPage() {
      _classCallCheck(this, DefaultPage);

      return _possibleConstructorReturn(this, (DefaultPage.__proto__ || Object.getPrototypeOf(DefaultPage)).apply(this, arguments));
    }

    _createClass(DefaultPage, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var token = this.props.loggedUser;
        if (token) {
          __WEBPACK_IMPORTED_MODULE_5_axios___default.a.defaults.headers.common['Authorization'] = 'JWT ' + token;
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var expireTransform = __WEBPACK_IMPORTED_MODULE_4_redux_persist_transform_expire___default()({
          expireKey: 'persistExpiresAt',
          defaultState: {
            data: []
          }
        });

        Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["persistStore"])(__WEBPACK_IMPORTED_MODULE_9__redux_store__["a" /* default */], {
          whitelist: ['cart'],
          transforms: [expireTransform]
        }, function () {
          return _this2.setState({ ready: true });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var token = this.props.loggedUser;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
          { store: __WEBPACK_IMPORTED_MODULE_9__redux_store__["a" /* default */] },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page, this.props)
        );
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
          var loggedUser, props, token, user, tokenDecode;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  loggedUser = process.browser ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_auth__["b" /* getTokenFromLocalStorage */])() : Object(__WEBPACK_IMPORTED_MODULE_7__utils_auth__["a" /* getTokenFromCookie */])(context.req);
                  _context.next = 3;
                  return Page.getInitialProps(context);

                case 3:
                  props = _context.sent;
                  token = loggedUser;
                  user = null;

                  if (token) {
                    _context.next = 11;
                    break;
                  }

                  delete __WEBPACK_IMPORTED_MODULE_5_axios___default.a.defaults.headers.common['Authorization'];
                  Object(__WEBPACK_IMPORTED_MODULE_8__utils_redirect__["a" /* default */])('/', context);
                  _context.next = 16;
                  break;

                case 11:
                  __WEBPACK_IMPORTED_MODULE_5_axios___default.a.defaults.headers.common['Authorization'] = 'JWT ' + token;

                  tokenDecode = __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default()(token);
                  _context.next = 15;
                  return __WEBPACK_IMPORTED_MODULE_10__api__["a" /* default */].user.get(tokenDecode.id);

                case 15:
                  user = _context.sent;

                case 16:
                  return _context.abrupt('return', _extends({}, props, {
                    loggedUser: loggedUser,
                    currentUrl: context.pathname,
                    isAuthenticated: !!loggedUser,
                    user: user
                  }));

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return DefaultPage;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);
});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redux-persist-transform-expire");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("mapbox-gl");

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__(31);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(28);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// CONCATENATED MODULE: ./components/menu-calendar/ItemCalendar.js




function ItemCalendar(props) {
  var date = external__moment__default()(props.date, "MM-DD-YYYY", "es").locale("mx");
  var selectedDay = external__moment__default()(props.selectedDate, "MM-DD-YYYY", "es").locale("mx").format('DD');
  var day = date.day();

  var completeDate = date.format('DD/MM/YYYY');
  var weekDayName = date.format('ddd');
  var weekDayNumber = date.format('DD');

  // console.log("dia de la semana :"+date.day());
  // console.log("mes:"+date.month());
  // console.log("año:"+date.year());
  // console.log("Fecha con localización :"+ date.format("DD MMMM YYYY"));
  // console.log("Fechsssss", date);

  // console.log("Día de la semana", weekDayName, weekDayNumber);
  // console.log(selectedDay, weekDayNumber);
  return external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-1174838779' + ' ' + ((day === 6 || day === 0 ? 'disabled' : '') || '')
    },
    external__react__default.a.createElement(
      'div',
      { onClick: function onClick() {
          return props.changeDate(props.date);
        }, className: 'jsx-1174838779' + ' ' + ((selectedDay === weekDayNumber ? 'dayItem selected' : 'dayItem') || '')
      },
      external__react__default.a.createElement(
        'span',
        {
          className: 'jsx-1174838779' + ' ' + 'dayName'
        },
        weekDayName
      ),
      external__react__default.a.createElement(
        'span',
        {
          className: 'jsx-1174838779'
        },
        weekDayNumber
      )
    ),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1174838779',
      css: ['.dayItem.jsx-1174838779{padding:10px 15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:"BentonSans",Helvetica,Arial,sans-serif;font-weight:400;color:#79776B;}', '.dayItem.jsx-1174838779:hover{color:#FF7901;cursor:pointer;}', '.dayName.jsx-1174838779{font-size:12px;text-transform:uppercase;font-weight:600;}', '.selected.jsx-1174838779{border-bottom:2px solid #3BCF75;color:#3BCF75;}', '.disabled.jsx-1174838779{color:red !important;}', '.disabled.jsx-1174838779 .dayItem.jsx-1174838779{color:#dadae1 !important;pointer-events:none;}']
    })
  );
}

/* harmony default export */ var menu_calendar_ItemCalendar = (ItemCalendar);
// CONCATENATED MODULE: ./components/menu/MenuCalendar.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import libraries


// import local libraries


// import components


var MenuCalendar_MenuCalendar = function (_React$Component) {
  _inherits(MenuCalendar, _React$Component);

  function MenuCalendar() {
    _classCallCheck(this, MenuCalendar);

    var _this = _possibleConstructorReturn(this, (MenuCalendar.__proto__ || Object.getPrototypeOf(MenuCalendar)).call(this));

    _this.changeDate = function (date) {
      _this.setState({ selectedDate: date }, function () {
        _this.props.changeDay(_this.state.selectedDate);
      });
    };

    _this.state = {
      datesWeek: [],
      selectedDate: new Date(Date.now())
    };
    return _this;
  }

  _createClass(MenuCalendar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var curr = new Date();

      // let currentDay = curr.getDate();
      // let first = curr.getDate() - curr.getDay();
      // let last = first + 6;

      // let firstday = new Date(curr.setDate(first)).toUTCString();
      // let lastday = new Date(curr.setDate(last)).toUTCString();

      var dates = [];
      var day = 0;
      while (day <= 12) {
        var nextDate = new Date(curr);
        nextDate.setDate(curr.getDate() + day);
        dates.push(nextDate);
        day++;
      }

      this.setState({ datesWeek: dates });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          datesWeek = _state.datesWeek,
          selectedDate = _state.selectedDate;

      console.log("Selected Date--->", selectedDate);
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2171805998'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-2171805998' + ' ' + 'menuCalendar'
          },
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-2171805998' + ' ' + 'menuDays'
            },
            datesWeek.map(function (item, key) {
              return external__react__default.a.createElement(menu_calendar_ItemCalendar, { selectedDate: selectedDate, date: item, key: key, changeDate: _this2.changeDate });
            })
          )
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '2171805998',
          css: ['.menuCalendar.jsx-2171805998{background:#FFF;border-bottom:1px solid #EEE;height:70px;margin-right:250px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.menuDays.jsx-2171805998{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}']
        })
      );
    }
  }]);

  return MenuCalendar;
}(external__react__default.a.Component);

/* harmony default export */ var menu_MenuCalendar = __webpack_exports__["a"] = (MenuCalendar_MenuCalendar);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_formatDate__ = __webpack_require__(31);





function CartItem(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'li',
    {
      className: 'jsx-1350216044' + ' ' + 'item'
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { backgroundImage: 'url(' + props.image + ')' }, className: 'jsx-1350216044' + ' ' + 'item-photo'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1350216044' + ' ' + 'item-details'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1350216044' + ' ' + 'item-name'
        },
        props.name
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1350216044' + ' ' + 'lbl-subtotal'
        },
        'Entrega: ',
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_formatDate__["b" /* formatDateString */])(props.deliveryDate, "DD MMMM YYYY")
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1350216044' + ' ' + 'item-date'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          {
            className: 'jsx-1350216044' + ' ' + ''
          },
          '(',
          props.quantity,
          ') $',
          props.total
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '1350216044',
      css: ['.item.jsx-1350216044{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:10px 0;border-bottom:1px solid #e8ebe9;padding-bottom:8px;}', '.item-photo.jsx-1350216044{display:table-cell;min-width:45px;width:45px;height:45px;background-size:45px;background-position:center center;background-repeat:no-repeat;margin-right:12px;}', '.item-name.jsx-1350216044{font-family:"BentonSans",Helvetica,Arial,sans-serif;font-weight:bold;font-style:normal;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:1.3;width:100%;font-size:12px;}', '.item-date.jsx-1350216044{font-family:"BentonSans",Helvetica,Arial,sans-serif;font-weight:300;font-style:normal;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:1.3;width:100%;font-size:12px;color:#79776B;}', '.item-quntity.jsx-1350216044{font-family:"BentonSans",Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}', '.lbl-quantity.jsx-1350216044{padding-right:px;}', '.lbl-subtotal.jsx-1350216044{color:#3BCF75;font-size:14px;}']
    })
  );
}

/* harmony default export */ __webpack_exports__["a"] = (CartItem);

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_formatNumber__ = __webpack_require__(32);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.addItem = function () {
      var productToCart = _this.props.cart.data.filter(function (item) {
        return item.id === _this.props.id;
      })[0];
      _this.props.addCart(_this.props, productToCart.quantity + 1);
    }, _this.removeItem = function () {
      var productToCart = _this.props.cart.data.filter(function (item) {
        return item.id === _this.props.id;
      })[0];
      _this.props.addCart(_this.props, productToCart.quantity - 1);
    }, _this.btnCart = function (itemCart) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'button',
          { className: 'small button-add-cart-small', onClick: function onClick() {
              return _this.removeItem();
            } },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'add-icon' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            { className: 'add-text' },
            '-'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'lbl-quantity' },
          itemCart.quantity
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'button',
          { className: 'small button-add-cart-small', onClick: function onClick() {
              return _this.addItem();
            } },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'add-icon' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            { className: 'add-text' },
            '+'
          )
        )
      );
    }, _this.btnAdd = function () {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'button',
        { className: 'small button-add-cart', onClick: function onClick() {
            return _this.props.addCart(_this.props, 1);
          } },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'add-icon' }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'add-text' },
          'Agregar'
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var productToCart = this.props.cart.data.filter(function (item) {
        return item.id === _this2.props.id;
      })[0];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2095808796' + ' ' + 'col-md-3 menu-item'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { style: { backgroundImage: 'url(' + this.props.image + ')' }, className: 'jsx-2095808796' + ' ' + 'menu-item-photo'
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2095808796' + ' ' + 'menu-item-details'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2095808796' + ' ' + 'menu-item-description'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              { href: '/menu/item/' + this.props.id, className: 'jsx-2095808796' + ' ' + 'menu-item-name-link'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-2095808796' + ' ' + 'text'
                },
                this.props.name
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2095808796' + ' ' + 'menu-item-actions'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2095808796' + ' ' + 'menu-item-price'
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-2095808796'
                },
                '$',
                this.props.price
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2095808796' + ' ' + 'menu-item-buttons'
              },
              productToCart ? this.btnCart(productToCart) : this.btnAdd()
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2095808796',
          css: ['.menu-item-photo{background-color:rgba(231,228,218,0.9);background-repeat:no-repeat;background-size:auto 100%;box-sizing:border-box;border-top-left-radius:3px;border-top-right-radius:3px;border-left:1px solid #e8ebe9;border-top:1px solid #e8ebe9;border-right:1px solid #e8ebe9;overflow:hidden;cursor:pointer;display:block;padding-top:100%;height:0;width:100%;position:relative;z-index:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:moz-none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}', '.menu-item-details{display:block;position:relative;width:100%;background-color:white;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-left:1px solid #e8ebe9;border-bottom:1px solid #e8ebe9;border-right:1px solid #e8ebe9;padding-top:10px;}', '.menu-item-description{height:100px;}', '.menu-item-name-link{font-family:"BentonSans",Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-left:16px;margin-right:16px;font-size:16px;line-height:1.3em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;color:#515252;overflow:visible;text-overflow:ellipsis;cursor:pointer;display:block;padding:10px 0;}', '.menu-item-actions{height:53px;border-top:1px solid #e8ebe9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}', '.menu-item-price{font-size:18px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;color:#79776B;float:left;border-right:1px solid #e8ebe9;text-align:justify;padding-left:16px;padding-right:16px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.menu-item-buttons{margin-right:12px;font-size:16px;display:block;float:right;}', '.add-to-cart{border-color:#F27242;background-color:white;color:#F27242;border-width:2px;font-size:14px;text-transform:uppercase;overflow:hidden;line-height:25px;padding-left:0px;padding-right:0px;width:100px;height:28px;visibility:hidden;border-radius:3px;}', '.add-to-cart:hover{background:#F27242;color:white;}', '.button-add-cart-small{color:#3BCF75;background:0 0;line-height:33px;cursor:pointer;position:relative;border-radius:4px;overflow:hidden;text-align:center;border:1px solid #3BCF75;padding:0 20px;font-size:14px;margin:13px 0 15px;width:50;z-index:1;}', '.button-add-cart-small:hover{background:#3BCF75;color:white;}', '.menu-item:hover .button-add-cart-small,.menu-item:hover .button-add-cart{visibility:visible;}', '.button-add-cart{color:#3BCF75;background:0 0;line-height:33px;cursor:pointer;position:relative;border-radius:4px;overflow:hidden;text-align:center;border:1px solid #3BCF75;padding:0 20px;font-size:14px;margin:13px 0 15px;width:128px;z-index:1;}', '.button-add-cart:hover{background:#3BCF75;color:white;}', '.lbl-quantity{padding:10px;}', '.col-md-3{padding:10px;}']
        })
      );
    }
  }]);

  return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(MenuItem));

// export default MenuItem;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_formatNumber__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ButtonBlock__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CartItem__ = __webpack_require__(48);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


// import librairs



// import local libraries


// import components



function Cart(props) {
  var total = 0;
  props.cart.data.map(function (item, i) {
    total = total + item.total;
  });

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3278309953' + ' ' + 'sidecart'
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3278309953' + ' ' + 'sidecart-header'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3278309953' + ' ' + 'sidecart-heading'
        },
        'Tu orden'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3278309953' + ' ' + 'sidecart-body'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3278309953' + ' ' + 'items-group'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'ul',
          {
            className: 'jsx-3278309953' + ' ' + 'items'
          },
          props.cart.data.map(function (item, i) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CartItem__["a" /* default */], _extends({ key: i }, item));
          })
        ),
        props.cart.data.length === 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3278309953' + ' ' + 'empty-cart'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-3278309953'
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-3278309953'
              },
              'Tu canasta est\xE1 vac\xEDa'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-3278309953'
            },
            'Te invitamos a agregar platillos a tu canasta.'
          )
        )
      )
    ),
    props.cart.data.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3278309953' + ' ' + 'sidecart-footer'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'dl',
        {
          className: 'jsx-3278309953' + ' ' + 'estimated-total'
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3278309953' + ' ' + 'line-item'
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dt',
            {
              className: 'jsx-3278309953' + ' ' + 'lbl-total'
            },
            'Total'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'dd',
            {
              className: 'jsx-3278309953' + ' ' + 'lbl-total'
            },
            '$',
            Object(__WEBPACK_IMPORTED_MODULE_3__utils_formatNumber__["a" /* moneyThousand */])(total)
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'a',
        { href: '/checkout', className: 'jsx-3278309953' + ' ' + 'btn btn-primary btn-large btn-block'
        },
        'Comprar'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3278309953',
      css: ['.menu.jsx-3278309953{margin:20px 0px;width:calc(100% - 260px) !important;}', '.col-fixed.jsx-3278309953{position:-webkit-sticky !important;position:sticky !important;right:0;top:80px;padding-top:20px;}', '.fluid-container.jsx-3278309953{padding-left:1.8rem;padding-right:1.8rem;}', '.sidecart.jsx-3278309953{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;width:300px;height:95%;top:52px;right:0px;background:white;z-index:21;border-left:1px solid #e8ebe9;}', '.sidecart-header.jsx-3278309953{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;border-bottom:1px solid #e8ebe9;margin:17px 22px 0;padding-bottom:22px;padding-top:3px;}', '.sidecart-heading.jsx-3278309953{font-weight:bold;font-size:18px;}', '.sidecart-body.jsx-3278309953{height:100%;overflow-y:auto;overflow-x:hidden;padding:22px;}', '.sidecart-footer.jsx-3278309953{padding:22px;border-top:1px solid #e8ebe9;background:white;}', '.estimated-total.jsx-3278309953{font-family:"BentonSans",Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;font-size:14px;font-weight:normal;line-height:1;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;color:#42413E;margin-bottom:20px;}', '.line-item.jsx-3278309953{display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-justify-content:space-between;-ms-flex-pack:justify;-ms-flex-line-pack:center;-webkit-justify-content:space-between;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:12px;}', '.lbl-total.jsx-3278309953{font-size:21px;}', '.items.jsx-3278309953{list-style:none;padding:0;margin:0;}', '.empty-cart.jsx-3278309953{text-align:center;padding:20px 10px;font-size:14px;}', '.empty-cart.jsx-3278309953 span.jsx-3278309953{font-weight:bold;font-size:15px;margin-bottom:20px;}']
    })
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Cart));

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hocs_page__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_cart__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_formatDate__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_Layout__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_general_InputText__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_general_ButtonBlock__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu_MenuCalendar__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_MenuItem__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_general_Cart__ = __webpack_require__(51);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// import { connect } from 'react-'








var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      deliveryDate: ''
    }, _this.changeDay = function (deliveryDate) {
      console.log("Fecha seleccionada!!--->", deliveryDate);
      var newDate = Object(__WEBPACK_IMPORTED_MODULE_7__utils_formatDate__["b" /* formatDateString */])(deliveryDate, 'YYYY/MM/DD');
      _this.setState({ deliveryDate: newDate });
    }, _this.addCart = function (dish, quantity) {
      var deliveryDate = _this.state.deliveryDate;

      _this.props.addToCart(dish, quantity, deliveryDate);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newDate = Object(__WEBPACK_IMPORTED_MODULE_7__utils_formatDate__["b" /* formatDateString */])(new Date(Date.now()), 'YYYY/MM/DD');
      this.setState({ deliveryDate: newDate });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dishes = this.props.dishes;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__components_common_Layout__["a" /* default */],
        this.props,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1457705380'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_menu_MenuCalendar__["a" /* default */], { changeDay: this.changeDay }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1457705380' + ' ' + 'fluid-container'
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1457705380' + ' ' + 'menu'
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1457705380' + ' ' + 'row'
                },
                dishes.map(function (item) {
                  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_menu_MenuItem__["a" /* default */], _extends({}, item, { addCart: _this2.addCart, key: item.id }));
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_general_Cart__["a" /* default */], null)
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1457705380',
          css: ['.menu.jsx-1457705380{margin:20px 0px;width:calc(100% - 300px) !important;}', '.fluid-container.jsx-1457705380{padding-left:1.8rem;padding-right:1.8rem;}']
        })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var query = _ref2.query;
        var dishes;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__api__["a" /* default */].dish.getAll();

              case 2:
                dishes = _context.sent;
                return _context.abrupt('return', {
                  dishes: dishes,
                  id: 2
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart,
//   }
// }

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4__hocs_page__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(null, { addToCart: __WEBPACK_IMPORTED_MODULE_6__actions_cart__["e" /* addToCart */] })(Menu)));

/***/ })
/******/ ]);