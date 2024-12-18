import './OrderForm.css'

function OrderForm() {
    return (
        <div className="container-order-form">
            <h1 className="header-order-form">Ready to order? Let&apos;s go!</h1>

            <form className="form">
                <div className="form-group">
                    <label className="name-order-form" htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value="vlad" readOnly></input>
                </div>

                <div className="form-group">
                    <label className="phone-order-form" htmlFor="phone">Phone number</label>
                    <input type="tel" id="phone" required></input>
                </div>

                <div className="form-group">
                    <label className="address-order-form" htmlFor="address">Address</label>
                    <div className="input-wrapper">
                        <input type="text" id="address" required></input>
                    </div>
                </div>

                <div className="checkbox-group">
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="priority"></input>
                            <label htmlFor="priority">Want to give your order priority?</label>
                    </div>
                </div>

                <button type="submit" className="order-btn">
                    Order now for €12.00
                </button>
            </form>
        </div>
    )
}

export default OrderForm