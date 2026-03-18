import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ProductCard } from "../../components/Product/ProductCard.jsx";
import { Sidebar } from "./Sidebar/Sidebar";
import { Container } from "../../components/Container/Container";
import styles from './ProductsPage.module.css'
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { ProductList } from "../../components/ProductList/ProductList.jsx";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductsContext";
import { EmptyDiv } from "../../components/EmptyDiv/EmptyDiv.jsx";

export const ProductsPage = () => {
    const { products, loadMore } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const handleLoadMore = () => {
        setCurrentPage(prev => prev + 1);
        if (loadMore) {
            loadMore(); 
        }
    };

    return (
        <>
            <Header/>
            <section className={styles.products}>
                <Container>
                    <h3 className={styles.products__title}>Всі товари</h3>
                    <div className={styles.products__thumb}>
                        <Sidebar/>
                        {products.length > 0 ? 
                        <ProductList 
                        secondClass={styles.products__list} 
                        itemsPerPage={itemsPerPage} 
                        currentPage={currentPage}
                    /> : <EmptyDiv secondClass={styles.emptyDiv} text="За вашим запитом не знайдено жодних товарів, спробуйте змінити фільтри, або скинути їх" btnText="Скинути фільтри"/>}
                    </div>
                    
                    {products.length > currentPage * itemsPerPage && (
                        <YellowBtn 
                            text="Показати більше" 
                            secondClass={styles.products__btn}
                            onClick={handleLoadMore}
                        />
                    )}
                </Container>
            </section>
            <Footer/>
        </>
    );
};