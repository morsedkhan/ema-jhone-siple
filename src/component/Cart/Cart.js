import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   // console.log(cart);    
    // const total = cart.reduce( (total, prd) => total + prd.price, 0);

    let total =0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }

    let shiping = 0;

    if(total > 35){
        shiping = 0;
    }

   else if(total >15){
        shiping = 4.99;
    }
    else if(total >0){
        shiping = 12.99
    }

    const tex =  ( total /10).toFixed(2);
   const  grandTotal =(total + shiping+ Number(tex)).toFixed(2);
  
   const formetNumber = num => {
       const prisition = num.toFixed(2);
       return Number(prisition);
   }



   return (
        <div>
            <h4>Order Summery</h4>
             <p>Items Order:{cart.length}</p>
            <p>producr Price:{ formetNumber(total)}</p>
            <p><small>Shiping Cost: {shiping}</small></p>
            <p><small>Text + vat: {tex}</small></p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;