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
import axios from "axios";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



const CARD_WIDTH = 170;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Principal() {
   const navigation = useNavigation<any>();
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [tubaroes, setTubaroes] = useState<any[]>([]);
  const [user, setUser] = useState<{ name: string } | null>(null);


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

  

  // divide em grupos de até 6 cards
  


  useEffect(() => {
    async function carregarTubaroes() {
      try {
        const token = await AsyncStorage.getItem("token");
  
        const res = await axios.get(
          "http://192.168.56.1:3000/admin/cards",
          {
            headers: token ? { Authorization: token } : {},
          }
        );
  
        console.log("Dados recebidos:", res.data);
        setTubaroes(res.data.cards || []);
      } catch (error: any) {
        console.log(
          "Erro ao carregar do backend:",
          error.response?.data || error.message
        );
      }
    }
  
    carregarTubaroes();
  }, []);
  
  const COLUNA_SIZE = 5;

const colunas: any[][] = [];
for (let i = 0; i < tubaroes.length; i += COLUNA_SIZE) {
  colunas.push(tubaroes.slice(i, i + COLUNA_SIZE));
}
const getIniciais = (nome: string) => {
  if (!nome) return "?";

  const partes = nome.trim().split(" ");

  if (partes.length === 1) {
    return partes[0][0].toUpperCase();
  }

  return (
    partes[0][0] + partes[partes.length - 1][0]
  ).toUpperCase();
};
useEffect(() => {
  async function carregarUsuario() {
    const userSalvo = await AsyncStorage.getItem("user");
    if (userSalvo) {
      setUser(JSON.parse(userSalvo));
    }
  }

  carregarUsuario();
}, []);


  return (
    <ScrollView ref={scrollRef} style={styles.container}>
      {/* HEADER */}
<View style={styles.navbar}>
  {/* LOGO + TÍTULO */}
  <View style={styles.logoArea}>
    <Text style={styles.logoText}>SharkApp</Text>
  </View>


  {/* USUÁRIO + SAIR */}
  <View style={styles.usuario}>
  <View style={styles.avatar}>
  <Text style={styles.avatarText}>
    {getIniciais(user?.name || "")}
  </Text>
</View>


    <TouchableOpacity
      style={styles.headerButton}
      onPress={async () => {
        await AsyncStorage.clear();
        navigation.replace("Inicio");
      }}
    >
      <Text style={styles.headerButtonText}>Sair</Text>
    </TouchableOpacity>
  </View>
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

      {/* GRID – 2 COLUNAS */}
<View style={styles.grid}>
  {tubaroes.map((item) => {
    const aberto = openCard === item.id;

    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.85}
        onPress={() => setOpenCard(aberto ? null : item.id)}
        style={styles.gridItem}
      >
        <View style={styles.flipCard}>
          {!aberto ? (
            <>
              <Image source={{ uri: item.img }} style={styles.img} />
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
</View>
  
</ScrollView>

  );
}

    

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6fb",
  },

  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#0a2a43",
  },
  
  logoArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  
  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  
  logoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  
  links: {
    flexDirection: "row",
    gap: 12,
  },
  
  link: {
    color: "#fff",
    fontSize: 14,
  },
  
  usuario: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#1e88e5",
    alignItems: "center",
    justifyContent: "center",
  },
  
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },
  
  headerButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  
  headerButtonText: {
    color: "#fff",
    fontWeight: "bold",
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

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  
  gridItem: {
    width: "48%", // ✅ 2 colunas perfeitas
    marginBottom: 16,
  },
  
  flipCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    elevation: 6,
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
