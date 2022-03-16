import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={item.icon}
          size={100}
          backgroundColor={item.backgroundColor}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    width: "33.3%",
  },
  label: {
    margin: 5,
    textAlign: "center",
  },
});
