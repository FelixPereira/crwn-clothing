import React from 'react';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';
import SHOP_DATA from './shopData';


class ShopPage extends React.Component{
  constructor(){
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return(
      <section className='shopPage'>
        <h2 className='shopPage__title'>Collections</h2>
        {
          collections.map(({id, ...collection}) => (
            <CollectionPreview key={id} {...collection} /> 
          ))
        }
      </section>
    )
  }
}


export default ShopPage;