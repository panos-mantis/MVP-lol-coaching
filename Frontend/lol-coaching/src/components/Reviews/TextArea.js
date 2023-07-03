import React from "react";
import "./ReviewsCreate.css"

const TextArea = ({handleChange , forForm ,handleChangeNumber}) => {
  return (
    <>
      <div className="inputContainer">
        <label htmlFor="textarea" className="textLabel" >
          Review 
        </label>
        <input
          type="textarea"
          id="textarea"
          name="textarea"
          placeholder= "Write your review here"
          onChange={(e) => {
            handleChange(e);
          }}
          className="inputLabel"
        />
        <label htmlFor="reviewNumber" className="textLabel inputLabel" >
          Number
        </label>
        <select
          name="reviewNumber"
          id="reviewNumber"
          form={forForm}
          onChange={(e) => {
            handleChangeNumber(e);
          }}
          className="optionsField"
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button className="formButton">Submit !</button>
      </div>

    </>
  );
};

export default TextArea;
