import React from "react";
import styles from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({ nome = "Fulano da Silva" }) {
  const navigate = useNavigate();

  // Função para pegar iniciais automaticamente
  const getIniciais = (nome) => {
    const partes = nome.trim().split(" ");
    if (partes.length === 1) return partes[0][0].toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  };

  const iniciais = getIniciais(nome);

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.logo}>
        <img src="/semfundo-escura.png" alt="logo" />
        Mundo dos Tubarões
      </div>

      {/* LINKS */}
      <ul className={styles.navLinks}>
        <li><Link to="/principal">Início</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>

      {/* AVATAR DO USUÁRIO */}
      <div className={styles.usuario}>
        <div className={styles.avatar}>{iniciais}</div>
        <span className={styles.nomeUsuario}>{nome}</span>
      </div>
    </nav>
  );
}
