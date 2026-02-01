export const coffeeLogo = '../../images/header-images/coffee_maker.png';
export const shoppingCart = '../../images/header-images/shopping_cart.png'

export const Header = () => {
    return <>
        <header className="header">
            <a href="#" className="header__link">
                <img src={coffeeLogo} alt="coffeeLogo" className="header__logo" />
            </a>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">Головна</li>
                    <li className="header__item">Товари</li>
                    <li className="header__item">Категорії</li>
                </ul>
            </nav>
            <div className="header__thumb">
                <button className="header__btn enter__btn">Вхід</button>
                <button className="header__btn register__btn">Реєстрація</button>
                <button className="header__btn shopping-cart">
                    <img src="#" alt="shopping cart" className="header__img" />
                </button>
            </div>
        </header>
    </>
}