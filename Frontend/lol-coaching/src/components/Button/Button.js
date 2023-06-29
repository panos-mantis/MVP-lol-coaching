import React from 'react'
import { Navigate } from 'react-router-dom'
import "./Button.css"

const Button = ({to , btnText}) => {

  function navigate(){
    <Navigate to={to}/>
  }

  return (
    <button onClick={()=>navigate()} className='heroButton'>{btnText}</button>
  )
}

export default Button