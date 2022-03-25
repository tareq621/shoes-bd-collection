import React, { useEffect, useState } from 'react';
import Product from '../Products/product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>


        </div>
    );
};

export default Shop;