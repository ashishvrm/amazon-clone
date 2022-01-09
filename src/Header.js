import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            {/* Brand Logo */}
            <Link to="/">
                <img src="https://m.media-amazon.com/images/G/01/sell/images/logo-amazon-white.svg" className="logo" />
            </Link>

            {/* Big search bar */}
            <div className="header-search">
                <input type="text" value="" className="search-input" />
                <span className="material-icons ico">
                    search
                </span>
            </div>

            {/* Navigation */}
            <div className="header-navigation">
                <div className="nav-menu">
                    <span className="menu-title">
                        Hello, Guest
                    </span>
                    <span>
                        Sign in
                    </span>
                </div>
                <div className="nav-menu">
                    <span className="menu-title">
                        Returns
                    </span>
                    <span>
                        & Orders
                    </span>
                </div>
                <div className="nav-menu">
                    <span className="menu-title">
                        Your
                    </span>
                    <span>
                        Prime
                    </span>
                </div>
                <div className="nav-menu">
                    <Link to="/checkout">
                        <span>
                            <span className="material-icons">
                                shopping_cart
                            </span> : 0
                        </span>
                    </Link>
                </div>
            </div>
        </div>   
    )
}

export default Header
