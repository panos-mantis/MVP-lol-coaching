import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ to, btnText }) => {
  const navigate = useNavigate();

  return (
    <button onClick={()=>navigate(to)} className="heroButton">
      {btnText}
    </button>
  );
};

export default Button;
