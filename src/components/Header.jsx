import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

export default function Header() {
  

  
  return (
    <header className='header'>
      <Link to='/' className='header_logo'>
        <img src={"https://OlegProgrammerua.github.io/portfolio-app/assets/images/Header/Videoholio_logo.png"} className='logo'></img>
        <div className='logo_text'>Videopholio</div>
      </Link>
      <NavBar/>
      
      
    </header>
  )
}
