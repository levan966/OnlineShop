import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import ActivitiIndicator from "../components/ActivitiIndicator";
import AppButton from "../components/AppButton";

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title="Try again" onPress={loadListings} />
        </>
      )}
      {loading && <ActivitiIndicator visible={loading} />}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, {
                image: item.images[0].url,
                title: item.title,
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
