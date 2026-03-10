import styles from './ArrowBtn.module.css';
export const ArrowBtn = ({imgUrl, secondClass, changePage}) => {
    return <>
        <button onClick={changePage} className={`${styles.arrow} ${secondClass}`}>
                    <img src={imgUrl} alt="arrow" className={styles.arrow__img} />
                </button>
    </>
}