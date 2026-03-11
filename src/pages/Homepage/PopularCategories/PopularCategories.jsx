import { useState } from 'react';
import { CategoryCard } from '../../../components/Category/CategoryCard';
import { Container } from '../../../components/Container/Container';
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn';
import { GrayBtn } from '../../../components/GrayBtn/GrayBtn';
import styles from './PopularCategories.module.css';
import right from '../../../images/arrows/right.png';
import left from '../../../images/arrows/left.png';
import { categoriesData } from '../../../data/categoriesData';

export const PopularCategories = () => {
    const [currentPage, setCurrentPage] = useState(1);
    console.log(categoriesData);
    const categories = categoriesData;
    console.log(categories);
    
    const itemsPerPage = 3;
    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return categories.slice(startIndex, startIndex + itemsPerPage);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };


    const visibleCategories = getCurrentPageItems();

    return (
        <section className={styles.categories}>
            <Container>
                <div className={styles.category__thumb}>
                    <h2 className={styles.category__title}>Популярні категорії</h2>
                    <GrayBtn 
                        text="Всі категорії" 
                        secondClass={styles.category__btn}
                    />
                </div>

                <ArrowBtn 
                    imgUrl={left} 
                    secondClass={styles.category__left}
                    changePage={handleNext}
                    disabled={currentPage === 1}
                />

                <ul className={styles.category__list}>
                    {visibleCategories.map((category, index) => (
                        <CategoryCard 
                            key={category.id}
                            category={category}
                            isHidden={index >= 1 ? styles.isHidden : ''}
                            secondClass={index >= 2 ? styles.isHidden__Desktop : ''} 
                        />
                    ))}
                </ul>
                
                <ArrowBtn 
                    imgUrl={right} 
                    secondClass={styles.category__right}
                    changePage={handlePrev}
                    disabled={currentPage === totalPages}
                />
                <div className={styles.pagination}>
                    {currentPage} / {totalPages}
                </div>
            </Container>
        </section>
    );
};