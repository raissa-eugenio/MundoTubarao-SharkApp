import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Cadastro.module.css";
import axios from "axios";

export default function Cadastro() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/auth/register", {
        name,
        email,
        password,
      });

      alert("Conta criada com sucesso!");
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.error || "Erro ao cadastrar");
    }
  }

  return (
    <div className={styles.container}>

           {/* LADO ESQUERDO */}
           <div className={styles.leftSide}>
             <img src="../../public/cadastro.jpg" alt="Tubarão" />
           </div>

      {/* DIREITA */}
      <div className={styles.rightSide}>
        <div className={styles.back} onClick={() => navigate(-1)}>
          ← Voltar
        </div>

        <h1 className={styles.title}>Cadastrar-se</h1>

        <form className={styles.form} onSubmit={handleRegister}>

          <label>Nome</label>
          <input 
            type="text" 
            placeholder="Fulano da Silva" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label>Email</label>
          <input 
            type="email" 
            placeholder="nome@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input 
            type="password" 
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className={styles.loginBtn}>Criar Conta</button>
        </form>

        <p className={styles.footerText}>
          Já tem conta?{" "}
          <Link to="/login" className={styles.link}>
            Vá para o Login
          </Link>
        </p>

      </div>
    </div>
  );
}
