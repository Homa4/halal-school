
import Button from './Button'
import Input from './Input'


function Form(props) {
    const { name, updateName } = props;
    return (
        <div className="main">
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Input updateName={updateName} />
            {console.log(name)}
            <Button >Start Order</Button>
        </div>
    )
}

export default Form