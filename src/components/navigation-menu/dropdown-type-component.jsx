import MenuItem from "./menu-item"
import { Fragment, useState } from "react"
import DropdownArrow from "../icon-components/dropdown-icon-component"

const DropdownType = ({itemName}) => {
    const [isActive, setIsActive] = useState(false)
    const handleToggle = () =>  setIsActive(!isActive)
    const toggleActive = isActive ? 'active' : ''

        if (itemName === 'Features') {
            return(
                <Fragment>
                        <div className="dropdown-heading">
                            <h3 className="dropdown-title"> { itemName } </h3>
                            <button className= {`dropdown-icon ${ toggleActive }`} onClick = {handleToggle}>
                                <DropdownArrow />
                            </button>
                        </div>
                        <ul className= {`dropdown-item ${ toggleActive }`}> 
                            <MenuItem link className = 'todo' itemName = 'Todo List'/>
                            <MenuItem link className = 'calender' itemName = 'Calender'/>
                            <MenuItem link className = 'reminders' itemName = 'Reminders'/>
                            <MenuItem link className = 'planning' itemName = 'Planning '/>
                        </ul>
                </Fragment>
            )
        } else if(itemName === 'Company') {
        return(
            <Fragment>
                    <div className="dropdown-heading">
                        <h3 className="dropdown-title"> { itemName } </h3>
                        <button className= {`dropdown-icon ${ toggleActive }`} onClick = {handleToggle}>
                            <DropdownArrow />
                        </button>
                    </div>
                    <ul className= {`dropdown-item ${ isActive ? 'active' : null }`}> 
                        <MenuItem link itemName = 'History'/>
                        <MenuItem link itemName = 'Our Team'/>
                        <MenuItem link itemName = 'Blog'/>
                    </ul>
                
            </Fragment>

        )
    }
}

export default DropdownType