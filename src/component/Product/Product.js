import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
   // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div >
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>By:{seller}</small></p>
                <p><small>Price:{price}</small></p>
                <br />
                <p><small>Only{stock} left in stock to order Soon</small></p>
                <button className="main-button"

                 onClick={() =>props.handleAdProduct(props.product)}
                 >
                     <FontAwesomeIcon icon={faShoppingCart} />add to card</button>
            </div>

        </div>
    );
};

export default Product;