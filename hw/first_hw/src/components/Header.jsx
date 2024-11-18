/* eslint-disable react/prop-types */

function Header(props){
    return(
        <header>
            <div className="logo">{props.children}</div>
        </header>
    )
}

export default Header