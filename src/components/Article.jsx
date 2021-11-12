import React from "react";
import { Link } from "react-router-dom";

const Article = (props) => {

    return (
        <div className="article-card">
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
                    <div className="article-category">{props.category}</div>
                </div>
            </div>
        </div>
    );
}

export default Article;