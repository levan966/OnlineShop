import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigaitonTheme from "./app/navigation/navigaitonTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigaitonTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
