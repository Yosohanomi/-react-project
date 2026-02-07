import styles from './GrayBtn.module.css'

export const GrayBtn = ({text}) => {
    return <>
    <button type='button' className={styles.btn}>{text}</button>
    </>
}