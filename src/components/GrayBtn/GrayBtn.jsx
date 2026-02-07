import styles from './GrayBtn.module.css'

export const GrayBtn = ({text, secondClass}) => {
    return <>
    <button type='button' className={`${styles.btn} ${secondClass}`}>{text}</button>
    </>
}