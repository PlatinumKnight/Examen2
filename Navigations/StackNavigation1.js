import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import AnotherScreen from "../Screens/AnotherScreen";
import Pantallas from "../Screens/Pantallas";

const Stack = createStackNavigator();

export default function StackNavigation1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, headerTitle: "Inicio" }}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Pantallas"
        component={Pantallas}
      />
    </Stack.Navigator>
  );
}
