import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "./ReviewSee.css"
const ReviewSee = () => {

  const [reviews,setReviews]= useState([])
    useEffect(()=>{
      axios.get("http://localhost:4000/review/reviews").then((response)=>{
          setReviews(response.data.reviews)
          console.log(response.data.reviews)
      })
    },[])
 
  
  return (
    <ul className='reviewsContainer'>{reviews.map((review)=>{return(<li className='reviewLine' key={review._id}><h4 className='reviewListEmail'>{review.email}</h4>
    <p className='reviewListText'>{review.text}</p>
    <p className='reviewListINumber'>{review.number}</p>
  </li>)})}</ul>
  )
}
// SEE THE REVIEWS HERE
export default ReviewSee