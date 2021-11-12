import { useFetch } from "../hooks/useFetch";
import Article from "../components/Article";

const HomePage = () => {

    const { data: articles, isPending, error } = useFetch('https://fakestoreapi.com/products');

    return (
        <div className="container pt-50px">
            {isPending && <div className="text-center">
                <img className="spinner" src="/spinner.svg" alt="spinner" />
            </div>}
            {error && <div>{error}</div>}

            <div className="header">
                <input type="search" />
            </div>

            {articles &&
                (<div className="cards-container">
                    {articles.map(article => (

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
                            />
                        </div>
                    ))}
                </div>)
            }
        </div>
    );
}

export default HomePage;