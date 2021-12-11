const fetchMerchants = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/merchants')
    .then(response => response.json())
    .then(merchants => dispatch({
      type: 'FETCH_MERCHANTS',
      payload: merchants
    }))
  }
}

export default fetchMerchants;