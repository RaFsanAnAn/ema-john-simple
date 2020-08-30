import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity} = props.product;
    const reviewStyle = {
        borderBottom : '1px solid yellowgreen',
        marginBottom : '5px',
        paddingBottom : '5px',
        marginLeft : '200px'
    }
    return (
        <div style = {reviewStyle}>
            <h3>{name}</h3>
            <p>Quantity : {quantity} </p>
            <br/>
            <button className="add-button">Submit</button>
        </div>
    );
};

export default ReviewItems;