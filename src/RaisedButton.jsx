/** ****************************************************************************
 * RaiseButton
 *
 * @author       Isaac Suttell <isaac.suttell@sony.com>
 * @file         Shortcut for Button
 ******************************************************************************/

import React from 'react';
import Button from './Button';

export default function RaisedButton(props) {
  console.log(props);
  return (
    <Button {...props}
      type='raised'
    />
  );
}
