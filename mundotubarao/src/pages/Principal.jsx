import React, { useState } from "react";
import styles from "./Principal.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function Principal() {
  const [openCard, setOpenCard] = useState(null);

  // CARDS DO TOPO
  const cards = [
    {
      img: "/card1.jpg",
      title: "Card title",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      updated: "Last updated 3 mins ago",
    },
    {
      img: "/card2.jpg",
      title: "Card title",
      text: "This card has supporting text below as a natural lead-in to additional content.",
      updated: "Last updated 3 mins ago",
    },
  ];

  // DADOS DO GRID – VOCÊ DEVE EDITAR PARA OS TUBARÕES
  const dados = [
    {
      id: 1,
      img: "/card1.jpg",
      nome: "Tubarão Branco",
      cientifico: "Carcharodon carcharias",
      classificacao: "Perigoso",
      caracteristicas: "Grande porte, dentes serrilhados, rápido.",
      habitat: "Águas temperadas e costeiras.",
      populacao: "Cerca de 3.500 indivíduos.",
      curiosidades: "Pode detectar uma gota de sangue a quilômetros."
    },
    {
      id: 2,
      img: "/card2.jpg",
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Inofensivo",
      caracteristicas: "Maior peixe do mundo, alimentação por filtração.",
      habitat: "Águas tropicais.",
      populacao: "Entre 7.000 e 12.000 indivíduos.",
      curiosidades: "Apesar do tamanho, não representa risco aos humanos."
    },
        {
      id: 2,
      img: "/card2.jpg",
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Inofensivo",
      caracteristicas: "Maior peixe do mundo, alimentação por filtração.",
      habitat: "Águas tropicais.",
      populacao: "Entre 7.000 e 12.000 indivíduos.",
      curiosidades: "Apesar do tamanho, não representa risco aos humanos."
    },
        {
      id: 2,
      img: "/card2.jpg",
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Inofensivo",
      caracteristicas: "Maior peixe do mundo, alimentação por filtração.",
      habitat: "Águas tropicais.",
      populacao: "Entre 7.000 e 12.000 indivíduos.",
      curiosidades: "Apesar do tamanho, não representa risco aos humanos."
    },
         {
      id: 2,
      img: "/card2.jpg",
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Inofensivo",
      caracteristicas: "Maior peixe do mundo, alimentação por filtração.",
      habitat: "Águas tropicais.",
      populacao: "Entre 7.000 e 12.000 indivíduos.",
      curiosidades: "Apesar do tamanho, não representa risco aos humanos."
    },
         {
      id: 2,
      img: "/card2.jpg",
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Inofensivo",
      caracteristicas: "Maior peixe do mundo, alimentação por filtração.",
      habitat: "Águas tropicais.",
      populacao: "Entre 7.000 e 12.000 indivíduos.",
      curiosidades: "Apesar do tamanho, não representa risco aos humanos."
    },
         {
      id: 2,
      img: "/card2.jpg",
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Inofensivo",
      caracteristicas: "Maior peixe do mundo, alimentação por filtração.",
      habitat: "Águas tropicais.",
      populacao: "Entre 7.000 e 12.000 indivíduos.",
      curiosidades: "Apesar do tamanho, não representa risco aos humanos."
    },
         {
      id: 2,
      img: "/card2.jpg",
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Inofensivo",
      caracteristicas: "Maior peixe do mundo, alimentação por filtração.",
      habitat: "Águas tropicais.",
      populacao: "Entre 7.000 e 12.000 indivíduos.",
      curiosidades: "Apesar do tamanho, não representa risco aos humanos."
    },
  ];

  return (
    <div className={styles.container}>
      <Nav nome="Fulano da Silva" />

  

      {/* CARD DECK */}
     <div className={styles.cardDeck}>
  {cards.slice(0, 2).map((card, index) => (
    <div key={index} className={styles.card}>
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

      {/* TÍTULO */}
      <h2 className={styles.descubra}>Descubra mais</h2>

     {/* GRID DINÂMICO */}
<div className={styles.grid}>
  {dados.map((item) => (
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
