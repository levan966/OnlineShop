import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netIfno = useNetInfo();
  if (netIfno.type !== "unknown" && !netIfno.isInternetReachable)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
  },
});
