import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CategoryCard } from "../../components/Category/CategoryCard";
import { Container } from "../../components/Container/Container";
import styles from './CategoriesList.module.css'
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";

export const CategoriesList = () => {
    return <>
        <Header/>
        <main>
            <section className={styles.categories}>
                <Container>
                    <h2 className={styles.categories__title}>Категорії</h2>
                    <ul className={styles.categories__list}>
                        <CategoryCard secondClass={styles.categories__item}/>
                        <CategoryCard secondClass={styles.categories__item}/>
                        <CategoryCard secondClass={styles.categories__item}/>
                        <CategoryCard secondClass={styles.categories__item}/>
                        <CategoryCard isHidden={styles.isHidden} secondClass={styles.categories__item}/>
                        <CategoryCard isHidden={styles.isHidden} secondClass={styles.categories__item}/>
                    </ul>
                    <YellowBtn text='Показати більше' secondClass={styles.categories__btn}/>
                </Container>
            </section>
        </main>
        <Footer/>
    </>
};