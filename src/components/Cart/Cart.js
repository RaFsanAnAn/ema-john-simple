import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price ,0);

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }

    let tax = (total/10).toFixed(2);
    let grandTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h2>Order summery </h2>
            <p>Items ordered : {cart.length}</p>
            <p>Product price : ${total.toFixed(2)}</p>
            <p><small>Shipping cost : ${shipping}</small></p>
            <p><small>Tax + VAT : ${tax}</small></p>
            <p className = "totalPrice">Total price : ${grandTotal}</p>
            <button className = "add-button">Review your order</button>
        </div>
    );
};

export default Cart;