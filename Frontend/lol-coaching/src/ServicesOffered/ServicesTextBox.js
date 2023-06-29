import React from 'react'

const ServicesTextBox = ({textBoxHeader,textBoxParagraph}) => {
  return (
    <section className='textBox'>
        <h3>{textBoxHeader}</h3>
        <p>{textBoxParagraph}</p>

    </section>
  )
}

export default ServicesTextBox