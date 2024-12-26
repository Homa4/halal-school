import "./OrderForm.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import { useContext } from "react";
import { ContextForDish } from "../../context/DishContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, useController } from "react-hook-form";

const formSchema = z.object({
  name: z.string({ message: "Maximum 8 characters" }).max(8),
  phone: z.string({ message: "Minimum 10 characters" }).min(10),
  address: z.string(),
});

function OrderForm() {
  const navigate = useNavigate();
  const { formObj, setPriority } = useContext(FormContext);
  const { state } = useContext(ContextForDish);

  const totalPizzaPrice = state.orders
    ? state.orders.reduce(
        (sum, order) => sum + order.price * (order.quantity || 1),
        0
      )
    : 0;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: formObj.name,
      phone: "",
      address: "",
    },
    resolver: zodResolver(formSchema),
  });

  const ControlledInput = ({ name, placeholder, type, id }) => {
    const {
      field: { value, onChange, ref },
    } = useController({ name, control });

    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    );
  };

  const onSubmit = (data) => {
    // setPriority();
    console.log("Form submitted with data:", data);
    navigate("/orders:status");
  };

  const handleClick = (event) => {
    // setPriority();
    setPriority(event.target.value);
  };

  return (
    <div className="container-order-form">
      <h1 className="header-order-form">Ready to order? Let&apos;s go!</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="name-order-form" htmlFor="name">
            Name
          </label>
          <ControlledInput
            name="name"
            type="text"
            id="name"
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label className="phone-order-form" htmlFor="phone">
            Phone
          </label>
          <ControlledInput
            name="phone"
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        <div className="form-group">
          <label className="address-order-form" htmlFor="address">
            Address
          </label>
          <ControlledInput
            name="address"
            type="text"
            id="address"
            placeholder="Enter your address"
          />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        <div className="checkbox-group">
          <div className="checkbox-wrapper">
            <input
              name="priority"
              type="checkbox"
              id="priority"
              onClick={handleClick}
            />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
        </div>

        <Button type="submit" className="order-btn">
          Order now for ₴{totalPizzaPrice}
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
