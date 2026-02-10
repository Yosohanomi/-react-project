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
        <div className={styles.header__inner}>
        <Logo/>
                <input type="checkbox" id="toggle" className={styles.burger__input}/>
                <label for="toggle" className={styles.burger__label}>
                    <span className={styles.toggle__btn}></span>
                </label>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li className={styles.header__item}><a href="#" className={styles.header__link}>Головна</a></li>
                        <li className={styles.header__item}><a href="#" className={styles.header__link}>Товари</a></li>
                        <li className={styles.header__item}><a href="#" className={styles.header__link}>Категорії</a></li>
                    </ul>
                </nav>
                {/* MOBILE MENU */}
                <div class={styles.mobile__menu}>
                                    <nav class={styles.mobile__nav}>
                                    <ul className={styles.mobile__list}>
                        <li className={styles.mobile__item}><a href="#" className={styles.mobile__link}>Головна</a></li>
                        <li className={styles.mobile__item}><a href="#" className={styles.mobile__link}>Товари</a></li>
                        <li className={styles.mobile__item}><a href="#" className={styles.mobile__link}>Категорії</a></li>
                    </ul>
                    </nav>
                    <div className={styles.mobile__thumb}>
                        <GrayBtn text='Вхід'/>
                        <YellowBtn text='Реєстрація'/>
                    </div>
                </div>

                <div className={styles.footer__cart}>
                <div className={styles.header__thumb}>
                    <GrayBtn text='Вхід'/>
                    <YellowBtn text='Реєстрація'/>
                    
                    
                </div>
                    <button className={styles.header__btn}>
                        <img src={shoppingCart} alt="shopping cart" className={styles.header__img} />
                    </button>
                </div>
        
            </div>
        </Container>
        </header>
    </>
}