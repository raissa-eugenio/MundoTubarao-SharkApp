// src/pages/Login.jsx
import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      // Salva usuário e token
      localStorage.setItem("user", JSON.stringify(response.data));
      if (response.data.token) localStorage.setItem("token", response.data.token);

      setUser(response.data);

      if (response.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/principal");
      }

    } catch (err) {
      alert(err.response?.data?.error || "Email ou senha incorretos");
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSide}>
        <img src="../../public/login.jpg" alt="Tubarão" />
      </div>

      <div className={styles.rightSide}>
        <div className={styles.back} onClick={() => navigate("/")}>← Voltar</div>
        <h1>Entre já</h1>

        <form className={styles.form} onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.loginBtn}>Entrar</button>
        </form>

        <p className={styles.registerText}>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}
