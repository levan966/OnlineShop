import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const NewLIstingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewLIstingButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    borderRadius: 40,
    borderWidth: 10,
    borderColor: colors.white,
    backgroundColor: colors.primary,
  },
});
