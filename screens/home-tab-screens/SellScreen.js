import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ProductPhotoCreation from "../../components/sell-view/ProductPhotoCreation";
import { Ionicons } from "@expo/vector-icons";
import ProductDetailCreation from "../../components/sell-view/ProductDetailCreation";

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
              {/* <Ionicons name="ios-arrow-back" size={30} /> */}
              <Text style={{ fontSize: 15, fontFamily: "Montserrat-Medium" }}>
                Cancel
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10,
                width: "100%"
              }}
              onPress={() => navigation.navigate("Product Detail")}
            >
              <Text style={{ fontSize: 15, fontFamily: "Montserrat-Medium" }}>
                Next
              </Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetailCreation}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20, width: "100%" }}
              onPress={() => navigation.popToTop()}
            >
              <Ionicons name="ios-arrow-back" size={30} />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default SellScreen;

const styles = StyleSheet.create({});
