import styles from './ProductInfo.module.css'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'
import { YellowBtn } from '../../components/YellowBtn/YellowBtn'
import arrow from '../../images/productInfo/Vector.png'
import { Stars } from '../../components/Stars/Stars'
import { GrayBtn } from '../../components/GrayBtn/GrayBtn'
import { Comment } from '../../components/Comment/Comment'
import { ArrowBtn } from '../../components/ArrowBtn/ArrowBtn'
import right from '../../images/arrows/right.png'
import left from '../../images/arrows/left.png'
import fullStar from '../../images/products/star_filled.png'
import halfStar from '../../images/products/star_half.png'

import productImg from '../../images/productInfo/product.png'

export const ProductInfo = () => {
    return <>
    <Header/>
        <main>
            <section className={styles.product}>
                <Container>
                    <div className={styles.product__thumb}>
                        <p className={styles.product__text}>Всі товари</p>
                        <img src={arrow} alt="arrow" className={styles.product__arrow} />
                        <p className={styles.product__text}>Кавоварки та аксесуари</p>
                        <img src={arrow} alt="arrow" className={styles.product__arrow} />
                        <p className={`${styles.product__text} ${styles.currentProduct}`}>Мока-пот Bialetti (3 порції)</p>
                    </div>

                    <div className={styles.product__container}>
                        <img src={productImg} alt="" className={styles.product__img} />
                        <div className={styles.product__thumbInfo}>
                            <h3 className={styles.product__title}>Мока-пот Bialetti (3 порції)</h3>
                            <div className={styles.product__priceThumb}>
                                <p className={styles.products__price}>980 грн</p>
                                <Stars star={fullStar} star2={fullStar} star3={halfStar}/>
                                <p className={styles.products__priceInfo}>(4.5) &#x2022</p>
                                <p className={styles.products__priceInfo__comments}>10 відгуків</p>
                            </div>
                            <p className={styles.products__info}>Мока-пот Bialetti — це легендарна італійська кавоварка, що вже понад 80 років символізує домашній еспресо. Завдяки класичній восьмигранній формі та високоякісному алюмінію, вона рівномірно розподіляє тепло та розкриває повний аромат кави.
                            Ця модель розрахована на 3 порції (близько 150 мл готового напою), що робить її ідеальним вибором для невеликої родини або ранкової кави з друзями. Простий принцип роботи дозволяє отримати насичений еспресо навіть без електрики чи великих кавомашин.</p>
                        </div>
                        <div className={styles.product__btn__thumb}>
                        <YellowBtn text='Додати в кошик' secondClass={styles.product__btn__cart}/>
                        <select name="search" id="filterNum" className={styles.filter}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        </div>
                        <GrayBtn text='Купити зараз' secondClass={styles.product__btn_buy}/>
                        <p className={styles.product__moreInfo}>Безкоштовна доставка для замовлень від 1000 грн</p>
                    </div>
                    <div className={styles.product__comments}>
                        <h2 className={styles.product__comments__title}>Відгуки клієнтів</h2>
                        <YellowBtn text='Залишити відгук' secondClass={styles.product__btn}/>
                        <ul className={styles.product__list}>
                            <Comment author="Анна Коваленко" text="Дуже задоволена покупкою! Кавоварка компактна, зручна й стильна. Кава виходить насичена, з кремовою пінкою — майже як у кав’ярні."/>
                            <Comment isHidden={styles.isHidden} author="Олег Сидоренко" text="Користуюсь щодня вже місяць. Дуже просто готувати, а смак дійсно відрізняється від кави у френч-пресі. Єдине — шкода, що не підходить для індукційних плит."/>
                            <Comment isHidden={styles.isHidden__Desktop} author="Марія Петренко" text="Справжня італійська класика! Брала як подарунок чоловіку, тепер готуємо каву разом щоранку. Легко мити й займає мало місця."/>
                        </ul>
                        <ArrowBtn imgUrl={left} secondClass={styles.comments__left}/>
                        <ArrowBtn imgUrl={right} secondClass={styles.comments__right}/>
                    </div>
                    
                </Container>
            </section>
        </main>
        <Footer/>
    </>
}