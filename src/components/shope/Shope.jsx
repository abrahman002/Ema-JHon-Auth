import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../products/Product';
import './Shope.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const Shope = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart)
        const saveCart = [];
        for (const id in storedCart) {

            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;

                saveCart.push(addedProducts)
            }

        }
        setCart(saveCart);
    }, [products])

    const addToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);

        addToDb(product.id)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>

                    <Link to='/orders'><button className='btn-proceed'>Review Order < FaArrowRight/></button></Link>

                </Cart>
            </div>
        </div>
    );
};

export default Shope;