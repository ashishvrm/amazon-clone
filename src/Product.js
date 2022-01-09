import React from 'react';
import './Product.scss';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {

    const [{basket}, dispatch] = useStateValue();
console.log ('this is the basket item >>> ', basket);

    const addToBasket = () => {
        //dispatch item in data Layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product-info'>
                <h4>{title}</h4>
            </div>
            <div className='product-rating'>
                {Array(rating)
                .fill().map((_, i) => (
                    <span className="material-icons">
                        <span className="material-icons"> star </span>
                    </span>
                ))}
            </div>
            <img src={image} alt={title} />
            <span className='product-price'>
                    <small>$</small>
                    <strong className='price'>{price}</strong>
                </span>
            <button className="primary-btn" onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
