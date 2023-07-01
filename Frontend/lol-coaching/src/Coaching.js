import React from 'react'
import CoachingHeader from './components/Coaching/CoachingHeader'
import ServicesTextBox from './components/ServicesOffered/ServicesTextBox'
import "./components/Coaching/Coaching.css"

const Coaching = () => {
  return (
    <>
        <CoachingHeader className="coachingHeader"/>
        <div className='textBoxContainer'>
           <ServicesTextBox textBoxHeader="Placeholder text about coaching" textBoxParagraph="Potato"/>
           <ServicesTextBox textBoxHeader="Get your coaching here" textBoxParagraph="Social media links" />
        </div>
        <div className='quote'><p>
            Inspirational quote about improving
            </p></div>
    </>
  )
}

export default Coaching