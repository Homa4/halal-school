import Counter from '../Menu/Conter';
import { useState, useContext, useEffect } from "react";
import { FormContext } from '../../logic/Context';

function Dish({ element }) {
    const [state, setState] = useState(0);
    const { addPizza } = useContext(FormContext);
    const [pizzaNameNumObj, setPizzaNameNumObj] = useState({
        name: element.name,
        numOfPizza: 0,
        price: element.unitPrice,
    });

    useEffect(() => {
        // Dynamically update `numOfPizza` when `state` changes
        setPizzaNameNumObj(prev => ({
            ...prev,
            numOfPizza: state,
        }));
    }, [state]);

    const handleIncrement = () => {
        setState(prevState => prevState + 1);
    };

    const handleDecrement = () => {
        if (state > 0) {
            setState(prevState => prevState - 1);
        }
    };

    return (
        <div className="dish">
            <div className={element.soldOut ? "availableDishImg" : "unavailableDishImg"}>
                <img src={element.imageUrl} alt="img" className="dishImg" />
            </div>
            <div className="namePrice">
                <div className="name">{element.name}</div>
                <div className="price">{element.unitPrice} ₴</div>
            </div>
            <div className="descriptionWrapper">
                <p>{element.ingredients.join(", ")}</p>
            </div>
            <button 
                className="orderButton" 
                onClick={() => addPizza(pizzaNameNumObj)}
                disabled={!element.soldOut} // Disable button for sold-out items
            >
                Order
            </button>
            <Counter 
                handleIncrement={handleIncrement} 
                handleDecrement={handleDecrement} 
                state={state} 
            />
        </div>
    );
}

export default Dish;
