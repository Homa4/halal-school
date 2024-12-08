// 
import './Counter.css'

function Counter(props){
    const { hadleIncrement, hadleDecrement, state } = props

    return(
        <div className="counterWrapper">
            <div className="">{state}</div>
            <button className="inc" onClick={hadleIncrement}>+</button>
            <button className="dec" onClick={hadleDecrement}>-</button>
        </div>
    )
}

export default Counter