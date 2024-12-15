import { useNavigate } from 'react-router-dom'
import './OrdersBtn.css'

const imgPath = "./componentImg/trolley.jpeg"

function OrdersBtn() {
    const navigate = useNavigate()

    const goto = () => {
        navigate("/orders")
    }

    return (
        <div className="ordersWrapper">
                <button className="orderBtn" onClick={goto}>
                    <img src={imgPath} alt="Orders" />
                </button>
        </div>
    )
}

export default OrdersBtn