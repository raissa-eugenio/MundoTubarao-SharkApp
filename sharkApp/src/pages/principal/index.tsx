import React, { useState } from "react";
import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const CARD_WIDTH = 170;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Principal() {
   const navigation = useNavigation<any>();
  const [openCard, setOpenCard] = useState<number | null>(null);
  const scrollRef = useRef<ScrollView>(null);
  useScrollToTop(scrollRef);

  const cardsTopo = [
    {
      img: require("../../assets/card1.jpg"),
      title: "Tubarões em destaque",
      text: "Conheça espécies fascinantes do oceano.",
    },
    {
      img: require("../../assets/card2.jpg"),
      title: "Importância ecológica",
      text: "Essenciais para o equilíbrio marinho.",
    },
  ];

  const dados = [
    {
      id: 1,
      img: require("../../assets/card1.jpg"),
      nome: "Tubarão Branco",
      cientifico: "Carcharodon carcharias",
      classificacao: "Perigoso",
      caracteristicas: "Grande porte e dentes serrilhados",
      habitat: "Águas temperadas",
      populacao: "≈ 3.500",
      curiosidades: "Detecta sangue a quilômetros",
    },
    {
      id: 2,
      img: require("../../assets/card2.jpg"),
      nome: "Tubarão Baleia",
      cientifico: "Rhincodon typus",
      classificacao: "Pacífico",
      caracteristicas: "Maior peixe do mundo",
      habitat: "Águas tropicais",
      populacao: "7.000 – 12.000",
      curiosidades: "Inofensivo aos humanos",
    },
  ];

  // divide em grupos de até 6 cards
  const grupos = [];

  for (let i = 0; i < dados.length; i += 6) {
    grupos.push(dados.slice(i, i + 6));
  } useFocusEffect(
    useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <ScrollView ref={scrollRef} style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Bem-vindo ao Mundo dos Tubarões
        </Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.replace("Inicio")}
        >
          <Text style={styles.headerButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* CARDS TOPO (EM COLUNA) */}
      <View style={styles.cardDeck}>
        {cardsTopo.map((card, index) => (
          <View key={index} style={styles.topCard}>
            <Image source={card.img} style={styles.cardImg} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardText}>{card.text}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.descubra}>Descubra mais</Text>

      {/* CARROSSEIS */}
      {grupos.map((grupo, index) => (
        <ScrollView
          key={index}
          horizontal
          snapToInterval={CARD_WIDTH + 16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carousel}
        >
          {grupo.map((item) => {
            const aberto = openCard === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                onPress={() =>
                  setOpenCard(aberto ? null : item.id)
                }
              >
                <View style={styles.flipCard}>
                  {!aberto ? (
                    <>
                      <Image source={item.img} style={styles.img} />
                      <Text style={styles.nome}>{item.nome}</Text>

                      <Text
                        style={[
                          styles.classificacao,
                          item.classificacao === "Perigoso"
                            ? styles.perigoso
                            : styles.pacifico,
                        ]}
                      >
                        {item.classificacao}
                      </Text>
                    </>
                  ) : (
                    <View style={styles.back}>
                      <Text style={styles.backTitle}>{item.nome}</Text>
                      <Text><Text style={styles.bold}>Científico:</Text> {item.cientifico}</Text>
                      <Text><Text style={styles.bold}>Características:</Text> {item.caracteristicas}</Text>
                      <Text><Text style={styles.bold}>Habitat:</Text> {item.habitat}</Text>
                      <Text><Text style={styles.bold}>População:</Text> {item.populacao}</Text>
                      <Text><Text style={styles.bold}>Curiosidades:</Text> {item.curiosidades}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ))}
    </ScrollView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6fb",
  },

  header: {
    padding: 20,
    backgroundColor: "#0a2a43",
  },
 headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
headerButton: {
  paddingHorizontal: 12,
  paddingVertical: 6,
},

headerButtonText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "bold",
},

  cardDeck: {
    padding: 16,
    gap: 16,
  },

  topCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },

  cardImg: {
    width: "100%",
    height: 140,
    borderRadius: 12,
  },

  cardTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },

  cardText: {
    color: "#555",
  },

  descubra: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },

  carousel: {
    paddingHorizontal: 16,
    paddingBottom: 25,
    gap: 16,
  },

  flipCard: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
    elevation: 8,
  },

  img: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },

  nome: {
    marginTop: 8,
    fontWeight: "bold",
  },

  classificacao: {
    marginTop: 8,
    padding: 6,
    borderRadius: 8,
    color: "#fff",
    textAlign: "center",
  },

  perigoso: {
    backgroundColor: "#d63b37",
  },

  pacifico: {
    backgroundColor: "#4caf50",
  },

  back: {
    gap: 6,
  },

  backTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
    textAlign: "center",
  },

  bold: {
    fontWeight: "bold",
  },
});
