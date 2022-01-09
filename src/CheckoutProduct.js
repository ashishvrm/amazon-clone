import React from 'react';
import './CheckoutProduct.scss';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //Remove item from basket
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className='checkout-product'>
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h3>{title}</h3>
            </div>
            <div className="price">
                {price}
            </div>
            <div className="star-rating">
                {Array(rating).fill().map((_, i) => (
                    <p>{rating}</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Delete</button>
        </div>
    )
}

export default CheckoutProduct
