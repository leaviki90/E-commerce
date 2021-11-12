
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
//import { Link } from "react";

const ArticlePage = ({cart, changeCart}) => {

    const { id } = useParams();
    const url = 'https://fakestoreapi.com/products/' + id;
    const {data: article, isPending, error} = useFetch(url);

    const [amount, setAmount] = useState(0);

    return ( 
        <div className="container">
        {isPending && <div className="text-center">
                <img className="spinner" src="/spinner.svg" alt="spinner" />
            </div> }
        {error && <div>{error}</div> }
        {article ? 
        
            <div className="article-inside">
                <img 
                alt={article.title} 
                className="article-thumb" 
                src={article.image} 
                style={
                    {
                        background: "url('/spinner.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "60px"
                    }
                }
                />
                <div className="article-content">
                    <div className="article-price">{article.price} $</div>
                    <div>
                        <input 
                            type="number" 
                            name="amount-input" 
                            id="amountInput" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <span>{(amount * article.price).toFixed(2)} $</span>
                        <button
                            onClick={() => changeCart({id: article.id, title: article.title, amount: +amount, price: +article.price})}
                        >
                            Add to cart
                        </button>
                    </div>
                    <div className="article-category">{article.category}</div>
                    <h3 className="article-title">{article.title}</h3>
                    <div className="article-subtitle">{article.description}</div>
                </div>
            </div>
        
        : ''}
        </div>
    );
}

export default ArticlePage;