import React from 'react';
import { Link } from "react-router-dom";

const Article = (props) => {
    let amount = 0;

    if(props.cart && props.id) {
        amount = props.cart.find(item => item.id === +props.id)?.amount || 0;
    }
    return (
        <div className="article-card">
            <div 
                className="btn btn-add"
                onClick={() => props.changeCart({id: props.id, amount: amount + 1, price: (amount + 1)*props.price})}
            >
                +
            </div>
            <div className="article-inside">
                <Link to={`/article/${props.id}`}>
                <img 
                alt={props.title} 
                className="article-thumb" 
                src={props.image} 
                style={
                    {
                        background: "url('/spinner.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "60px"
                    }
                }
                />
                </Link>
                <div className="article-content">
                    <div className="article-price">{props.price} $</div>
                    <Link to={`/article/${props.id}`} className="article-title">{props.title}</Link>
                    <div className="article-subtitle">{props.description}</div>
                    <div 
                    className="article-category"
                    onClick={()=>props.setCategory(props.category)}
                    >
                        {props.category}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;