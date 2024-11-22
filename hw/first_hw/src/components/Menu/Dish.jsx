/* eslint-disable react/prop-types */
import Counter from './Conter';


function Dish(props) {
    const { element } = props
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
            <Counter />
        </div>
    )
}

export default Dish