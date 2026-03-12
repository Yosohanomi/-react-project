import { ProductCard } from "../Product/ProductCard";
import styles from "./ProductList.module.css";
import { useContext } from "react";
import { ProductContext } from '../../context/ProductsContext/ProductsContext';

export const ProductList = ({ itemsPerPage }) => {
    const { products, page } = useContext(ProductContext);

    const getCurrentPageItems = () => {
        const startIndex = (page - 1) * itemsPerPage;
        return products.slice(startIndex, startIndex + itemsPerPage);
    };

    const visibleProducts = getCurrentPageItems();

    return (
        <ul className={styles.products__list}>
            {visibleProducts.map((product) => (
                <ProductCard 
                    key={product._id}
                    product={product}
                />
            ))}
        </ul>
    );
};