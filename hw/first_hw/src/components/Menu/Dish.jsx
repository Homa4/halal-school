/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Counter from './Conter';
import { useState, useContext } from "react";
import { FormContext } from '../../logic/Context';

function Dish(props) {
    const { element } = props
    const [state, setState] = useState(0);
    const {formObj, updateName, addPizza} = useContext(FormContext);
    

    const hadleIncrement= () => {
        setState(state+1)
    }

    const hadleDecrement = () => {
        if(state > 0){
            setState(state-1)
        }
    }

    const pizzaNameNumObj = {
        name:element.name,
        numOfPizza:state,
        price:element.unitPrice,

    }

    return (
        <div className="dish">
            <div className={element.soldOut ? "availebleDishImg" : "unavailebleDishImg"}>
                <img src={element.imageUrl} alt="img" className="dishImg" />
            </div>
            <div className="namePrice">
                <div className="name">{element.name}</div>
                <div className="price">{element.unitPrice} ₴</div>
            </div>
            <div className="descriptionWrapper">
                <p>{element.ingredients.join(", ")}</p>
            </div>
            <button className="orderButton" onClick={addPizza(pizzaNameNumObj)}>Order</button>
            <Counter hadleIncrement={hadleIncrement} hadleDecrement={hadleDecrement} state={state}/>
        </div>
    )
}

export default Dish