import React from 'react'
import addItem from '../actions/addItem';
import {connect} from 'react-redux'

class AddItemPage extends React.Component {

  state = {
    name: '',
    description: '',
    price: 0,
    category: '',
    merchant_id: '',
    image_url: '',
    error_message: '',
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  }

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  }

  handleMerchantIdChange = (event) => {
    this.setState({ merchant_id: event.target.value });
  }

  handleImageUrlChange = (event) => {
    this.setState({ image_url: event.target.value });
  }

  handleSubmitButton = () => {
    if (!this.state.name || !this.state.description || !this.state.price || !this.state.category || !this.state.merchant_id || !this.state.image_url) {
      this.setState({ error_message: "Please enter all information and resubmit." })
      return
    }

    this.props.addItem(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <div style={{ background: "#999", flexDirection: "column", display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <div><input required placeholder="Name" value={this.state.name} onChange={this.handleNameChange} /></div>
          <div><input required placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange} /></div>
          <div><input required placeholder="Price" value={this.state.price} onChange={this.handlePriceChange} /></div>
          <div><input required placeholder="Category" value={this.state.category} onChange={this.handleCategoryChange} /></div>
          <div><input required placeholder="Image URL" value={this.state.image_url} onChange={this.handleImageUrlChange} /></div>
          <select onChange={this.handleMerchantIdChange}>
            <option>Select Merchant...</option>
            {this.props.merchants.map(merchant => {
              return <option value={merchant.id}>{merchant.name}</option>
            })}
          </select>
          <button type="submit" onClick={this.handleSubmitButton}>Submit</button>
          {this.state.error_message && <div>{this.state.error_message}</div>}
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

export default connect(mapStateToProps, { addItem })(AddItemPage);