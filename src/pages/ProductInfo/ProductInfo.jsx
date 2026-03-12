import { useContext } from "react";
import styles from "./ProductInfo.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Container } from "../../components/Container/Container";
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import arrow from "../../images/productInfo/Vector.png";
import { Stars } from "../../components/Stars/Stars";
import { GrayBtn } from "../../components/GrayBtn/GrayBtn";
import fullStar from "../../images/products/star_filled.png";
import halfStar from "../../images/products/star_half.png";
import { ProductComment } from "./ProductComment/ProductComment";
import { ProductContext } from "../../context/ProductsContext/ProductsContext";

export const ProductInfo = () => {
  const { selectedProduct } = useContext(ProductContext);

  // Якщо товар не вибрано, показуємо заглушку
  if (!selectedProduct) {
    return (
      <main>
        <section className={styles.product} id="product-info">
          <Container>
            <div className={styles.placeholder}>
              <p>Оберіть товар для перегляду детальної інформації</p>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  const { image, name, price, info, category } = selectedProduct;
  const priceValue = price?.value || price || '0';

  return (
    <>
      {/* <Header /> */}
      <main>
        <section className={styles.product} id="product-info"> {/* Додаємо id */}
          <Container>
            <div className={styles.product__thumb}>
              <p className={styles.product__text}>Всі товари</p>
              <img src={arrow} alt="arrow" className={styles.product__arrow} />
              <p className={styles.product__text}>{category || "Категорія"}</p>
              <img src={arrow} alt="arrow" className={styles.product__arrow} />
              <p className={`${styles.product__text} ${styles.currentProduct}`}>
                {name}
              </p>
            </div>

            <div className={styles.product__container}>
              <img
                src={image}
                alt={name}
                className={styles.product__img}
              />
              <div className={styles.desktop__thumb}>
                <div className={styles.product__thumbInfo}>
                  <div className={styles.product__thumbDesktop}>
                    <p className={styles.product__text}>Всі товари</p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles.product__arrow}
                    />
                    <p className={styles.product__text}>
                      {category || "Категорія"}
                    </p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles.product__arrow}
                    />
                    <p
                      className={`${styles.product__text} ${styles.currentProduct}`}
                    >
                      {name}
                    </p>
                  </div>
                  <h2 className={styles.product__title}>{name}</h2>
                  <div className={styles.product__priceThumb}>
                    <p className={styles.products__price}>{priceValue} грн</p>
                    <Stars star={fullStar} star2={fullStar} star3={halfStar} />
                    <p className={styles.products__priceInfo}>(4.5)</p>
                    <p className={styles.products__priceInfo__comments}>
                      &bull; 10 відгуків
                    </p>
                  </div>
                  <p className={styles.products__info}>
                    {info || "Опис товару відсутній"}
                  </p>
                </div>
                <div className={styles.product__btn__thumb}>
                  <YellowBtn
                    text="Додати в кошик"
                    secondClass={styles.product__btn__cart}
                  />
                  <input
                    type="text"
                    className={styles.filter}
                    placeholder="1"
                  />
                </div>
                <GrayBtn
                  text="Купити зараз"
                  secondClass={styles.product__btn_buy}
                />
                <p className={styles.product__moreInfo}>
                  Безкоштовна доставка для замовлень від 1000 грн
                </p>
              </div>
            </div>
          </Container>
        </section>

        <ProductComment />
      </main>
      {/* <Footer /> */}
    </>
  );
};