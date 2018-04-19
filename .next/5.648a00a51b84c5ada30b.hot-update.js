webpackHotUpdate(5,{

/***/ "./actions/cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addToCart; });
/* unused harmony export clearCart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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

var addToCart = function addToCart(dish, quantity) {
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
        price = dish.price;

    var item = { id: id, name: name, price: price, quantity: quantity, total: Number(price) * quantity, availableOn: '04-10-2018' };

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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SET_ITEM, 'SET_ITEM', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(UPDATE_ITEM, 'UPDATE_ITEM', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(REMOVE_ITEM, 'REMOVE_ITEM', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(CLEAR_ITEMS, 'CLEAR_ITEMS', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(add, 'add', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(update, 'update', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(remove, 'remove', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(clearItems, 'clearItems', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(addToCart, 'addToCart', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  reactHotLoader.register(clearCart, 'clearCart', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/actions/cart.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/general/InputText.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/components/general/InputText.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




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
      className: 'jsx-236169890' + ' ' + 'controls controls-small',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
      value: value,
      onChange: onChange,
      type: type,
      name: name,
      placeholder: label,
      disabled: disabled,

      autoFocus: focus,
      className: 'jsx-236169890' + ' ' + 'input control-input',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'span',
      {
        className: 'jsx-236169890' + ' ' + 'lbl lbl-danger',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      error
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '236169890',
      css: '.input.jsx-236169890{-moz-border-radius:2px;-webkit-border-radius:2px;background-color:#fff;border-radius:2px;border:1px solid #c4c4c4;color:#565a5c;padding:12px 10px;width:100%;font-size:14px;}.control-input.jsx-236169890{border:1px solid #ccc;}.input-root.jsx-236169890{margin-bottom:18px;vertical-align:top;}.input-label.jsx-236169890{color:#2e343b;float:left;font-weight:bold;margin-bottom:7px;}.lbl.jsx-236169890{padding-left:3px;margin-top:3px;color:#B31E0B;}.input-margin-left.jsx-236169890{margin-left:12px;}.input-form.jsx-236169890{background-color:#fff;border:1px solid #ccc;border-radius:3px;box-sizing:border-box;color:#2e343b;display:block;outline:none;padding:10px 12px 11px;-webkit-transition:.2s;-webkit-transition:.2s;transition:.2s;width:100%;height:42px;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}.controls.jsx-236169890{padding:10px 0px;position:relative;width:100%;}.controls-small.jsx-236169890{padding:5px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VuZXJhbC9JbnB1dFRleHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUdvQyxBQVlILEFBSUgsQUFLTCxBQU9HLEFBTUEsQUFJSyxBQWtCTCxBQU1ILGNBeENILEFBeUNiLEdBbENpQixBQU1qQixBQXNCb0IsRUF4Q0MsR0FKckIsQUEwQndCLENBdENNLEVBc0JYLE9BT0gsR0E0QkgsR0F4Q2IsSUFNb0IsRUFnQkEsRUFUcEIsQUE0QkEsR0F6RDBCLFdBdUIxQixFQWdCd0IsU0F0Q0YsYUF1Q04sS0F0Q2EsU0F1Q2IsY0FDRCxFQXZDRyxXQXdDTyxHQXZDSCxrQkFDUCxFQXVDVSxTQXRDTixjQXVDRixDQXRDakIscUNBdUNhLFdBQ0MsWUFDWSx3QkFDSCxxQkFDTCw2REFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9nZW5lcmFsL0lucHV0VGV4dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb3NjYXJncmFjaWEvRG9jdW1lbnRzL3Byb3llY3Rvcy9lYXRob3VzZS9hcHAtZWF0aG91c2UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gVGV4dEZpZWxkR3JvdXAoeyBuYW1lLCB2YWx1ZSwgbGFiZWwsIGVycm9yLCB0eXBlLCBvbkNoYW5nZSwgZm9jdXMsIGRpc2FibGVkID0gZmFsc2UgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHMgY29udHJvbHMtc21hbGxcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2xhYmVsfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGNvbnRyb2wtaW5wdXRcIlxuICAgICAgICBhdXRvRm9jdXM9e2ZvY3VzfVxuICAgICAgLz5cbiAgICB7IGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImxibCBsYmwtZGFuZ2VyXCI+e2Vycm9yfTwvc3Bhbj4gfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgICAgICAgICBjb2xvcjogIzU2NWE1YztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2wtaW5wdXR7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1yb290e1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1sYWJlbHtcbiAgICAgICAgICBjb2xvcjogIzJlMzQzYjtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGJsIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgY29sb3I6ICNCMzFFMEI7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtbWFyZ2luLWxlZnR7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5wdXQtZm9ybXtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY29sb3I6ICMyZTM0M2I7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHggMTFweDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2xzLXNtYWxsIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5UZXh0RmllbGRHcm91cC5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cblRleHRGaWVsZEdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3RleHQnLFxuICBmb2N1czogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0RmllbGRHcm91cDtcbiJdfQ== */\n/*@ sourceURL=components/general/InputText.js */'
    })
  );
}

