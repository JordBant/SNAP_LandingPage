const LinkType = ({ itemName, link }) =>{
    return(
        <a 
        href= { link } 
        className= 'link-item'
       >
        { itemName } 
        </a>
    )
}

export default LinkType