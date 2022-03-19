import React from 'react'
import { useGlobalContext } from './context'
import './styles/App.css';

const CartItem = ({id, image, description, title, price, amount}) => {
    const{deleteItem, increase, decrease} = useGlobalContext()
    return (
        <>

        <div key={id} className='cart-item'>
            <div className="item-info">{title} 
            <div className="price"> {price}</div>
          <div className="description"> {description}</div>
         {/* <div className="img"> <img src={image}></img></div> */}

            </div>

            <div className="buttons-container"> 
                <div># in cart: {amount}</div>
            <button onClick={() => decrease(id)}  className='dec'>decrease quantity</button>
        
             <button onClick={() => increase(id)} className='inc'>increase quantity</button>
            <button onClick={() => deleteItem(id)}>delete item</button>

             </div>
             
        </div>
        </>
    )
}

export default CartItem;