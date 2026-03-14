import { useState, useContext } from 'react'
import styles from './CartModal.module.css'
import { Cart } from '../Cart/Cart'
import product from '../../images/Cart/Placeholder Image.png'
import { GrayBtn } from '../GrayBtn/GrayBtn'
import { YellowBtn } from '../YellowBtn/YellowBtn'
import { EmptyDiv } from '../EmptyDiv/EmptyDiv'
import { ProductContext } from '../../context/ProductsContext/ProductsContext'

export const CartModal = ({closeModal}) => {
    const { products } = useContext(ProductContext);
    const [cartItems, setCartItems] = useState(products.slice(0, 4)); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useState(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const handleRemoveItem = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
    };

    const totalPrice = cartItems.reduce((sum, product) => {
        return sum + (product.price || 0);
    }, 0);

    return ( <>
        <div onClick={closeModal} className={styles.backdrop} data-modal>
            <div className={styles.modal}>  
                <button className={styles.closeBtn} data-modal-close>
                    Close
                </button>        
                <h2 className={styles.title}>Ваш кошик</h2>
                
                {cartItems.length > 0 ? (
                    <>
                        <ul className={styles.first__list}>
                            {cartItems.map((product) => (
                                <Cart 
                                    key={product._id}
                                    product={product}
                                    onRemove={handleRemoveItem}
                                />
                            ))}
                        </ul>

                        <div className={styles.cash}>
                            <p className={styles.cash__text}>Проміжний підсумок</p>
                            <p className={styles.cash__price}>{totalPrice} грн</p>
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
                                {totalPrice} грн
                            </p>
                        </div>
                        
                        <div className={styles.btn__list}>
                            <GrayBtn text="Продовжити покупки"/>
                            <YellowBtn text="Оформити замовлення"/>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.centreEmpty}>
                            <EmptyDiv secondClass={styles.emptyDiv} text="Ваш кошик порожній, мерщій до покупок!" btnText="До покупок"/>
                        </div>
                        
                        {isMobile && (
                            <>
                                <div className={styles.cash}>
                                    <p className={styles.cash__text}>Проміжний підсумок</p>
                                    <p className={styles.cash__price}>0 грн</p>
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
                                        0 грн
                                    </p>
                                </div>
                            </>
                        )}
                    </>
                )}
                
            </div>
        </div>
    </>
    )
}