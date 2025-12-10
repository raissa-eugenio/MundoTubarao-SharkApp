// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import styles from "./Admin.module.css";

const API = "http://localhost:3000";

export default function Admin() {
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    img: "",
    nome: "",
    cientifico: "",
    classificacao: "",
    caracteristicas: "",
    habitat: "",
    populacao: "",
    curiosidades: "",
  });

  // ============================
  //  PROTEÇÃO DE ROTA / LOGIN
  // ============================
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || user.role !== "ADMIN" || !token) {
      alert("Acesso negado!");
      window.location.href = "/";
      return;
    }

    loadData();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // ============================
  //      CARREGAR DADOS
  // ============================
  async function loadData() {
    try {
      const token = localStorage.getItem("token");

      const cardsRes = await fetch(`${API}/admin/cards`, {
  headers: { Authorization: `Bearer ${token}` }
});

const usersRes = await fetch(`${API}/admin/users`, {
  headers: { Authorization: `Bearer ${token}` }
});

      const usersData = await usersRes.json();
      setUsers(usersData);

    } catch (err) {
      console.error("Erro ao carregar dados:", err);
    }
  }

  // ============================
  //      ADICIONAR CARD
  // ============================
  async function addCard(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/admin/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const erro = await res.text();
        console.error("Erro do backend:", erro);
        throw new Error("Erro ao adicionar card");
      }

      setForm({
        img: "",
        nome: "",
        cientifico: "",
        classificacao: "",
        caracteristicas: "",
        habitat: "",
        populacao: "",
        curiosidades: "",
      });

      loadData();
    } catch (err) {
      console.error("Erro ao adicionar card:", err);
      alert("Erro ao adicionar card");
    }
  }

  // ============================
  //      EXCLUIR CARD
  // ============================
  async function deleteCard(id) {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/admin/cards/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }

      });

      if (!res.ok) throw new Error("Erro ao deletar");

      loadData();
    } catch (err) {
      console.error("Erro ao deletar card:", err);
      alert("Erro ao deletar card");
    }
  }

  // ============================
  //           LOGOUT
  // ============================
  async function handleLogout() {
    const token = localStorage.getItem("token");
    try {
      await fetch(`${API}/auth/logout`, {
        method: "POST",
       headers: { Authorization: `Bearer ${token}` }

      });
    } catch (err) {
      console.warn("Erro no logout remoto", err);
    }

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  // ============================
  //           LAYOUT
  // ============================
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1>Painel Administrativo</h1>
            <p>Gerencie o conteúdo do Mundo dos Tubarões</p>
          </div>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Sair
          </button>
        </div>
      </header>

      <main className={styles.main}>

        {/* FORM DE NOVO CARD */}
        <section className={styles.card}>
          <h2>Novo Card</h2>

          <form onSubmit={addCard} className={styles.form}>
            {Object.keys(form).map((campo) => (
              <input
                key={campo}
                name={campo}
                placeholder={campo}
                value={form[campo]}
                onChange={handleChange}
                required
              />
            ))}
            <button type="submit">Adicionar</button>
          </form>
        </section>

        {/* LISTA DE CARDS */}
        <section className={styles.card}>
          <h2>Cards Cadastrados</h2>

          <div className={styles.grid}>
            {cards.map((card) => (
              <div key={`card-${card.id}`} className={styles.sharkCard}>
                <strong>{card.nome}</strong>
                <small>{card.cientifico}</small>
                <button onClick={() => deleteCard(card.id)}>
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* LISTA DE USUÁRIOS */}
        <section className={styles.card}>
          <h2>Usuários Cadastrados</h2>

          <ul className={styles.users}>
            {users.map((u) => (
              <li key={`user-${u.id}`}>🧑 {u.email}</li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}
