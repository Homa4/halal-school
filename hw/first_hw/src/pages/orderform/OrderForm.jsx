import "./OrderForm.css";
import Button from "../../components/Button";
import InputReusable from "../../components/Input";
import { useNavigate } from "react-router-dom";

function OrderForm() {
  const navigate = useNavigate();
  const moveToOrderStatus = () => {
    navigate("/orders:status");
  };
  return (
    <div className="container-order-form">
      <h1 className="header-order-form">Ready to order? Let&apos;s go!</h1>

      <form className="form">
        <div className="form-group">
          <label className="name-order-form" htmlFor="firstName">
            First Name
          </label>
          <InputReusable type="text" id="firstName" value="vlad" readOnly />
        </div>

        <div className="form-group">
          <label className="phone-order-form" htmlFor="phone">
            Phone number
          </label>
          <InputReusable type="tel" id="phone" required />
        </div>

        <div className="form-group">
          <label className="address-order-form" htmlFor="address">
            Address
          </label>
          <div className="input-wrapper">
            <InputReusable type="text" id="address" required />
          </div>
        </div>

        <div className="checkbox-group">
          <div className="checkbox-wrapper">
            <InputReusable type="checkbox" id="priority" />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
        </div>

        <Button type="submit" className="order-btn" onClick={moveToOrderStatus}>
          Order now for €12.00
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
