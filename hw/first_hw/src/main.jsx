import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "./context/FormContext.jsx";
import DishContext from "./context/DishContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <DishContext>
        <App />
      </DishContext>
    </Context>
  </React.StrictMode>
);
