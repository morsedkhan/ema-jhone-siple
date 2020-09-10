import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="header">
              <img src={logo} alt=""/>
              <nav>
                  <Link to="/shop">Shop</Link>
                  <Link to="/review">Review</Link>
                  <Link to="/inventory">Inventory</Link>
              </nav>
            </div>
        </div>
    );
};

export default Header;