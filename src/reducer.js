const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
      
        return {...state, cart: []}
    }

     if (action.type === 'DELETE_ITEM'){
        return {...state, cart: state.cart.filter((item)=> {
          return item.id !== action.payload
    // returns state, but the cart item with the same id as the clicked item (action payload) is filtered out, leaving only the remaining cart items

        })}
    }

      if (action.type === 'INCREASE'){
        let tempCart = state.cart.map((item)=> {
          if (item.id === action.payload) {
            return {...item, amount: item.amount +1}
          }
          console.log(item.amount)
          return item
        })
        return {...state, cart: tempCart}
    }

        if (action.type === 'DECREASE'){
        let tempCart = state.cart.map((item)=> {
          if (item.id === action.payload) {
            if (item.amount > 0) 
            return {...item, amount: item.amount - 1}
          }
          console.log(item.amount)
          return item
        }).filter((item) => item.amount !== 0)
        // filters item (set to tempCart) array -returns only cart items with an amount that is not 0. in other words, if an item amount is decreased until it's equal to 0, the item will not be returne (it will be deleted from the array)
        return {...state, cart: tempCart}
        // sets cart to what is returned by item (after being filtered)
    }

    if (action.type === 'TOGGLE_AMOUNT'){
    
    }

    if (action.type === 'GET_TOTALS'){
  let { total, amount } = state.cart.reduce(
         (cartTotal, cartItem) => {
          //  cartTotal is the accumulator which will total the price and amount values; cartItem represents each index of the array which will have the price, amount totalled below
        const { price, amount } = cartItem
        // destructures cartItem (each object in the cart array) as having price, amount properties
        const itemTotal = price * amount
        // creates variable itemTotal which multiplies the price of each cart item by the amount added to the shopping cart
                console.log(cartTotal.total)

        cartTotal.total += itemTotal
        //  total price becomes each item's itemTotal (price * amount) added to accumulator
        cartTotal.amount += amount
        // total amount of items simply becomes the total amount of each items added to cart added to accumulator
        return cartTotal
        // cartTotal object (with total, amount properties) returned
      },
      {
        total: 0,
        amount: 0,
        // object with total and amount properties equalling zero first returned
      }
    )
    console.log(total, amount)
    total = parseFloat(total.toFixed(2))
    // number of decimal places in total property limited to 2
    return { ...state, total, amount }
    // returns state, but total and amount properties are overwritten by new values created by reduce callback function
  }
   if (action.type === 'LOADING') {
    return {...state, loading: true}
   }

   if (action.type === 'SHOW_DATA') {
 return{ ...state, cart: action.payload, loading: false}
   }
}

export default reducer
