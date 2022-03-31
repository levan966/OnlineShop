import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const ActivitiIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overly}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/lf30_editor_qcmcwsnd.json")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  overly: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.8,
    backgroundColor: "white",
  },
});

export default ActivitiIndicator;
