(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("prop-types"), require("classnames"), require("react-transition-group"), require("ship-components-highlight-click"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "prop-types", "classnames", "react-transition-group", "ship-components-highlight-click"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("prop-types"), require("classnames"), require("react-transition-group"), require("ship-components-highlight-click")) : factory(root["React"], root["prop-types"], root["classnames"], root["react-transition-group"], root["ship-components-highlight-click"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * Buttons
	 *
	 * @author       Isaac Suttell <isaac.suttell@sony.com>
	 * @file         Helper file for importing Buttons
	 * @example      import { FloatingActionButton } from 'react-buttons/src';
	 ******************************************************************************/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconButton = exports.ButtonGroup = exports.RaisedButton = exports.FloatingActionButton = exports.Button = undefined;
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FloatingActionButton = __webpack_require__(8);
	
	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);
	
	var _RaisedButton = __webpack_require__(10);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _ButtonGroup = __webpack_require__(7);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _IconButton = __webpack_require__(9);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var Button = exports.Button = _Button2.default;var FloatingActionButton = exports.FloatingActionButton = _FloatingActionButton2.default;
	var RaisedButton = exports.RaisedButton = _RaisedButton2.default;
	var ButtonGroup = exports.ButtonGroup = _ButtonGroup2.default;
	var IconButton = exports.IconButton = _IconButton2.default;
	
	exports.default = Button;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * Button
	 *
	 * @author       Isaac Suttell <isaac.suttell@sony.com>
	 * @file         Material Design Button
	 ******************************************************************************/
	
	// External Modules
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _shipComponentsHighlightClick = __webpack_require__(13);
	
	var _shipComponentsHighlightClick2 = _interopRequireDefault(_shipComponentsHighlightClick);
	
	var _reactTransitionGroup = __webpack_require__(6);
	
	var _Tooltip = __webpack_require__(11);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _button = __webpack_require__(4);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	// Local
	
	
	var Button = function (_Component) {
	  _inherits(Button, _Component);
	
	  /**
	   * Base Button
	   * @param  {Object} props
	   */
	  function Button(props) {
	    _classCallCheck(this, Button);
	
	    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
	
	    _this.state = {
	      hoverSize: void 0,
	      hover: false,
	      pressed: false
	    };
	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
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
	      var _this2 = this;
	
	      var propsToCheck = ['className', 'iconClass', 'disabled'];
	      var statesToCheck = ['hover', 'pressed', 'hoverSize'];
	      return nextProps.forceUpdate || propsToCheck.some(function (key) {
	        return _this2.props[key] !== nextProps[key];
	      }) || statesToCheck.some(function (key) {
	        return _this2.state[key] !== nextState[key];
	      });
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
	      if (!this.refs.container) {
	        return;
	      }
	
	      var nextHoverSize = Math.max(this.refs.container.offsetWidth, this.refs.container.offsetHeight);
	      var currHoverSize = this.state.hoverSize;
	      var hoverSizeChanged = nextHoverSize !== currHoverSize;
	
	      // Only update the hoverSize state if
	      // it's not the same as the current state.hoverSize
	      if (hoverSizeChanged) {
	        this.setState({
	          hoverSize: nextHoverSize
	        });
	      }
	    }
	
	    /**
	     * Let the button now the mouse is here
	     */
	
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter() {
	      if (this.props.disabled) {
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
	     * Handle the clicks. Toggles pressed state
	     * @param  {Event]} event
	     */
	
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var _this3 = this;
	
	      if (this.props.disabled) {
	        event.stopPropagation();
	        event.preventDefault();
	        return;
	      }
	
	      // Blur so the button loses focus and doesn't
	      // quietly interfere with keyboard shortcuts
	      event.target.blur();
	
	      if (this.props.onClick) {
	        this.props.onClick(event);
	      }
	
	      this.setState({
	        pressed: true
	      }, function () {
	        clearTimeout(_this3.pressedTimeout);
	        _this3.pressedTimeout = setTimeout(function () {
	          _this3.setState({
	            pressed: false
	          });
	        }, _this3.props.pressedTimeout);
	      });
	    }
	
	    /**
	     * The tag devirved from the propTypes
	     * @return {String}
	     */
	
	  }, {
	    key: 'getTag',
	    value: function getTag() {
	      if (typeof this.props.href === 'string' && this.props.href.length > 0) {
	        return 'a';
	      } else {
	        return this.props.tag; // FF isn't triggereing on <buttons>
	      }
	    }
	
	    /**
	     * Get the icon
	     * @return {React}
	     */
	
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      if (typeof this.props.iconClass === 'string') {
	        return _react2.default.createElement('span', { className: _button2.default.icon + ' ' + this.props.iconClass });
	      } else if (typeof this.props.icon === 'string') {
	        return _react2.default.createElement('span', { className: _button2.default.icon + ' ' + this.props.iconPrefix + this.props.icon });
	      } else {
	        return null;
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
	
	      var btnClasses = (0, _classnames2.default)('ship-components-btn', _button2.default.btn, _button2.default[this.props.type], (_classNames = {}, _defineProperty(_classNames, _button2.default.disabled, this.props.disabled), _defineProperty(_classNames, _button2.default.pressed, this.state.pressed), _classNames));
	
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
	      var ButtonComponent = this.getTag();
	
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
	      if (ButtonComponent === 'a' && !this.props.disabled) {
	        props.href = this.props.href;
	        props.target = this.props.target;
	        props.download = this.props.download;
	        props.rel = this.props.rel;
	      }
	
	      return _react2.default.createElement('div', { className: (0, _classnames2.default)(_button2.default.wrapper, this.props.className) }, _react2.default.createElement(ButtonComponent, props, _react2.default.createElement(_shipComponentsHighlightClick2.default, {
	        className: _button2.default.container,
	        disabled: this.props.disabled
	      }, this.props.children, this.renderIcon(), _react2.default.createElement(_reactTransitionGroup.CSSTransitionGroup, {
	        className: _button2.default.hoverContainer,
	        transitionName: _button2.default,
	        transitionEnterTimeout: 500,
	        transitionLeaveTimeout: 500
	      }, this.state.hover && !this.props.disableHover ? _react2.default.createElement('div', { className: _button2.default.hoverEffect,
	        style: hoverStyles
	      }) : null))), this.props.tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        text: this.props.tooltip,
	        visible: this.state.hover
	      }) : null);
	    }
	  }]);
	
	  return Button;
	}(_react.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	exports.default = Button;
	Button.propTypes = {
	  download: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
	  className: _propTypes2.default.string,
	  pressedTimeout: _propTypes2.default.number,
	  rel: _propTypes2.default.string,
	  tooltip: _propTypes2.default.string,
	  target: _propTypes2.default.string,
	  tag: _propTypes2.default.string,
	  href: _propTypes2.default.string,
	  type: _propTypes2.default.oneOf(['flat', 'action', 'raised', 'iconButton']),
	  onClick: _propTypes2.default.func,
	  iconClass: _propTypes2.default.string,
	  icon: _propTypes2.default.string,
	  iconPrefix: _propTypes2.default.string,
	  disabled: _propTypes2.default.bool,
	  disableHover: _propTypes2.default.bool,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node, _propTypes2.default.string]),
	  forceUpdate: _propTypes2.default.bool
	};
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	Button.defaultProps = {
	  className: undefined,
	  download: false,
	  rel: undefined,
	  disableHover: false,
	  iconPrefix: 'icon-',
	  disabled: false,
	  pressedTimeout: 300,
	  tag: 'button',
	  type: 'flat',
	  children: null,
	  tooltip: undefined,
	  target: '_blank',
	  href: undefined,
	  onClick: undefined,
	  iconClass: undefined,
	  icon: undefined,
	  forceUpdate: false
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"button--btn","aui-button":"button--aui-button","wrapper":"button--wrapper","disabled":"button--disabled","container":"button--container","hoverEffect":"button--hoverEffect","hoverContainer":"button--hoverContainer","enter":"button--enter","enterActive":"button--enterActive","leave":"button--leave","leaveActive":"button--leaveActive","icon":"button--icon","action":"button--action","iconButton":"button--iconButton","raised":"button--raised","pressed":"button--pressed","flat":"button--flat","group":"button--group","fill":"button--fill","right":"button--right","left":"button--left"};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * ButtonGroup
	 *
	 * @author       Isaac Suttell <isaac.suttell@sony.com>
	 * @file         A collection of buttons
	 ******************************************************************************/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ButtonGroup;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _button = __webpack_require__(4);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function ButtonGroup(props) {
	  var _classNames;
	
	  var classes = (0, _classnames2.default)(props.className, _button2.default.group, (_classNames = {}, _defineProperty(_classNames, _button2.default.fill, props.fill === true), _defineProperty(_classNames, _button2.default.right, props.align === 'right'), _defineProperty(_classNames, _button2.default.left, props.align === 'left'), _classNames));
	  return _react2.default.createElement('div', { className: classes }, props.children);
	}
	
	/**
	 * Defaults
	 * @type    {Object}
	 */
	ButtonGroup.defaultProps = {
	  fill: false,
	  align: undefined,
	  className: undefined
	};
	
	/**
	 * Type Checking
	 * @type {Object}
	 */
	ButtonGroup.propTypes = {
	  fill: _propTypes2.default.bool,
	  align: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * FloatingActionButton
	 *
	 * @author       Isaac Suttell <isaac.suttell@sony.com>
	 * @file         Shortcut for Button
	 ******************************************************************************/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.default = FloatingActionButton;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function FloatingActionButton(props) {
	  return _react2.default.createElement(_Button2.default, _extends({}, props, {
	    type: 'action'
	  }));
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * FloatingActionButton
	 *
	 * @author       Isaac Suttell <isaac.suttell@sony.com>
	 * @file         Shortcut for Button
	 ******************************************************************************/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.default = FloatingActionButton;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function FloatingActionButton(props) {
	  return _react2.default.createElement(_Button2.default, _extends({}, props, {
	    type: 'iconButton'
	  }));
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * RaiseButton
	 *
	 * @author       Isaac Suttell <isaac.suttell@sony.com>
	 * @file         Shortcut for Button
	 ******************************************************************************/
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.default = RaisedButton;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(2);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function RaisedButton(props) {
	  return _react2.default.createElement(_Button2.default, _extends({}, props, {
	    type: 'raised'
	  }));
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * Tooltip
	 *
	 * @author       Isaac Suttell <isaac.suttell@sony.com>
	 * @file         Material Design Button
	 ******************************************************************************/
	
	// External Modules
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Tooltip;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactTransitionGroup = __webpack_require__(6);
	
	var _tooltip = __webpack_require__(12);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function Tooltip(props) {
	  return _react2.default.createElement(_reactTransitionGroup.CSSTransitionGroup, {
	    className: _tooltip2.default.container,
	    component: 'div',
	    transitionName: _tooltip2.default,
	    transitionEnterTimeout: 250,
	    transitionLeaveTimeout: 250
	  }, props.visible ? _react2.default.createElement('div', { className: _tooltip2.default.text }, props.text) : null);
	}
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	// Local
	Tooltip.propTypes = {
	  text: _propTypes2.default.node,
	  visible: _propTypes2.default.bool
	};
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	Tooltip.defaultProps = {
	  text: undefined,
	  visible: false
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"tooltip--container","text":"tooltip--text","enter":"tooltip--enter","enterActive":"tooltip--enterActive","leave":"tooltip--leave","leaveActive":"tooltip--leaveActive"};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=Buttons.js.map