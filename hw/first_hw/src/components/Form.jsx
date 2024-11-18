/* eslint-disable react/prop-types */
function Form(props) {
    return (
        <div className="main">
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            {props.comp_input}
            {props.comp_button}
        </div>
    )
}

export default Form