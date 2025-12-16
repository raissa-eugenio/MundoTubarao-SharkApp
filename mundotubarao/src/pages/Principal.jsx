import { useState } from "react";

export default function Principal() {
  // Array local de cards
  const [cards] = useState([
    {
      id: 1,
      nome: "Tubarão Branco",
      cientifico: "Carcharodon carcharias",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg",
    },
    {
      id: 2,
      nome: "Tubarão Martelo",
      cientifico: "Sphyrna lewini",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Great_Hammerhead_Shark.jpg",
    },
    {
      id: 3,
      nome: "Tubarão Tigre",
      cientifico: "Galeocerdo cuvier",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Tiger_Shark.jpg",
    },
  ]);

  return (
    <div>
      <h1>Cards de Tubarão 🦈</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {cards.map((card) => (
          <div key={card.id} style={{ border: "1px solid black", padding: "10px" }}>
            <h3>{card.nome}</h3>
            <p><i>{card.cientifico}</i></p>
            <img src={card.img} alt={card.nome} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
