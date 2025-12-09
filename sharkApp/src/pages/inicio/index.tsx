import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";

/* ================= FLIP CARD ================= */
function FlipCard({
  pergunta,
  resposta,
}: {
  pergunta: string;
  resposta: string;
}) {
  const rotation = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: `${interpolate(rotation.value, [0, 180], [0, 180])}deg`,
      },
    ],
  }));

  const backStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: `${interpolate(rotation.value, [0, 180], [180, 360])}deg`,
      },
    ],
  }));

  function flip() {
    rotation.value = withTiming(flipped ? 0 : 180, { duration: 600 });
    setFlipped(!flipped);
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={flip}>
      <View style={styles.flipContainer}>
        <Animated.View style={[styles.card, styles.front, frontStyle]}>
          <Text style={styles.cardText}>{pergunta}</Text>
        </Animated.View>

        <Animated.View style={[styles.card, styles.back, backStyle]}>
          <Text style={styles.cardBackText}>{resposta}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

/* ================= INICIO ================= */
export default function Inicio() {
  const navigation = useNavigation<any>();

  return (
<ScrollView
  style={{ flex: 1 }}
  contentContainerStyle={{ paddingBottom: 120 }}
>


      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/semfundo-claro.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Mundo dos Tubarões</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* DESTAQUES */}
      <Text style={styles.sectionTitle}>Explorar em Destaque</Text>

      <View style={styles.cardDestaque}>
        <Image
          source={require("../../assets/card1.jpg")}
          style={styles.destaqueImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.destaqueTitulo}>Tubarão Baleia</Text>
        </View>
      </View>

      <View style={styles.cardDestaque}>
        <Image
          source={require("../../assets/card2.jpg")}
          style={styles.destaqueImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.destaqueTitulo}>Tubarão Branco</Text>
        </View>
      </View>

      {/* CURIOSIDADES */}
      <Text style={styles.sectionTitle}>Descubra Curiosidades</Text>

      <FlipCard
        pergunta="O que torna os tubarões tão importantes para o oceano?"
        resposta="Eles mantêm o equilíbrio do ecossistema marinho."
      />

      <FlipCard
        pergunta="O que torna os tubarões predadores tão eficientes?"
        resposta="Sensores elétricos, olfato apurado e rapidez."
      />

      <FlipCard
        pergunta="O que torna os tubarões tão temidos?"
        resposta="Mitos criados pela mídia, não dados reais."
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Para saber mais curiosidades, cadastre-se ou faça login
        </Text>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.footerButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.copy}>© 2025 Mundo dos Tubarões</Text>
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

  content: {
    flexGrow: 1,
    paddingBottom: 80,
  },


  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#0a2a43",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoImage: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
  logoText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  loginText: {
    color: "#fff",
  },

  /* TITLES */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 16,
  },

  /* DESTAQUES */
  cardDestaque: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },
  destaqueImage: {
    width: "100%",
    height: 180,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
  },
  destaqueTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* FLIP CARDS */
  flipContainer: {
    height: 110,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    justifyContent: "center",
    padding: 16,
    backfaceVisibility: "hidden",
  },
  front: {
    backgroundColor: "#ffffff",
  },
  back: {
    backgroundColor: "#1e90ff",
    transform: [{ rotateY: "180deg" }],
  },
  cardText: {
    color: "#000",
    fontSize: 14,
  },
  cardBackText: {
    color: "#fff",
    fontSize: 14,
  },

  /* FOOTER */
  footer: {
    backgroundColor: "#0a2a43",
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  footerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  copy: {
    color: "#ccc",
    fontSize: 12,
  },
});
