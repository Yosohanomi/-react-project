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

import productImg from "../../images/productInfo/product.png";

export const ProductInfo = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <section className={styles.product}>
          <Container>
            <div className={styles.product__thumb}>
              <p className={styles.product__text}>Всі товари</p>
              <img src={arrow} alt="arrow" className={styles.product__arrow} />
              <p className={styles.product__text}>Кавоварки та аксесуари</p>
              <img src={arrow} alt="arrow" className={styles.product__arrow} />
              <p className={`${styles.product__text} ${styles.currentProduct}`}>
                Мока-пот Bialetti (3 порції)
              </p>
            </div>

            <div className={styles.product__container}>
              <img
                src={productImg}
                alt="coffee"
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
                      Кавоварки та аксесуари
                    </p>
                    <img
                      src={arrow}
                      alt="arrow"
                      className={styles.product__arrow}
                    />
                    <p
                      className={`${styles.product__text} ${styles.currentProduct}`}
                    >
                      Мока-пот Bialetti (3 порції)
                    </p>
                  </div>
                  <h2 className={styles.product__title}>
                    Мока-пот Bialetti (3 порції)
                  </h2>
                  <div className={styles.product__priceThumb}>
                    <p className={styles.products__price}>980 грн</p>
                    <Stars star={fullStar} star2={fullStar} star3={halfStar} />
                    <p className={styles.products__priceInfo}>(4.5)</p>
                    <p className={styles.products__priceInfo__comments}>
                      &bull; 10 відгуків
                    </p>
                  </div>
                  <p className={styles.products__info}>
                    Мока-пот Bialetti — це легендарна італійська кавоварка, що
                    вже понад 80 років символізує домашній еспресо. Завдяки
                    класичній восьмигранній формі та високоякісному алюмінію,
                    вона рівномірно розподіляє тепло та розкриває повний аромат
                    кави. Ця модель розрахована на 3 порції (близько 150 мл
                    готового напою), що робить її ідеальним вибором для
                    невеликої родини або ранкової кави з друзями. Простий
                    принцип роботи дозволяє отримати насичений еспресо навіть
                    без електрики чи великих кавомашин.
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
