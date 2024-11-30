/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";

export const FormContext = createContext();

function Context({ children }){
    let obj = {
        name:'Tolik',
        pizzas_list:[],
    }

    const [formObj, setFormObjVal] = useState(obj);

    const updateName = (newName) => {
        setFormObjVal((prevState) => ({
            ...prevState, 
            name: newName, 
        }));
    };

    const addPizza = (pizzaObj) => {
        setFormObjVal((prevState) => ({
            ...prevState,
            pizzas_list: [...prevState.pizzas_list, pizzaObj],
        }));
    };
    const value ={
        formObj,
        updateName,
        addPizza
    }
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export default Context;