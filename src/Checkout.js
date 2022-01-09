import React from 'react';
import './Checkout.scss';
import Subtotal from './Subtotal';

function checkout() {
    return (
        <div className="checkout">

            <div className="alert-box"></div>
            <div className="ad-block">
            </div>
            <div className="cart-items">
                <div className="checkout-cart-items">
                    <h2>Your shopping basket</h2>
                    {/* item */}
                    {/* item */}
                    {/* item */}
                </div>
                <div className="checkout-sidebar">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default checkout
