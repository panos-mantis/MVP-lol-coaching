import React from "react";
import InputLabel from "./InputLabel";
import { useState } from "react";
import "./Form.css"
import ButtonForm from "./ButtonForm";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(event)=>{
    
    (console.log("potato"))
    event.preventDefault();
 }
  return (
    <form onSubmit={handleSubmit} className="signForm">
      <InputLabel same="email" labelText="email" setEmail={setEmail}/>
      <InputLabel same="password" labelText="password" setEmail={setPassword}/>
      <ButtonForm sign="/sign-in" btnText="Sign in"  email={email} password={password}/> 
    </form>
  );
};

export default Form;
