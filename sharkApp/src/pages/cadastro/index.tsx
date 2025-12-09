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

export default function Cadastro() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/cadastro.jpg")}
          style={styles.headerImage}
          resizeMode="cover"
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

      {/* CARD CADASTRO */}
      <View style={styles.loginCard}>
        <Text style={styles.cardTitle}>Criar conta</Text>

        <Text style={styles.label}>
          Cadastre-se para explorar o Mundo dos Tubarões
        </Text>

        {/* ✅ NOVO CAMPO */}
        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Cadastrar</Text>
        </TouchableOpacity>
         <Text style={styles.orText}>ou continue com</Text>
        
              <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.googleButtonText}>Google</Text>
              </TouchableOpacity>

        <Text style={styles.footerSmall}>
          Já tem conta?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Fazer login
          </Text>
        </Text>
      </View>

      {/* FOOTER */}
      <View style={styles.bottomInfo}>
        <Text style={styles.bottomTitle}>Vida marinha</Text>
        <Text style={styles.bottomText}>
          Junte-se a nós e descubra curiosidades incríveis sobre os tubarões e
          os oceanos.
        </Text>
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

  /* HEADER */
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
    borderRadius: 20,
    padding: 20,
    marginTop: -40,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  label: {
    color: "#555",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },

  primaryButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  footerSmall: {
    textAlign: "center",
    marginTop: 16,
    color: "#666",
  },
  link: {
    color: "#1e90ff",
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

  /* BOTTOM */
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
