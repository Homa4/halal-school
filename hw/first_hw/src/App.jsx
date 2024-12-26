import Loading from "./components/Loader/Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

// Lazy load components
const Menu = lazy(() => import("./pages/menu/Menu"));
const HFpage = lazy(() => import("./pages/entrypage/HFpage"));
const Orders = lazy(() => import("./pages/orderspage/Orders"));
const OrderForm = lazy(() => import("./pages/orderform/OrderForm"));
const OrderStatus = lazy(() => import("./pages/orderstatus/OrderStatus"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <HFpage />
      </Suspense>
    ),
  },
  {
    path: "/menu",
    element: (
      <Suspense fallback={<Loading />}>
        <Menu />
      </Suspense>
    ),
  },
  {
    path: "/orders",
    element: (
      <Suspense fallback={<Loading />}>
        <Orders />
      </Suspense>
    ),
  },
  {
    path: "/orderform",
    element: (
      <Suspense fallback={<Loading />}>
        <OrderForm />
      </Suspense>
    ),
  },
  {
    path: "/orders:status",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <OrderStatus />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
