import { Container } from "../../components/Container/Container";
import styles from "./Order.module.css";
import { Form } from "../../components/Form/Form";
import { Cart } from "../../components/Cart/Cart";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import product from "../../images/Cart/cartProduct.png";
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";

export const Order = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.order}>
          <Container>
            <h2 className={styles.order__title}>Оформити замовлення</h2>
            <div className={styles.big__thumb}>
              <div className={styles.first__element}>
                <h3 className={styles.thumb__title}>Товари</h3>

                <ul className={styles.first__list}>
                  <Cart
                    title="Еспресо Класік"
                    imgUrl={product}
                    price="280 грн"
                  />
                  <Cart
                    title="Термочашка Зернятко 350 мл"
                    imgUrl={product}
                    price="420 грн"
                  />
                  <Cart
                    title="Мока-пот Bialetti (3 порції)"
                    imgUrl={product}
                    price="980 грн"
                  />
                  <Cart
                    title="Кавомолка ручна SteelPro"
                    imgUrl={product}
                    price="670 грн"
                  />
                </ul>

                <div className={styles.cash}>
                  <p className={styles.cash__text}>Проміжний підсумок</p>
                  <p className={styles.cash__price}>2350 грн</p>
                </div>

                <div className={styles.cash}>
                  <p className={styles.cash__text}>Доставка</p>
                  <p className={styles.cash__price}>0 грн</p>
                </div>

                <div className={`${styles.cash} ${styles.cash__last}`}>
                  <p className={`${styles.cash__text} ${styles.summ}`}>
                    Всього
                  </p>
                  <p className={`${styles.cash__price} ${styles.summ}`}>
                    2350 грн
                  </p>
                </div>
              </div>

              <div className={styles.second__element}>
                <h3 className={styles.thumb__title}>Особиста інформація</h3>
                <Form />
                <div className={styles.comment__textarea}>
                  <label htmlFor="textarea" className={styles.label}>
                    Коментар
                  </label>
                  <textarea
                    id="textarea"
                    className={styles.second__comment}
                    placeholder="Введіть ваш коментар"
                  ></textarea>
                </div>

                <YellowBtn
                  text="Оформити замовлення"
                  secondClass={styles.order__btn}
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
