import React from 'react';
import './Checkout.scss';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">

            <div className="alert-box"></div>
            <div className="ad-block">
            </div>
            <div className="cart-items">
                <div className="checkout-cart-items">
                    <h2>Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            
                        />
                    ))}
                </div>
                <div className="checkout-sidebar">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
