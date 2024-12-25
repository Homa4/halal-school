/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";

export const FormContext = createContext();

function Context({ children }) {
  const initialFormObj = {
    name: "Tolik",
    priority: false,
  };

  const [formObj, setFormObjVal] = useState(initialFormObj);

  const updateName = () => {
    setFormObjVal((prevState) => ({
      ...prevState,
      name: !prevState.priority,
    }));
  };

  const setPriority = (isPriority) => {
    console.log("Setting priority to:", isPriority);
    setFormObjVal((prevState) => ({
      ...prevState,
      priority: isPriority === "on",
    }));
  };

  const value = {
    formObj,
    updateName,
    setPriority,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default Context;
