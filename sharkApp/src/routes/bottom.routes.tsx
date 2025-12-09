import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Principal from "../pages/principal";
import Sobre from "../pages/sobre";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: any;

          if (route.name === "Principal") {
            iconName = focused ? "home" : "home-outline";
          }

          if (route.name === "Sobre") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },

        tabBarActiveTintColor: "#1e90ff",
        tabBarInactiveTintColor: "#999",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          paddingBottom: 6,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      })}
    >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarLabel: "Início",
        }}
      />

      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: "Sobre",
        }}
      />
    </Tab.Navigator>
  );
}
