import "./OrderStatus.css";
import OrderStatusItem from "./OrderStatusItem";
import { useContext } from "react";
import { ContextForDish } from "../../context/DishContext";
import { FormContext } from "../../context/FormContext";

function OrderStatus() {
  const { state } = useContext(ContextForDish);
  const { formObj } = useContext(FormContext);

  const totalPizzaPrice = state.orders
    ? state.orders.reduce(
        (sum, order) => sum + order.price * (order.quantity || 1),
        0
      )
    : 0;

  const priorityPrice = formObj.priority ? 12 : 0;
  console.log(formObj);

  const totalPrice = totalPizzaPrice + priorityPrice;

  return (
    <div className="container-order-status-wrapper">
      <div className="container-order-status">
        <div className="header">
          <h1 className="order-title">Order #5T460L status: preparing</h1>
          <div className="badges">
            {formObj.priority && (
              <span className="badge badge-priority">PRIORITY</span>
            )}
            <span className="badge badge-preparing">PREPARING ORDER</span>
          </div>
        </div>

        <div className="time-banner">
          <div className="time-left">Only 49 minutes left 😃</div>
          <div className="estimated-time">
            (Estimated delivery: Dec 12, 01:37 PM)
          </div>
        </div>

        {state.orders && state.orders.length > 0 ? (
          state.orders.map((obj) => (
            <OrderStatusItem key={obj.id || obj.name} obj={obj} />
          ))
        ) : (
          <div>You haven&apos;t ordered yet</div>
        )}

        <div className="price-breakdown">
          <div className="price-item">
            <span className="price-label">Price pizza:</span>
            <span className="price-value">€{totalPizzaPrice.toFixed(2)}</span>
          </div>
          {formObj.priority && (
            <div className="price-item">
              <span className="price-label">Price priority:</span>
              <span className="price-value">€{priorityPrice.toFixed(2)}</span>
            </div>
          )}
          <div className="price-item">
            <span className="price-label">To pay on delivery:</span>
            <span className="price-value">€{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
