import { Container } from "../../../components/Container/Container";
import { YellowBtn } from "../../../components/YellowBtn/YellowBtn";
import { GrayBtn } from "../../../components/GrayBtn/GrayBtn";
import styles from './Hero.module.css';

import heroImage from '../../../images/hero-images/hero_image.png';
export const Hero = () => {
    return <>
        <section className="hero">
            <Container>
                <div className={styles.hero__thumb}>
                    <div className={styles.hero__first}>
                        <h1 className={styles.hero__title}>Зернятко — твій шлях до справжньої кави</h1>
                        <p className={styles.hero__text}>Ми створили місце, де кожен знайде все для свого кавового ритуалу: від зерен преміум-якості до стильних аксесуарів для приготування. Почни день із натхненням та обирай товари, що розкривають унікальний смак твоєї кави.</p>
                        <div className={styles.hero__btn__thumb}>
                            <YellowBtn text="До товарів"/>
                            <GrayBtn text="Дослідити категорії"/>
                        </div>
                    </div>
                    
                        <img src={heroImage} alt="coffee" className={styles.hero__img} />
                    
                        
                </div>
            </Container>
        </section>
    </>
}