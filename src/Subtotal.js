import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.scss';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p className="subtotal-title">
                        Subtotal ({value} item):
                        <strong>$ 11.65</strong>
                    </p>
                    <label className="subtotal-gift">
                        <input type="checkbox" /> 
                         This order contains a gift
                    </label>
                    </>
                )}
                decimalScale={2}
                value={4}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <button className="primary-btn">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
