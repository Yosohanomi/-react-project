export const coffeeLogo = '../../images/header-images/coffee_maker.png';
export const facebook = '../../images/footer/facebook.png'
export const instagram = '../../images/footer/instagram.png'
export const twitter = '../../images/footer/x.png'
export const youtube = '../../images/footer/youtube.png'

export const Footer = () => {
    return <>
        <footer>
            <div className="footer__thumb">
                <a href="#" className="header__link">
                    <img src={coffeeLogo} alt="coffeeLogo" className="header__logo" />
                </a>
                <div className="footer__menu">
                    <h5 className="footer__menu__title">Меню</h5>
                    <a className="footer__menu__text">Головна</a>
                    <a className="footer__menu__text">Товари</a>
                    <a className="footer__menu__text">Категорії</a>
                </div>
                <div className="footer__subscribe">
                    <h5 className="footer__subscribe__title"></h5>
                    <p className="footer__text"></p>
                    <div className="footer__input-thumb">
                        <input type="email" name="input" placeholder="Введіть ваш email" />
                        <button className="footer__input__btn">Підписатися</button>
                    </div>
                </div>
            </div>
            <div className="footer__addres-thumb">
                <p className="footer__text-rights">© 2025 Зернятко. Всі права захищені.</p>
                <div className="footer__btn-thumb">
                    <button className="footer__btn">
                        <img src={facebook} alt="facebook" className="footer__img" />
                    </button>

                    <button className="footer__btn">
                        <img src={instagram} alt="instagram" className="footer__img" />
                    </button>

                    <button className="footer__btn">
                        <img src={twitter} alt="x" className="footer__img" />
                    </button>

                    <button className="footer__btn">
                        <img src={youtube} alt="youtube" className="footer__img" />
                    </button>
                </div>
                
            </div>
        </footer>
    </>
}