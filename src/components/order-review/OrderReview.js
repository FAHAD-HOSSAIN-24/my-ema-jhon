import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProduct from '../hooks/useProduct';
import ReviewItem from '../review-item/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products)
    const navigate = useNavigate()

    const removeItem = product =>{
        console.log(product)
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
    }
    const handleOrderMoreBtn = () => {
        navigate('/order');
    }
    const handleProceedCheckOutBtn = () => {
        navigate('/shipment')
    }
    return (
        <div className='shop-container'>
            <div className='order-products-info'>
                {
                    cart.map(cartProduct => <ReviewItem
                        key={cartProduct.id}
                        cartItem={cartProduct}
                        removeItem= {removeItem}
                        ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleOrderMoreBtn}>Order More</button>
                    <button onClick={handleProceedCheckOutBtn}>Proceed Shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;