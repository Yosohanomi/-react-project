import styles from './InputForm.module.css'

export const InputForm = ({placeholder, label, type, id, secondClass}) => {
    return <>
    <div className={styles.thumb}>
        <label className={styles.form__label} htmlFor={id}>{label}</label>
        <input placeholder={placeholder} className={`${styles.form__input} ${secondClass}`} type={type} id={id}/>
    </div>
        
    </>
}