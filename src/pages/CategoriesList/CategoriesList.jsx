import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CategoryCard } from "../../components/Category/CategoryCard";

export const CategoriesList = () => {
    return <>
        <Header/>
        <main>
            <section className="categories">
                <h2 className="categories__title">Категорії</h2>
                <ul className="categories__list">
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                </ul>
                <button className="categories__btn">Показати більше</button>
            </section>
        </main>
        <Footer/>
    </>
};