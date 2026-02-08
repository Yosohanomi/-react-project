import { Container } from "../Container/Container";
import { GrayBtn } from "../GrayBtn/GrayBtn";
import { Input } from "../Input/Input";
import { Logo } from "../Logo/Logo";
import styles from './Footer.module.css'
import facebook from '../../images/footer/facebook.png'
import instagram from '../../images/footer/instagram.png'
import twitter from '../../images/footer/x.png'
import youtube from '../../images/footer/youtube.png'

export const Footer = () => {
    return <>
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__thumb}>
                <Logo/>
                    <div className={styles.footer__menu}>
                        <h5 className={styles.footer__menu__title}>Меню</h5>
                        <a href="#" className={styles.footer__menu__text}>Головна</a>
                        <a href="#" className={styles.footer__menu__text}>Товари</a>
                        <a href="#" className={styles.footer__menu__text}>Категорії</a>
                    </div>
                    <div className={styles.footer__subscribe}>
                        <h5 className={styles.footer__subscribe__title}>Підписатися</h5>
                        <p className={styles.footer__text}>Приєднуйтесь до нашої розсилки, щоб бути в курсі новин та акцій.</p>
                        <div className={styles.footer__input__thumb}>
                            <Input secondClass={styles.footer__input} type="email" name="input" placeholder="Введіть ваш email"/>
                            <GrayBtn text="Підписатися" secondClass={styles.footer__input__btn}/>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__addres__thumb}>
                    <p className={styles.footer__text__rights}>© 2025 Зернятко. Всі права захищені.</p>
                    <div className={styles.footer__btn__thumb}>
                        <button className={styles.footer__btn}>
                            <img src={facebook} alt="facebook" className={styles.footer__img} />
                        </button>

                        <button className={styles.footer__btn}>
                            <img src={instagram} alt="instagram" className={styles.footer__img} />
                        </button>

                        <button className={styles.footer__btn}>
                            <img src={twitter} alt="x" className={styles.footer__img} />
                        </button>

                        <button className={styles.footer__btn}>
                            <img src={youtube} alt="youtube" className={styles.footer__img} />
                        </button>
                    </div>
                    
                </div>
            </Container>
        </footer>
    </>
}