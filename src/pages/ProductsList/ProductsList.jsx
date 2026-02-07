import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ProductCard } from "../../components/Product/ProductCard";
import { SidebarProducts } from "./SidebarProducts";
import { Container } from "../../components/Container/Container";

export const CategoriesList = () => {
    return <>
        <Header/>
        <main>
            <SidebarProducts/>
            <section className="products">
                <Container>
                    <ul className="products__list">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </ul>
                    <button className="products__btn">Показати більше</button>
                </Container>
            </section>
        </main>
        <Footer/>
    </>
};