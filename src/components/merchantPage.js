import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItemList from './itemList';
import fetchItems from '../actions/fetchItems';
import { ReactReduxContext } from 'react-redux'


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
        
        <ItemList></ItemList>
      </div>
  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    merchants: state.merchants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: (id) => dispatch(fetchItems(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantPage);
