import React, { useEffect, useState } from 'react';
import Product from './Product';
import './shop.css'

const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    }, [])

    const addToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-info">
                {
                    products.map(product => <Product
                         key={product.id}
                          product={product}
                          addToCart = {addToCart}
                          ></Product>)
                }
            </div>
            <div className="order-samary">
                <h2>Order samary</h2>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;