import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CategoryCard } from "../../components/Category/CategoryCard";
import { Container } from "../../components/Container/Container";
import styles from './CategoriesList.module.css'
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { categoriesData } from "../../data/categoriesData";

export const CategoriesList = () => {
    const [showAll, setShowAll] = useState(false);
    const categories = categoriesData;
    const handleToggle = () => {
        setShowAll(!showAll);
    };

    const buttonText = showAll ? "Сховати" : "Показати більше";

    return (
        <>
            <Header/>
            <main>
                <section className={styles.categories}>
                    <Container>
                        <h2 className={styles.categories__title}>Категорії</h2>
                        
                        <ul className={styles.categories__list}>
                            {categories.map((category, index) => (
                                <CategoryCard 
                                    key={category.id}
                                    category={category}
                                    secondClass={styles.categories__item}
                                    isHidden={!showAll && index >= 4 ? styles.isHidden : ''}
                                />
                            ))}
                        </ul>
                        
                        <YellowBtn 
                            text={buttonText}
                            secondClass={styles.categories__btn}
                            openModal={handleToggle}
                        />
                    </Container>
                </section>
            </main>
            <Footer/>
        </>
    );
};