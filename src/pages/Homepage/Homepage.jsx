import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../pages/Homepage/Hero/Hero";
import { PopularProducts } from "./PopularProducts/PopularProducts";
import { Reasons } from "./Reasons/Reasons";
import { PopularCategories } from "./PopularCategories/PopularCategories";
import { Comments } from "./Comments/Comments";
import { CategoriesList } from "../CategoriesList/CategoriesList";

export const Homepage = () => {
    return <>
        <Header/>
        <main>
            <Hero/>
            <PopularProducts/>
            <Reasons/>
            <PopularCategories/>
            <Comments/>
            <CategoriesList/>
        </main>
        <Footer/>
    </>
};