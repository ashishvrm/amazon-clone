import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.scss';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

    const [{ basket }, {price}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p className="subtotal-title">
                        Subtotal ({basket.length} item):
                        <strong>{value}</strong>
                    </p>
                    <label className="subtotal-gift">
                        <input type="checkbox" /> 
                         This order contains a gift
                    </label>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            
            <button className="primary-btn">Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
