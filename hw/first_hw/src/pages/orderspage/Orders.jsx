/* eslint-disable no-unused-vars */
import './Orders.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { cartItems } from '../../logic/orderList';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom'
import CartItem from './CartItem';

function Orders() {
    const { formObj } = useContext(FormContext);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/menu")
    }

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
                    {cartItems.map((obj, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <CartItem key={index} obj={obj} />
                    ))}
                </div>

                <div className="cart-actions">
                    <Button
                        className="order-btn"
                    >
                        Order pizzas
                    </Button>
                    <Button
                        className="clear-btn"
                    >
                        Clear cart
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Orders;
