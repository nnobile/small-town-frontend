export default function accountReducer (state = {merchants: [], items: []}, action){
  switch(action.type) {
    case 'FETCH_MERCHANTS':
      return {...state, merchants: action.payload}
    case 'FETCH_ITEMS':
      return {...state, items: action.payload}
    case 'ADD_MERCHANT':
      return {...state, merchants: [...state.merchants, action.payload]}
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload]}
    case 'DELETE_ITEM':
      const items = state.items.filter((item) => { return item.id === action.payload });
      return {...state, items: items}
    default:
      return state
  }
}