import styles from './InputForm.module.css'

export const InputForm = ({placeholder, label, type, id}) => {
    return <>
        <label className={styles.form__label} htmlFor={id}>{label}</label>
        <input placeholder={placeholder} className={styles.form__input} type={type} id={id}/>
    </>
}