import styles from './GrayBtn.module.css'

export const GrayBtn = ({text, secondClass, onClick, children}) => {
    return <>
    <button onClick={onClick} type='button' className={`${styles.btn} ${secondClass}`}>
        {text}
        {children}
    </button>
    </>
}