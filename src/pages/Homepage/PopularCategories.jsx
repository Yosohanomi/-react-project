import { CategoryCard } from '../../components/Category/CategoryCard'
export const right = '../../images/arrows/right.png'
export const left = '../../images/arrows/left.png'
export const PopularCategories = () => {
    return <>
        <section className="categories">
            <div className="category__thumb">
                <h2 className="category__title"></h2>
                <button className="category__btn"></button>
            </div>

            <button className="category__btn-arrow right-swipe">
                <img src={right} alt="right arrow" className="category__img-right" />
            </button>

            <ul className="category__list">
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
            </ul>
            
            <button className="category__btn-arrow right-swipe">
                <img src={left} alt="right arrow" className="category__img-right" />
            </button>

            <div className="pagination"></div>
        </section>
    </>
}