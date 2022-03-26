import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Camera.css";
const Camera = (props) => {
    
    const {handleAddToCart, product} = props;
    const {name, image, price} = product;
    return (
        
        <div className='camera'>
            
            <img src={image} alt=""></img>
            <div className="camera-info">
            <h3>{name}</h3>
            <p>Price: {price}</p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Camera;