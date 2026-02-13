import styles from "./Form.module.css";
import { InputForm } from "../InputForm/InputForm";
export const Form = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.form__thumb}>
          <InputForm
          secondClass={styles.form__input}
            label="Імʼя*"
            id="name"
            type="text"
            placeholder="Ваше імʼя"
          />
          <InputForm
          secondClass={styles.form__input}
            label="Прізвище*"
            id="surname"
            type="text"
            placeholder="Ваше прізвище"
          />
        </div>

        <InputForm
          label="Номер телефону*"
          id="phone"
          type="tel"
          placeholder="+38 (0__) ___-__-__"
        />

        <div className={styles.form__thumb}>
          <InputForm
          secondClass={styles.form__input}
            label="Місто доставки*"
            id="city"
            type="text"
            placeholder="Ваше місто"
          />
          <InputForm
          secondClass={styles.form__input}
            label="Номер відділення Нової Пошти*"
            id="mailNum"
            type="text"
            placeholder="1"
          />
        </div>
      </form>
    </>
  );
};
