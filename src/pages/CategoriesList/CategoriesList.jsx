import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CategoryCard } from "../../components/Category/CategoryCard";
import { Container } from "../../components/Container/Container";

export const CategoriesList = () => {
    return <>
        <Header/>
        <main>
            <section className="categories">
                <Container>
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
                </Container>
            </section>
        </main>
        <Footer/>
    </>
};