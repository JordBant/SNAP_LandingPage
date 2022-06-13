import './hamburger-icon-styles/hamburger-icon.css'
import { useState } from "react";

const HamburgerIcon = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (event) => setToggle(!toggle) 
  const isToggled = toggle ? 'on' : '';

  return (
    <div className={`menu-toggle ${isToggled} `} onClick = {handleToggle} > 
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