import "./Orders.css";
import Button from "../../components/Button";
import { useContext } from "react";
import { ContextForDish } from "../../context/DishContext";

function CartItem({ obj }) {
  const { state, dispatch } = useContext(ContextForDish);

  const currentId = obj.id;
  const currentElement = state.orders.find(
    (element) => element.id === currentId
  );
  const handleIncrement = () => {
    dispatch({
      type: "Increment",
      data: { id: currentId },
    });
    console.log(currentElement);
  };

  const handleDecrement = () => {
    dispatch({
      type: "Decrement",
      data: { id: currentId },
    });
    console.log(currentElement);
  };
  const handleRemoveOrder = () => {
    dispatch({
      type: "RemoveOrder",
      data: { id: currentId },
    });
    console.log("remove from cart list");
    console.log("Current state:", state.orders);
  };
  return (
    <div className="cart-item">
      <span className="quantity-text">{currentElement?.quantity || 0}x</span>
      <span>{obj.name}</span>
      <span className="price">€{obj.price}</span>
      <div className="quantity-controls">
        <Button className="quantity-btn" onClick={handleDecrement}>
          -
        </Button>
        <span>{currentElement?.quantity || 0}</span>
        <Button className="quantity-btn" onClick={handleIncrement}>
          +
        </Button>
        <Button className="delete-btn" onClick={handleRemoveOrder}>
          DELETE
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
