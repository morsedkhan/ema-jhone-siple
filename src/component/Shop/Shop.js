import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
   const first10 = fakeData.slice(0,10);
   const [products, setProducts] = useState(first10)
   const [cart, setCart] = useState([]); 
    
   useEffect(() =>{
    const saveCart = getDatabaseCart();
    const productsKeys =Object.keys(saveCart);
    const previousCart = productsKeys.map(existing => {
    const product = fakeData.find( pd => pd.key === existing);
    product.quantity = saveCart[existing];
    return product;
})
    setCart(previousCart);
   }, [])
  
   const handleAdProduct = (product)  =>{
    const toBeAddedKey = product.key;
    const newCart =[...cart, product];
    setCart(newCart);
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart1;   
    if(sameProduct){
             count = sameProduct.quantity +1;
            sameProduct.quantity = count;
            const other = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart1 = [...other,sameProduct]; 
        }
        else{
            product.quantity = 1;
            newCart1 = [...cart, product];
        
        }
        setCart(newCart1);


       addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                 <ul>
                     {
                         products.map(pd => <Product
                            key = {pd.key} 
                            showAddToCart ={true}
                            handleAdProduct = {handleAdProduct}
                            product={pd}></Product>)
                     }
                 </ul>
            </div>
            <div className="card-container">
                     <Cart cart={cart}>
                     <Link to="/review">
                    
                      <button className="main-button">Review Order</button>
                    
                    </Link>
                     </Cart>
            </div>
            
        </div>
    );
};

export default Shop;