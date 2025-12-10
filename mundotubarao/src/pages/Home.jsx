// Home.jsx - Página completa igual à imagem
import React from "react";
import styles from "./Home.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

const questions = [
  {
    question: "O que torna os tubarões tão incríveis no oceano?",
    answer: "Eles são predadores essenciais para o equilíbrio marinho e possuem sentidos extremamente avançados."
  },
  {
    question: "Como os tubarões são importantes para o ecossistema?",
    answer: "Eles controlam populações de outras espécies, evitando desequilíbrios na cadeia alimentar."
  },
  {
    question: "Qual espécie de tubarão é considerada a mais veloz?",
    answer: "O tubarão-mako é considerado o mais rápido, podendo atingir até 70 km/h."
  },
  {
    question: "Como funciona a alimentação dos tubarões?",
    answer: "Depende da espécie: alguns comem peixes, outros plâncton e alguns são carnívoros oportunistas."
  },
  {
    question: "É verdade que tubarões têm múltiplas fileiras de dentes?",
    answer: "Sim! Eles possuem várias fileiras e novos dentes crescem constantemente."
  },
  {
    question: "Quais são as maiores espécies de tubarão já registradas?",
    answer: "O tubarão-baleia é o maior, podendo ultrapassar 18 metros de comprimento."
  },
  {
    question: "Os tubarões atacam humanos com frequência?",
    answer: "Não. Ataques são raros e geralmente acontecem por curiosidade ou confusão."
  },
  {
    question: "Há quanto tempo os tubarões existem?",
    answer: "Eles existem há mais de 400 milhões de anos, antes mesmo dos dinossauros."
  },
  {
    question: "Tubarões conseguem sentir cheiro de sangue?",
    answer: "Sim, eles possuem um olfato extremamente sensível, capaz de detectar pequenas quantidades."
  },
  {
    question: "Todos os tubarões precisam nadar para sobreviver?",
    answer: "Não. Algumas espécies conseguem respirar mesmo paradas."
  }
];


    return (


        <div className={styles.pageWrapper}>

            <nav className={styles.navbar}>
                <div className={styles.logo}><img src="../public/semfundo-claro.png" alt="logo" />Mundo dos Tubarões</div>

                <button
  className={styles.btnlogin}
  onClick={() => navigate("/login")}
>
  Login
</button>
            </nav>

            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1>
                        Explore e Fascine-se <br /> Com o Mundo dos Tubarões
                    </h1>
                </div>
            </section>


            <section className={styles.section}>
                <h2>Espécies em Destaque<img src="../public/icon.png" alt="icon" /></h2>


                <div className={styles.speciesGrid}>
                    <div className={styles.card}>
                        <img src="../public/Rectangle 5.png" alt="Tubarão Baleia" />
                        <h3>Tubarão Baleia</h3>
                        <button>Saiba Mais</button>
                    </div>
                    <div className={styles.card}>
                        <img src="../public/Rectangle 5.png" alt="Tubarão Baleia" />
                        <h3>Tubarão Baleia</h3>
                        <button>Saiba Mais</button>
                    </div>
                    <div className={styles.card}>
                        <img src="../public/Rectangle 5.png" alt="Tubarão Baleia" />
                        <h3>Tubarão Baleia</h3>
                        <button>Saiba Mais</button>
                    </div>
                    <div className={styles.card}>
                        <img src="../public/Rectangle 5.png" alt="Tubarão Baleia" />
                        <h3>Tubarão Baleia</h3>
                        <button>Saiba Mais</button>
                    </div>
                    <div className={styles.card}>
                        <img src="../public/Rectangle 5.png" alt="Tubarão Branco" />
                        <h3>Tubarão Branco</h3>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </section>


            <section className={styles.section2}>
      <h2>Perguntas que todo amante de tubarões já fez:</h2>

      <div className={styles.questionsGrid}>
        {questions.map((item, index) => (
          <div key={index} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.questionCard}>
                {item.question}
              </div>
              <div className={styles.answerCard}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


            <section className={styles.newsletter}>
                <h2>
                    Para Saber Mais Curiosidades, Cadastre-se <br /> e Venha fazer parte dessa
                    família
                </h2>
                <button className={styles.button}><Link to="/login" className={styles.button}>
                    Entrar
                </Link></button>

            </section>

<Footer/>
        </div>
    );
}