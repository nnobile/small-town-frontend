import React from 'react';
import {withRouter} from 'react-router-dom';

class MerchantCard extends React.Component {
  //const history = useHistory();

  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
    this.incrementNumber = this.incrementNumber.bind(this)
  }

  incrementNumber() {
    this.setState({ number: this.state.number + this.props.inputLength})
  }

  render() {
  return (
    <div className="col">
      <div className="card shadow-sm" onClick={() => {this.props.history.push('/merchant/' + this.props.merchant.id)}}>
        <img className="bd-placeholder-img card-img-top" src={this.props.merchant.image_url}/>
        <div className="card-body">
          <div className="card-text">Name: {this.props.merchant.name}</div>
          <div>Location: {this.props.merchant.location}</div>
          
          <div>{this.state.number}</div>
        </div>
      </div>
      <div>
        <button onClick={this.incrementNumber}>Like</button>
      </div>
    </div>
  )
}
}

export default withRouter(MerchantCard)