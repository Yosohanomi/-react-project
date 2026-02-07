import { Container } from "../../components/Container/Container"

export const heroImage = '../../images/hero-images/hero_image.png'
export const Hero = () => {
    return <>
        <section className="hero">
            <Container>
                <div className="hero__thumb">
                    <div className="hero__first-el">
                        <h1 className="hero__title">Зернятко — твій шлях до справжньої кави</h1>
                        <p className="hero__text">Ми створили місце, де кожен знайде все для свого кавового ритуалу: від зерен преміум-якості до стильних аксесуарів для приготування. Почни день із натхненням та обирай товари, що розкривають унікальний смак твоєї кави.</p>
                        <div className="hero__btn__thumb">
                            <button className="hero__btn to-products">До товарів</button>
                            <button className="hero__btn search-categories">Дослідити категорії</button>
                        </div>
                    </div>
                    <div className="hero__second-el">
                        <img src={heroImage} alt="coffee" className="hero__img" />
                    </div>
                </div>
            </Container>
        </section>
    </>
}