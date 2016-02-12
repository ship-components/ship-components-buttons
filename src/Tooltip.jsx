/** ****************************************************************************
 * Tooltip
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Material Design Button
 ******************************************************************************/

// External Modules
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Local
import css from './tooltip.css';

export default class Tooltip extends React.Component {
  /**
   * Render
   * @return {React}
   */
  render() {
    return (
      <ReactCSSTransitionGroup
        className={css.container}
        component='div'
        transitionName={css}
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}>
        {this.props.visible ?
          <div className={css.text}>
              {this.props.text}
          </div>
        : null}
      </ReactCSSTransitionGroup>
    );
  }
}

/**
 * Type Checks
 * @type {Object}
 */
Tooltip.propTypes = {
  text: React.PropTypes.string,
  visible: React.PropTypes.bool
};

/**
 * Defaults
 * @type {Object}
 */
Tooltip.defaultProps = {
  visible: false
};
