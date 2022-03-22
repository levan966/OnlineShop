import React from "react";
import LottieView from "lottie-react-native";
import Screen from "./Screen";

const ActivitiIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <Screen>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/lf30_editor_njoy65gd.json")}
      />
    </Screen>
  );
};

export default ActivitiIndicator;
