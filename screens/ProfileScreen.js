import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Market from "../components/market-view/Market";
import ProductListing from "../components/product/ProductListing";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../components/profile-view/Profile";

const Stack = createStackNavigator();

const ProfileScreen = ({ navigation }) => {
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
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
