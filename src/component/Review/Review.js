import React, {useState,useEffect} from 'react';
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager'
import fakeData from '../../fakeData';
import Reviewitem from '../Revweitem/Reviewitem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart1, setCart] = useState([]);
    const [orderplease,setOrderplease] = useState(false);
    const history =useHistory()

    const handleProceedCheckout = () =>{
     history.push('/shipment');
    }

    const handleRemoveProduct = (productKey) => {
       const newCart =cart1.filter(pd => pd.key !== productKey)
       setCart(newCart);
       removeFromDatabaseCart(productKey);
      // console.log('Remove clicked')
    }


    useEffect(() => {
        const saveCart  = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
    
        const cardproducts = productKeys.map(key => {
        const product = fakeData.find( pd => pd.key === key);
        product.quantity =saveCart[key];
        return product;
        });
        setCart(cardproducts);
    },[]);

    let thankyou;
    if(orderplease){
         thankyou = <img src={happyImage} alt=""/>
    }


    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart1.map(pd => <Reviewitem  product={pd}
                handleRemoveProduct = {handleRemoveProduct}
                ></Reviewitem>)
            }
            {thankyou}

            </div>
            <div className="cart-container">
                <Cart cart={cart1}>
                    <button onClick={handleProceedCheckout} className="main-button">Proceed checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;