import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Products/Products";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        getProducts().then((products) => {
        setProduct(products[parseInt(id)]);
        setLoading(false);
        setShowDetails(true);
        });
    }, [id]);

    return (
        <div className="itemDetailContainer">
        {showDetails && <ItemDetails product={product} />}
        {loading && 
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary spinner" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </div>
    );
};

export default ItemDetailContainer;
