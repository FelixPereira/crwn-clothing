import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItems/cartItems';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        }
      </div>
      
      <CustomButton>Got to checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);