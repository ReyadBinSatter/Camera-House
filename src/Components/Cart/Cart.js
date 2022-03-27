import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {randomSelect, cart } = props;

    console.log(cart);
    // const Name = () => cart(name[Math.floor(Math.random()*name.length)])}
    //const newCart = [];


    return (
        
        <div className='cart'>
            
            <div>
            {
                cart.map(product=>(
                <p> <strong>Name:</strong>  {product.name}</p>
                ))    
            }
            </div>
            <div className='btn'>
                <button onClick={()=> randomSelect(cart)}  className='btn-choose'>
                    <p className='btn-text'>Choose one</p>
                </button>
                <button  className='btn-choose'>
                    <p className='btn-text'>Choose again</p>
                </button>
            </div>

            
        </div>
    );
};

export default Cart;