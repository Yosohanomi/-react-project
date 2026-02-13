import styles from './ProductComment.module.css';
import { YellowBtn } from '../../../components/YellowBtn/YellowBtn';
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn';
import right from '../../../images/arrows/right.png'
import left from '../../../images/arrows/left.png'
import {Comment} from '../../../components/Comment/Comment'
import { Container } from '../../../components/Container/Container';
export const ProductComment = () => {
    return <>
        <section className={styles.product__comments}>
            <Container>
                <div className={styles.comments__thumb}>
                    <h2 className={styles.product__comments__title}>Відгуки клієнтів</h2>
                    <YellowBtn text='Залишити відгук' secondClass={styles.product__btn}/>
                </div>
                        <ul className={styles.product__list}>
                            <Comment isHidden={styles.comment__gap} author="Анна Коваленко" text="Дуже задоволена покупкою! Кавоварка компактна, зручна й стильна. Кава виходить насичена, з кремовою пінкою — майже як у кав’ярні."/>
                            <Comment isHidden={styles.isHidden} author="Олег Сидоренко" text="Користуюсь щодня вже місяць. Дуже просто готувати, а смак дійсно відрізняється від кави у френч-пресі. Єдине — шкода, що не підходить для індукційних плит."/>
                            <Comment isHidden={styles.isHidden__Desktop} author="Марія Петренко" text="Справжня італійська класика! Брала як подарунок чоловіку, тепер готуємо каву разом щоранку. Легко мити й займає мало місця."/>
                        </ul>
                        <div className={styles.pagination__thumb}>
                             <ArrowBtn imgUrl={left} secondClass={styles.comments__left}/>
                             <ArrowBtn imgUrl={right} secondClass={styles.comments__right}/>
                        </div>
            </Container>
                        
        </section>
    </>
}