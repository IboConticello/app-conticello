import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";


export default function Item({ product }) {
    return (
        <div className="card">
            <img src={product.img} alt={product.name} />
            <div className="card-content">
                <p>{product.description}</p>
                <p>{product.price} USD</p>

                <Link to={`/item/${product.id}`}>
                    <button className="btnAdd2Cart">BUY</button>
                </Link>
            </div>
        </div>
    );
}