import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";


export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Lado Esquerdo - Imagem */}
      <div className={styles.leftSide}>
        <div className={styles.overlayDots}></div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className={styles.rightSide}>
        <div className={styles.back} onClick={() => navigate(-1)}>
          ← Voltar
        </div>
        <h1 className={styles.title}>Cadastrar-se</h1>

        <form className={styles.form}>

          <label>Nome</label>
          <input type="text" placeholder="Fulano Ciclano da Silva" />

          <label>Email:</label>
          <input type="email" placeholder="nome@gmail.com" />

          <label>Senha:</label>
          <input type="password" placeholder="********" />
          <button className={styles.loginBtn}>Entrar</button>
          <div className={styles.divider}>
            <span>ou</span>
          </div>
          <button className={styles.googleBtn}>Entrar com Google</button>
        </form>
        <p className={styles.footerText}>
          Já tem conta? <Link to="/login" className={styles.link}>Vá para o Login</Link>
        </p>
      </div>
    </div>
  );
}
