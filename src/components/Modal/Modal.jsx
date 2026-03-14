import styles from './Modal.module.css'
import { YellowBtn } from '../YellowBtn/YellowBtn'
import { Stars } from '../Stars/Stars'
import unfilledStar from '../../images/products/star_unfilled.png'

export const Modal = ({closeModal}) => {
    
    return ( 
        <>
            <div onClick={closeModal} className={styles.backdrop} data-modal>
                <div className={styles.modal}>  
                    <button className={styles.closeBtn} data-modal-close>
                    </button>        
                    <h2 className={styles.title}>Залишити відгук</h2>
                    <form className={styles.form}>
                        <label htmlFor="userName" className={styles.label}>Ваше імʼя</label>
                        <input 
                            id="userName" 
                            type="text" 
                            placeholder="Ваше імʼя" 
                            className={styles.input}
                        />

                        <label htmlFor="userReview" className={styles.label}>Відгук</label>
                        <textarea 
                            id="userReview" 
                            placeholder="Ваш відгук"
                            className={styles.textarea}
                        />
                    </form>
                    <div className={styles.starsContainer}>
                        <Stars 
                            secondClass={styles.stars} 
                            star={unfilledStar} 
                            star2={unfilledStar} 
                            star3={unfilledStar}
                        />
                    </div>
                    <YellowBtn secondClass={styles.send__btn} text="Надіслати"/>
                </div>
            </div>
        </>
    )
}