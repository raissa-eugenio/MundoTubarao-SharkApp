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
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Great_white_shark_south_africa.jpg/250px-Great_white_shark_south_africa.jpg?utm_source=chatgpt.com",
      title: "Tubarão-branco",
      text: "O tubarão-branco (Carcharodon carcharias) é um dos predadores mais conhecidos dos oceanos. Pode atingir mais de 6 metros de comprimento e pesar cerca de 2 toneladas. ",
      updated: "Last updated 3 mins ago",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Tiger_shark.jpg?utm_source=chatgpt.com",
      title: "tubarão-tigre",
      text: "O tubarão-tigre (Galeocerdo cuvier) é um dos maiores tubarões do mundo, podendo chegar a 5 metros de comprimento. Recebe esse nome por causa das listras escuras no corpo, mais visíveis quando jovem.",
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
