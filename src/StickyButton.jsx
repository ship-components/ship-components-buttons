/** ****************************************************************************
 * StickyButton
 *
 * @author       Jared Boone <jared.boone@sony.com>
 * @file         Shortcut for Button
 ******************************************************************************/

import React from 'react';
import Button from './Button';

export default function StickyButton(props) {
  return (
    <Button {...props}
      readOnly
    />
  );
}
