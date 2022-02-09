import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({greeting}) => {
    const onAdd = (count) => {
        if (count > 0) {
            console.log(`Added to cart: ${count}!`);
            alert(`Added to cart: ${count}!`);
        }
    };

    return (
        <div>
        <h1 className="greeting">{greeting}</h1>
        <ItemCount stock={13} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
