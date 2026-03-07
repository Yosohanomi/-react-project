import styles from './ProductComment.module.css';
import { YellowBtn } from '../../../components/YellowBtn/YellowBtn';
import { ArrowBtn } from '../../../components/ArrowBtn/ArrowBtn';
import right from '../../../images/arrows/right.png'
import left from '../../../images/arrows/left.png'
import {Comment} from '../../../components/Comment/Comment'
import { Container } from '../../../components/Container/Container';
import { Modal } from '../../../components/Modal/Modal';
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
export const ProductComment = () => {
    const [isOpen, setIsOpen] = useState(false)
    const modalBtn = useRef(null)
    const buttonStyle = {
        backgroundColor:'black',
        color: 'white',
        border: '1px solid white',
      };

      const buttonStyle1 = {
        backgroundColor:'white',
        color: 'black',
        border: '1px solid black',
        cursor: 'pointer',
      };
    useEffect(()=> {
        return ()=> {
            window.removeEventListener("keydown", (e)=>{
                if (e.key === "Escape") {
                    setIsOpen(false)
                    modalBtn.current.style.backgroundColor = buttonStyle1.backgroundColor;
                    modalBtn.current.style.color = buttonStyle1.color;
                    modalBtn.current.style.border = buttonStyle1.border;
                }
            })
        }
    }, [isOpen])

    
    const closeModal =()=> {
        setIsOpen(false) 
        modalBtn.current.style.backgroundColor = buttonStyle1.backgroundColor;
        modalBtn.current.style.color = buttonStyle1.color;
        modalBtn.current.style.border = buttonStyle1.border;
    }
    const openModal =()=> {
        setIsOpen(true)
        window.addEventListener("keydown", (e)=>{
            if (e.key === "Escape") {
                setIsOpen(false)
            }
        })
        modalBtn.current.style.backgroundColor = buttonStyle.backgroundColor;
        modalBtn.current.style.color = buttonStyle.color;
        modalBtn.current.style.border = buttonStyle.border;
    }
    
    
    return <>
        <section className={styles.product__comments}>
            <Container>
                <div className={styles.comments__thumb}>
                    <h2 className={styles.product__comments__title}>Відгуки клієнтів</h2>
                    <YellowBtn btnRef={modalBtn} openModal={openModal} text='Залишити відгук' secondClass={styles.product__btn}/>
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
            {isOpen && (
            <Modal closeModal={closeModal}/> 
            )}            
        </section>
        
        
    </>
}