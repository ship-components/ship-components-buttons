/** ****************************************************************************
 * Button
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Material Design Button
 ******************************************************************************/

// External Modules
import React from 'react';
import classNames from 'classnames';
import HighlightClick from 'react-highlight-click';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Local
import css from './button.css';

export default class Button extends React.Component {
  /**
   * Base Button
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      hoverSize: void 0,
      hover: false,
      pressed: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * First mount, get a starting width
   */
  componentDidMount() {
    this.calculateWidth();
  }

  /**
   * Prevent excessive updates
   * @param  {Object} nextProps
   * @param  {Object} nextState
   * @return {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.className !== nextProps.className) {
      return true;
    } else if (this.state.hover !== nextState.hover) {
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
  componentDidUpdate() {
    this.calculateWidth();
  }

  /**
   * Clean up
   */
  componentWillUnmount() {
    clearTimeout(this.pressedTimeout);
  }

  /**
   * Get the width of the button so so we ensure the hover effect fits
   */
  calculateWidth() {
    this.setState({
      hoverSize: this.refs.container ? Math.max(this.refs.container.offsetWidth, this.refs.container.offsetHeight) : void 0
    });
  }

  /**
   * Let the button now the mouse is here
   */
  handleMouseEnter() {
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
  handleMouseLeave() {
    this.setState({
      hover: false
    });
  }

  /**
   * Handle the clicks. Toggles pressed state
   * @param  {Event]} event
   */
  handleClick(event) {

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
    }, () => {
      clearTimeout(this.pressedTimeout);
      this.pressedTimeout = setTimeout(() => {
        this.setState({
          pressed: false
        });
      }, this.props.pressedTimeout);
    });
  }

  /**
   * The tag devirved from the propTypes
   * @return {String}
   */
  getTag() {
    if (typeof this.props.href === 'string' && this.props.href.length > 0) {
      return 'a';
    } else {
      return this.props.tag; // FF isn't triggereing on <buttons>
    }
  }

  /**
   * Render
   * @return {React}
   */
  render() {
    let btnClasses = classNames(
      css.btn,
      this.props.className,
      css[this.props.type],
      {
        [css.disabled] : this.props.disabled,
        [css.pressed] : this.state.pressed
      }
    );

    let hoverStyles = {};
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
    let props = {
      disabled: this.props.disabled,
      ref:'container',
      className: btnClasses,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onClick: this.handleClick
    }

    // Setup anchor attributes
    if (this.tagName === 'a' && !this.props.disabled) {
      props.href = this.props.href;
      props.target = this.props.target || '_blank';
    }

    return (
      <this.tagName {...props}>
        <HighlightClick
          className={css.container}
          disabled={this.props.disabled}>
            {this.props.children}
            {typeof this.props.icon === 'string' ? <span className={css.icon + ' ' + this.props.iconPrefix + this.props.icon} /> : null}
            <ReactCSSTransitionGroup
              className={css.hoverContainer}
              transitionName={css}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500} >
              {this.state.hover ?
                <div className={css.hoverEffect}
                  style={hoverStyles}/>
              : null}
            </ReactCSSTransitionGroup>
        </HighlightClick>
      </this.tagName>
    );
  }
}

/**
 * Type Checks
 * @type {Object}
 */
Button.propTypes = {
  tag: React.PropTypes.string,
  href: React.PropTypes.string,
  type: React.PropTypes.oneOf(['flat', 'action', 'raised']),
  onClick: React.PropTypes.func,
  icon: React.PropTypes.string,
  iconPrefix: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  disableHover: React.PropTypes.bool
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
  tag: 'div',
  type: 'flat'
};
