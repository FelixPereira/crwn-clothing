import React from 'react';
import { connect } from 'react-redux';

import './collectionItem.scss';

import CustomButton from '../customButton/CustomButton';
import { addItem } from '../../redux/cart/cart-actions';

const CollectionItem = ({ item, addItem }) => {
  const {imageUrl, price, name} = item;
  return(
    <div className='collection-item'>
      <div 
        className='image'
        style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <h5 className='name'>{name}</h5>
        <h5 className='price'>{price}</h5>
      </div>
      <CustomButton onClick={() => addItem(item)} invert> Add to cart </CustomButton>
    </div> 
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);