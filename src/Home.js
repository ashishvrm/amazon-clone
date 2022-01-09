import React from 'react';
import './Home.scss';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='hero-container'>
                
            </div>
            <div className="product-row">
                    <Product 
                        title="ASUS ZenScreen MB16AC 15.6 Full HD IPS USB Type-C Portable Eye Care Monitor"
                        price={228.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81kDQgTJaJL._AC_SY400_.jpg"
                     />
                    <Product 
                        title="UPERFECT Y Portable Monitor Freestanding Touchscreen, 15.6''FHD 1080P IPS Screen with Adjust Kickstand, 2000:1 Contrast Ratio, 100% sRGB w/Standard HDMI/USB 3.0/Type C, Built-in Speaker/Ambient Light"
                        price={211.49}
                        rating={1}
                        image="https://m.media-amazon.com/images/I/714Ai09luoL._AC_SY400_.jpg"
                     />
                </div>
                <div className="product-row">
                    <Product 
                        title="Mobile Pixels Duex Portable Monitor for Laptops, USB C/USB A Plug and Play Laptop Screen Extender"
                        price={441.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71AZ8OsYK6L._AC_SY400_.jpg"
                     />
                    <Product 
                        title="Babo Botanicals 70+% Organic Sensitive Baby All Natural Healing Ointment with Medical Grade Colloidal Oatmeal, Unscented 4 Ounce"
                        price={54.20}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71tmypJYDSL._AC_SY400_.jpg"
                     />
                    <Product 
                        title="Maty's Baby Diaper Rash Relief - Made With 99 % Organic Ingredients. Made with Lavender, Aloe, Zinc - 10 oz."
                        price={321.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81a4LrhC1nL._AC_SY400_.jpg"
                     />
                </div>
                <div className="product-row">
                    <Product 
                        title="Weleda Baby Diaper Cream, 2.8 (8813), Calendula, Calendula, 2.9 Oz"
                        price={85.00}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61kXQmwZEnL._AC_SY400_.jpg"
                     />
                </div>
        </div>
    )
}

export default Home