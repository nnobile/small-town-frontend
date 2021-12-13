import React from 'react';
import MerchantCard from './merchantCard'
import {connect} from 'react-redux'
//import itemList from './itemList';


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