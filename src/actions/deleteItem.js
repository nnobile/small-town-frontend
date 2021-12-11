const deleteItem = (merchantId, itemId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/merchants/' + merchantId + '/items/' + itemId, {
      method: 'DELETE'
    })
    .then(item => dispatch({
      type: 'DELETE_ITEM',
      payload: itemId
    }))
  }
}

export default deleteItem;