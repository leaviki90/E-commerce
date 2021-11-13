import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch'
import './CartItem.css'

const CartItem = ({id, amount, updateCart, deleteItem}) => {

    const url = 'https://fakestoreapi.com/products/' + id;
    const {data: article, isPending} = useFetch(url);

    const [amountValue, setAmountValue] = useState(0);


    const changeAmount = (a) => {
        const newAmount = a < 1 ? 1 : Math.floor(a);
        setAmountValue(newAmount);
        updateCart(id, newAmount, newAmount*article.price);
    }

    useEffect(() => {
        if(amount) {
            setAmountValue(amount);
        }
    }, [amount]);

    return ( 
        <>
            {isPending && <div className="text-center mb-10px">
                <img className="spinner" src="/spinner.svg" alt="spinner" />
            </div> }
            {article ? 
                <div className="cart-card">
                    <button 
                    className="btn btn-delete"
                    onClick={() => deleteItem(id)}
                    >
                        x
                    </button>
                    <div className="cart-card__left">
                        <img 
                        src={article.image} 
                        alt={article.title}
                        style={
                            {
                                background: "url('/spinner.svg')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "30px"
                            }
                        }
                        />
                    </div>
                    <div className="cart-card__middle">
                        <div className="cart-card__middle__top">{article.title}</div>
                        <div className="cart-card__middle__bottom">
                            Price:
                            <span> {article.price} $</span>
                        </div>
                    </div>
                    <div className="cart-card__right">
                        <input 
                        type="number" 
                        name="" 
                        id="" 
                        value={amountValue}
                        step="1"
                        onChange={(e)=>changeAmount(e.target.value)}
                        />
                        <div className="cart-card__right__bottom">
                            <span className="f-bold"> {(amountValue * article.price).toFixed(2)} $</span>
                        </div>
                    </div>
                </div>
                : ''
            }
        </>
    );
}

export default CartItem;