(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("react-addons-css-transition-group"), require("react-highlight-click"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "react-addons-css-transition-group", "react-highlight-click"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("react-addons-css-transition-group"), require("react-highlight-click")) : factory(root["React"], root["classnames"], root["react-addons-css-transition-group"], root["react-highlight-click"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * Buttons
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Helper file for importing Buttons
	 * @example      import { FloatingActionButton } from 'react-buttons/src';
	 ******************************************************************************/
	
	;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ButtonGroup = exports.RaisedButton = exports.FloatingActionButton = exports.Button = undefined;
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FloatingActionButton = __webpack_require__(6);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _RaisedButton = __webpack_require__(7);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _ButtonGroup = __webpack_require__(5);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = exports.Button = _Button2.default;
	var FloatingActionButton = exports.FloatingActionButton = _FloatingActionButton2.default;
	var RaisedButton = exports.RaisedButton = _RaisedButton2.default;
	var ButtonGroup = exports.ButtonGroup = _ButtonGroup2.default;
	
	exports.default = Button;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * Button
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Material Design Button
	 ******************************************************************************/
	
	// External Modules
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactHighlightClick = __webpack_require__(9);
	
	var _reactHighlightClick2 = _interopRequireDefault(_reactHighlightClick);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(8);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _button = __webpack_require__(3);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// Local
	
	var Button = (function (_React$Component) {
	  _inherits(Button, _React$Component);
	
	  /**
	   * Base Button
	   * @param  {Object} props
	   */
	
	  function Button(props) {
	    _classCallCheck(this, Button);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));
	
	    _this2.state = {
	      hoverSize: void 0,
	      hover: false,
	      pressed: false
	    };
	    _this2.handleMouseEnter = _this2.handleMouseEnter.bind(_this2);
	    _this2.handleMouseLeave = _this2.handleMouseLeave.bind(_this2);
	    _this2.handleClick = _this2.handleClick.bind(_this2);
	    return _this2;
	  }
	
	  /**
	   * First mount, get a starting width
	   */
	
	  _createClass(Button, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.calculateWidth();
	    }
	
	    /**
	     * Prevent excessive updates
	     * @param  {Object} nextProps
	     * @param  {Object} nextState
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.state.hover !== nextState.hover) {
	        return true;
	      } else if (this.state.pressed !== nextState.pressed) {
	        return true;
	      } else if (this.props.disabled !== nextProps.disabled) {
	        return true;
	      } else if (this.state.hoverSize !== nextState.hoverSize) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	
	    /**
	     * Called after the DOM is rendered. Updates the state
	     */
	
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.calculateWidth();
	    }
	
	    /**
	     * Clean up
	     */
	
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.pressedTimeout);
	    }
	
	    /**
	     * Get the width of the button so so we ensure the hover effect fits
	     */
	
	  }, {
	    key: 'calculateWidth',
	    value: function calculateWidth() {
	      this.setState({
	        hoverSize: this.refs.container ? Math.max(this.refs.container.offsetWidth, this.refs.container.offsetHeight) : void 0
	      });
	    }
	
	    /**
	     * Let the button now the mouse is here
	     */
	
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter() {
	      if (this.props.disabled || this.props.disableHover) {
	        return;
	      }
	      this.setState({
	        hover: true
	      });
	    }
	
	    /**
	     * Let the button know the mouse is gone
	     */
	
	  }, {
	    key: 'handleMouseLeave',
	    value: function handleMouseLeave() {
	      this.setState({
	        hover: false
	      });
	    }
	
	    /**
	     * Handle the clicks. Toggles pressed state. Optionally call callback
	     * when the pressed stated is removed
	     * @param  {Event]} event
	     */
	
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event, callback) {
	      var _this = this;
	
	      if (this.props.disabled) {
	        event.stopPropagation();
	        event.preventDefault();
	        return;
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(event);
	      }
	
	      this.setState({
	        pressed: true
	      }, function () {
	        clearTimeout(_this.pressedTimeout);
	        _this.pressedTimeout = setTimeout(function () {
	          _this.setState({
	            pressed: false
	          });
	          if (typeof callback === 'function') {
	            callback(event);
	          }
	        }, _this.props.pressedTimeout);
	      });
	    }
	
	    /**
	     * Render either an icon or the childrne of the component
	     * @return {React}
	     */
	
	  }, {
	    key: 'renderInnerContents',
	    value: function renderInnerContents() {
	      if (typeof this.props.icon === 'string') {
	        return _react2.default.createElement('span', { className: _button2.default.icon + ' ' + this.props.iconPrefix + this.props.icon, __source: {
	            fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/Button.jsx',
	            lineNumber: 145
	          }
	        });
	      } else {
	        return this.props.children;
	      }
	    }
	  }, {
	    key: 'getTag',
	    value: function getTag() {
	      if (typeof this.props.href === 'string' && this.props.href.length > 0) {
	        return 'a';
	      } else {
	        return 'div';
	        // return this.props.tag; FF isn't triggereing on <buttons>
	      }
	    }
	
	    /**
	     * Render
	     * @return {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;
	
	      var btnClasses = (0, _classnames2.default)(_button2.default.btn, this.props.className, _button2.default[this.props.type], (_classNames = {}, _defineProperty(_classNames, _button2.default.disabled, this.props.disabled), _defineProperty(_classNames, _button2.default.pressed, this.state.pressed), _classNames));
	
	      var hoverStyles = {};
	      if (this.state.hoverSize) {
	        // Ensure it covers the button
	        hoverStyles.width = this.state.hoverSize * 1.3;
	        hoverStyles.height = hoverStyles.width;
	
	        // Center it
	        hoverStyles.marginLeft = hoverStyles.width / -2;
	        hoverStyles.marginTop = hoverStyles.marginLeft;
	      }
	
	      // Store it on `this` so JSX reads it properly
	      this.tagName = this.getTag();
	
	      // Construct props
	      var props = {
	        disabled: this.props.disabled,
	        ref: 'container',
	        className: btnClasses,
	        onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        onClick: this.handleClick
	      };
	
	      // Setup anchor attributes
	      if (this.tagName === 'a' && !this.props.disabled) {
	        props.href = this.props.href;
	        props.target = this.props.target || '_blank';
	      }
	
	      return _react2.default.createElement(
	        this.tagName,
	        _extends({}, props, {
	          __source: {
	            fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/Button.jsx',
	            lineNumber: 206
	          }
	        }),
	        _react2.default.createElement(
	          _reactHighlightClick2.default,
	          {
	            className: _button2.default.container,
	            disabled: this.props.disabled, __source: {
	              fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/Button.jsx',
	              lineNumber: 207
	            }
	          },
	          this.props.children,
	          typeof this.props.icon === 'string' ? _react2.default.createElement('span', { className: _button2.default.icon + ' ' + this.props.iconPrefix + this.props.icon, __source: {
	              fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/Button.jsx',
	              lineNumber: 211
	            }
	          }) : null,
	          _react2.default.createElement(
	            _reactAddonsCssTransitionGroup2.default,
	            {
	              className: _button2.default.hoverContainer,
	              transitionName: _button2.default,
	              transitionEnterTimeout: 500,
	              transitionLeaveTimeout: 500, __source: {
	                fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/Button.jsx',
	                lineNumber: 212
	              }
	            },
	            this.state.hover ? _react2.default.createElement('div', { className: _button2.default.hoverEffect,
	              style: hoverStyles, __source: {
	                fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/Button.jsx',
	                lineNumber: 218
	              }
	            }) : null
	          )
	        )
	      );
	    }
	  }]);
	
	  return Button;
	})(_react2.default.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	exports.default = Button;
	Button.propTypes = {
	  tag: _react2.default.PropTypes.string,
	  href: _react2.default.PropTypes.string,
	  type: _react2.default.PropTypes.oneOf(['flat', 'action', 'raised']),
	  onClick: _react2.default.PropTypes.func,
	  icon: _react2.default.PropTypes.string,
	  iconPrefix: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  disableHover: _react2.default.PropTypes.bool
	};
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	Button.defaultProps = {
	  disableHover: false,
	  iconPrefix: 'icon-',
	  disabled: false,
	  pressedTimeout: 500,
	  tag: 'button',
	  type: 'flat'
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"button--btn","aui-button":"button--aui-button","disabled":"button--disabled","container":"button--container","hoverEffect":"button--hoverEffect","hoverContainer":"button--hoverContainer","enter":"button--enter","enterActive":"button--enterActive","leave":"button--leave","leaveActive":"button--leaveActive","icon":"button--icon","action":"button--action","raised":"button--raised","pressed":"button--pressed","flat":"button--flat","group":"button--group","fill":"button--fill","right":"button--right","left":"button--left"};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * ButtonGroup
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         A collection of buttons
	 ******************************************************************************/
	
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _button = __webpack_require__(3);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ButtonGroup = (function (_React$Component) {
	  _inherits(ButtonGroup, _React$Component);
	
	  function ButtonGroup() {
	    _classCallCheck(this, ButtonGroup);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).apply(this, arguments));
	  }
	
	  _createClass(ButtonGroup, [{
	    key: 'render',
	    value: function render() {
	      var _classNames;
	
	      var classes = (0, _classnames2.default)(this.props.className, _button2.default.group, (_classNames = {}, _defineProperty(_classNames, _button2.default.fill, this.props.fill === true), _defineProperty(_classNames, _button2.default.right, this.props.align === 'right'), _defineProperty(_classNames, _button2.default.left, this.props.align === 'left'), _classNames));
	      return _react2.default.createElement(
	        'div',
	        { className: classes, __source: {
	            fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/ButtonGroup.jsx',
	            lineNumber: 26
	          }
	        },
	        this.props.children
	      );
	    }
	  }]);
	
	  return ButtonGroup;
	})(_react2.default.Component);
	
	/**
	 * Type Checking
	 * @type {Object}
	 */
	
	exports.default = ButtonGroup;
	ButtonGroup.propTypes = {
	  fill: _react2.default.PropTypes.bool,
	  align: _react2.default.PropTypes.string
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * FloatingActionButton
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Shortcut for Button
	 ******************************************************************************/
	
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FloatingActionButton = (function (_React$Component) {
	  _inherits(FloatingActionButton, _React$Component);
	
	  function FloatingActionButton() {
	    _classCallCheck(this, FloatingActionButton);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FloatingActionButton).apply(this, arguments));
	  }
	
	  _createClass(FloatingActionButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Button2.default, _extends({}, this.props, {
	        type: 'action', __source: {
	          fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/FloatingActionButton.jsx',
	          lineNumber: 16
	        }
	      }));
	    }
	  }]);
	
	  return FloatingActionButton;
	})(_react2.default.Component);
	
	exports.default = FloatingActionButton;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	/** ****************************************************************************
	 * RaiseButton
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Shortcut for Button
	 ******************************************************************************/
	
	;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RaisedButton = (function (_React$Component) {
	  _inherits(RaisedButton, _React$Component);
	
	  function RaisedButton() {
	    _classCallCheck(this, RaisedButton);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RaisedButton).apply(this, arguments));
	  }
	
	  _createClass(RaisedButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Button2.default, _extends({}, this.props, {
	        type: 'raised', __source: {
	          fileName: '../../../../strict-loader/index.js!/Users/Isaac/src/react-buttons/node_modules/eslint-loader/index.js!/Users/Isaac/src/react-buttons/src/RaisedButton.jsx',
	          lineNumber: 16
	        }
	      }));
	    }
	  }]);
	
	  return RaisedButton;
	})(_react2.default.Component);
	
	exports.default = RaisedButton;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Buttons.js.map