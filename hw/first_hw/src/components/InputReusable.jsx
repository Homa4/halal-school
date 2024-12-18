/* eslint-disable no-unused-vars */
function InputReusable(props) {
    const { updateName, className, type, id, required, value} = props

    const handleChange = (event) => {
        updateName(event.target.value)
    }

    return (
        <input
            type={type}
            className={className}
            id={id}
            required={required}
            defaultValue={value}
        />
    )
}

export default InputReusable