import React from 'react';

const Reviewitem = (props) => {
    console.log(props);
    const {name,quantity, key,price} = props.product;
    const reviewItemstyles ={
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft:'200px'

    }
    return (
        <div style={reviewItemstyles}>
            <h4 className="product-name">{name}</h4>
             <p>Quantity: {quantity}</p>
             <p><small>$ {price}</small></p>
             <button 
             onClick={() => props.handleRemoveProduct(key)}
             className="main-button">Remove</button>
        </div>
    );
};

export default Reviewitem;