const addMerchant = (merchant, history) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/merchants', {
      method: 'POST',
      body: JSON.stringify(merchant),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then(res => {
      dispatch({
        type: 'ADD_MERCHANT',
        payload: res
      })
      history.push('/');
    })
  }
}

export default addMerchant;