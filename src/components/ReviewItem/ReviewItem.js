import React from 'react';

const ReviewItem = (props) => {
    const {name, seller, price, stock, quantity, key} = props.product;
    const {handleRemove} = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Seller Code: {seller}</p>
                <p>Price: {price}</p>
                <p>Stock: {stock}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={()=> handleRemove(key)} className="btn-regular">Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;