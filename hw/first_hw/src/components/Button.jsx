/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


function Button(props){
    const { openMenu, children } = props

    return(
        // <button className="btn" onClick={openMenu}>{children}</button>
        <Link  to='/menu'><button className="btn" onClick={openMenu}>{children}</button></Link>
        
    )
}

export default Button