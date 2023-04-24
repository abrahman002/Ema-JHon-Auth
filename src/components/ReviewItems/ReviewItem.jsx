import React from 'react';
import './ReviewItems.css'
import { FaTrashAlt } from "react-icons/fa";


const ReviewItem = ({product,handleRemoveCart}) => {

    const {img,id,name,quantity,price}=product
    return (
        <div className='items-review'>
           <img src={img} alt="" />
           <div className='review-info'>
            <p className='title'>{name}</p>
            <p>Price:<span className='orange-text'>${price}</span></p>
            <p>Order Quantity:<span className='orange-text'>{quantity}</span></p>
           </div>
           <button onClick={()=>handleRemoveCart(id)} className='btn-info'>< FaTrashAlt className='delete-btn' /></button>
        </div>
    );
};


export default ReviewItem;