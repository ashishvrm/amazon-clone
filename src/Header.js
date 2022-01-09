import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <img src="https://m.media-amazon.com/images/G/01/sell/images/logo-amazon-white.svg" className="logo" />
            <div className="header-search">
                <input type="text" value="" className="search-input" />
                <span class="material-icons ico">
                    search
                </span>
            </div>
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
                    
                    <span>
                    <span class="material-icons">
                        shopping_cart
                    </span> : 0
                    </span>
                </div>
            </div>
        </div>   
    )
}

export default Header
