import React from 'react'
import {connect} from 'react-redux'
import ItemList from './itemList';
import fetchItems from '../actions/fetchItems';

class MerchantPage extends React.Component {
  render() {
    const id = this.props.match.params.id;
    this.props.fetchItems(id);
    const currentMerchant = this.props.merchants.find((merchant) => merchant.id === Number(id));
    return (
      <div>
        <div className="py-5 text-center container lead text-muted">
          <div><img width="450" src={currentMerchant?.image_url}/></div>
          <div>Name: {currentMerchant?.name}</div>
          <div>Location: {currentMerchant?.location}</div>
          <div>Category: {currentMerchant?.category}</div> 
          <div>Description: {currentMerchant?.description}</div> 
        </div>
        
        <ItemList merchantId={currentMerchant?.id} />
      </div>
  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    merchants: state.merchants
  }
}

export default connect(mapStateToProps, {fetchItems})(MerchantPage);


