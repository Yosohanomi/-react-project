import { ProductCard } from "../Product/ProductCard";
import styles from "./ProductList.module.css";
import { useContext } from "react";
import { ProductContext } from '../../context/ProductsContext/ProductsContext';
import { useMemo } from "react";

export const ProductList = ({ itemsPerPage, currentPage, secondClass}) => {
    const { products } = useContext(ProductContext);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return products.slice(startIndex, startIndex + itemsPerPage);
    };

    const visibleProducts = getCurrentPageItems();

    return (
        <ul className={`${styles.products__list} ${secondClass}`}>
            {visibleProducts.map((product) => (
                <ProductCard 
                    key={product._id}
                    product={product}
                />
            ))}
        </ul>
    );
};