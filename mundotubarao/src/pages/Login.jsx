import React from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login({navigation}) {
  return (
    <div className={styles.loginPage}>
      
      {/* LADO ESQUERDO - IMAGEM */}
      <div className={styles.leftSide}>
        <img src="/login.jpg" alt="Tubarão" />
      </div>

      {/* LADO DIREITO - FORMULÁRIO */}
      <div className={styles.rightSide}>
        <div className={styles.back} onClick={() => navigate(-1)}>← Voltar</div>
        <h1>Entre já</h1>

        <form className={styles.form}>
          <label>Email</label>
          <input type="email" placeholder="seuemail@email.com" />

          <label>Senha</label>
          <input type="password" placeholder="••••••••" />

          <a href="#" className={styles.forgotPassword}>Esqueceu sua senha?</a>

          <button className={styles.loginBtn}><a href="/principal">Entrar</a></button>

          <div className={styles.divider}>
            <span>ou</span>
          </div>

          <button className={styles.googleBtn}>Entrar com Google</button>
        </form>

        <p className={styles.registerText}>
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>

      </div>

    </div>
  );
}
