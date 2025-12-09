import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página Login</Text>

      <Button
        title="Entrar (Principal)"
        onPress={() => navigation.navigate("Principal")}
      />

      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />

      <Button
        title="Voltar para Início"
        onPress={() => navigation.navigate("Inicio")}
      />
    </View>
  );
}
