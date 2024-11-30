/* eslint-disable no-unused-vars */
import Header from './Header'
import Form from './Form'
// import { useState } from "react";
import { useContext } from 'react';
import { FormContext } from "../logic/Context";

function HFpage() {
    const {formObj, updateName, addPizza} = useContext(FormContext);
    return (
        <div className="container">
            <Header user={formObj.name}>PIZZA DAY</Header>
            <Form name={formObj.name} updateName={updateName}/>
        </div>
    )
}

export default HFpage