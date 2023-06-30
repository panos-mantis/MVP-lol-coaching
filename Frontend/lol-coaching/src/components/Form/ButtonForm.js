import React from "react";
import { useNavigate } from "react-router-dom";

const axios = require('axios');


const ButtonForm = ({ sign, btnText , email, password }) => {
 
  return (
    <button type="submit" className="formButton">
      {btnText}
    </button>
  );
};

export default ButtonForm;
