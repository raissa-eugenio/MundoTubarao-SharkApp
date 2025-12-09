import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Principal() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página Principal</Text>

      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
}
