import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../pages/Homepage/Hero/Hero";
import { PopularProducts } from "../../pages/Homepage/PopularProducts/PopularProducts";
import { Reasons } from "../../pages/Homepage/Reasons";
import { PopularCategories } from "../../pages/Homepage/PopularCategories/PopularCategories";
import { Comments } from "../../pages/Homepage/Comments";

export const Homepage = () => {
    return <>
        <Header/>
        <main>
            <Hero/>
            <PopularProducts/>
            <Reasons/>
            <PopularCategories/>
            <Comments/>
        </main>
        <Footer/>
    </>
};