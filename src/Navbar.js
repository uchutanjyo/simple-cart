import React from 'react'
import { useGlobalContext } from './context'
import './styles/App.css';


const Navbar = () => {
  const {amount} = useGlobalContext()
    return (
      <nav>
          SHOPPING FOR..SOMETIN!!
          <div>Items in cart: {amount}</div>
      </nav>


    )
}

export default Navbar;