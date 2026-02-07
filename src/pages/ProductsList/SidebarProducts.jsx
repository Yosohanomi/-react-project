export const SidebarProducts = () => {
    return <>
        <nav className="sidebar-nav">
            <div className="sidebar-filter">
                <h3 className="sidebar-filter__title">Фільтри</h3>
                <button className="sidebar-filter__btn">Очистити всі</button>
                <p className="sidebar-filter__text">Показано 15 з 100</p>
                <ul className="sidebar-nav__list">
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Усі</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Кава в зернах</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Мелена кава</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Кавоварки та аксесуари</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Гаджети для бариста</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Чашки та термоси</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Фільтри та витратні матеріали</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Капсульна кава</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Розчинна кава</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Сиропи та добавки</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Подарункові набори</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Зберігання кави</a></li>
                    <li className="sidebar-nav__item"><a href="#" className="sidebar-nav__link">Печиво та солодощі до кави</a></li>
                </ul>
            </div>
            
            <div className="sidebar-brands">
                <h3 className="sidebar-brands__title">Бренд/Виробник</h3>
                <button className="sidebar-brands__btn">Очистити</button>
                <ul className="sidebar-brands__list">
                    <li className="sidebar-brands__item">
                        <label for="option1">Lavazza</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>

                    <li className="sidebar-brands__item">
                        <label for="option1">Illy</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>

                    <li className="sidebar-brands__item">
                        <label for="option1">Bialetti</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>
                    <li className="sidebar-brands__item">
                        <label for="option1">Hario</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>
                    <li className="sidebar-brands__item">
                        <label for="option1">Timemore</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>
                    <li className="sidebar-brands__item">
                        <label for="option1">Svit Kavy</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>
                    <li className="sidebar-brands__item">
                        <label for="option1">Foundation Coffee Roasters</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>
                    <li className="sidebar-brands__item">
                        <label for="option1">Rocket Espresso</label>
                        <input type="checkbox" id="option1" name="choice" value="value1"/>
                    </li>
                </ul>
            </div>

            <div className="sidebar-price">
                <h3 className="sidebar-price__title">Ціна</h3>
                <button className="sidebar-price__btn">Очистити</button>
                <input type="range" name="price" min="0" max="5000" value="50"/>
                <p className="sidebar-price-min">0</p>
                <p className="sidebar-price-max">5000</p>
            </div>
        </nav>
    </>
};