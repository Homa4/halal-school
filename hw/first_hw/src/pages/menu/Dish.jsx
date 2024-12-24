import Counter from "../menu/Conter";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { ContextForDish } from "../../context/DishContext";
import { v4 as uuidv4 } from "uuid";

function Dish({ element }) {
  const [ordered, setOrdered] = useState(false);
  const [orderId, setOrderId] = useState(null); // Store the ID locally
  const { state, dispatch } = useContext(ContextForDish);

  const handleOrder = () => {
    const existingOrder = state.orders.find(
      (order) => order.name === element.name
    );
    if (!existingOrder) {
      const id = uuidv4();
      setOrderId(id);
      setOrdered(true);
      dispatch({
        type: "AddOrder",
        data: {
          id,
          name: element.name,
          price: element.unitPrice,
          quantity: 1, // Default quantity
          ingredients: element.ingredients,
        },
      });
    }
  };

  const handleCancel = () => {
    setOrdered(false);
    dispatch({
      type: "RemoveOrder",
      data: { id: orderId },
    });
    setOrderId(null);
  };

  return (
    <div className="dish">
      <div
        className={element.soldOut ? "availableDishImg" : "unavailableDishImg"}
      >
        <img src={element.imageUrl} alt="img" className="dishImg" />
      </div>
      <div className="namePrice">
        <div className="name">{element.name}</div>
        <div className="price">{element.unitPrice} ₴</div>
      </div>
      <div className="descriptionWrapper">
        <p>{element.ingredients.join(", ")}</p>
      </div>
      {!element.soldOut ? (
        <div className="notAvailable">Not available</div>
      ) : (
        <>
          {!ordered ? (
            <Button className="orderButton" onClick={handleOrder}>
              Order
            </Button>
          ) : (
            <>
              <Button className="cancelOrder" onClick={handleCancel}>
                Cancel
              </Button>
              {orderId && <Counter id={orderId} />}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Dish;
