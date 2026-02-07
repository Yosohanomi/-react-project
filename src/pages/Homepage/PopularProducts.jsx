import { ProductCard } from '../../components/Product/ProductCard';
import { Container } from '../../components/Container/Container';
export const right = '../../images/arrows/right.png'
export const left = '../../images/arrows/left.png'
export const PopularProducts = () => {
    return <>
        <section className="products">
        <Container>
            <div className="products__thumb">
                    <h2 className="products__title">Популярні товари</h2>
                    <button className="products__btn">Всі товари</button>
                </div>

                <button className="products__btn-arrow right-swipe">
                    <img src={right} alt="right arrow" className="products__img-right" />
                </button>

                <ul className="products__list">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </ul>

                <button className="products__btn-arrow left-swipe">
                    <img src={left} alt="left arrow" className="products__img-left" />
                </button>
                <div className="pagination"></div>
        </Container>
        </section>
    </>
}