import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount'
import { getProducts } from '../Products/Products';
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const onAdd = (count) => {
        if (count > 0) {
            console.log(`Added to cart: ${count}!`);
            alert(`Added to cart: ${count}!`);
        }
    };

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products);
            setLoading(false);
        });
    }, []);
    

    return (
        <div className="ItemListContainer">
        <h1 className="greeting">{greeting}</h1>
        <ItemCount stock={13} initial={1} onAdd={onAdd} />
        <ItemList products={products} />
        {loading && <p> Loading</p>}
        </div>
    )
}

export default ItemListContainer
