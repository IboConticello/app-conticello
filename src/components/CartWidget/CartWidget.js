import './CartWidget.css';
import { BsCart3 } from "react-icons/bs";
import CartContext from "../../context/CartContext";
import React, { useState, useContext } from "react";

const CartWidget = () => {
    const { cart, getQuantityTotal } = useContext(CartContext);

    return (
        <div>
        <li className="nav-item px-5 nav-link"><BsCart3 className="cartIcon" /></li>
        {cart.length > 0 && (
        <span className='cartBadge'>{getQuantityTotal()}</span>
        )}
        </div>
        
    );
};

// Falta arreglar el cartBadge, que pasea por el nav en distintas resoluciones

export default CartWidget
