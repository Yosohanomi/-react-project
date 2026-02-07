import styles from './Logo.module.css'
import coffeeLogo from '../../images/header-images/coffee_maker.png';
export const Logo = () => {
    return <>
    <a href="#" className={styles.logo}>
                    <img src={coffeeLogo} alt="coffeeLogo" className={styles.logo__image} />
                    Зернятко
    </a>
    </>
}