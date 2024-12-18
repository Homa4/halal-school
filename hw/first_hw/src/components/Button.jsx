/* eslint-disable react/prop-types */

function Button(props) {
    const {
        children,
        className,
        type,
        onClick,

    } = props

    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>

    )
}

export default Button