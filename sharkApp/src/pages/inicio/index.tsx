import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página Início</Text>

      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
