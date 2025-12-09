import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../pages/inicio';
import Principal from '../pages/principal';
import Sobre from '../pages/sobre';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
        
      <Tab.Screen 
        name='Principal' 
        component={Principal} 
      />

      <Tab.Screen 
        name='Sobre' 
        component={Sobre} 
      />

    </Tab.Navigator>
  );
}
