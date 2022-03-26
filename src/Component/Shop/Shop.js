import React, { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToDetails = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToDetails={handleAddToDetails}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Shoes</h2>
                {
                    cart.map(item => <p>{item.name}</p>)
                }

                <button className='button'>
                    <p>ADD TO CART</p>
                </button>
                <button className='choose-btn'>
                    <p>Choose Again</p>
                </button>
            </div>
        </div>
    );

};
export default Shop;