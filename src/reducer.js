const reducer = (state, action) => {
   if (action.type === 'LOADING') {
    return {...state, loading: true}
   }

   if (action.type === 'SHOW_DATA') {
 return{ ...state, cart: action.payload, loading: false}
   }
}

export default reducer
