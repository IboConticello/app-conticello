import CartContext from "../../context/CartContext";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './Cart.css';

export default function Cart() {
    const { cart, removeItem, getTotalPrice, getQuantityTotal, clear } = useContext(CartContext);

    return (
        <div className="cartPage">
            <p className='cart-title'>CART PAGE</p>
            <ul>
                {cart.length <= 0 ? (
                <>
                <p className="titleCartEmpty">Your cart is empty</p>
                <div className="containerCartEmpty">
                    <NavLink to="/products">
                    <button className="btnBack">Back to Shop</button>
                    </NavLink>
                </div>
                </>
                ) : (
                    cart.map((item) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-xs-12">
                                    <li className="cartItemsCheck" key={item.item.id}>
                                    <p className="cartItem">{item.item.name}</p>
                                    {cart.length > 0 && <p className="cartItem">Cantidad: {getQuantityTotal()}</p>}
                                    <p className="cartItem">{item.item.price} USD</p>
                                    <button className="btnRemove" onClick={() => removeItem(item)}>X</button>
                                    </li>
                                </div>
                            </div>
                        </div>
                    ))
                    )}
            </ul>
            
                {cart.length > 0 && <p className="cartTotal">TOTAL: {getTotalPrice()} USD</p>}
                <div className="containerClearBtn">
                    {cart.length > 0 && <button className="btnClearCart" onClick={() => clear(cart)}>Clear Cart</button>}
                </div>
        </div>
    )
}