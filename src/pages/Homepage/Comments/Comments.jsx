import { Container } from "../../../components/Container/Container"
import {ArrowBtn} from "../../../components/ArrowBtn/ArrowBtn"
import styles from './Comments.module.css'
import { Comment } from "../../../components/Comment/Comment"
import right from '../../../images/arrows/right.png'
import left from '../../../images/arrows/left.png'

export const Comments = () => {
    return <>
        <section className={styles.comments}>
            <Container>
            <h2 className={styles.comments__title}>Останні відгуки</h2>
            <ul className={styles.comments__list}>
                <Comment text="Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й ароматом шоколаду. Ідеально підходить для ранкового еспресо." author="Олена Коваль" product="Еспресо Класік"/>
                <Comment text="Френч-прес якісний і зручний у використанні. Скло міцне, фільтр добре працює, кава виходить ароматною й чистою. Точно вартий своєї ціни." author="Ігор Петров" product="Френч-прес Classic 600 мл"/>
                <Comment text="Купив для роботи — тримає тепло кілька годин, дизайн мінімалістичний і стильний. Дуже зручно брати з собою каву в дорогу." author="Ігор Шевченко" product="Термочашка Зернятко 350 мл"/>
            </ul>
            
            <div className={styles.pagination__thumb}>
                <div className={styles.pagination}></div>
                <ArrowBtn imgUrl={left} secondClass={styles.comments__left}/>
                <ArrowBtn imgUrl={right} secondClass={styles.comments__right}/>
            </div>
            </Container>
        </section>
    </>
}