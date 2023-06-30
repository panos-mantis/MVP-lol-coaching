import React from 'react'

const InputLabel = ({same , labelText, setEmail,}) => {
  const handleChangeEmail = (e)=>setEmail(e.target.value)

  return (
    <div className='inputContainer'>
        <label htmlFor={same} className="inputLabel">{labelText} </label>
        <input type={same} id={same} name={same} placeholder={same} onChange={(e)=>{handleChangeEmail(e) }} className="inputField"/>
    </div>
  )
}

export default InputLabel