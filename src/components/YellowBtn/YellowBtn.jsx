import styles from './YellowBtn.module.css'
export const YellowBtn = ({text, secondClass, openModal, btnRef, children}) => {
    return <>
        <button ref={btnRef} onClick={openModal} type='button' className={`${styles.yellow__btn} ${secondClass}`}>{text}{children}</button>
    </>
}