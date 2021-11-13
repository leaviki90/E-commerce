import './Cart.css'
import CartItem from './CartItem';

const Cart = ({ cart, setCart }) => {

    const finishBuy = () => {
        setCart([])
    }
    const clearCart = () => {
        setCart([])
    }
    const updateCart = (id, amount, price) => {
        const newCart = cart.map(item => {
            if (item.id === +id) {
                return { ...item, amount, price }
            }
            return item;
        });
        setCart(newCart)
    }

    const deleteItem = (id) => {
        const newCart = cart.filter(item => item.id !== +id);
        setCart(newCart)
    }

    const getTotalPrice = () => {
        const totalPrice = cart.reduce((sum, curr)=>sum+curr.price,0) || 0;
        return totalPrice.toFixed(2);
    }

     return (
        <>
            {cart.length ?
                <div className="cart-content">
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            amount={item.amount}
                            updateCart={updateCart}
                            deleteItem={deleteItem}
                        />
                    ))}

                    <div className="text-center">

                        <div className="cart-total">
                            {getTotalPrice()} $
                        </div>

                        <button
                            className="btn btn-clear"
                            onClick={clearCart}>
                            Clear
                        </button>
                        <button
                            className="btn btn-default"
                            onClick={finishBuy}>
                            Buy
                        </button>
                    </div>

                </div>
                :
                <div className="cart-empty">
                    <img src="/shopping-cart.png" alt="shopping-cart" className="cart-empty-img"></img>
                    Cart empty
                </div>
            }
        </>
    );
}

export default Cart;