import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Carnes from "./src/Screens/Carnes";
import Mariscos from "./src/Screens/Mariscos";
import Bebida from "./src/Screens/Bebida";
import Ensalada from "./src/Screens/Ensalada";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Bebidas"
          component={Bebida}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Ensaladas"
          component={Ensalada}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Mariscos"
          component={Mariscos}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Carnes"
          component={Carnes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
