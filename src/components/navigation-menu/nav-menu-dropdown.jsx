import {React, Fragment, useState} from 'react'
import MenuItem from './menu-item'
import Hamburger from '../icon-components/hamburger-icon/hamburger-icon-component'
import CTAButton from '../button-cta/button-call-to-action-component'
import './nav-menu-styles/nav-dropdown.css'

const NavDropdown = ({toggleMask}) => {
  const [dropdown, setDropdown] = useState(false)
  const toggle = () => setDropdown(!dropdown)
  const isToggled = dropdown ? 'active' : ''

  return (
  <Fragment>
    <Hamburger toggleDropdown = { toggle } toggleMask = { toggleMask} />
    <div className= {`nav-menu-dropdown ${isToggled}`}>
      <div className="menu-item-container">
        <MenuItem itemName = {'Features'} />
        <MenuItem itemName = {'Company'} />
        <MenuItem itemName = {'Careers'} link/>
        <MenuItem itemName = {'About'} link/>
      </div>

      <div className="button-container">
        <CTAButton buttonBody= 'Login' altStyle= 'clear' />
        <CTAButton buttonBody= 'Register' altStyle= 'outline' />
      </div>
    </div>
  </Fragment>
  )
}

export default NavDropdown