import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from '../store/cardSlice';

function Cart() {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleClick = (id) => {
        dispatch(remove(id));
    }
    return (
        <div>
            <h3>Cart</h3>
            <div className='cartWrapper'>
                {
                    products.map(product => (
                        <div className='cartCard'>
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button onClick={() => handleClick(product.id)} className='btn'>Remove from Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart
