import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h2 className = "text-center text-success"> {productKey} Details :</h2>
            <Product addToCart={false} product = {product}></Product>
        </div>
    );
};

export default ProductDetails;