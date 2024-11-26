/* eslint-disable react/prop-types */
import Counter from './Conter';
import { useState } from "react";

function Dish(props) {
    const { element } = props
    const [state, setState] = useState(0);

    const hadleInc = () => {
        setState(state+1)
    }

    const hadleDec = () => {
        if(state > 0){
            setState(state-1)
        }
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
            <Counter hadleInc={hadleInc} hadleDec={hadleDec} state={state}/>
        </div>
    )
}

export default Dish