TextFieldGroup.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  error: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  focus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text',
  focus: false
};

var _default = TextFieldGroup;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextFieldGroup, 'TextFieldGroup', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/components/general/InputText.js');
  reactHotLoader.register(_default, 'default', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/components/general/InputText.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hocs_page__ = __webpack_require__("./hocs/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__("./api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_cart__ = __webpack_require__("./actions/cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_Layout__ = __webpack_require__("./components/common/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_general_InputText__ = __webpack_require__("./components/general/InputText.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_general_ButtonBlock__ = __webpack_require__("./components/general/ButtonBlock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_menu_MenuCalendar__ = __webpack_require__("./components/menu/MenuCalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu_MenuItem__ = __webpack_require__("./components/menu/MenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_general_Cart__ = __webpack_require__("./components/general/Cart.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/pages/menu.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.addCart = function (dish, quantity) {
      _this.props.addToCart(dish, quantity);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dishes = this.props.dishes;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__components_common_Layout__["a" /* default */],
        _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1457705380',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_menu_MenuCalendar__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1457705380' + ' ' + 'fluid-container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1457705380' + ' ' + 'menu',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1457705380' + ' ' + 'row',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                },
                dishes.map(function (item) {
                  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_menu_MenuItem__["a" /* default */], _extends({}, item, { addCart: _this2.addCart, key: item.id, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  }));
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_general_Cart__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1457705380',
          css: '.menu.jsx-1457705380{margin:20px 0px;width:calc(100% - 300px) !important;}.fluid-container.jsx-1457705380{padding-left:1.8rem;padding-right:1.8rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RvQixBQUc2QixBQUtJLGdCQUpnQixJQUtmLHFCQUN2QixXQUxBIiwiZmlsZSI6InBhZ2VzL21lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29zY2FyZ3JhY2lhL0RvY3VtZW50cy9wcm95ZWN0b3MvZWF0aG91c2UvYXBwLWVhdGhvdXNlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBzZWN1cmVQYWdlIGZyb20gJy4uL2hvY3MvcGFnZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaSc7XG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi9hY3Rpb25zL2NhcnQnO1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LSdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9MYXlvdXQnO1xuaW1wb3J0IElucHV0VGV4dCBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvSW5wdXRUZXh0JztcbmltcG9ydCBCdXR0b25CbG9jayBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvQnV0dG9uQmxvY2snO1xuaW1wb3J0IE1lbnVDYWxlbmRhciBmcm9tICcuLi9jb21wb25lbnRzL21lbnUvTWVudUNhbGVuZGFyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUvTWVudUl0ZW0nO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmFsL0NhcnQnO1xuXG5jbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHsgXG4gICAgY29uc3QgZGlzaGVzID0gYXdhaXQgYXBpLmRpc2guZ2V0QWxsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc2hlcyxcbiAgICAgIGlkOiAyLFxuICAgIH07XG4gIH1cblxuICBhZGRDYXJ0ID0gKGRpc2gsIHF1YW50aXR5KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hZGRUb0NhcnQoZGlzaCwgcXVhbnRpdHkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpc2hlcyA9IHRoaXMucHJvcHMuZGlzaGVzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TWVudUNhbGVuZGFyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHVpZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIHsgZGlzaGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHsuLi5pdGVtfSBhZGRDYXJ0PXt0aGlzLmFkZENhcnR9IGtleT17aXRlbS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q2FydCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmx1aWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS44cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS44cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgY2FydDogc3RhdGUuY2FydCxcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBzZWN1cmVQYWdlKGNvbm5lY3QobnVsbCwgeyBhZGRUb0NhcnQgfSkoTWVudSkpOyJdfQ== */\n/*@ sourceURL=pages/menu.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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

var _default = Object(__WEBPACK_IMPORTED_MODULE_4__hocs_page__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(null, { addToCart: __WEBPACK_IMPORTED_MODULE_6__actions_cart__["e" /* addToCart */] })(Menu));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, 'Menu', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/pages/menu.js');
  reactHotLoader.register(_default, 'default', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/pages/menu.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/menu")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducer/cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cart__ = __webpack_require__("./actions/cart.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["c" /* SET_ITEM */]:
      return {
        data: [].concat(_toConsumableArray(state.data), [action.payload]),
        persistExpiresAt: action.date
      };
    case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["d" /* UPDATE_ITEM */]:
      return {
        data: [].concat(_toConsumableArray(state.data.slice(0, action.index)), [Object.assign({}, state.data[action.index], action.payload)], _toConsumableArray(state.data.slice(action.index + 1))),
        persistExpiresAt: action.date
      };
    case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["b" /* REMOVE_ITEM */]:
      return {
        data: [].concat(_toConsumableArray(state.data.slice(0, action.index)), _toConsumableArray(state.data.slice(action.index + 1)))
      };
    case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* CLEAR_ITEMS */]:
      return {
        data: []
      };
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/reducer/cart.js');
  reactHotLoader.register(_default, 'default', '/Users/oscargracia/Documents/proyectos/eathouse/app-eathouse/reducer/cart.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.648a00a51b84c5ada30b.hot-update.js.map