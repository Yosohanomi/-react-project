import styles from './Header.module.css';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { YellowBtn } from '../YellowBtn/YellowBtn';
import { GrayBtn } from '../GrayBtn/GrayBtn';
import shoppingCart from '../../images/header-images/shopping_cart.png';


export const Header = () => {
    console.log(styles);
    return <>
        <header className={styles.header}>
        <Container>
            <Logo/>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li className={styles.header__item}><a href="#" className={styles.header__link}>Головна</a></li>
                        <li className={styles.header__item}><a href="#" className={styles.header__link}>Товари</a></li>
                        <li className={styles.header__item}><a href="#" className={styles.header__link}>Категорії</a></li>
                    </ul>
                </nav>
                <div className={styles.header__thumb}>
                    <GrayBtn text='Вхід'/>
                    <YellowBtn text='Реєстрація'/>
                    <button className={styles.header__btn}>
                        <img src={shoppingCart} alt="shopping cart" className={styles.header__img} />
                    </button>
                </div>
        </Container>
        </header>
    </>
}