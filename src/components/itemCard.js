import React from 'react';
import {useHistory, Link} from 'react-router-dom';


const ItemCard = (props) => {
  const history = useHistory();

  return (
    <div class="col">
      <div className="card shadow-sm" onClick={() => {history.push('/item/' + props.item.id)}}>
        <img className="bd-placeholder-img card-img-top" src={props.item.image_url}/>
        <div className="card-body">
          <div>Name: {props.item.name}</div>      
          <div>Price: ${props.item.price}</div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard