import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ product }) {
    return (
        <div className="card">
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.name} />
        <div className="card-content">
            <p>{product.description}</p>
            <p>{product.price}</p>
            <ItemCount />
        </div>
        </div>
    );
}