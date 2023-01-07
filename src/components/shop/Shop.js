import React, { useEffect, useState } from 'react';
import { addToDb, stroedShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProduct from '../hooks/useProduct';
import Product from './Product';
import './shop.css'

const Shop = () => {
    const [products, setproducts] = useProduct()
    const [cart, setCart] = useCart(products)
   
    
    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id)
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
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;