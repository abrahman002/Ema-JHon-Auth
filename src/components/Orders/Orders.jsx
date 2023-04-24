import React, { useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FaCreditCard } from "react-icons/fa";


const Orders = () => {
    const saveCart=useLoaderData()
    // console.log(products)
    const [cart,setCart]=useState(saveCart);

    const handleRemoveCart=(id)=>{
        const remaining=cart.filter(product=>product.id !== id);

        setCart(remaining)
        removeFromDb(id);
    }

    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='review-items'>
                {
                    cart.map(product=><ReviewItem
                      key={product.id}
                     product={product}
                     handleRemoveCart={handleRemoveCart}  
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>

                <Link to='/checkout'><button className='btn-proceed'>Proceed Checkout <FaCreditCard/></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;