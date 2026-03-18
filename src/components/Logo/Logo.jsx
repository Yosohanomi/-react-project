import styles from './Logo.module.css'
import coffeeLogo from '../../images/header-images/coffee_maker.png';
import { Link } from 'react-router-dom';
export const Logo = ({secondClass}) => {
    return <>
    <Link to="/" className={`${styles.logo} ${secondClass}`}>
                    <img src={coffeeLogo} alt="coffeeLogo" className={styles.logo__image} />
                    Зернятко
    </Link>
    </>
}