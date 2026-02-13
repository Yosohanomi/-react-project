import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ProductCard } from "../../components/Product/ProductCard";
import { Sidebar } from "./Sidebar/Sidebar";
import { Container } from "../../components/Container/Container";
import styles from './ProductsList.module.css'
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";

export const ProductsList = () => {
    return <>
        {/* <Header/> */}
        <main>
            <section className={styles.products}>
                <Container>
                    <h3 className={styles.products__title}>Всі товари</h3>
                    <div className={styles.products__thumb}>
                        <Sidebar/>
                        <ul className={`${styles.products__list}  ${styles.isHidden}`}>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                            <ProductCard isHidden={styles.products__item}/>
                        </ul>
                    </div>
                    <YellowBtn text="Показати більше" secondClass={styles.products__btn}/>
                </Container>
            </section>
        </main>
        {/* <Footer/> */}
    </>
};