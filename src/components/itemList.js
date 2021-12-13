import {React} from 'react';
import {connect} from 'react-redux'
import ItemCard from './itemCard'

const ItemList = (props) => {
  if (props.items.length <= 0) return null
  if (props.items[0].merchant_id !== props.merchantId) return null;
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{margin: '10px'}}>
      {props.items.map((item) => {
        return <ItemCard item={item} key={item.id}></ItemCard>
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemList);