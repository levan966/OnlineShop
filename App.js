import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
