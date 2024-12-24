import { useContext } from "react";
import { ContextForDish } from "../../context/DishContext";
import "./Counter.css";

function Counter({ id }) {
  const { state, dispatch } = useContext(ContextForDish);

  // Find the current element by ID
  const currentElement = state.orders.find((element) => element.id === id);

  const handleIncrement = () => {
    if (currentElement) {
      dispatch({
        type: "Increment",
        data: { id: id },
      });
    }
  };

  const handleDecrement = () => {
    if (currentElement && currentElement.quantity > 0) {
      dispatch({
        type: "Decrement",
        data: { id: id },
      });
    }
  };

  return (
    <div className="counterWrapper">
      <button
        className="dec"
        onClick={handleDecrement}
        disabled={!currentElement || currentElement.quantity === 0}
      >
        -
      </button>
      <div className="quantityDisplay">{currentElement?.quantity || 0}</div>
      <button className="inc" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;
