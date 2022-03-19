import React from 'react'
import { useGlobalContext } from './context'
import './styles/App.css';
import CartItem from './CartItem';


const CartContainer = () => {
    const {cart, total, clearCart} = useGlobalContext()
    return (
        <>
         <div>
            <button className='clear' onClick={clearCart}>clear</button>
            <div className='total'> total price: {total}</div>
        </div>
           {cart.map((item)=> {
 return <CartItem key={item.id} {...item }/>
           })}
       
        </>
    )
    
}

export default CartContainer;