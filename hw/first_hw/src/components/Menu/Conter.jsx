import { useState } from "react";
import './Counter.css'

function Counter(){

    const [state, setState] = useState(0);

    const hadleInc = () => {
        setState(state+1)
    }

    const hadleDec = () => {
        if(state > 0){
            setState(state-1)
        }
    }

    return(
        <div className="counterWrapper">
            <div className="">{state}</div>
            <button className="inc" onClick={hadleInc}>+</button>
            <button className="dec" onClick={hadleDec}>-</button>
        </div>
    )
}

export default Counter