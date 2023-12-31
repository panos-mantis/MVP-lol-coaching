import React from 'react'
import ServicesHeader from './ServicesHeader'
import ServicesTextBox from './ServicesTextBox'
import "./Services.css"

const Services = () => {
  return (
    <div className='servicesContainer'>
      <ServicesHeader />
      <div className='textBoxContainer'>
        <ServicesTextBox  textBoxHeader="Fundamentals" textBoxParagraph="POTATOOOO"/>
        <ServicesTextBox  textBoxHeader="Intermediate Concepts" textBoxParagraph="POTATOOOO"/>
        <ServicesTextBox  textBoxHeader="Competitive Coaching" textBoxParagraph="POTATOOOO"/>
      </div>  
    </div>
  )
}

export default Services