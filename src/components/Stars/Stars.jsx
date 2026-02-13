import styles from './Stars.module.css'

export const Stars = ({star, star2, star3, secondClass}) => {
    return <>
        <div className={styles.stars}>
                        <img src={star} alt="filledStar" className={`${styles.star} ${secondClass}`} />
                        <img src={star} alt="filledStar" className={`${styles.star} ${secondClass}`} />
                        <img src={star} alt="filledStar" className={`${styles.star} ${secondClass}`} />
                        <img src={star2} alt="filledStar"  className={`${styles.star} ${secondClass}`} />
                        <img src={star3} alt="halfStar"  className={`${styles.star} ${secondClass}`} />
        </div>
    </>
}