import {React, Fragment, useState} from 'react'
import MenuItem from './menu-item'
import Hamburger from '../icon-components/hamburger-icon/hamburger-icon-component'
import './nav-menu-styles/nav-dropdown.css'

const NavDropdown = ({toggleMask}) => {
  const [dropdown, setDropdown] = useState(false)
  const toggle = () => setDropdown(!dropdown)
  const isToggled = dropdown ? 'active' : ''

  return (
  <Fragment>
    <Hamburger toggleDropdown = { toggle } toggleMask = { toggleMask} />
    <div className= {`nav-menu-dropdown ${isToggled}`}>
      <MenuItem itemName = {'Features'} />
      <MenuItem itemName = {'Company'} />
      <MenuItem itemName = {'Careers'} link/>
      <MenuItem itemName = {'About'} link/>

      <button className="btns login"> Login</button>
      <button className="btns register"> Register</button>
    </div>
  </Fragment>
  )
}

export default NavDropdown