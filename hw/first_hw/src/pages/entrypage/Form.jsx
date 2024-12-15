
import Button from '../../components/Button'
import Input from './Input'
import { useNavigate } from 'react-router-dom'


function Form(props) {
    const { name, updateName } = props;
    
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/menu")
    }
    return (
        <div className="main">
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Input updateName={updateName} />
            {console.log(name)}
            <Button onClick={handleClick} className="btn">Start Order</Button>
        </div>
    )
}

export default Form