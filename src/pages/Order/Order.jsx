import { useState, useContext } from "react";
import { Container } from "../../components/Container/Container";
import styles from "./Order.module.css";
import { Form } from "../../components/Form/Form";
import { Cart } from "../../components/Cart/Cart";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import product from "../../images/Cart/Placeholder Image.png";
import { EmptyDiv } from "../../components/EmptyDiv/EmptyDiv";
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { ProductContext } from "../../context/ProductsContext/ProductsContext";

export const Order = () => {
  const { products } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState(products.slice(0, 4)); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useState(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleRemoveItem = (productId) => {
      setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
  };

  const totalPrice = cartItems.reduce((sum, product) => {
      return sum + (product.price || 0);
  }, 0);

  return (
    <>
      {/* <Header /> */}
      <main>
        <section className={styles.order}>
          <Container>
            <h2 className={styles.order__title}>Оформити замовлення</h2>
            <div className={styles.big__thumb}>
              <div className={styles.first__element}>
                <h3 className={styles.thumb__title}>Товари</h3>
              {cartItems.length > 0
               ?<>
               <ul className={styles.first__list}>
                  {cartItems.map((item) => (
                    <Cart
                    key={item._id}
                    product={item}
                    onRemove={handleRemoveItem}
                    />
                  ))}
                </ul>

                <div className={styles.cash}>
                  <p className={styles.cash__text}>Проміжний підсумок</p>
                  <p className={styles.cash__price}>{totalPrice} грн</p>
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
                    {totalPrice} грн
                  </p>
                </div> </>: <EmptyDiv secondClass={styles.emptyDiv} text="Ваш кошик порожній, мерщій до покупок!" btnText="До покупок"/>}
                
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
      {/* <Footer /> */}
    </>
  );
};