import React from 'react';
import MerchantCard from './merchantCard'
import {connect} from 'react-redux'

const MerchantList = (props) => {

      return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{margin: '10px'}}>
          {props.merchants.map((merchant) => {
            return <MerchantCard merchant={merchant} key={merchant.id}></MerchantCard>
          })}
          
        </div>
  )
}
const mapStateToProps = state => {
  return {
    merchants: state.merchants
  }
}

export default connect(mapStateToProps)(MerchantList);


// Step 1 is creating an input that takes in text
// Step 2 is creating a like button on each merchant card
// Step 3 identify the number characters in the input field string
// Step 4 the like button will increment based on the number of characters in input field