/* eslint-disable react/prop-types */
import "./Menu.css";
import Dish from "./Dish";
import OrdersBtn from "./OrdersBtn";
import { useState, useEffect, useContext } from "react";
import { ContextForDish } from "../../context/DishContext";

function Menu() {
  const [pizzas, setPizzaArr] = useState([]);
  const { state } = useContext(ContextForDish);

  useEffect(() => {
    console.log("Updated state:", state.orders);
  }, [state]);

  useEffect(() => {
    const getPizzaList = async () => {
      try {
        const res = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        // console.log(data.data);
        setPizzaArr(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPizzaList();
  }, []);
  return (
    <div className="dishesWrapper">
      {pizzas.map((element) => (
        <Dish key={element.id} element={element} />
      ))}
      <OrdersBtn />
    </div>
  );
}

export default Menu;
