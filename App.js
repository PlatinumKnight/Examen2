import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation1 from "./Navigations/StackNavigation1";
import CineProvider from "./Context/CineContext";
export default function App() {
  return (
    <CineProvider>
      <NavigationContainer>
        <StackNavigation1 />
      </NavigationContainer>
    </CineProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
