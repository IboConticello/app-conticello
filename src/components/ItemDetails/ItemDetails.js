import React, { useState } from "react";
import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";



const ItemDetails = ({ product }) => {
    const [counter, setCounter] = useState();

    const onAdd = (count) => {
        alert(`Se agregaron ${count} "${product.description}" al carrito!`);
        setCounter(count);
    };

    return (
        <div className="card">
            <div className="itemDetails">
            <img src={product.img} alt={product.name} />
            <div className="card-content">
                <p>{product.description}</p>
                <p>{product.price}</p>

                {counter ? (
                    <Link to="/cart">
                        <button className="btnCheckOut">Checkout</button>
                    </Link>
                ) : (
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                )}

                <Link to="/products">
                    <button className="btnBack">Back</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;