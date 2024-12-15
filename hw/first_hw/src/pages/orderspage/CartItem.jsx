import './Orders.css';
import Button from '../../components/Button';

function CartItem(props) {
    const { obj } = props
    return (

        <div className="cart-item">
            <span className="quantity-text">{obj.quantity}x</span>
            <span>{obj.name}</span>
            <span className="price">€{obj.price}</span>
            <div className="quantity-controls">
                <Button
                    className="quantity-btn"
                >
                    -
                </Button>
                <span>{obj.quantity}</span>
                <Button
                    className="quantity-btn"
                >
                    +
                </Button>
                <Button
                    className="delete-btn"
                >
                    DELETE
                </Button>
            </div>
        </div>


    )
}

export default CartItem