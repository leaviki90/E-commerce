import './Cart.css'

const Cart = ({ cart, setCart }) => {

    const finishBuy = () => {
        setCart([])
    }

    return (
        <div>
            cart

            {cart.length ?
                <div className="cart-content">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <div>{item.title}</div>
                            <div>{item.amount}</div>
                            <div>{item.amount * item.price} $</div>
                        </div>
                    ))}

                    <button onClick={finishBuy}>Buy</button>
                </div>
                : ''}
        </div>
    );
}

export default Cart;