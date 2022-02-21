import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h3 className="counter">{count}</h3>
            <button className="btn" onClick={decrement}>-</button>
            <button className="btn" onClick={increment}>+</button>
            <br/>
            <button className="btnBuy" onClick={() => onAdd(count)}>Add to Cart</button>
        </div>
    );
};

export default ItemCount;
