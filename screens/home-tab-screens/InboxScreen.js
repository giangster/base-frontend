import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../components/profile-view/Profile";
import InboxTabs from "../../components/inbox-view/InboxTabs";

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
      <Stack.Screen name="Inbox" component={InboxTabs} />
    </Stack.Navigator>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({});
