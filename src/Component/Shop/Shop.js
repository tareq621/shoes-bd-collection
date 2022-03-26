import React, { useEffect, useState } from 'react';
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
                <div>
                    {
                        cart.map(item => <h3 key={item.id}>{item.name}</h3>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Shop;