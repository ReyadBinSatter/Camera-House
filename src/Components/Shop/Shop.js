import React from 'react';
import { useEffect, useState } from 'react';
import Camera from '../Camera/Camera';
import Cart from '../Cart/Cart';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        
        const newCart = [...cart, product];
        
        setCart(newCart);
    }

    const randomSelect = (cart)=>{
        
        const singleCart = cart[Math.floor(Math.random()*cart.length)];
        const singleCartArray = [singleCart];
        setCart(singleCartArray);
        

}   
    return (
        <div className='shop-container'>
            <div className="camera-container">
                {
                    products.map(product=> <Camera
                    key = {product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Camera>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                randomSelect={randomSelect}></Cart>
            </div>
        </div>
    );
};

export default Shop;