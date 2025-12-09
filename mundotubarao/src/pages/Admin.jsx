import { useState } from "react";
import styles from "./Admin.module.css";

export default function Admin() {
  const [cards, setCards] = useState([]);
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

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addCard(e) {
    e.preventDefault();
    setCards([...cards, form]);
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
  }

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
  <div className={styles.headerContent}>
    <div>
      <h1>Painel Administrativo</h1>
      <p>Gerencie o conteúdo do Mundo dos Tubarões</p>
    </div>

    <button
      className={styles.logoutButton}
      onClick={() => window.location.href = "/"}
    >
      Sair
    </button>
  </div>
</header>

      <main className={styles.main}>
        {/* FORM CARD */}
        <section className={styles.card}>
          <h2>Novo Card – Descubra Mais</h2>

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

            <button type="submit">Adicionar Card</button>
          </form>
        </section>

        {/* LISTA DE CARDS */}
        <section className={styles.card}>
          <h2>Cards Cadastrados</h2>

          {cards.length === 0 && (
            <p className={styles.empty}>Nenhum card cadastrado.</p>
          )}

          <div className={styles.grid}>
            {cards.map((card, index) => (
              <div key={index} className={styles.sharkCard}>
                <strong>{card.nome}</strong>
                <span
                  className={`${styles.badge} ${
                    card.classificacao === "Perigoso"
                      ? styles.perigoso
                      : styles.pacifico
                  }`}
                >
                  {card.classificacao}
                </span>
                <small>{card.cientifico}</small>
              </div>
            ))}
          </div>
        </section>

        {/* USUÁRIOS */}
        <section className={styles.card}>
          <h2>Usuários Logados</h2>

          <ul className={styles.users}>
            <li>🧑 usuario1@email.com</li>
            <li>🧑 usuario2@email.com</li>
            <li>🧑 usuario3@email.com</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
