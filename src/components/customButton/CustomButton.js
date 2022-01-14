import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, signInWithGoogle, invert, ...otherProp }) => {
  return(
    <button className={`${invert ? 'invert' : ''} ${signInWithGoogle ? 'sign-in-with-google' : ''} custom-button`} {...otherProp}>
      {children}
    </button>
  )
}

export default CustomButton;