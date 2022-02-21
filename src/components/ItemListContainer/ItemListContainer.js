import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory, getCategorias } from "../Products/Products";
import ItemList from "../ItemList/ItemList";
import { NavLink, useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
        setTimeout(() => {
            getProductsByCategory(categoryId).then((products) => {
            setProducts(products);
            setLoading(false);
            });
        }, 2000);
        } else {
        getProducts().then((products) => {
            setProducts(products);
            setLoading(false);
        });
        }
    }, [categoryId]);

    return (
        <>
        {loading ? (
            <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        ) : (
        <div className="itemListContainer">
            <div className="category">
                {getCategorias().map((category) => (
                <NavLink key={category.id} to={`/products/${category.id}`} className='nav-link'>
                    {category.description}
                </NavLink>
                ))}
            </div>

            <ItemList products={products} />
            </div>
        )}
        </>
    );
};

export default ItemListContainer;
