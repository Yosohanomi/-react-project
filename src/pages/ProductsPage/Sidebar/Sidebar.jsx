import styles from "./Sidebar.module.css";
export const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__info}>
          <h3 className={styles.sidebarFilter__title}>Фільтри</h3>
          <button className={styles.sidebarFilter__btn}>Очистити всі</button>
          
        </div>
        <p className={styles.sidebarFilter__text}>Показано 15 з 100</p>
        <div className={styles.input__thumb}>
        <label htmlFor="filters-toggle" className={styles.filters__label}>
          Фільтри
        </label>
        <input
          type="checkbox"
          id="filters-toggle"
          className={styles.filters__input}
        />

        
        {/* MOBILE */}
        <div className={styles.mobile__filters}>
          <nav className={styles.mobile__sidebarNav}>
            <div className={styles.mobile__sidebarFilter}>
              <ul className={styles.mobile__sidebarNav__list}>
                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Усі
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Кава в зернах
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Мелена кава
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Кавоварки та аксесуари
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Гаджети для бариста
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Чашки та термоси
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Фільтри та витратні матеріали
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Капсульна кава
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Розчинна кава
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Сиропи та добавки
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Подарункові набори
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Зберігання кави
                  </a>
                </li>

                <li className={styles.mobile__sidebarNav__item}>
                  <a href="#" className={styles.mobile__sidebarNav__link}>
                    Печиво та солодощі до кави
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.mobile__sidebarBrands}>
              <h3 className={styles.mobile__sidebarBrands__title}>
                Бренд/Виробник
              </h3>
              <button className={styles.mobile__sidebarBrands__btn}>
                Очистити
              </button>

              <ul className={styles.mobile__sidebarBrands__list}>
                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option1"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option1">Lavazza</label>
                </li>

                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option2"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option2">Illy</label>
                </li>

                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option3"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option3">Bialetti</label>
                </li>

                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option4"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option4">Hario</label>
                </li>

                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option5"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option5">Timemore</label>
                </li>

                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option6"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option6">Svit Kavy</label>
                </li>

                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option7"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option7">Foundation Coffee Roasters</label>
                </li>

                <li className={styles.mobile__sidebarBrands__item}>
                  
                  <input
                    type="checkbox"
                    id="option8"
                    name="choice"
                    value="value1"
                  />
                  <label htmlFor="option8">Rocket Espresso</label>
                </li>
              </ul>
            </div>

            <div className={styles.mobile__sidebarPrice}>
              <h3 className={styles.mobile__sidebarPrice__title}>Ціна</h3>
              <button className={styles.mobile__sidebarPrice__btn}>
                Очистити
              </button>
              <input
              className={styles.price__input}
                type="range"
                name="price"
                min="0"
                max="5000"
                defaultValue="50"
              />
              <div className={styles.price__text}>
              <p className={styles.mobile__sidebarPriceMin}>0</p>
              <p className={styles.mobile__sidebarPriceMax}>5000</p>
              </div>
              
            </div>
          </nav>
        </div>
        </div>
        
        {/* not mobile */}
        <nav className={styles.sidebarNav}>
          <div className={styles.sidebarFilter}>
            <ul className={styles.sidebarNav__list}>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Усі
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Кава в зернах
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Мелена кава
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Кавоварки та аксесуари
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Гаджети для бариста
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Чашки та термоси
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Фільтри та витратні матеріали
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Капсульна кава
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Розчинна кава
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Сиропи та добавки
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Подарункові набори
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Зберігання кави
                </a>
              </li>
              <li className={styles.sidebarNav__item}>
                <a href="#" className={styles.sidebarNav__link}>
                  Печиво та солодощі до кави
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarBrands}>
            <h3 className={styles.sidebarBrands__title}>Бренд/Виробник</h3>
            <button className={styles.sidebarBrands__btn}>Очистити</button>
            <ul className={styles.sidebarBrands__list}>
              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option1"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option1">Lavazza</label>
              </li>

              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option2"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option2">Illy</label>
              </li>

              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option3"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option3">Bialetti</label>
              </li>

              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option4"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option4">Hario</label>
              </li>

              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option5"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option5">Timemore</label>
              </li>

              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option6"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option6">Svit Kavy</label>
              </li>

              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option7"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option7">Foundation Coffee Roasters</label>
              </li>

              <li className={styles.sidebarBrands__item}>
                
                <input
                  type="checkbox"
                  id="option8"
                  name="choice"
                  value="value1"
                />
                <label htmlFor="option8">Rocket Espresso</label>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarPrice}>
            <h3 className={styles.sidebarPrice__title}>Ціна</h3>
            <button className={styles.sidebarPrice__btn}>Очистити</button>
            <div className={styles.sidebar__price}>
            <input
            className={styles.sidebarPrice__input}
              type="range"
              name="price"
              min="0"
              max="5000"
              defaultValue="50"
            />
            <div className={styles.sidebar__priceText}>
                <p className={styles.sidebarPriceMin}>0</p>
                <p className={styles.sidebarPriceMax}>5000</p>
            </div>
            
            </div>
            
          </div>
        </nav>
      </div>
    </>
  );
};

