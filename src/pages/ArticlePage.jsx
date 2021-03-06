
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ArticlePage.css"


const ArticlePage = ({cart, changeCart, badgeAnimate}) => {

    const { id } = useParams();
    const url = 'https://fakestoreapi.com/products/' + id;
    const {data: article, isPending, error} = useFetch(url);

    const [amountValue, setAmountValue] = useState(1);

    let amount = 0;

    if(cart && id) {
        amount = cart.find(item => item.id === +id)?.amount || 0;
    }

    const handeAdd = () => {
        changeCart({id: article.id, amount: amount + +amountValue, price:(amount + amountValue)*article.price});
        badgeAnimate();
    }

    return ( 
        <div className="container">
        {isPending && <div className="text-center">
                <img className="spinner" src="/spinner.svg" alt="spinner" />
            </div> }
        {error && <div>{error}</div> }
        {article ? 
        
            <div className="article-inside full-article">
                <figure>
                <Link to="/" className="go-back">
              <img src="../Go-back-icon.png" alt="back-icon" />
            </Link>
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
                </figure>
                <div className="article-content">
                    <div className="article-price">{article.price} $</div>
                    <div>

                        <div className="article-input-group">
                        <input 
                            type="number" 
                            name="amount-input" 
                            id="amountInput" 
                            value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value < 1 ? 1 : Math.floor(e.target.value))}
                        />
                        <span>{(amountValue * article.price).toFixed(2)} $</span>

                        </div>
                       
                        <button className="btn btn-default"
                            onClick={() => handeAdd()}
                        >
                            Add to cart
                        </button>
                    </div>
                    <div className="article-category-normal">{article.category}</div>
                    <h3 className="article-title">{article.title}</h3>
                    <div className="article-subtitle">{article.description}</div>
                </div>
            </div>
        
        : ''}
        </div>
    );
}

export default ArticlePage;