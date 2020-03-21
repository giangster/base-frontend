import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Market from "../components/market-view/Market";
import ProductListing from "../components/product/ProductListing";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const MarketScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "black",
          fontSize: 20,
          fontFamily: "Acronym-ExtraBlack"
        }
      }}
    >
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen
        name="Product"
        component={ProductListing}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20, width: "100%" }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="ios-arrow-back" size={30} />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default MarketScreen;
