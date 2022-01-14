import React from 'react';
import './menuItem.scss';
import { withRouter } from 'react-router';

const menuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return(
    <div onClick={() => history.push('/hats')} className={`${size}  menu-item`}>
      <div 
        style={{backgroundImage: `url(${imageUrl})`}} className='backgroundImage'></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(menuItem);