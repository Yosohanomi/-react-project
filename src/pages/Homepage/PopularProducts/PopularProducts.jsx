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
    const { page, setPage, products } = useContext(ProductContext);
    const [itemsPerPage, setItemsPerPage] = useState(4); // за замовчуванням десктоп

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setItemsPerPage(1); // телефон: 1 товар
            } else if (width < 1440) {
                setItemsPerPage(2); // планшет: 2 товари
            } else {
                setItemsPerPage(4); // десктоп: 4 товари
            }
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    // Скидаємо на першу сторінку при зміні itemsPerPage
    useEffect(() => {
        setPage(1);
    }, [itemsPerPage, setPage]);

    const onRight = () => {
        setPage(prevPage => prevPage + 1);
    }

    const onLeft = () => {
        setPage(prevPage => Math.max(1, prevPage - 1));
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
                    disabled={page === 1}
                />
                
                <ProductList itemsPerPage={itemsPerPage} />
                
                <ArrowBtn 
                    changePage={onLeft} 
                    imgUrl={right} 
                    secondClass={styles.products__right}
                    disabled={page === totalPages}
                />
                
                <div className={styles.pagination}>
                    {page} / {totalPages}
                </div>
            </Container>
        </section>
    );
}