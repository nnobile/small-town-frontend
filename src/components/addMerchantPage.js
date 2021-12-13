import React from 'react'
//import { ReactReduxContext } from 'react-redux';
import addMerchant from '../actions/addMerchant';
import {connect} from 'react-redux'

class AddMerchantPage extends React.Component {

  state = {
    name: '',
    description: '',
    location: 0,
    category: '',
    image_url: ''
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value});
  }

  handleLocationChange = (event) => {
    this.setState({location: event.target.value})
  }

  handleCategoryChange = (event) => {
    this.setState({category: event.target.value})
  }

  handleImageUrlChange = (event) => {
    this.setState({image_url: event.target.value})
  }

  handleSubmitButton = () => {
    this.props.addMerchant(this.state, this.props.history);
  }

  render () {
    return(<div>
      <div style={{background: "#999", flexDirection: "column", display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
        <div><input placeholder="Name" onChange={this.handleNameChange}/></div>
        <div><input placeholder="Description" onChange={this.handleDescriptionChange}/></div>
        <div><input placeholder="Location" onChange={this.handleLocationChange}/></div> 
        <div><input placeholder="Category" onChange={this.handleCategoryChange}/></div> 
        <div><input placeholder="Image URL" onChange={this.handleImageUrlChange}/></div>
        <button type="submit" onClick={this.handleSubmitButton}>Submit</button>
      </div>
    </div>)
  }
}


export default connect(null, {addMerchant})(AddMerchantPage);