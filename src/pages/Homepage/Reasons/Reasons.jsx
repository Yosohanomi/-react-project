import { Container } from "../../../components/Container/Container";
import styles from './Reasons.module.css'
import sun from '../../../images/reasons/sun.png';
import cup from '../../../images/reasons/cup.png';
import calendar from '../../../images/reasons/calendar.png';

export const Reasons = () => {
    return <>
        <section className={styles.reasons}>
            <Container>
                <h2 className={styles.reasons__title}>Чому варто обрати Зернятко?</h2>
                <ul className={styles.reasons__list}>
                    <li className={styles.reasons__item}>
                        <img src={sun} alt="sun" className={styles.reasons__img} />
                        <h3 className={styles.reasons__item__title}>Смак і якість</h3>
                        <p className={styles.reasons__text}>Лише відібрані кавові зерна та товари від перевірених виробників.</p>
                    </li>
                    <li className={styles.reasons__item}>
                        <img src={cup} alt="cup" className={styles.reasons__img} />
                        <h3 className={styles.reasons__item__title}>Усе для кавового ритуалу</h3>
                        <p className={styles.reasons__text}>Від турки до кавомолки — ми зібрали повний набір для ідеальної чашки.</p>
                    </li>
                    <li className={styles.reasons__item}>
                        <img src={calendar} alt="calendar" className={styles.reasons__img} />
                        <h3 className={styles.reasons__item__title}>Натхнення щодня</h3>
                        <p className={styles.reasons__text}>Кава, яка підкреслить твій настрій та стане головною частиною ранкової звички.</p>
                    </li>
                </ul>
            </Container>
        </section>
    </>
}