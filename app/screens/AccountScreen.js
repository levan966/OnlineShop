import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import routes from "../navigation/routes";
import Icon from "../components/Icon";
import { ListItem } from "../components/lists";
import { ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "config/colors";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          // image={require("../assets/mosh.jpg")}
          image={require("../assets/mosh.jpg")}
          title="Mosh"
          subTitle={"pro"}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
