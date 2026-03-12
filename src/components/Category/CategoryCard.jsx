import styles from './CategoryCard.module.css';

export const CategoryCard = ({ category, secondClass, isHidden }) => {
    if (!category) return null;

    return (
        <li className={`${styles.category__item} ${secondClass || ''} ${isHidden || ''}`}>
            <img 
                src={category.image} 
                alt={category.name} 
                className={styles.category__img} 
            />
            <h3 className={styles.category__item__title}>{category.name}</h3>
            <p className={styles.category__text}>{category.description}</p>
        </li>
    );
};