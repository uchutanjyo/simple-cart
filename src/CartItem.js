import React from 'react'
import { useGlobalContext } from './context'
import './styles/App.css';

const CartItem = ({id, image, description, title, price, amount}) => {
    return (
        <>
        
        <div key={id} className='cart-item'>
            <div className="item-info">{title} {price}</div>
            <div className="buttons-container"> 
            <button className='dec'>less</button>
             <button className='inc'>more</button></div>
        </div>
        </>
    )
}

export default CartItem;