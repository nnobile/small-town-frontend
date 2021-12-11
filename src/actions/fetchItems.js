const fetchItems = (id) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/merchants/' + id + '/items')
    .then(response => response.json())
    .then(items => dispatch({
      type: 'FETCH_ITEMS',
      payload: items
    }))
  }
}

export default fetchItems;


function doSomething(x) {
  return x + 5;
}