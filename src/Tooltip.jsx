/** ****************************************************************************
 * Tooltip
 *
 * @author       Isaac Suttell <isaac.suttell@sony.com>
 * @file         Material Design Button
 ******************************************************************************/

// External Modules
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Local
import css from './tooltip.css';

export default function Tooltip(props) {
  return (
    <TransitionGroup className={css.container}>
      {props.visible ?
        <CSSTransition
          classNames={css}
          timeout={250}
        >
          <div className={css.text}>
            {props.text}
          </div>
        </CSSTransition>
      : null}
    </TransitionGroup>
  );
}

/**
 * Type Checks
 * @type {Object}
 */
Tooltip.propTypes = {
  text: PropTypes.node,
  visible: PropTypes.bool
};

/**
 * Defaults
 * @type {Object}
 */
Tooltip.defaultProps = {
  text: undefined,
  visible: false
};
