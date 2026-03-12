import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ProductCard } from "../../components/Product/ProductCard.jsx";
import { Sidebar } from "./Sidebar/Sidebar";
import { Container } from "../../components/Container/Container";
import styles from './ProductsPage.module.css'
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { ProductList } from "../../components/ProductList/ProductList.jsx";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductsContext";

export const ProductsPage = () => {
    const { products } = useContext(ProductContext);
    const itemsPerPage = 9;

    return (
        <>
            {/* <Header/> */}
            <section className={styles.products}>
                <Container>
                    <h3 className={styles.products__title}>Всі товари</h3>
                    <div className={styles.products__thumb}>
                        <Sidebar/>
                        <ProductList itemsPerPage={itemsPerPage} />
                    </div>
                    
                    {products.length > itemsPerPage && (
                        <YellowBtn 
                            text="Показати більше" 
                            secondClass={styles.products__btn}
                        />
                    )}
                </Container>
            </section>
            {/* <Footer/> */}
        </>
    );
};