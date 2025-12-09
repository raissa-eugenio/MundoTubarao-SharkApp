import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sobre</Text>

      <Button
        title="Ir para Principal"
        onPress={() => navigation.navigate("Principal")}
      />
    </View>
  );
}
