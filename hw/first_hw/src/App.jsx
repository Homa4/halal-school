import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Menu from "./pages/menu/Menu";
// import React from 'react'
import HFpage from "./pages/entrypage/HFpage";
import Orders from "./pages/orderspage/Orders";
import OrderForm from "./pages/orderform/OrderForm";
import OrderStatus from "./pages/orderstatus/OrderStatus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HFpage />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/orderform",
    element: <OrderForm />,
  },
  {
    path: "/orders:status",
    element: <OrderStatus />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
