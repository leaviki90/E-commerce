import { useState } from 'react';
import { useFetch } from "../hooks/useFetch";
import Article from "../components/Article";

const HomePage = ({cart, changeCart}) => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';

    const { data: articles, isPending, error } = useFetch(url);
    const fillteredResults = (arr=[], searchStr="") => {
        return arr.filter(item => item.title.toLowerCase().search(searchStr.toLowerCase()) > -1)
    }

    const card = (article) => (
        <div
            className="card"
            key={article.id}>
            {/* <Link to={`/articles/${article.id}`}>Read more...</Link> */}
            <Article
                title={article.title}
                description={article.description}
                category={article.category}
                price={article.price}
                rate={article.rate}
                image={article.image}
                id={article.id}
                setCategory={setCategory}
                changeCart={changeCart}
                cart={cart}
            />
        </div>
    )
    return (
        <div className="container pt-50px">
            
            <div className="header">
                <input
                    type="search"
                    placeholder="Start searching..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div>
                    {category ?
                        <div>
                            <span className="f-bold">Category:</span> 
                            <span> {category}</span>
                            <span class="btn-clear-filter" onClick={() => setCategory('')}>clear filter</span>
                        </div>
                        : <span><span className="f-bold">Category: </span>All</span>
                    }
                </div>
            </div>

            {isPending && <div className="text-center">
                <img className="spinner" src="/spinner.svg" alt="spinner" />
            </div>}
            {error && <div>{error}</div>}

            {articles && search ?
                <div className="cards-container">
                    {fillteredResults(articles, search).length ? fillteredResults(articles, search).map(article => (
                        card(article)
                    )) : 'No search results'}
                </div>
                : articles ? <div className="cards-container">
                    {articles.map(article => (
                        card(article)
                    ))}
                </div> : ''}
        </div>
    );
}

export default HomePage;