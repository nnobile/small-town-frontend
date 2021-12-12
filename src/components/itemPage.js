import React from 'react'
import {connect} from 'react-redux'
//import {useHistory} from 'react-router-dom';
//import { ReactReduxContext } from 'react-redux';
//import deleteItem from '../actions/deleteItem';

class ItemPage extends React.Component {

  render() {
    console.log(this.props)
    const id = this.props.match.params.id;
    const currentItem = this.props.items.find((item) => item.id === Number(id));

    return (
      <div>
        <div className="py-5 text-center container lead text-muted">
          <div><img width="450" src={currentItem?.image_url}/></div>
          <div>Name: {currentItem?.name}</div>
          <div>Description: {currentItem?.description}</div>
          <div>Category: {currentItem?.category}</div> 
          <div>Price: ${currentItem?.price}</div>
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

export default connect(mapStateToProps)(ItemPage);