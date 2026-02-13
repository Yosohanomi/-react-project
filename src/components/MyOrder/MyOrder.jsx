import styles from './MyOrder.module.css'

export const MyOrder = ({ date, number, summ, status }) => {
    return (
        <li className={styles.order__item}>
            <div className={styles.order__thumb}>
                <p className={styles.order__date}>{date}</p>
                <p className={styles.order__thick}>{number}</p>
            </div>

            <div className={styles.order__thumb}>
                <p className={styles.order__thick}>Сума:</p>
                <p className={styles.order__thin}>{summ}</p>
            </div>

            <div className={`${styles.order__thumb} ${styles.isHidden}`}>
                <p className={styles.order__thick}>Статус:</p>
                <p className={styles.order__thin}>{status}</p>
            </div>
        </li>
    )
}
