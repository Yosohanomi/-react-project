import styles from './YellowBtn.module.css'
export const YellowBtn = ({text, secondClass}) => {
    return <>
        <button type='button' className={`${styles.yellow__btn} ${secondClass}`}>{text}</button>
    </>
}