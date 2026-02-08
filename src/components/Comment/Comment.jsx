import { Stars } from "../Stars/Stars"
import filledStar from '../../images/products/star_filled.png'
import styles from './Comment.module.css'
export const Comment = ({text, author, product}) => {
    return <li className={styles.comments__item}>         
                    <Stars star={filledStar} star2={filledStar} star3={filledStar}/>
                    <p className={styles.comments__text}>{text}</p>
                    <div className={styles.comments__thumb}>
                        <p className={styles.comments__author}>{author}</p>
                        <p className={styles.comments__product}>{product}</p>
                    </div>
                    
                </li>
}