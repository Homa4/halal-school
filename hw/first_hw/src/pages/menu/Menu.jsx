import "./Menu.css";
import useFetch from "../../customHooks/useFetch";
import Dish from "./Dish";
import OrdersBtn from "./OrdersBtn";
import { useState, useEffect, useContext } from "react";
import { ContextForDish } from "../../context/DishContext";
import Loading from "../../components/Loader/Loading";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert" className="error-container">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
};

function Menu() {
  const [pizzas, setPizzaArr] = useState([]);
  const { state } = useContext(ContextForDish);
  const url = "https://react-fast-pizza-api.onrender.com/api/menu";

  useEffect(() => {
    console.log("Updated state:", state.orders);
  }, [state]);

  const { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    if (data) {
      setPizzaArr(data);
    }
  }, [data]);

  if (error) {
    throw error; // will be caught by the ErrorBoundary
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="dishesWrapper">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {pizzas.map((element) => (
              <Dish key={element.id} element={element} />
            ))}
          </>
        )}
        <OrdersBtn />
      </div>
    </ErrorBoundary>
  );
}

export default Menu;
