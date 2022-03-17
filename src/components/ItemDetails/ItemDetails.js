import React, { useState, useContext } from "react";
import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

import { useNotificationServices } from "../../services/notification/notificationServices";

const ItemDetails = ({ product }) => {
    const [counter, setCounter] = useState(0);

    const { addItem } = useContext(CartContext);

    const setNotification = useNotificationServices();

    const onAdd = (count) => {
        setCounter(count);
        addItem(product, count)
        setNotification("Items Added");
    };


    return (
        <div className="card">
            <div className="itemDetails">
            <img src={product.img} alt={product.name} />
            <div className="card-content">
                <p>{product.description}</p>
                <p>{product.price} USD</p>

                {counter ? (
                    <Link to="/cart">
                        <button className="btnCheckOut">Checkout</button>
                    </Link>
                ) : (
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                )}

            <div>
                <Link to="/products">
                    <button className="btnBack">Back</button>
                </Link>
            </div>

            </div>
            </div>
        </div>
    );
};

export default ItemDetails;