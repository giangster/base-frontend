import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Market from "../components/market-view/Market";
import ProductListing from "../components/product/ProductListing";

const Stack = createStackNavigator();

const MarketScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="Product" component={ProductListing} />
    </Stack.Navigator>
  );
};

export default MarketScreen;
