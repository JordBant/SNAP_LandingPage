import LinkType from './link-type-component'
import DropdownType from './dropdown-type-component'
import './nav-menu-styles/nav-menu-items.css'

const MenuItem = ({ link, itemName, className}) => {
     return(
        <li className= { `menu-item ${className}` }>
          {
            link
            ? <LinkType href= { link } itemName = {itemName} />
            : <DropdownType itemName = {itemName}/> 
          }
        </li>
  )
}

export default MenuItem