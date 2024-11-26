/* eslint-disable react/prop-types */
import './Menu.css'
import Dish from './Dish';

function Menu(props) {
    const { pizzas } = props; // distruct
    return (
        <div className='dishesWrapper'>
            {pizzas && pizzas.length > 0 ? ( //check if pizzas is not null or undefined
                pizzas.map((element) => (
                    <Dish key={element.id} element={element}/>
                ))
            ) : (
                <p>No pizzas available</p>
            )}
        </div>
    );
}

export default Menu;