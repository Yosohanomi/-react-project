import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { GrayBtn } from "../../components/GrayBtn/GrayBtn";
import styles from './Cabinet.module.css'
import { Form } from "../../components/Form/Form";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Container } from "../../components/Container/Container";
import { MyOrder } from '../../components/MyOrder/MyOrder'

export const Cabinet = () => {
    return (
      <>
        {/* <Header /> */}
        <main>
          <section className={styles.cabinet}>
            <Container>
              <h2 className={styles.cabinet__title}>Кабінет</h2>
              <div className={styles.big__thumb}>
                <div className={styles.first__element}>
                  <h3 className={styles.thumb__title}>Мої замовлення</h3>
  
                  <ul className={styles.first__list}>
                    <MyOrder date="29.08.2025" number="№1235960" summ="1499 грн" status="Комплектується"/>
                    <MyOrder date="29.08.2025" number="№12359652352" summ="1499 грн" status="Комплектується"/>
                    <MyOrder date="30.08.2025" number="№1235961" summ="2000 грн" status="У процесі"/>
                    <MyOrder date="31.08.2025" number="№1235962" summ="750 грн" status="Виконано"/>
                    <MyOrder date="01.09.2025" number="№1235963" summ="3000 грн" status="Скасовано"/>
                  </ul>
                </div>
  
                <div className={styles.second__element}>
                  <h3 className={styles.second__title}>Особиста інформація</h3>
                  <Form />
                  <YellowBtn
                    text="Зберегти зміни"
                    secondClass={styles.cabinet__btn}
                  />
                </div>
              </div>
              <GrayBtn text="Вийти з кабінету" secondClass={styles.cabinet__leave}/>
            </Container>
          </section>
        </main>
        {/* <Footer /> */}
      </>
    );
  };