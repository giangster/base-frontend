import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductCreation from "../components/sell-view/ProductCreation";

const Stack = createStackNavigator();

const SellScreen = () => {
  // const navigation = useNavigation();
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
      <Stack.Screen name="Sell" component={ProductCreation} />
      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
};

export default SellScreen;

const styles = StyleSheet.create({});
