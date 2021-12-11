import React, {Component} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom';
import { ReactReduxContext } from 'react-redux';
import deleteItem from '../actions/deleteItem';

class ItemPage extends React.Component {
  deleteItem(item) {
    const itemId = item?.id;
    const merchantId = item?.merchant_id;
    this.props.deleteItem(merchantId, itemId);
  }

  render() {
    console.log(this.props)
    const id = this.props.match.params.id;
    const currentItem = this.props.items.find((item) => item.id === Number(id));

    return (
      <div>
        <div className="py-5 text-center container lead text-muted">
          <div><img width="450" src={currentItem?.image_url}/></div>
          <div>{currentItem?.name}</div>
          <div>{currentItem?.description}</div>
          <div>{currentItem?.category}</div> 
          <div>${currentItem?.price}</div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {deleteItem})(ItemPage);