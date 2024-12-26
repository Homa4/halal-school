function OrderStatusItems({ obj }) {
  return (
    <>
      <div className="order-details">
        <div className="pizza-item">
          <div className="pizza-header">
            <span className="pizza-name">{`${obj.quantity}x ${obj.name}`}</span>
            <span className="pizza-price">€{obj.price * obj.quantity}</span>
          </div>
          <div className="ingredients">{obj.ingredients.join(", ")}</div>
        </div>
      </div>
    </>
  );
}

export default OrderStatusItems;
