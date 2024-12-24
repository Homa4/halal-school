import "./OrderForm.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import { useContext } from "react";

function OrderForm() {
  const navigate = useNavigate();
  const { formObj, setPriority } = useContext(FormContext);

  const moveToOrderStatus = (e) => {
    e.preventDefault();
    navigate("/orders:status");
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.checked);
  };

  return (
    <div className="container-order-form">
      <h1 className="header-order-form">Ready to order? Let&apos;s go!</h1>

      <form className="form" onSubmit={moveToOrderStatus}>
        <div className="form-group">
          <label className="name-order-form" htmlFor="firstName">
            First Name
          </label>
          <Input type="text" id="firstName" value="vlad" readOnly />
        </div>

        <div className="form-group">
          <label className="phone-order-form" htmlFor="phone">
            Phone number
          </label>
          <Input type="tel" id="phone" required />
        </div>

        <div className="form-group">
          <label className="address-order-form" htmlFor="address">
            Address
          </label>
          <div className="input-wrapper">
            <Input type="text" id="address" required />
          </div>
        </div>

        <div className="checkbox-group">
          <div className="checkbox-wrapper">
            <Input
              type="checkbox"
              id="priority"
              checked={formObj.priority} // Bind checkbox to context
              onChange={handlePriorityChange} // Handle change event
            />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
        </div>

        <Button type="submit" className="order-btn">
          Order now for €12.00
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
