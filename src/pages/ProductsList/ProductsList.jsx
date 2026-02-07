import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ProductCard } from "../../components/Product/ProductCard";
import { SidebarProducts } from "./SidebarProducts";

export const CategoriesList = () => {
    return <>
        <Header/>
        <main>
            <SidebarProducts/>
            <section className="products">
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
            </section>
        </main>
        <Footer/>
    </>
};