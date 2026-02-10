import filledStar from '../../images/products/star_filled.png'
import halfStar from '../../images/products/star_half.png'
import styles from './Product.module.css'
import { Stars } from '../Stars/Stars'
import { GrayBtn } from '../../components/GrayBtn/GrayBtn'
import productCoffeeTest from '../../images/products/product-coffee.png'

export const ProductCard = ({isHidden}) => {
    return <>
                <li className={`${styles.products__item} ${isHidden}`}>
                    <img src={productCoffeeTest} alt="popular coffee" className={styles.products__img} />
                    <Stars star={filledStar} star2={filledStar} star3={halfStar}/>
                    <h3 className={styles.products__item__title}>Еспресо Класік</h3>
                    <p className={styles.products__item__text}>Суміш арабіки та робусти з насиченим смаком і нотами темного шоколаду.</p>
                    <p className={styles.products__price}>280</p>
                    <GrayBtn text='Детальніше'/>
                </li>
    </>
}