import { CategoryCard } from '../../../components/Category/CategoryCard'
import { Container } from '../../../components/Container/Container'
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn'
import { GrayBtn } from '../../../components/GrayBtn/GrayBtn'
import styles from './PopularCategories.module.css'
import right from '../../../images/arrows/right.png'
import left from '../../../images/arrows/left.png'
export const PopularCategories = () => {
    return <>
        <section className={styles.categories}>
            <Container>
                <div className={styles.category__thumb}>
                    <h2 className={styles.category__title}>Популярні категорії</h2>
                    <GrayBtn text="Всі категорії" secondClass={styles.category__btn}/>
                    <button className={styles.category__btn}></button>
                </div>

                <ArrowBtn imgUrl={left} secondClass={styles.category__left}/>

                <ul className={styles.category__list}>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                </ul>
                
                <ArrowBtn imgUrl={right} secondClass={styles.category__right}/>

                <div className={styles.pagination}></div>
            </Container>
        </section>
    </>
}