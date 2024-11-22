/* eslint-disable react/prop-types */
import './Menu.css'
import Counter from './Conter';

function Menu(props) {
    const { pizzas } = props; // distruct
    return (
        <div className='dishesWrapper'>
            {pizzas && pizzas.length > 0 ? ( //check if pizzas is not null or undefined
                pizzas.map((element) => (
                    <div key={element.id} className="dish">
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
                ))
            ) : (
                <p>No pizzas available</p>
            )}
        </div>
    );
}

export default Menu;
