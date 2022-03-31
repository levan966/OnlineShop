import React, { useEffect } from "react";
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
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      {loading && <ActivitiIndicator visible={loading} />}
      <Screen style={styles.screen}>
        {error && (
          <>
            <Text>Couldn't retrieve the listings.</Text>
            <AppButton title="Try again" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={`$ ${item.price}`}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </Screen>
    </>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
