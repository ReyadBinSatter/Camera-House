import React from 'react';
import { useEffect, useState } from 'react';
import Camera from '../Camera/Camera';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className="camera-container">
                {
                    products.map(product=> <Camera
                    key = {product.id}
                    product = {product}
                    ></Camera>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart</h3>
            </div>
        </div>
    );
};

export default Shop;