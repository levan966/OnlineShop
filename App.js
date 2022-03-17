import React from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigaitonTheme from "./app/navigation/navigaitonTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigaitonTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
