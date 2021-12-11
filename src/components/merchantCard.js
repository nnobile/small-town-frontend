import React from 'react';
import {useHistory, Link} from 'react-router-dom';

const MerchantCard = (props) => {
  const history = useHistory();

  return (
    <div class="col">
      <div className="card shadow-sm" onClick={() => {history.push('/merchant/' + props.merchant.id)}}>
        <img className="bd-placeholder-img card-img-top" src={props.merchant.image_url}/>
        <div className="card-body">
          <div className="card-text">Name: {props.merchant.name}</div>
          <div>Location: {props.merchant.location}</div>
        </div>
      </div>
    </div>
  )
}

export default MerchantCard