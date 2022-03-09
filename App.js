import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import Card from "./app/components/Card";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  // return <LoginScreen  />
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f8f4f4",
    // paddingTop: 100,
    // padding: 20,
  },
});
