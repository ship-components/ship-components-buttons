/** ****************************************************************************
 * ButtonGroup
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         A collection of buttons
 ******************************************************************************/

import React from 'react';
import classNames from 'classnames';
import css from './button-group.css';

export default class ButtonGroup extends React.Component {
  render() {
    const classes = classNames(
      this.props.className,
      css.group,
      {
        [css.fill] : this.props.fill === true,
        [css.right] : this.props.align === 'right',
        [css.left] : this.props.align === 'left'
      }
    );
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

/**
 * Type Checking
 * @type {Object}
 */
ButtonGroup.propTypes = {
  fill: React.PropTypes.bool,
  align: React.PropTypes.string
};
