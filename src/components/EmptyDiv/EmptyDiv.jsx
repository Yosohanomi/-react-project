import styles from './EmptyDiv.module.css'
import { YellowBtn } from '../YellowBtn/YellowBtn'

export const EmptyDiv = ({text, btnText, secondClass}) => {
    return (
        <div className={`${styles.empty__container} ${secondClass}`}>
        <p  className={styles.text}>{text}</p>
        <YellowBtn secondClass={styles.btn} text={btnText}/>
        </div>
    )
}