import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { ProductContext } from '../../context/ProductsContext/ProductsContext';
import styles from "./ProductInfoPage.module.css";
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
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export const ProductInfo = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(true);
    
    if (products && products.length > 0 && productId) {
      const foundProduct = products.find(p => p._id === productId);
      setProduct(foundProduct || null);
      setIsLoading(false);
    } else if (products && products.length === 0) {

      setIsLoading(true);
    } else if (!productId) {
      setIsLoading(false);
      setProduct(null);
    }
  }, [products, productId]);
  if (isLoading) {
    return <NotFoundPage />;
  }

  if (!product) {
    return (
      <>
        <Header />
        <Container>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Товар не знайдено</h2>
            <p>Можливо, товар було видалено або посилання неправильне.</p>
          </div>
        </Container>
        <Footer />
      </>
    );
  }



  return (
    <>
      <Header />
      <main>
        <section className={styles.product}>
          <Container>
            <div className={styles.product__thumb}>
              <p className={styles.product__text}>Всі товари</p>
              <img src={arrow} alt="arrow" className={styles.product__arrow} />
              <p className={styles.product__text}>Кавоварки та аксесуари</p>
              <img src={arrow} alt="arrow" className={styles.product__arrow} />
              <p className={`${styles.product__text} ${styles.currentProduct}`}>
                {product.name}
              </p>
            </div>

            <div className={styles.product__container}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.product__img}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
              <div className={styles.desktop__thumb}>
                <div className={styles.product__thumbInfo}>
                  <div className={styles.product__thumbDesktop}>
                    <p className={styles.product__text}>Всі товари</p>
                    <img src={arrow} alt="arrow" className={styles.product__arrow} />
                    <p className={styles.product__text}>Кавоварки та аксесуари</p>
                    <img src={arrow} alt="arrow" className={styles.product__arrow} />
                    <p className={`${styles.product__text} ${styles.currentProduct}`}>
                      {product.name}
                    </p>
                  </div>
                  <h2 className={styles.product__title}>{product.name}</h2>
                  <div className={styles.product__priceThumb}>
                    <p className={styles.products__price}>{product.price} грн</p>
                    <Stars star={fullStar} star2={fullStar} star3={halfStar} />
                    <p className={styles.products__priceInfo}>({product.rate || 4.5})</p>
                    <p className={styles.products__priceInfo__comments}>
                      &bull; 10 відгуків
                    </p>
                  </div>
                  <p className={styles.products__info}>
                    {product.description || "Опис відсутній"}
                  </p>
                </div>
                <div className={styles.product__btn__thumb}>
                  <YellowBtn
                    text="Додати в кошик"
                    secondClass={styles.product__btn__cart}
                  />
                  <input type="text" className={styles.filter} placeholder="1" />
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
      <Footer />
    </>
  );
};