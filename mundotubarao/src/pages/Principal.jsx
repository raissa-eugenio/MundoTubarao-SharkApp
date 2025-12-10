import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Principal.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function Principal({ user }) {
  const [cards, setCards] = useState([]); // cards do topo
  const [tubaroes, setTubaroes] = useState([]); // grid dinâmico

  const token = localStorage.getItem("token");

  // Buscar cards do backend
  useEffect(() => {
    const loadCards = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/cards", {
          headers: token ? { Authorization: token } : {},
        });
        setTubaroes(res.data.cards || []);
      } catch (err) {
        console.log("Erro ao carregar cards:", err.response?.data?.error || err.message);
      }
    };
    loadCards();
  }, [token]);

  // Cards do topo (fixos)
  const cardsTopo = [
    {
      id: 1,
      img: "/card1.jpg",
      title: "Card title",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      updated: "Last updated 3 mins ago",
    },
    {
      id: 2,
      img: "/card2.jpg",
      title: "Card title",
      text: "This card has supporting text below as a natural lead-in to additional content.",
      updated: "Last updated 3 mins ago",
    },
  ];

  return (
    <div className={styles.container}>
      <Nav nome={user?.name} />

      {/* CARD DECK */}
      <div className={styles.cardDeck}>
        {cardsTopo.map((card) => (
          <div key={card.id} className={styles.card}>
            <img src={card.img} alt={card.title} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{card.title}</h5>
              <p className={styles.cardText}>{card.text}</p>
              <p className={styles.cardTextSmall}>
                <small>{card.updated}</small>
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.descubra}>Descubra mais</h2>

      {/* GRID DINÂMICO */}
      <div className={styles.grid}>
        {tubaroes.map((item) => (
          <div key={item.id} className={styles.flipCard}>
            <div className={styles.flipInner}>

              {/* FRENTE */}
              <div className={styles.flipFront}>
                <img src={item.img} alt={item.nome} className={styles.img} />
                <h3 className={styles.nome}>{item.nome}</h3>
                <span
                  className={`${styles.classificacao} ${
                    item.classificacao === "Perigoso"
                      ? styles.perigoso
                      : item.classificacao === "Pacífico"
                      ? styles.pacifico
                      : styles.atencao
                  }`}
                >
                  {item.classificacao}
                </span>
              </div>

              {/* VERSO */}
              <div className={styles.flipBack}>
                <h3>{item.nome}</h3>
                <p><strong>Nome científico:</strong> {item.cientifico}</p>
                <p><strong>Características:</strong> {item.caracteristicas}</p>
                <p><strong>Habitat:</strong> {item.habitat}</p>
                <p><strong>População:</strong> {item.populacao}</p>
                <p><strong>Curiosidades:</strong> {item.curiosidades}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
