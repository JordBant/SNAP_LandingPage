import MenuItem from "./menu-item"
import { Fragment } from "react"

const DropdownType = ({itemName}) => {
        if (itemName ===  'Features') {
            return(
                <Fragment>
                    
                        <h3> { itemName } </h3>
                        <ul className= "dropdown-item"> 
                            <MenuItem link itemName = 'Todo List'/>
                            <MenuItem link itemName = 'Calender'/>
                            <MenuItem link itemName = 'Reminders'/>
                            <MenuItem link itemName = 'Planning '/>
                        </ul>
                    
                </Fragment>
            )
        } else if(itemName === 'Company') {
        return(
            <Fragment>
               
                    <h3> { itemName } </h3>
                    <ul className= "dropdown-item"> 
                        <MenuItem link itemName = 'History'/>
                        <MenuItem link itemName = 'Our Team'/>
                        <MenuItem link itemName = 'Blog'/>
                    </ul>
                
            </Fragment>

        )
    }
}

export default DropdownType