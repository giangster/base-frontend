import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Market from "../components/market-view/Market";
import ProductListing from "../components/product/ProductListing";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../components/profile-view/Profile";

const Stack = createStackNavigator();

const InboxScreen = ({ navigation }) => {
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
      <Stack.Screen name="Inbox" component={Profile} />
    </Stack.Navigator>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({});
