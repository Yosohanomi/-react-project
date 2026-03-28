import filledStar from "../../images/products/star_filled.png";
import halfStar from "../../images/products/star_half.png";
import styles from "./Product.module.css";
import { Stars } from "../Stars/Stars";
import { GrayBtn } from "../../components/GrayBtn/GrayBtn";
import { Link } from "react-router-dom";

export const ProductCard = ({ isHidden, product }) => {
  if (!product) return null;
  
  const { image, name, price, info, rate, produced, _id } = product;

  return (
    <li className={`${styles.products__item} ${isHidden}`}>
      <img
        src={image}
        alt={name}
        className={styles.products__img}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
        }}
      />
      <Stars 
        star={filledStar} 
        star2={filledStar} 
        star3={halfStar} 
        // rating={rate} 
      />
      <h3 className={styles.products__item__title}>{name}</h3>
      <p className={styles.products__item__text}>{info}</p>
      <p className={styles.products__price}>{price} грн</p>
      <GrayBtn><Link to={`/product/${_id}`}>Детальніше</Link></GrayBtn>
    </li>
  );
};