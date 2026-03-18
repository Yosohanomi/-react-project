import styles from './Header.module.css';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { YellowBtn } from '../YellowBtn/YellowBtn';
import { GrayBtn } from '../GrayBtn/GrayBtn';
import shoppingCart from '../../images/header-images/shopping_cart.png';
import { useState } from "react"
import { useEffect } from "react"
import { CartModal } from '../CartModal/CartModal';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=> {
        return ()=> {
            window.removeEventListener("keydown", (e)=>{
                if (e.key === "Escape") {
                    setIsOpen(false)
                }
            })
        }
    }, [isOpen])
    const closeModal =()=> {
        setIsOpen(false) 
    }
    const openModal =()=> {
        setIsOpen(true)
        window.addEventListener("keydown", (e)=>{
            if (e.key === "Escape") {
                setIsOpen(false)
            }
        })
    }
    return <>
        <header className={styles.header}>
        <Container>
        <div className={styles.header__inner}>
        <Logo/>
                <input type="checkbox" id="toggle" className={styles.burger__input}/>
                <label htmlFor="toggle" className={styles.burger__label}>
                    <span className={styles.toggle__btn}></span>
                </label>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li className={styles.header__item}><NavLink to="/" className={styles.header__link}>Головна</NavLink></li>
                        <li className={styles.header__item}><NavLink to="/products" className={styles.header__link}>Товари</NavLink></li>
                        <li className={styles.header__item}><NavLink to="/categories" className={styles.header__link}>Категорії</NavLink></li>
                    </ul>
                </nav>
                {/* MOBILE MENU */}
                <div className={styles.mobile__menu}>
                                    <nav className={styles.mobile__nav}>
                                    <ul className={styles.mobile__list}>
                        <li className={styles.mobile__item}><NavLink to="/" className={styles.header__link}>Головна</NavLink></li>
                        <li className={styles.mobile__item}><NavLink to="/products" className={styles.header__link}>Товари</NavLink></li>
                        <li className={styles.mobile__item}><NavLink to="/categories" className={styles.header__link}>Категорії</NavLink></li>
                    </ul>
                    </nav>
                    <div className={styles.mobile__thumb}>
                    <GrayBtn><Link to="/login">Вхід</Link></GrayBtn>
                    <YellowBtn><Link to="/register">Реєстрація</Link></YellowBtn>
                    </div>
                </div>

                <div className={styles.footer__cart}>
                <div className={styles.header__thumb}>
                    <GrayBtn><Link to="/login">Вхід</Link></GrayBtn>
                    <YellowBtn><Link to="/register">Реєстрація</Link></YellowBtn>
                    
                    
                </div>
                    <button className={styles.header__btn} onClick={openModal}>
                        <img src={shoppingCart} alt="shopping cart" className={styles.header__img} />
                    </button>
                </div>
        
            </div>
        </Container>
        {isOpen && (
            <CartModal closeModal={closeModal}/> 
            )}    
        </header>
    </>
}