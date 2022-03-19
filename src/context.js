import React, { useState, useContext, useReducer, useEffect } from 'react'
import './styles/App.css';

import reducer from './reducer'
const url = 'https://fakestoreapi.com/products?limit=5'
const AppContext = React.createContext()
 

const AppProvider = ({ children }) => {

  const initialState =  {
    loading: false,
    cart: [],
    total: 0,
    amount: 0

  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async() => {
    dispatch({type: 'LOADING'})
   const response = await  fetch(url);
   const cart = await response.json();
   cart.map((item) => {
     return item.amount = 1
   })
        dispatch({type: 'SHOW_DATA', payload:cart})
        console.log(cart)
  }

  useEffect(() => {
  fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
  ...state
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
