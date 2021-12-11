import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar'
import MerchantList from './components/merchantList'
import MerchantPage from './components/merchantPage'
import ItemPage from './components/itemPage'
import AddMerchantPage from './components/addMerchantPage'
import AddItemPage from './components/addItemPage'
import fetchMerchants from './actions/fetchMerchants'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchMerchants();
  }

  render () {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={MerchantList}/>
            <Route path='/merchant/add' component={AddMerchantPage}/>
            <Route path='/item/add' component={AddItemPage}/>
            <Route path='/merchant/:id' render={(routerProps) => <MerchantPage {...routerProps} />} />
            <Route path='/item/:id' render={(routerProps) => <ItemPage {...routerProps} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    merchants: state.merchants
  }
}

export default connect(mapStateToProps, {fetchMerchants})(App);
