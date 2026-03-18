import { useState, useEffect } from 'react';
import { CategoryCard } from '../../../components/Category/CategoryCard';
import { Container } from '../../../components/Container/Container';
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn';
import { GrayBtn } from '../../../components/GrayBtn/GrayBtn';
import styles from './PopularCategories.module.css';
import right from '../../../images/arrows/right.png';
import left from '../../../images/arrows/left.png';
import { categoriesData } from '../../../data/categoriesData';
import { Link } from 'react-router-dom';

export const PopularCategories = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const categories = categoriesData;
    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setItemsPerPage(1);
            } else if (width < 1440) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

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
                        secondClass={styles.category__btn}
                    ><Link to="/categories">Всі категорії</Link></GrayBtn>
                </div>

                <ArrowBtn 
                    imgUrl={left} 
                    secondClass={styles.category__left}
                    changePage={handleNext}
                    disabled={currentPage === 1}
                />

                <ul className={styles.category__list}>
                    {visibleCategories.map((category) => (
                        <CategoryCard 
                        secondClass={styles.category__card}
                            key={category.id}
                            category={category}
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