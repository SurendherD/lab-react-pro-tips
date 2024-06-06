import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

function Navlinks() {
  return (
    <div className='nav'>
      <div className='nav1'>
      <NavLink to='/'>Kalvium <span style={{color:'red'}}>❤</span></NavLink>
      </div>
      <div className='nav2'>
      <NavLink to='/contacts'>Contacts</NavLink>
      <NavLink to='/form'>Registration</NavLink>
      </div>
    </div>
  )
}

export default Navlinks