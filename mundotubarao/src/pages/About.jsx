import React from "react";
import styles from "./About.module.css";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function About() {
    return (
        <div className={styles.container}>
            <Nav nome="Fulano da Silva" />

            {/* TÍTULO */}
            <h1 className={styles.title}>Sobre Nós</h1>

            {/* BLOCO PRINCIPAL (texto + imagens) */}
            <section className={styles.content}>

                {/* TEXTO */}
                <div className={styles.textBlock}>
                    <p>
                        Os oceanos sempre despertaram um misto de mistério e encanto. Entre suas águas profundas vivem criaturas que carregam milhões de anos de história — silenciosas, elegantes e fundamentais para o equilíbrio da vida marinha. Entre elas, os tubarões ocupam um lugar especial.Eles são os guardiões do mar, os arquitetos invisíveis que mantêm os ecossistemas saudáveis, diversos e vibrantes.
                        <br />
                        No Mundo dos Tubarões, acreditamos que compreender é o primeiro passo para preservar. Por isso, nossa missão começa com algo simples, mas transformador: conectar pessoas ao universo dos tubarões por meio da informação, da curiosidade e da beleza.
                        Vivemos em um tempo em que esses animais ainda são vistos com medo e incompreensão, e é justamente por isso que escolhemos contar suas histórias — histórias que revelam sua importância, sua vulnerabilidade e sua surpreendente complexidade.
                        <br />
                        Cada espécie tem um papel, cada comportamento tem um propósito e cada encontro com eles traz uma lição sobre equilíbrio, respeito e coexistência. Nosso compromisso é iluminar tudo aquilo que, por muito tempo, ficou submerso:
                        a ciência, os mitos quebrados, a conservação, a urgência de protegê-los e o impacto que sua sobrevivência tem no futuro do planeta.
                        <br />
                        Aqui, mergulhamos fundo para compartilhar conteúdo que inspira. Trabalhamos para que cada pessoa que chega até nós possa sentir o encanto que nós sentimos — aquele mesmo arrepio de admiração que se tem ao observar um tubarão deslizando pelo oceano com força e delicadeza ao mesmo tempo.
                        E, mais do que isso, queremos que cada visitante saia daqui acreditando que também tem um papel na preservação dessas criaturas incríveis.
                        <br />
                        O Mundo dos Tubarões é mais que um site. É um convite.
                        Um convite para olhar o mar com novos olhos, para entender os tubarões não como monstros, mas como parte essencial da nossa própria sobrevivência.
                        É um convite para admirar, respeitar e proteger.

                        Porque quando protegemos os tubarões, protegemos o oceano.
                        E quando protegemos o oceano, cuidamos da vida na Terra.
                    </p>
                </div>

                {/* GRID DE 3 IMAGENS (1 grande em cima, 2 pequenas embaixo) */}
                <div className={styles.galeria}>
                    <img src="/public/card1.jpg" className={styles.img1} />
                    <img src="/public/card2.jpg" className={styles.img2} />
                    <img src="/public/card1.jpg" className={styles.img3} />
                </div>
            </section>

            {/* CARDS DA MISSÃO E O QUE FAZEMOS */}
            <section className={styles.cardsSection}>
                <div className={styles.card}>
                    <h3>Nossa Missão</h3>
                    <p>
                        Nossa missão nasce do profundo respeito pelo oceano e da certeza de que cada ser que habita suas águas desempenha um papel vital no equilíbrio da vida. No Mundo dos Tubarões, acreditamos que a conservação começa com o conhecimento — e o conhecimento começa com uma boa história.
                        <br />
                        Queremos transformar a maneira como o mundo vê os tubarões.
                        Queremos quebrar mitos, espalhar verdades e mostrar que, por trás das barbatanas que cortam a superfície, existe muito mais do que medo: existe força, beleza, sabedoria e uma importância ecológica que não pode ser ignorada.
                        <br />
                        Nossa missão é educar, inspirar e proteger.
                        <br />
                        <ul>
                            <li> Educamos, trazendo informações claras, acessíveis e científicas sobre cada espécie, cada comportamento e cada detalhe que faz desses animais criaturas tão fascinantes.</li>

                            <li> Inspiramos, mostrando sua verdadeira essência — não como predadores sem consciência, mas como pilares essenciais dos mares.</li>

                            <li> Protegemos, ao incentivar a consciência ambiental e ações que contribuem para sua preservação.</li>

                        </ul>

                        Queremos que cada pessoa que passa por aqui sinta que faz parte de algo maior.
                        Que cada leitura seja um mergulho.
                        Que cada descoberta acenda uma chama de cuidado e responsabilidade.
                        Porque proteger os tubarões não é uma escolha.
                        É uma necessidade.
                        É um compromisso com o futuro do oceano — e com o futuro de todos nós.
                    </p>
                </div>

                <div className={styles.card}>
                    <h3>O que Fazemos</h3>
                   <p>
  Nosso trabalho nasce do desejo de mudar a relação entre o ser humano e o oceano. 
  Cada ação que realizamos é guiada pela certeza de que proteger os tubarões é proteger a vida como um todo — 
  e que somente através da informação, da ciência e da empatia podemos transformar realidades.
  <br />
  No Mundo dos Tubarões, atuamos diariamente para aproximar as pessoas desse universo incrível, 
  mostrando que cada espécie, cada comportamento e cada detalhe dos oceanos tem valor e merece ser conhecido.
  Não buscamos apenas apresentar fatos: buscamos conectar, emocionar e despertar consciência.
  <br />
  Nosso propósito é claro:
  <ul>
      <li>
          Realizamos pesquisas e estudos sobre espécies de tubarões, reunindo dados atualizados e confiáveis 
          para que qualquer pessoa — do curioso ao pesquisador — encontre conhecimento acessível e de qualidade.
      </li>

      <li>
          Produzimos conteúdo educativo, desde artigos e curiosidades até análises científicas, 
          sempre de forma clara e responsável, para aproximar o mundo da ciência do público geral.
      </li>

      <li>
          Trabalhamos em colaboração com ONGs, institutos marinhos e projetos independentes dedicados 
          à preservação dos tubarões, reforçando iniciativas que realmente geram impacto.
      </li>

      <li>
          Promovemos campanhas de conscientização sobre pesca predatória, extinção de espécies, 
          poluição oceânica e proteção dos habitats naturais.
      </li>

      <li>
          Levamos informação para escolas, redes sociais e comunidades, acreditando que 
          a educação é a ferramenta mais poderosa para transformar o futuro dos oceanos.
      </li>
  </ul>

  Cada passo que damos é movido pela vontade de criar um mundo onde os tubarões sejam vistos não como vilões,
  mas como guardiões essenciais do equilíbrio marinho.
  Nosso trabalho é constante, apaixonado e comprometido — 
  porque cuidar dos tubarões é cuidar da história do oceano e do futuro que queremos deixar para as próximas gerações.
</p>


                </div>
            </section>
           
          <Footer />
        </div> 
        
    );
}
