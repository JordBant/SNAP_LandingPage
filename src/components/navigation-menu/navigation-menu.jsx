import NavDropdown from './nav-menu-dropdown'
import Logo from '../icon-components/logo-component'
import { useState } from 'react'
import './nav-menu-styles/nav-menu.css'

const NavMenu = () => {
  const [mask, setMask] = useState(false)
  const toggleMask = () => setMask(!mask)
  const isMasked = mask ? 'masked' : '' ;

  return (
    <div className={`nav-menu ${isMasked}` }  >
      <Logo/>
      <NavDropdown toggleMask = { toggleMask } />
    </div>
  )
}

export default NavMenu