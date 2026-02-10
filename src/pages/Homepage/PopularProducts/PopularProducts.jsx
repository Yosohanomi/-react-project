import { ProductCard } from '../../../components/Product/ProductCard';
import { Container } from '../../../components/Container/Container';
import { GrayBtn } from '../../../components/GrayBtn/GrayBtn';
import right from '../../../images/arrows/right.png';
import styles from './PopularProducts.module.css'
import left from '../../../images/arrows/left.png';
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn';
export const PopularProducts = () => {
    return <>
        <section className={styles.products}>
        <Container>
            <div className={styles.products__thumb}>
                    <h2 className={styles.products__title}>Популярні товари</h2>
                    <GrayBtn text='Всі товари' secondClass={styles.products__btn}/>
                </div>
                <ArrowBtn imgUrl={left} secondClass={styles.products__left}/>
                <ul className={styles.products__list}>
                    <ProductCard/>
                    <ProductCard isHidden={styles.isHidden}/>
                    <ProductCard isHidden={styles.isHidden__Desktop}/>
                    <ProductCard isHidden={styles.isHidden__Desktop}/>
                </ul>
                <ArrowBtn imgUrl={right} secondClass={styles.products__right}/>
                <div className="pagination"></div>
        </Container>
        </section>
    </>
}