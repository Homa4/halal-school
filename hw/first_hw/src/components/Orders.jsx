/* eslint-disable no-unused-vars */
import './Orders.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../logic/Context';

function Orders() {
    const { formObj, updateName, addPizza } = useContext(FormContext);
    const pizzaArr = formObj.pizzas_list || []; // Ensure it's defined

    return (
        <>
            <header>
                <div className="logo">PIZZA DAY</div>
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search for the order #" 
                />
                <div className="username">{formObj.name}</div>
            </header>

            <div className="container-orders">
                <Link to='/menu' className="back-link">
                    ← Back to menu
                </Link>
                <h1 className="cart-title">Your cart, {formObj.name}</h1>
                <div className="cart-items">
                    {pizzaArr.map((obj, index) => (
                        <div className="cart-item" key={index}>
                            <span className="quantity-text">{obj.numOfPizza}x</span>
                            <span>{obj.name}</span>
                            <span className="price">€{obj.price}</span>
                            <div className="quantity-controls">
                                <button className="quantity-btn">-</button>
                                <span>{obj.numOfPizza}</span>
                                <button className="quantity-btn">+</button>
                                <button className="delete-btn">DELETE</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-actions">
                    <button className="order-btn">Order pizzas</button>
                    <button className="clear-btn">Clear cart</button>
                </div>
            </div>
        </>
    );
}

export default Orders;
