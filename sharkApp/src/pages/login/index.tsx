import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation<any>();

  // ✅ ADICIONADO
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ ADICIONADO
  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://192.168.56.1:3000/auth/login",
        { email, password }
      );

      await AsyncStorage.setItem("user", JSON.stringify(res.data));

      if (res.data.token) {
        await AsyncStorage.setItem("token", res.data.token);
      }

      // mesmo comportamento do web
      navigation.replace("Main");

    } catch (err: any) {
      Alert.alert(
        "Erro",
        err.response?.data?.error || "Email ou senha incorretos"
      );
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/login.jpg")}
          style={styles.headerImage}
          resizeMode="cover"
        />

        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

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

        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}                 // ✅
          onChangeText={setEmail}       // ✅
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#999"
          value={password}              // ✅
          onChangeText={setPassword}    // ✅
        />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleLogin}         // ✅
          disabled={loading}
        >
          <Text style={styles.primaryButtonText}>
            {loading ? "Entrando..." : "Entrar"}
          </Text>
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
  footer: {
    backgroundColor: "#0a2a43",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  
  footerText: {
    color: "#ffffff",
    fontSize: 12,
    marginBottom: 6,
  },
  
  footerLink: {
    color: "#1e90ff",
    fontSize: 13,
    fontWeight: "bold",
  },
  
});
