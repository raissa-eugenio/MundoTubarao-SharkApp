import { useEffect, useState } from "react";

export default function Admin() {
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

  const TOKEN = "admin123"; // ⚠️ token simples provisório

  // 🔹 CARREGAR CARDS
 useEffect(() => {
  fetch("http://localhost:3000/admin/cards")
    .then(res => res.json())
    .then(data => {
      console.log(data); // 👀 debug
      setCards(data.cards || []);
    });
}, []);

  // 🔹 INPUT CONTROLADO
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // 🔹 EDITAR (puxa dados para o formulário)
  function handleEdit(card) {
    setForm({
      img: card.img,
      nome: card.nome,
      cientifico: card.cientifico || "",
      classificacao: card.classificacao || "",
      caracteristicas: card.caracteristicas || "",
      habitat: card.habitat || "",
      populacao: card.populacao || "",
      curiosidades: card.curiosidades || ""
    });
    setEditingId(card.id);
  }

  // 🔹 EXCLUIR
  async function handleDelete(id) {
    if (!window.confirm("Tem certeza que deseja excluir este card?")) return;

    await fetch(`http://localhost:3000/admin/cards/${id}`, {
      method: "DELETE",
      headers: { Authorization: TOKEN }
    });

    setCards(cards.filter(c => c.id !== id));
  }

  // 🔹 CRIAR OU ATUALIZAR
  async function handleSubmit(e) {
    e.preventDefault();

    const url = editingId
      ? `http://localhost:3000/admin/cards/${editingId}`
      : "http://localhost:3000/admin/cards";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: TOKEN
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (editingId) {
      setCards(cards.map(c => (c.id === editingId ? data.card : c)));
    } else {
      setCards([...cards, data.card]);
    }

    // reset
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
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Painel Admin</h1>

      {/* 🔹 FORMULÁRIO */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input name="img" placeholder="URL da Imagem" value={form.img} onChange={handleChange} required />
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input name="cientifico" placeholder="Nome científico" value={form.cientifico} onChange={handleChange} />
        <input name="classificacao" placeholder="Classificação" value={form.classificacao} onChange={handleChange} />
        <input name="caracteristicas" placeholder="Características" value={form.caracteristicas} onChange={handleChange} />
        <input name="habitat" placeholder="Habitat" value={form.habitat} onChange={handleChange} />
        <input name="populacao" placeholder="População" value={form.populacao} onChange={handleChange} />
        <input name="curiosidades" placeholder="Curiosidades" value={form.curiosidades} onChange={handleChange} />

        <button type="submit">
          {editingId ? "Salvar Alterações" : "Criar Card"}
        </button>
      </form>

      {/* 🔹 LISTA DE CARDS */}
      <h2>Cards Criados</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cards.map(card => (
          <div key={card.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "200px"
          }}>
            <img src={card.img} alt={card.nome} style={{ width: "100%" }} />
            <h3>{card.nome}</h3>

            <button onClick={() => handleEdit(card)}>✏️ Editar</button>
            <button onClick={() => handleDelete(card.id)}>🗑️ Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}
