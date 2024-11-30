import { Link } from 'react-router-dom'
import './OrdersBtn.css'
// import trolley from './component_img/trolley.png'

const imgPath = "./componentImg/trolley.jpeg"

function Orders() {
    return (
        <div className="ordersWrapper">
            <Link to='/orders'>
                <button className="orderBtn">
                    <img src={imgPath} alt="Orders" />
                </button>
            </Link>
        </div>
    )
}

export default Orders