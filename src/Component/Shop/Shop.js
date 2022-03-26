import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Question from '../Question/Question';
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
    const chooseOne = () => {
        const random = Math.floor(Math.random() * cart.length)
        const choose = [cart[random]]
        setCart(choose)
    };
    const chooseAgain = () => {
        setCart([])
    };
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

                <button onClick={chooseOne} className='button'>
                    <p>ADD TO CART</p>
                </button>
                <button onClick={chooseAgain} className='choose-btn'>
                    <p>Choose Again</p>
                </button>
            </div>
            <Question></Question>
        </div>
    );

};
export default Shop;