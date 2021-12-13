const addItem = (item, history) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/merchants/' + item.merchant_id + '/items', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      .then((res) => {
        dispatch({
          type: 'ADD_ITEM',
          payload: item
        });
        history.push('/merchant/' + item.merchant_id);
      });
    }
  }
  
  export default addItem;