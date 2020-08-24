import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header">
              <img src={logo} alt=""/>
              <nav>
                  <a href="/shop">Shop</a>
                  <a href="/review">Review</a>
                  <a href="/manage">Manage</a>
              </nav>
            </div>
        </div>
    );
};

export default Header;