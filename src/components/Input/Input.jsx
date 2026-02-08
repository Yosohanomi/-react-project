import styles from './Input.module.css';
export const Input = ({type, secondClass, name, id, placeholder}) => {
    return <>
    <input className={`${styles.input} ${secondClass}`} type={type} name={name} placeholder={placeholder} id={id} />
    </>
} 