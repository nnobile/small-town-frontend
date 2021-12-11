import React, {Component} from 'react'
import {useHistory} from 'react-router-dom';
import { ReactReduxContext } from 'react-redux';
import addItem from '../actions/addItem';
import {connect} from 'react-redux'

class AddItemPage extends React.Component {

  state = {
    name: '',
    description: '',
    price: 0, 
    category: '',
    merchant_id: '',
    image_url: ''
  }
  componentDidMount() {
    console.log("props", this.props)
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  }

  handlePriceChange = (event) => {
    this.setState({price: event.target.value});
  }

  handleCategoryChange = (event) => {
    this.setState({category: event.target.value});
  }

  handleMerchantIdChange = (event) => {
    this.setState({merchant_id: event.target.value});
  }

  handleImageUrlChange = (event) => {
    this.setState({image_url: event.target.value});
  }

  handleSubmitButton = () => {
    this.props.addItem(this.state, this.props.history);
  }

  render () {
      return(  <div>
      <div style={{background: "#999", flexDirection: "column", display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
        <div><input placeholder="Name" onChange={this.handleNameChange}/></div>
        <div><input placeholder="Description" onChange={this.handleDescriptionChange}/></div>
        <div><input placeholder="Price" onChange={this.handlePriceChange}/></div> 
        <div><input placeholder="Category" onChange={this.handleCategoryChange}/></div>
        <div><input placeholder="Image URL" onChange={this.handleImageUrlChange}/></div>
        <select onChange={this.handleMerchantIdChange}>
          <option>Select Merchant...</option>
           {this.props.merchants.map(merchant => {
            return <option value={merchant.id}>{merchant.name}</option>
            })}
        </select>
        <button type="submit" onClick={this.handleSubmitButton}>Submit</button>
      </div>
    </div>
    )
  }


}


const mapStateToProps = state => {
  return {
    merchants: state.merchants
  }
}

export default connect(mapStateToProps, {addItem})(AddItemPage);