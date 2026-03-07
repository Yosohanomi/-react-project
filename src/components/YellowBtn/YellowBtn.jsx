import styles from './YellowBtn.module.css'
export const YellowBtn = ({text, secondClass, openModal, btnRef}) => {
    return <>
        <button ref={btnRef} onClick={openModal} type='button' className={`${styles.yellow__btn} ${secondClass}`}>{text}</button>
    </>
}