import { useReducer, createContext } from "react";

export const ContextForDish = createContext();

function DishContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        console.log("increase");
        return {
          ...state,
          orders: state.orders.map((order) =>
            order.id === action.data.id
              ? { ...order, quantity: order.quantity + 1 }
              : order
          ),
        };

      case "Decrement":
        console.log("decrease");
        return {
          ...state,
          orders: state.orders.map((order) =>
            order.id === action.data.id && order.quantity > 0
              ? { ...order, quantity: order.quantity - 1 }
              : order
          ),
        };

      case "Reset":
        return {
          ...state,
          storage: {
            ...state.storage,
            number: 0,
          },
        };

      case "AddName":
        return {
          ...state,
          storage: {
            ...state.storage,
            name: action.data.name,
          },
        };

      case "AddPrice":
        return {
          ...state,
          storage: {
            ...state.storage,
            price: action.data.price,
          },
        };

      case "AddOrder":
        return {
          ...state.orders,
          orders: [...(state.orders || []), action.data], // Ensure orders is an array
        };
      case "RemoveOrder":
        return {
          ...state,
          orders: state.orders.filter((order) => order.id !== action.data.id),
        };

      default:
        return state;
    }
  };

  const initialState = {
    storage: {
      id: "",
      name: "name",
      price: 0,
      quantity: 0,
      ingridients: "",
    },
    orders: [], // Ensure this is an array
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <ContextForDish.Provider value={value}>{children}</ContextForDish.Provider>
  );
}

export default DishContext;
