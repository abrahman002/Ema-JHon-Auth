import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, price, img, seller, ratings
    } = props.product;

    const addToCart=props.addToCart
    return (
        <div className='product'>
            <img src={img} alt="Not Found" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings} Start</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>
                Add to cart
                < FaShoppingCart />
                </button>
        </div>
    );
};

export default Product;