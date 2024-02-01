import React from 'react'
import logo from '../images/logo5.png'
import { NavLink }from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-line'>
            <img  width={'120px'} alt={logo} src={logo}></img>

            <div className='links'>   
                <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/">Anasayfa</NavLink>
                <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/menu">Menu</NavLink>
                <NavLink  className={({ isActive }) => (isActive ? 'active' : '')}to="/about">Hakkımızda</NavLink>
                <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">İletişim</NavLink>
            </div>
        </div>
    </div>
  )
}
