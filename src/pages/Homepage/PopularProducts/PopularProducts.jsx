import { useState, useEffect, useContext } from "react";
import { ProductCard } from '../../../components/Product/ProductCard';
import { Container } from '../../../components/Container/Container';
import { GrayBtn } from '../../../components/GrayBtn/GrayBtn';
import right from '../../../images/arrows/right.png';
import styles from './PopularProducts.module.css'
import left from '../../../images/arrows/left.png';
import { ProductList } from '../../../components/ProductList/ProductList';
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn';
import { ProductContext } from '../../../context/ProductsContext/ProductsContext';

export const PopularProducts = () => {
    const { products } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4); 

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setItemsPerPage(1); 
            } else if (width < 1440) {
                setItemsPerPage(2); 
            } else {
                setItemsPerPage(4); 
            }
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [itemsPerPage]);

    const onRight = () => {
        setCurrentPage(prev => prev + 1);
    }

    const onLeft = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    }

    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <section className={styles.products}>
            <Container>
                <div className={styles.products__thumb}>
                    <h2 className={styles.products__title}>Популярні товари</h2>
                    <GrayBtn text='Всі товари' secondClass={styles.products__btn}/>
                </div>
                
                <ArrowBtn 
                    changePage={onRight} 
                    imgUrl={left} 
                    secondClass={styles.products__left}
                    disabled={currentPage === 1}
                />
                
                <ProductList 
                secondClass={styles.products__list}
                    itemsPerPage={itemsPerPage} 
                    currentPage={currentPage} 
                />
                
                <ArrowBtn 
                    changePage={onLeft} 
                    imgUrl={right} 
                    secondClass={styles.products__right}
                    disabled={currentPage === totalPages}
                />
                
                <div className={styles.pagination}>
                    {currentPage} / {totalPages}
                </div>
            </Container>
        </section>
    );
}