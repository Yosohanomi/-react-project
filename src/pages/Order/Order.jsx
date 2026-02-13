import { Container } from "../../components/Container/Container";
import styles from './Order.module.css'
import { InputForm } from "../../components/InputForm/InputForm";
import { Cart } from "../../components/Cart/Cart";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import product from '../../images/products/product-coffee.png'
import bialetti from '../../images/productInfo/product.png'

export const Order = () => {
    return <>
    <Header/>
        <main>
            <section className="order">
                <h2 className="order__title">Оформити замовлення</h2>
                <div className="first__element">
                    <h3 className="thumb__title">Товари</h3>
                    <ul className="first__list">
                        <Cart title="Еспресо Класік" imgUrl={product} price="280 грн"/>
                        <Cart title="Термочашка Зернятко 350 мл" imgUrl={product} price="420 грн"/>
                        <Cart title="Мока-пот Bialetti (3 порції)" imgUrl={bialetti} price="980 грн"/>
                        <Cart title="Кавомолка ручна SteelPro" imgUrl={product} price="670 грн"/>
                    </ul>
                    <div className="cash">
                        <p className="cash__text">Проміжний підсумок</p>
                        <p className="cash__price">2350 грн</p>
                    </div>
                    <div className="cash">
                        <p className="cash__text">Доставка</p>
                        <p className="cash__price">0 грн</p>
                    </div>
                    <div className="cash">
                        <p className="cash__text summ">Всього</p>
                        <p className="cash__price summ">2350 грн</p>
                    </div>
                </div>
                <div className="second__element">
                    <h3 className="thumb__title">Особиста інформація</h3>
                </div>
            </section>
        </main>
        <Footer/>
    </>
}