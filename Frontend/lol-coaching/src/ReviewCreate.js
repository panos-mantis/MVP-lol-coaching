import React, { useState } from 'react'
import InputLabel from './components/Form/InputLabel'
import TextArea from './components/Reviews/TextArea'
import axios from 'axios'
const ReviewCreate = () => {
    const [email ,setEmail] = useState("")
    const [text ,setText] = useState("")
    const [number ,setNumber] = useState("")
    const handleChangeEmail= (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }
    const handleChangeNumber= (e)=>{
        setNumber(e.target.value)
        console.log(number)
    }
    const handleChangeText= (e)=>{
        setText(e.target.value)
        console.log(text)
    }
    const handleSubmit= async(event)=>{
        event.preventDefault();
        const token= localStorage.getItem("token")
        try {
            const response = await axios.post('http://localhost:4000/review/create', {email:email, number:number, text:text , token:token});
            console.log(response)
            console.log(response.data.msg)
        } catch (error) {
          console.log(error.message);
        }
      }
  return (
    <div className='reviewContainer'>  
        <h1 className='headerForm'>Write a review</h1>
        <form id='reviewForm' onSubmit={(event)=>handleSubmit(event)}>
            <InputLabel same="email"  labelText="email" handleChange={(e)=>handleChangeEmail(e)}/>
            <TextArea handleChange={(e)=>handleChangeText(e)} forForm="reviewForm" handleChangeNumber={(e)=>handleChangeNumber(e)}/>
        </form>
    </div>
  )
}


//CREATE REVIEWS FROM HERE
export default ReviewCreate