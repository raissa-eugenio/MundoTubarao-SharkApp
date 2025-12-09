import React from "react";
import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useScrollToTop } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function Sobre() {
  
  const navigation = useNavigation<any>();
   const scrollRef = useRef<ScrollView>(null);
    useScrollToTop(scrollRef);

     useFocusEffect(
    useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <ScrollView ref={scrollRef} style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mundo dos Tubarões</Text>

       <TouchableOpacity
  style={styles.headerButton}
  onPress={() => navigation.replace("Inicio")}
>
  <Text style={styles.headerButtonText}>Sair</Text>
</TouchableOpacity>
      </View>

      {/* INTRO */}
      <View style={styles.section}>
        <Text style={styles.introText}>
          O Mundo dos Tubarões é uma plataforma educativa dedicada a compartilhar
          conhecimento sobre os tubarões e sua importância para o equilíbrio dos
          oceanos.
        </Text>
      </View>

      {/* MISSÃO */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nossa Missão</Text>
        <Text style={styles.cardText}>
          Promover informação científica acessível sobre os tubarões, combater
          mitos e incentivar a preservação das espécies marinhas.
        </Text>
      </View>

      {/* O QUE FAZEMOS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>O que fazemos</Text>

        <Text style={styles.subTitle}>Pesquisa científica</Text>
        <Text style={styles.cardText}>
          Reunimos dados confiáveis sobre espécies de tubarões, seus hábitos,
          habitats e papel ecológico.
        </Text>

        <Text style={styles.subTitle}>Educação ambiental</Text>
        <Text style={styles.cardText}>
          Criamos conteúdo educativo para conscientizar a população sobre a
          importância da conservação marinha.
        </Text>
      </View>

      {/* SEGUNDA MISSÃO */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nosso Compromisso</Text>
        <Text style={styles.cardText}>
          Atuar com responsabilidade, ética e compromisso ambiental, buscando
          sempre respeitar os ecossistemas marinhos e estimular a preservação da
          vida oceânica.
        </Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>

        <Text style={styles.copy}>
          © 2025 Mundo dos Tubarões. Todos os direitos reservados.
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f6fb",
  },

  /* HEADER */
  header: {
    backgroundColor: "#0a2a43",
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  /* INTRO */
  section: {
    padding: 16,
  },
  introText: {
    color: "#333",
    fontSize: 14,
    lineHeight: 20,
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111",
  },
  cardText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  subTitle: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#333",
  },

  /* FOOTER */
  footer: {
    alignItems: "center",
    padding: 20,
  },
  footerButton: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  footerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  copy: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
