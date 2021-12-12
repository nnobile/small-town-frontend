import React from 'react';
import MerchantCard from './merchantCard'
//import { ReactReduxContext } from 'react-redux'
import {connect} from 'react-redux'


const MerchantList = (props) => {
      return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{margin: '10px'}}>
          {props.merchants.map((merchant) => {
            return <MerchantCard merchant={merchant}></MerchantCard>
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