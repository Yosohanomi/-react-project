import { useContext } from "react";
import styles from "./Sidebar.module.css";
import { ProductContext } from "../../../context/ProductsContext/ProductsContext";

export const Sidebar = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    selectedBrands, 
    setSelectedBrands,
    priceRange,
    setPriceRange,
    products,
    allProducts
  } = useContext(ProductContext);

  const categories = [
    "Усі",
    "Кава в зернах",
    "Мелена кава",
    "Кавоварки та аксесуари",
    "Гаджети для бариста",
    "Чашки та термоси",
    "Фільтри та витратні матеріали",
    "Капсульна кава",
    "Розчинна кава",
    "Сиропи та добавки",
    "Подарункові набори",
    "Зберігання кави",
    "Печиво та солодощі до кави"
  ];

  const brands = [
    "Lavazza",
    "Illy",
    "Bialetti",
    "Hario",
    "Timemore",
    "Svit Kavy",
    "Foundation Coffee Roasters",
    "Rocket Espresso"
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceChange = (e) => {
    setPriceRange({ ...priceRange, max: parseInt(e.target.value) });
  };

  const clearAllFilters = () => {
    setSelectedCategory("Усі");
    setSelectedBrands([]);
    setPriceRange({ min: 0, max: 5000 });
  };

  const clearBrands = () => {
    setSelectedBrands([]);
  };

  const clearPrice = () => {
    setPriceRange({ min: 0, max: 5000 });
  };

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__info}>
          <h3 className={styles.sidebarFilter__title}>Фільтри</h3>
          <button 
            className={styles.sidebarFilter__btn}
            onClick={clearAllFilters}
          >
            Очистити всі
          </button>
        </div>
        
        <p className={styles.sidebarFilter__text}>
          Показано {products.length} з {allProducts.length}
        </p>
        
        <div className={styles.input__thumb}>
          <label htmlFor="filters-toggle" className={styles.filters__label}>
            Фільтри
          </label>
          <input
            type="checkbox"
            id="filters-toggle"
            className={styles.filters__input}
          />

          <div className={styles.mobile__filters}>
            <nav className={styles.mobile__sidebarNav}>
              <div className={styles.mobile__sidebarFilter}>
                <ul className={styles.mobile__sidebarNav__list}>
                  {categories.map(category => (
                    <li 
                      key={category} 
                      className={`${styles.mobile__sidebarNav__item} ${selectedCategory === category ? styles.active : ''}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <a href="#" className={styles.mobile__sidebarNav__link}>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.mobile__sidebarBrands}>
                <h3 className={styles.mobile__sidebarBrands__title}>
                  Бренд/Виробник
                </h3>
                <button 
                  className={styles.mobile__sidebarBrands__btn}
                  onClick={clearBrands}
                >
                  Очистити
                </button>

                <ul className={styles.mobile__sidebarBrands__list}>
                  {brands.map(brand => (
                    <li key={brand} className={styles.mobile__sidebarBrands__item}>
                      <input
                        type="checkbox"
                        id={`mobile-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      <label htmlFor={`mobile-${brand}`}>{brand}</label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.mobile__sidebarPrice}>
                <h3 className={styles.mobile__sidebarPrice__title}>Ціна</h3>
                <button 
                  className={styles.mobile__sidebarPrice__btn}
                  onClick={clearPrice}
                >
                  Очистити
                </button>
                <input
                  className={styles.price__input}
                  type="range"
                  name="price"
                  min="0"
                  max="5000"
                  value={priceRange.max}
                  onChange={handlePriceChange}
                />
                <div className={styles.price__text}>
                  <p className={styles.mobile__sidebarPriceMin}>{priceRange.min}</p>
                  <p className={styles.mobile__sidebarPriceMax}>{priceRange.max}</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
        
        {/* not mobile */}
        <nav className={styles.sidebarNav}>
          <div className={styles.sidebarFilter}>
            <ul className={styles.sidebarNav__list}>
              {categories.map(category => (
                <li 
                  key={category} 
                  className={`${styles.sidebarNav__item} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <a href="#" className={styles.sidebarNav__link}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarBrands}>
            <h3 className={styles.sidebarBrands__title}>Бренд/Виробник</h3>
            <button 
              className={styles.sidebarBrands__btn}
              onClick={clearBrands}
            >
              Очистити
            </button>
            <ul className={styles.sidebarBrands__list}>
              {brands.map(brand => (
                <li key={brand} className={styles.sidebarBrands__item}>
                  <input
                    type="checkbox"
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <label htmlFor={brand}>{brand}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarPrice}>
            <h3 className={styles.sidebarPrice__title}>Ціна</h3>
            <button 
              className={styles.sidebarPrice__btn}
              onClick={clearPrice}
            >
              Очистити
            </button>
            <div className={styles.sidebar__price}>
              <input
                className={styles.sidebarPrice__input}
                type="range"
                name="price"
                min="0"
                max="5000"
                value={priceRange.max}
                onChange={handlePriceChange}
              />
              <div className={styles.sidebar__priceText}>
                <p className={styles.sidebarPriceMin}>{priceRange.min}</p>
                <p className={styles.sidebarPriceMax}>{priceRange.max}</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};