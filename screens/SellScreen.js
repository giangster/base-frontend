import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ProductPhotoCreation from "../components/sell-view/ProductPhotoCreation";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const SellScreen = ({ navigation }) => {
  const navigationBack = useNavigation();
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
      <Stack.Screen
        name="Sell"
        component={ProductPhotoCreation}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20, width: "100%" }}
              onPress={() => navigation.navigate("Shop")}
            >
              <Ionicons name="ios-arrow-back" size={30} />
            </TouchableOpacity>
          )
        }}
      />
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
