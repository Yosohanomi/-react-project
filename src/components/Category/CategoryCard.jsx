import categoryImgTest from '../../images/categories/melena-coffee.png'
import styles from './CategoryCard.module.css';
export const CategoryCard = ({isHidden, secondClass}) => {
    return <>
        <li className={`${styles.category__item} ${isHidden} ${secondClass}`}>
            <img src={categoryImgTest} alt="coffee melene" className={styles.category__img} />
            <h3 className={styles.category__item__title}>Кава в зернах</h3>
            <p className={styles.category__text}>Арабіка, робуста, бленди та моносорти для різних способів приготування.</p>
        </li>
    </>
}