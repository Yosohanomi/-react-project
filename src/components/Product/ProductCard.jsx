import filledStar from "../../images/products/star_filled.png";
import halfStar from "../../images/products/star_half.png";
import styles from "./Product.module.css";
import { Stars } from "../Stars/Stars";
import { GrayBtn } from "../../components/GrayBtn/GrayBtn";
import productCoffeeTest from "../../images/products/product-coffee.png";
import { Component } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://695054968531714d9bd0565f.mockapi.io";

export const ProductCard = ({ product, isHidden }) => {
  return (
    <>
      {product?.map((item, index) => (
        <li key={index} className={`${styles.products__item} ${isHidden}`}>
          <img
            src={productCoffeeTest}
            alt="popular coffee"
            className={styles.products__img}
          />
          <Stars star={filledStar} star2={filledStar} star3={halfStar} />
          <h3 className={styles.products__item__title}>{item.name}</h3>
          <p className={styles.products__item__text}>
            Суміш арабіки та робусти з насиченим смаком і нотами темного шоколаду.
          </p>
          <p className={styles.products__price}>280</p>
          <GrayBtn text="Детальніше" />
        </li>
      ))}
    </>
  );
};

export class ProductCardClass extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/students"); 
      console.log(response.data);
      this.setState({ products: response.data });
    } catch (error) {
      console.error("Помилка завантаження:", error);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <ul>
        {products.length > 0 ? ( 
          <ProductCard product={products} isHidden="" /> 
        ) : (
          <p>Завантаження...</p>
        )}
      </ul>
    );
  }
}