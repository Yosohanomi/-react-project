import styles from "./Register.module.css";
import { InputForm } from "../../components/InputForm/InputForm";
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";

export const Register = () => {
  return (
    <div className={styles.register}>
      <Logo secondClass={styles.pos__logo} />

      <Container>
        <div className={styles.register__buttons}>
          <button className={styles.register__btn}>Реєстрація</button>
          <button className={styles.register__btn}>Вхід</button>
        </div>

        <h2 className={styles.register__title}>Реєстрація</h2>

        <div className={styles.register__thumb}>
        <InputForm
            label="Імʼя*"
            id="name"
            type="text"
            placeholder="Ваше ім’я"
          />
          <InputForm
            label="Номер телефону*"
            id="phone"
            type="tel"
            placeholder="+38 (0__) ___-__-__"
          />
          <InputForm
            label="Пароль*"
            id="password"
            type="password"
            placeholder="********"
          />

          <YellowBtn
            text="Увійти"
            secondClass={styles.register__login}
          />
        </div>

        
      </Container>
      <p className={styles.rights}>
          © 2025 Зернятко. Всі права захищені.
        </p>
    </div>
  );
};
