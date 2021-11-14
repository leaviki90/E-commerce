import { useFetch } from "../hooks/useFetch";
import './Filter.css';

const Filter = ({setCategory, showModal}) => {

    const url = 'https://fakestoreapi.com/products/categories';
    const { data, isPending, error } = useFetch(url);

    const handleClick = (category) => {
        setCategory(category);
        showModal(false);
    }

    return (

        <div className="filter-container">
            {isPending && <img className="spinner" src="/spinner.svg" alt="spinner" />}
            {error && <div>{error}</div>}
            {
                data && data.map((category) => (
                    <button className="btn btn-filter" key={category} onClick={()=>handleClick(category)}>{category}</button>
                ))
            }
        </div>
    );
}

export default Filter;