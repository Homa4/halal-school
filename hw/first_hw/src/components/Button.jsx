/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


function Button(props){
    const { children } = props
    const handleClick = (event) => {
        console.log('event:', event)
        console.log('native event:', event.nativeEvent)

    }

    const handleFocus = () => {
        console.log('focus')
    }

    return(
        // <button className="btn" onClick={openMenu}>{children}</button>
        <Link  to='/menu'><button className="btn" onFocus={handleFocus} onClick={handleClick}>{children}</button></Link>
        
    )
}

export default Button