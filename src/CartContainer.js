import React from 'react'
import { useGlobalContext } from './context'
import './styles/App.css';
import CartItem from './CartItem';


const CartContainer = () => {
    const {cart} = useGlobalContext()
    return (
        <>
           {cart.map((item)=> {
 return <CartItem {...item }/>
           })}
        <div>
            <button className='clear' onClick={() => console.log('poo')}>clear</button>
        </div>
        </>
    )
    
}

export default CartContainer;