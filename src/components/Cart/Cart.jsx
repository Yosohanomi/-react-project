import styles from './Cart.module.css'
import { Stars } from '../Stars/Stars'
import filledStar from '../../images/products/star_filled.png'
import halfStar from '../../images/products/star_half.png'
import trash from '../../images/Cart/trash.png'

export const Cart = ({ product, onRemove }) => {
    if (!product) return null;
  
    const { image, name, price, rate, _id } = product;
    
    const handleRemoveClick = (e) => {
        e.stopPropagation();
        onRemove(_id);
    };
    
    return (
        <li className={styles.cart__item}>
            <div className={styles.cart__space}>
                <img src={image} alt="product" className={styles.cart__img} />
                <div className={styles.cart__info}>
                    <div className={styles.cart__thumb}>
                        <p className={styles.cart__text}>{name}</p>
                        <Stars secondClass={styles.isHidden} star={filledStar} star2={filledStar} star3={halfStar}/>
                        <div className={styles.star__thumb}>
                            <img src={filledStar} alt="filledStar" className={styles.star} />
                            <p className={styles.cart__amount}>{rate}</p>
                        </div>
                    </div>
                    <p className={styles.cart__price}>{price} грн</p>
                </div>
            </div>
            
            <div className={styles.cart__desktop}>
                <p className={styles.cart__priceDesktop}>{price} грн</p>
                <button 
                    type='button' 
                    className={styles.cart__btn}
                    onClick={handleRemoveClick}
                >
                    <img src={trash} alt="trash" className={styles.cart__trash}/>
                </button>
            </div>
            
        </li>
    )
}