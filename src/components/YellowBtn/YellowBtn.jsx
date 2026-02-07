import styles from './YellowBtn.module.css'
export const YellowBtn = ({text}) => {
    return <>
        <button type='button' className={styles.yellow__btn}>{text}</button>
    </>
}