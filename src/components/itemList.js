import {React} from 'react';
import {connect} from 'react-redux'
import ItemCard from './itemCard'
import { ReactReduxContext } from 'react-redux'

const ItemList = (props) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{margin: '10px'}}>
      {props.items.map((item) => {
        return <ItemCard item={item}></ItemCard>
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