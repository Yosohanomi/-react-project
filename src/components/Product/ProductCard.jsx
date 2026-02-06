export const filledStar = '../../images/products/star_filled.png'
export const halfStar = '../../images/products/star_half.png'
export const productCoffeeTest = '../../images/products/product-coffee.png'

export const ProductCard = () => {
    return <>
                <li className="products__item">
                    <img src={productCoffeeTest} alt="popular coffee" className="products__img" />
                    <div className="products__stars">
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="product__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="product__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px' height='16px' className="product__img-star" />
                        <img src={filledStar} alt="filledStar" width='16px'  height='16px' className="product__img-star" />
                        <img src={halfStar} alt="halfStar" width='16px' height='16px'  className="product__img-star" />
                    </div>
                    <h3 className="products__item__title">Еспресо Класік</h3>
                    <p className="products__item__text">Суміш арабіки та робусти з насиченим смаком і нотами темного шоколаду.</p>
                    <p className="products__price">280</p>
                    <button className="products__item__btn">Детальніше</button>
                </li>
    </>
}