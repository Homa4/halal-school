/* eslint-disable react/prop-types */
import './Menu.css'

function Menu(props) {
    const { pizzas } = props; // distruct
    return (
        <>
            {pizzas && pizzas.length > 0 ? ( //check if pizzas is not null pr underfined
                pizzas.map((element) => (
                    <div key={element.id} className="dish">
                        <div className={element.soldOut ? "availebleDishImg" : "unavailebleDishImg"}>
                            <img src={element.imageUrl} alt="img" className="dishImg" />
                        </div>
                        <div className="namePrice">
                            <div className="name">{element.name}</div>
                            <div className="price">{element.unitPrice}</div>
                        </div>
                        <div className="descriptionWrapper">
                            <p>{element.ingredients.join(", ")}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No pizzas available</p>
            )}
        </>
    );
}


export default Menu