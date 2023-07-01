import React from 'react'

const InputLabel = ({same , labelText, handleChange}) => {
 

  return (
    <div className='inputContainer'>
        <label htmlFor={same} className="inputLabel">{labelText} </label>
        <input type={same} id={same} name={same} placeholder={same} onChange={(e)=>{handleChange(e) }} className="inputField"/>
    </div>
  )
}

export default InputLabel