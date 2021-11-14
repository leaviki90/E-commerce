import { useState } from 'react';
import { useFetch } from "../hooks/useFetch";
import Article from "../components/Article";
import Modal from '../components/Modal';
import Filter from '../components/Filter';

const HomePage = ({cart, changeCart, badgeAnimate}) => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [showModal, setShowModal] = useState(false);

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
                badgeAnimate={badgeAnimate}
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
                            <span className="btn-clear-filter" onClick={() => setCategory('')}>clear filter</span>
                        </div>
                        : <span className="d-flex flex-center">
                            <span><span className="f-bold">Category: </span><span>All</span></span>
                            <span className="btn-change-filter" onClick={() => setShowModal(true)}>CHANGE</span>
                        </span>
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
                {showModal &&
                <Modal
                    showModal={setShowModal}
                    modalTitle="Filter by category"
                >
                    <Filter 
                    setCategory={setCategory}
                    showModal={setShowModal}
                    />
                </Modal>}
        </div>
    );
}

export default HomePage;