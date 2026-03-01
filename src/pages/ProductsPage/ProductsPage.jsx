import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ProductCard } from "../../components/Product/ProductCard.jsx";
import { Sidebar } from "./Sidebar/Sidebar";
import { Container } from "../../components/Container/Container";
import styles from './ProductsPage.module.css'
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { Component } from "react";
import { ProductList } from "../../components/ProductList/ProductList.jsx";


export class ProductsPage extends Component {
    render() {
       return <>
        {/* <Header/> */}
            <section className={styles.products}>
                <Container>
                    <h3 className={styles.products__title}>Всі товари</h3>
                    <div className={styles.products__thumb}>
                        <Sidebar/>
                        <ProductList/>
                    </div>
                    <YellowBtn text="Показати більше" secondClass={styles.products__btn}/>
                </Container>
            </section>
        {/* <Footer/> */}
    </>
    }
};

