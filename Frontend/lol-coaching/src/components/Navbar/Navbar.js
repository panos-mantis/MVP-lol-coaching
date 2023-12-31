import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <ul className='navUl'>
            <li className='navLi to-left'><Link to="/">Home</Link></li>
            <li className='navLi'><Link to="/reviews">Reviews</Link></li>
            <li className='navLi'><Link to="/reviewsCreate">Write a review</Link></li>
            <li className='navLi'><Link to="/coaching">Coaching</Link></li>
            <li className='navLi to-right'><Link to="/sign-in">Sign in</Link></li>
            <li className='navLi'><Link to="/sign-up">Sign up</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar