import React from "react";


const ButtonForm = ({  btnText }) => {
 
  return (
    <button type="submit" className="formButton">
      {btnText}
    </button>
  );
};

export default ButtonForm;
