import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProductCard from "../market-view/ProductCard";
import Colors from "../../constants/Colors";

const Tab = createMaterialTopTabNavigator();

function SellingItems() {
  let arr = [1, 2, 3, 1];
  return (
    <FlatList
      data={arr}
      renderItem={({ item }) => (
        <TouchableHighlight
          style={{ flex: 0.5, flexDirection: "column", margin: 1 }}
        >
          <ProductCard />
        </TouchableHighlight>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index}
      style={{ paddingTop: 10 }}
    />
  );
}

function SoldItems() {
  let arr = [1];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>You haven't sold anything.</Text>
    </View>
  );
}

function SavedItems() {
  let arr = [1, 2, 3, 1, 2, 3, 1];
  return (
    <FlatList
      data={arr}
      renderItem={({ item }) => (
        <TouchableHighlight
          style={{ flex: 0.5, flexDirection: "column", margin: 1 }}
        >
          <ProductCard />
        </TouchableHighlight>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index}
      style={{ paddingTop: 10 }}
    />
  );
}

const ProfileTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: { backgroundColor: "white" },
        labelStyle: { fontFamily: "Montserrat-Medium" }
      }}
    >
      <Tab.Screen name="Selling" component={SellingItems} />
      <Tab.Screen name="Sold" component={SoldItems} />
      <Tab.Screen name="Saved" component={SavedItems} />
    </Tab.Navigator>
  );
};

export default ProfileTabs;

const styles = StyleSheet.create({});
