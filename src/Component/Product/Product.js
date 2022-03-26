import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { product, handleAddToDetails } = props;
    const { picture, price, name } = product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>${price}</p>
            </div>
            <div>
                <button onClick={() => handleAddToDetails(product)} className='btn-info'>Add to cart</button>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
        </div>

    );
};

export default Product;