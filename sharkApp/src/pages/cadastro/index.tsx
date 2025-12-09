import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página Cadastro</Text>

      <Button
        title="Cadastrar e voltar para Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
