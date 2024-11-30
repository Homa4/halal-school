/* eslint-disable no-unused-vars */
function Input(props) {
    const { updateName } = props

    const handleChange = (event) => {
        updateName(event.target.value)
    }

    return (
        <input 
        maxLength={12} 
        type="text"
        placeholder="Your full name"
        aria-label="Your full name" 
        onChange={handleChange} />
    )
}

export default Input