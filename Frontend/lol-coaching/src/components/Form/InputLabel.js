import React from 'react'

const InputLabel = ({same , labelText, setValue}) => {
  return (
    <>
        <label htmlFor={same} className="inputLabel">{labelText} </label>
        <input type={same} id={same} name={same} placeholder={same} onChange={(e)=>setValue(e.target.value)} className="inputField"/>
    </>
  )
}

export default InputLabel