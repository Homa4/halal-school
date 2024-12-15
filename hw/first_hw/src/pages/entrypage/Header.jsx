/* eslint-disable react/prop-types */

function Header(props){
    const { children, user } = props
    return(
        <header className="fpHeader">
            <div className="logo">{children}</div>
            <div className="userName">{user}</div>
        </header>
    )
}

export default Header