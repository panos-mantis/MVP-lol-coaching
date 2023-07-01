import React from "react";
import InputLabel from "./InputLabel";
import { useState } from "react";
import "./Form.css"
import ButtonForm from "./ButtonForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const FormIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleChangeEmail = (e)=>setEmail(e.target.value)
  const handleChangePassword = (e)=>setPassword(e.target.value)

  const handleSubmit= async(event)=>{
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:4000/user/signin', {email:email, password:password});
        console.log(response);
        navigate("/coaching")
    } catch (error) {
      console.error(error.message);
    }
  }
    
 
  return (
    <form onSubmit={handleSubmit} className="signForm">
      <InputLabel same="email" labelText="email" handleChange={(e)=>handleChangeEmail(e)}/>
      <InputLabel same="password" labelText="password" handleChange={(e)=>handleChangePassword(e)}/>
      <ButtonForm sign="/sign-in" btnText="Sign in"  email={email} password={password}/> 
    </form>
  );
};

export default FormIn;
