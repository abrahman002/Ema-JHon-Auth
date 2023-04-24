import React from 'react';
import './Cart.css'
import { FaTrashAlt } from "react-icons/fa";



const Cart = ({cart,clearCart,children}) => {
    // const cart=props.cart option:1

    // const {cart}=props option:2

    let totalPrice=0;
    let totalShipping=0
    let quantity=0
    for (const product of cart){
        if(product.quantity===0){
            product.quantity=1
        }
        totalPrice=totalPrice+product.price*product.quantity
        totalShipping=totalShipping+product.shipping
        quantity=quantity+product.quantity
    }

  const Tax=totalPrice*7/100;

  const grandTotal=totalPrice+totalShipping+Tax;

    return (
        <div className='cart'>
             <h1>Order Summery</h1>
            <p>Selected Item:{quantity}</p>
            <p>Total Price:{totalPrice}</p>
            <p>Total ShIpping:{totalShipping}</p>
            <p>Tax:{Tax.toFixed(2)}</p>
            <h4>Grand Total:{grandTotal.toFixed(2)}</h4>
            <button onClick={clearCart} className='btn-clear'>Clear < FaTrashAlt/></button>
            {children}
        </div>
    );
};

export default Cart;