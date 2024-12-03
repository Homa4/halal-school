/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";

export const FormContext = createContext();

function Context({ children }){
    let obj = {
        name:'Tolik',
    }

    const [formObj, setFormObjVal] = useState(obj);

    const updateName = (newName) => {
        setFormObjVal((prevState) => ({
            ...prevState, 
            name: newName, 
        }));
    };

    const value ={
        formObj,
        updateName,
    }
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export default Context;