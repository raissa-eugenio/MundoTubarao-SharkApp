// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    img: "",
    nome: "",
    cientifico: "",
    classificacao: "",
    caracteristicas: "",
    habitat: "",
    populacao: "",
    curiosidades: ""
  });

  // ⚠️ Pegando token do admin do localStorage
  const TOKEN = localStorage.getItem("adminToken");

  // 🔒 Proteção: redireciona se não tiver token
  useEffect(() => {
    if (!TOKEN) navigate("/");
  }, [TOKEN, navigate]);

  // 🔹 Função para carregar cards
  async function loadCards() {
    try {
      const res = await fetch("http://localhost:3000/cards", {
        headers: { Authorization: `Bearer ${TOKEN}` }
      });
      const data = await res.json();
      setCards(data);
    } catch (err) {
      console.error("Erro ao carregar cards:", err);
    }
  }

  // 🔹 Carregar cards ao montar componente
  useEffect(() => {
    loadCards();
  }, []);

  // 🔹 Atualiza formulário ao digitar
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // 🔹 Editar: preenche formulário
  function handleEdit(card) {
    setForm({ ...card });
    setEditingId(card.id);
  }

  // 🔹 Excluir card
  async function handleDelete(id) {
    if (!window.confirm("Excluir este card?")) return;

    try {
      await fetch(`http://localhost:3000/cards/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${TOKEN}` }
      });
      // Atualiza a lista de cards após exclusão
      setCards(cards.filter(c => c.id !== id));
    } catch (err) {
      console.error("Erro ao excluir card:", err);
    }
  }

  // 🔹 Criar ou atualizar card
  async function handleSubmit(e) {
    e.preventDefault();

    const url = editingId
      ? `http://localhost:3000/cards/${editingId}`
      : "http://localhost:3000/cards";
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (editingId) {
        // Atualiza o card na lista
        setCards(cards.map(c => (c.id === editingId ? data : c)));
      } else {
        // Adiciona novo card à lista
        setCards([...cards, data]);
      }

      // Resetar formulário
      setEditingId(null);
      setForm({
        img: "",
        nome: "",
        cientifico: "",
        classificacao: "",
        caracteristicas: "",
        habitat: "",
        populacao: "",
        curiosidades: ""
      });
    } catch (err) {
      console.error("Erro ao salvar card:", err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Painel Admin</h1>
        <button
          className={styles.logoutButton}
          onClick={() => {
            localStorage.removeItem("adminToken");
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>

      {/* 🔹 FORMULÁRIO */}
      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.keys(form).map(key => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            required={key === "img" || key === "nome"} // img e nome obrigatórios
          />
        ))}

        <button type="submit" className={styles.logoutButton}>
          {editingId ? "Salvar Alterações" : "Criar Card"}
        </button>
      </form>

      {/* 🔹 LISTA DE CARDS */}
      <h2 className={styles.cardsheader}>Cards Criados</h2>

      <div className={styles.grid}>
        {cards.map(card => (
          <div key={card.id} className={styles.sharkCard}>
            <img src={card.img} alt={card.nome} />
            <h3>{card.nome}</h3>

            <button onClick={() => handleEdit(card)}>✏️ Editar</button>
            <button onClick={() => handleDelete(card.id)}>🗑️ Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}
