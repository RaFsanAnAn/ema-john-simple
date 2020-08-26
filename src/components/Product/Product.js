import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { name, img, seller, stock, price } = props.product;
    return (
        <div className="product">
            <div >
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className="product-name">{name} </h4>
                <p> <small>by : {seller} </small></p>
                <br />
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button onClick = {() => props.addHandle(props.product)}
                 className="add-button">
                 <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;