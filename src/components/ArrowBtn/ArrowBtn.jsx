import styles from './ArrowBtn.module.css';

export const ArrowBtn = ({imgUrl, secondClass}) => {
    return <>
        <button className={`${styles.arrow} ${secondClass}`}>
                    <img src={imgUrl} alt="arrow" className={styles.arrow__img} />
                </button>
    </>
}