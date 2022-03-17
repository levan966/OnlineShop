import { StyleSheet, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch CCCCCC",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];
const ListingsScreen = (props) => {
  const navigation = useNavigation();
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            image={item.image}
            onPress={() =>
              navigation.navigate("ListingDetails", {
                title: item.title,
                image: item.image,
                id: item.id,
                price: item.price,
              })
            }
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
