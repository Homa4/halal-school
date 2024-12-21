/* eslint-disable no-unused-vars */
function InputReusable(props) {
    const {
        updateName,
        className,
        type,
        id,
        required,
        value,
        maxLength,
        placeholder,
        aria_label,
        onChange,
        handleChange
    } = props


    return (
        <input
            type={type}
            className={className}
            id={id}
            required={required}
            defaultValue={value}
            maxLength={12}
            placeholder={placeholder}
            aria-label={aria_label}
            onChange={handleChange}
        />
    )
}

export default InputReusable