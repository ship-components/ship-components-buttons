/** ****************************************************************************
 * RaiseButton
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Shortcut for Button
 ******************************************************************************/

import React from 'react';
import Button from './Button';

export default class RaisedButton extends React.Component {
  render() {
    return (
      <Button {...this.props}
        type='raised' />
    );
  }
}
