export const categoryImgTest = '../../images/categories/melena-coffee.png'

export const CategoryCard = () => {
    return <>
        <li className="category__item">
            <img src={categoryImgTest} alt="coffee melene" className="category__img" />
            <h3 className="category__item__title">Кава в зернах</h3>
            <p className="category__text">Арабіка, робуста, бленди та моносорти для різних способів приготування.</p>
        </li>
    </>
}