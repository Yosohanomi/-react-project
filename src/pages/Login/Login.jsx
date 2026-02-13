import styles from "./Login.module.css";
import { InputForm } from "../../components/InputForm/InputForm";
import { YellowBtn } from "../../components/YellowBtn/YellowBtn";
import { Container } from "../../components/Container/Container";
import { Logo } from "../../components/Logo/Logo";

export const Login = () => {
  return (
    <div className={styles.login}>
      <Logo secondClass={styles.pos__logo} />

      <Container>
        <div className={styles.login__buttons}>
          <button className={styles.login__btn}>Реєстрація</button>
          <button className={styles.login__btn}>Вхід</button>
        </div>

        <h2 className={styles.login__title}>Вхід</h2>

        <div className={styles.login__thumb}>
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
            secondClass={styles.login__login}
          />
        </div>

        
      </Container>
      <p className={styles.rights}>
          © 2025 Зернятко. Всі права захищені.
        </p>
    </div>
  );
};
