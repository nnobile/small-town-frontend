import React from 'react';
import {useHistory, Link} from 'react-router-dom';

const NavBar = (props) => {
  const history = useHistory();

  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <div className="navbar-brand">
            <span onClick={() => history.push('/')}>Small Town Apparel Co.</span>
          </div>
          <div>
            <button style={{marginRight: 10 }} className="btn btn-light" onClick={() => history.push('/merchant/add')}>Create New Merchant</button>
            <button className="btn btn-light" onClick={() => history.push('/item/add')}>Create New Item</button>
          </div>
        </div>
      </div>
    </header>

  )
}

export default NavBar