import { Container } from "../../../components/Container/Container"
export const filledStar = '../../images/products/star_filled.png'
export const right = '../../images/arrows/right.png'
export const left = '../../images/arrows/left.png'

export const Comments = () => {
    return <>
        <section className="comments">
            <Container>
            <h2 className="comments__title">Останні відгуки</h2>
            <ul className="comments__list">
                <li className="comments__item">
                    <div className="comments__stars">
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px'  height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px'  className="comments__img-star" />
                    </div>
                    <p className="comments__text">Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й ароматом шоколаду. Ідеально підходить для ранкового еспресо.</p>
                    <p className="comments__text-author">Олена Коваль</p>
                    <p className="comments__text-product">Еспресо Класік</p>
                </li>

                <li className="comments__item">
                    <div className="comments__stars">
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px'  height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px'  className="comments__img-star" />
                    </div>
                    <p className="comments__text">Френч-прес якісний і зручний у використанні. Скло міцне, фільтр добре працює, кава виходить ароматною й чистою. Точно вартий своєї ціни.</p>
                    <p className="comments__text-author">Ігор Петров</p>
                    <p className="comments__text-product">Френч-прес Classic 600 мл</p>
                </li>

                <li className="comments__item">
                    <div className="comments__stars">
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px'  height='16px' className="comments__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px'  className="comments__img-star" />
                    </div>
                    <p className="comments__text">Купив для роботи — тримає тепло кілька годин, дизайн мінімалістичний і стильний. Дуже зручно брати з собою каву в дорогу.</p>
                    <p className="comments__text-author">Ігор Шевченко</p>
                    <p className="comments__text-product">Термочашка Зернятко 350 мл</p>
                </li>
            </ul>
            
            <div className="pagination__thumb">
                <div className="pagination"></div>
                <button className="comments__btn-arrow right-swipe">
                    <img src={right} alt="right arrow" className="comments__img-right" />
                </button>
                <button className="comments__btn-arrow left-swipe">
                    <img src={left} alt="left arrow" className="comments__img-left" />
                </button>
            </div>
            </Container>
        </section>
    </>
}