import React from "react";
import InputLabel from "./InputLabel";
import { useState } from "react";
import "./Form.css"
import ButtonForm from "./ButtonForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const FormUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleChangeEmail = (e)=>setEmail(e.target.value)
  const handleChangePassword = (e)=>setPassword(e.target.value)

  const handleSubmit= async(event)=>{
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:4000/user/signup', {email:email, password:password});
        if(response){
          localStorage.setItem("token", response.token)
          navigate("/coaching")
        }
    } catch (error) {
      alert(error.message);
    }
  }
    
 
  return (
    <form onSubmit={handleSubmit} className="signForm">
      <InputLabel same="email" labelText="email" handleChange={(e)=>handleChangeEmail(e)}/>
      <InputLabel same="password" labelText="password" handleChange={(e)=>handleChangePassword(e)}/>
      <ButtonForm sign="/sign-in" btnText="Sign Up"  email={email} password={password}/> 
    </form>
  );
};

export default FormUp;
