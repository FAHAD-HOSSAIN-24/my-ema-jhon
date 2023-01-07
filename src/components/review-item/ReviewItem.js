import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {cartItem, removeItem} = props
    const {img, name, price, shipping, quantity} = cartItem
    return (
        <div className='cart-wrapper'>
            <div className='cart-image'>
                <img src={img} alt="" />
            </div>
            <div className='cart-info-wrap'>
                <div className='cart-text' title={name}>
                    <h2>{name.length > 20 ? name.slice(0, 20) + '...': name}</h2>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='delete-btn'>
                    <FontAwesomeIcon onClick={() => removeItem(cartItem)} className='cart-delete-btn' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;