import React from 'react'
import { useGlobalContext } from './context'
import './styles/App.css';

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import CartItem from './CartItem';
// items

function App() {
  const {loading} = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer/>

   
    </main>
  )
}

export default App
