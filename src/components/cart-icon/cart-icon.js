import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-icon.scss';

const CartIcon = ({toggleDropdownDisplay}) => {
  return(
    <div className='cart-icon' onClick={toggleDropdownDisplay}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToPops = (dispatch) => ({
  toggleDropdownDisplay: () =>  dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToPops)(CartIcon);