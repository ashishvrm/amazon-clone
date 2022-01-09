import React from 'react';
import './Product.scss';

function Product({ title, price, image, rating }) {
    return (
        <div className='product'>
            <div className='product-info'>
                <h4>{title}</h4>
                <span className='product-price'>
                    <small>$</small>
                    <strong className='price'>{price}</strong>
                </span>
            </div>
            <div className='product-rating'>
                {Array(rating)
                .fill().map((_, i) => (
                    <span class="material-icons">
                        <span class="material-icons"> star </span>
                    </span>
                ))}
            </div>
            <img src={image} alt={title} />
            <button>Add to cart</button>
        </div>
    )
}

export default Product