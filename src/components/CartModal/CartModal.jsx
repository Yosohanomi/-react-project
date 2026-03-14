import styles from './CartModal.module.css'
import { Cart } from '../Cart/Cart'
import product from '../../images/Cart/Placeholder Image.png'
import { GrayBtn } from '../GrayBtn/GrayBtn'
import { YellowBtn } from '../YellowBtn/YellowBtn'

export const CartModal = ({closeModal}) => {
    
    return ( <>
        <div onClick={closeModal} className={styles.backdrop} data-modal>
            <div className={styles.modal}>  
                <button className={styles.closeBtn} data-modal-close>
                    Close
                </button>        
                <h2 className={styles.title}>Ваш кошик</h2>
                <ul className={styles.first__list}>
                    <Cart
                        title="Еспресо Класік"
                        imgUrl={product}
                        price="280 грн"
                    />
                    <Cart
                        title="Термочашка Зернятко 350 мл"
                        imgUrl={product}
                        price="420 грн"
                    />
                    <Cart
                        title="Мока-пот Bialetti (3 порції)"
                        imgUrl={product}
                        price="980 грн"
                    />
                    <Cart
                        title="Кавомолка ручна SteelPro"
                        imgUrl={product}
                        price="670 грн"
                    />
                </ul>

                <div className={styles.cash}>
                    <p className={styles.cash__text}>Проміжний підсумок</p>
                    <p className={styles.cash__price}>2350 грн</p>
                </div>

                <div className={styles.cash}>
                    <p className={styles.cash__text}>Доставка</p>
                    <p className={styles.cash__price}>0 грн</p>
                </div>

                <div className={`${styles.cash} ${styles.cash__last}`}>
                    <p className={`${styles.cash__text} ${styles.summ}`}>
                        Всього
                    </p>
                    <p className={`${styles.cash__price} ${styles.summ}`}>
                        2350 грн
                    </p>
                </div>
                <div className={styles.btn__list}>
                    <GrayBtn text="Продовжити покупки"/>
                    <YellowBtn text="Оформити замовлення"/>
                </div>
            </div>
        </div>
    </>
    )
}