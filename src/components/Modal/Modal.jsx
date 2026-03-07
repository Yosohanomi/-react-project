
import styles from './Modal.module.css'

export const Modal = ({closeModal}) => {
    


    return ( <>
        {/* <button class="open__btn" data-modal-close>
                Open
        </button>  */}
        {/* ${styles.is_hidden} */}
        <div onClick={closeModal} class={styles.backdrop} data-modal>
        <div class={styles.modal}>  
            <button class="close__btn" data-modal-close>
                Close
            </button>        
            <h2>Залишити відгук</h2>
            <form>
                <label htmlFor="userName">Ваше імʼя</label>
                <input id="userName" type="text" placeholder="Ваше імʼя" />

                <label htmlFor="userReview">Відгук</label>
                <textarea id="userReview">Ваш відгук</textarea>
            </form>
        </div>
        </div>
        </>
    )
}