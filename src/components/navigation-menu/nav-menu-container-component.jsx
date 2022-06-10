import React from 'react'
import MenuItem from './menu-item'
import './nav-menu-styles/nav-container.css'

const NavContainer = () => {
  return (
    <div className="nav-menu-container">
        <MenuItem itemName = {'Features'} iconPosition = {'right'} />
        <MenuItem itemName = {'Company'} iconPosition = {'left'} />
        <MenuItem itemName = { 'Careers' } link/>
        <MenuItem itemName = { 'About' } link/>

        <button className="btns login"> Login</button>
        <button className="btns register"> Register</button>
    </div>
  )
}

export default NavContainer