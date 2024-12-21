import Button from "../../components/Button";
// import Input from './Input'
import InputReusable from "../../components/Input";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const { name, updateName } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  const handleChange = (event) => {
    updateName(event.target.value);
  };
  return (
    <div className="main">
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>
      <InputReusable
        updateName={updateName}
        maxLength={12}
        type="text"
        placeholder="Your full name"
        aria-label="Your full name"
        onChange={handleChange}
      />
      {console.log(name)}
      <Button onClick={handleClick} className="btn">
        Start Order
      </Button>
    </div>
  );
}

export default Form;
