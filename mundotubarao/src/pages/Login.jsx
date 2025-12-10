// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(res.data));
      if (res.data.token) localStorage.setItem("token", res.data.token);
      setUser(res.data);
      res.data.role === "ADMIN" ? navigate("/admin") : navigate("/principal");
    } catch (err) {
      alert(err.response?.data?.error || "Email ou senha incorretos");
    }
  }

  return (
    <div className={styles.loginPage}>
      {/* Lado esquerdo com imagem */}
      <div className={styles.leftSide}>
        <img src="/login.jpg" alt="Tubarão" />
      </div>

      {/* Lado direito com formulário */}
      <div className={styles.rightSide}>
        <div className={styles.back} onClick={() => navigate("/")}>
          ← Voltar
        </div>
        <h1 className={styles.title}>Entre já</h1>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button className={styles.loginBtn} type="submit">Entrar</button>
        </form>
        <p className={styles.registerText}>
          Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}
