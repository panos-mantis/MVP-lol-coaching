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
    <form onSubmit={handleSubmit}>
      <InputLabel same="email" labelText="Potato" setEmail={setEmail}/>
      <InputLabel same="password" labelText="Password" setEmail={setPassword}/>
      <ButtonForm sign="/sign-in" btnText="Sign in"  email={email} password={password}/> 
    </form>
  );
};

export default Form;
