import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "../pages/inicio";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import BottomRoutes from "./bottom.routes";

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

      {/* TABS DE BAIXO */}
      <Stack.Screen name="Main" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
