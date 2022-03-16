import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return console.log("not granted");
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      //// await Location.getForegroundPermissionsAsync() ar mushaobs radgan ar aqvs tavdapirveli lokacia, (an simulatori urevs an me), amitom Location.getCurrentPositionAsync() viyenebt
      setLocation({ latitude, longitude });
    } catch (error) {}
  };
  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
