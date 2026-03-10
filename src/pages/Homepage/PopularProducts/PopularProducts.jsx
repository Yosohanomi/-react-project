import { ProductCard } from '../../../components/Product/ProductCard';
import { Container } from '../../../components/Container/Container';
import { GrayBtn } from '../../../components/GrayBtn/GrayBtn';
import right from '../../../images/arrows/right.png';
import styles from './PopularProducts.module.css'
import left from '../../../images/arrows/left.png';
import { ProductList } from '../../../components/ProductList/ProductList';
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn';
import { useContext } from "react";
import { ProductContext } from '../../../context/ProductsContext/ProductsContext';

export const PopularProducts = () => {
    const { page, setPage } = useContext(ProductContext);

    const onRight = () => {
        setPage(prevPage => prevPage + 1);
    }

    const onLeft = () => {
        setPage(prevPage => Math.max(1, prevPage - 1));
    }

    return <>
        <section className={styles.products}>
            <Container>
                <div className={styles.products__thumb}>
                    <h2 className={styles.products__title}>Популярні товари</h2>
                    <GrayBtn text='Всі товари' secondClass={styles.products__btn}/>
                </div>
                <ArrowBtn changePage={onRight} imgUrl={left} secondClass={styles.products__left}/>
                <ProductList/>
                <ArrowBtn changePage={onLeft} imgUrl={right} secondClass={styles.products__right}/>
                <div className="pagination">Page: {page}</div>
            </Container>
        </section>
    </>
}