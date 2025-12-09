import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "../pages/inicio";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Principal from "../pages/principal";
import Sobre from "../pages/sobre";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  );
}
