import './CartWidget.css';
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <>
        <li className="nav-item px-5 nav-link"><BsCart3 className="cartIcon" /></li>
        </>
        
    );
};

export default CartWidget
