import LinkType from './link-type-component'
import DropdownType from './dropdown-type-component'
import './nav-menu-styles/nav-menu-items.css'

const MenuItem = ({ link, itemName, iconPosition}) => {
     return(
        <li className= { `menu-item` } >
          {
            iconPosition
            ? <div className= { `${iconPosition}` } />
            : undefined
          }

          {
            link
            ? <LinkType href= { link } itemName = {itemName} />
            : <DropdownType itemName = {itemName}/> 
          }
        </li>
  )
}

export default MenuItem