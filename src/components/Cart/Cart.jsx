import styles from './Cart.module.css'
import { Stars } from '../Stars/Stars'
import filledStar from '../../images/products/star_filled.png'
import halfStar from '../../images/products/star_half.png'
import trash from '../../images/Cart/trash.png'

export const Cart =({title, imgUrl, price}) => {
    return <li className={styles.cart__item}>
        <img src={imgUrl} alt="product" className={styles.cart__img} />
        <div className={styles.cart__thumb}>
            <p className={styles.cart__text}>{title}</p>
            <Stars star={filledStar} star2={filledStar} star3={halfStar}/>
        </div>
        <p className={styles.cart__price}>{price}</p>
        <button type='button' className={styles.cart__btn}>
            <img src={trash} alt="trash" className={styles.cart__trash}/>
        </button>
    </li>
}