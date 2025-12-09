import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}><img src="../public/semfundo-claro.png" alt="logo" /></div>
      <p>© 2025 Mundo dos Tubarões — Todos os direitos reservados</p>
    </footer>
  );
}
