import { ProductCard } from '../../../components/Product/ProductCard';
import { Container } from '../../../components/Container/Container';
import { GrayBtn } from '../../../components/GrayBtn/GrayBtn';
import styles from './PopularProducts.module.css'
export const right = '../../images/arrows/right.png'
export const left = '../../images/arrows/left.png'
export const PopularProducts = () => {
    return <>
        <section className={styles.products}>
        <Container>
            <div className={styles.products__thumb}>
                    <h2 className={styles.products__title}>Популярні товари</h2>
                    <GrayBtn text='Всі товари' secondClass={styles.products__btn}/>
                </div>

                {/* <button className="products__btn-arrow right-swipe">
                    <img src={right} alt="right arrow" className="products__img-right" />
                </button> */}

                <ul className={styles.products__list}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </ul>

                <button className="products__btn-arrow left-swipe">
                    <img src={left} alt="left arrow" className="products__img-left" />
                </button>
                <div className="pagination"></div>
        </Container>
        </section>
    </>
}