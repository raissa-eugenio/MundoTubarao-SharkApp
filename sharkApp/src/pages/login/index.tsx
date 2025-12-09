import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
  const navigation = useNavigation<any>();

 return (
<ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/login.jpg")}
          style={styles.headerImage} resizeMode="cover"
        />

        {/* NAV */}
        <View style={styles.headerTop}>
          {/* VOLTAR */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

          {/* LOGO */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/semfundo-escura.png")}
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>Mundo dos Tubarões</Text>
          </View>
        </View>
      </View>


    {/* CARD LOGIN */}
    <View style={styles.loginCard}>
      <Text style={styles.cardTitle}>Entrar</Text>

      <Text style={styles.label}>
        Acesse sua conta do Mundo dos Tubarões
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.replace("Main")}
      >
        <Text style={styles.primaryButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou continue com</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerSmall}>
        Não tem conta?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Cadastre-se
        </Text>
      </Text>
    </View>

    {/* RODAPÉ */}
    <View style={styles.bottomInfo}>
      <Text style={styles.bottomTitle}>Explore o mundo marinho</Text>
      <Text style={styles.bottomText}>
        Conheça curiosidades, espécies fascinantes e descubra a importância
        dos tubarões para o equilíbrio dos oceanos.
      </Text>
    </View>
  </ScrollView>
);

}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
  },

  header: {
    height: 220,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  headerTop: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  backButton: {
    marginRight: 12,
    padding: 6,
  },
  backText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
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

  /* CARD */
  loginCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 12,
    padding: 16,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },

  label: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    marginBottom: 14,
  },

  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
  },

  primaryButton: {
    backgroundColor: "#2b6cb0",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
  },

  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  orText: {
    textAlign: "center",
    color: "#777",
    marginVertical: 12,
    fontSize: 12,
  },

  googleButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },

  googleButtonText: {
    fontSize: 13,
  },

  footerSmall: {
    textAlign: "center",
    marginTop: 14,
    fontSize: 12,
  },

  link: {
    color: "#2b6cb0",
    fontWeight: "bold",
  },

  /* FOOTER */
  bottomInfo: {
    backgroundColor: "#0a2a43",
    marginTop: 20,
    height: 200,
    padding: 20,
  },

  bottomTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 20,
  },

  bottomText: {
    color: "#cdd8e3",
    fontSize: 15,
  },
});
