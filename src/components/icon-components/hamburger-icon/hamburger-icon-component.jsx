import './hamburger-icon-styles/hamburger-icon.css'
import { useState } from "react";

const HamburgerIcon = ({toggleDropdown, toggleMask}) => {
  const [clicked, setClicked] = useState(false)
  const isClicked = clicked ? 'on' : '' ;

   return (
    <div 
    className={`menu-toggle ${ isClicked } `} 
    onClick = {() => {
      setClicked(!clicked)
      toggleDropdown()
      toggleMask()
      }
    } >
        <div className="hamburger">
            <span className = 'line'/>
            <span className = 'line'/>
            <span className = 'line'/>
        </div>
        <div className="cross">
            <span className = 'line'/>
            <span className = 'line'/>
        </div>
    </div>
  )
}

export default HamburgerIcon