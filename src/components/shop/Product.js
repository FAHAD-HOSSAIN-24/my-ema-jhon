import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.addToCart)
    const {id, img, name, price, seller, ratings } = props.product
    
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <p className='name'>{name}</p>
            <p className='price'>Price: ${price}</p>
            <p className='manufactuter'>Manufacturer: {seller}</p>
            <p className='rating'>Rating: {ratings} star</p>
                <button onClick={() => props.addToCart(props.product)}>Add to Cart<FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon></button>

        </div>
    );
};

export default Product;