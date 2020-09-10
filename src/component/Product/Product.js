import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { img, name, key, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div >
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>By:{seller}</small></p>
                <p><small>Price:{price}</small></p>
                <br />
                <p><small>Only{stock} left in stock to order Soon</small></p>
                { props.showAddToCart && <button
                className="main-button"
                 onClick={() =>props.handleAdProduct(props.product)}
                 >
                <FontAwesomeIcon icon={faShoppingCart} />add to card</button>}
            </div>

        </div>
    );
};

export default Product;