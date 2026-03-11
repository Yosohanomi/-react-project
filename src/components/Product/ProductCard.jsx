import filledStar from "../../images/products/star_filled.png";
import halfStar from "../../images/products/star_half.png";
import styles from "./Product.module.css";
import { Stars } from "../Stars/Stars";
import { GrayBtn } from "../../components/GrayBtn/GrayBtn";




export const ProductCard = ({ isHidden, product }) => {
  const {image, name, price, _id, info} = product;
  return (
    <>
        <li className={`${styles.products__item} ${isHidden}`}>
          <img
            src={image}
            alt="popular coffee"
            className={styles.products__img}
          />
          <Stars star={filledStar} star2={filledStar} star3={halfStar} />
          <h3 className={styles.products__item__title}>{name}</h3>
          <p className={styles.products__item__text}>
            {info}
          </p>
          <p className={styles.products__price}>{price.value}</p>
          <GrayBtn text="Детальніше" />
        </li>
    </>
  );
};

