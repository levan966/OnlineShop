import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { ListItem } from "../components/lists";

const ListingDetailsScreen = ({ route }) => {
  const { params } = route;
  return (
    <View>
      <Image style={styles.image} source={{ uri: params.image }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{params.title}</AppText>
        <AppText style={styles.price}>${params.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Sensei"
            subTitle="10 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
