import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { NavLink, useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";
import { useNotificationServices } from '../../services/notification/notificationServices'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([])

    const { categoryId } = useParams();

    const setNotification = useNotificationServices()


    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
        ? query(
            collection(firestoreDb, "products"),
            where("category", "==", categoryId)
        )
        : collection(firestoreDb, "products");

        getDocs(collectionRef)
        .then((response) => {
            const products = response.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
            });

            setProducts(products);
        }).catch((error) => {
            setNotification('error',`Error buscando productos: ${error}`)
        }).finally(() => {
            setLoading(false)
        })

    return () => {
        setProducts();
    };
    }, [categoryId]);

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(cat => {
            return { id: cat.id, ...cat.data()}
            })
            setCategories(categories)
        })
    }, [])


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
                {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        to={`/category/${cat.id}`}
                        className="nav-link">
                        {cat.description}
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
