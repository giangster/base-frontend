import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import ProfileSubNav from "./ProfileSubNav";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProfileSettings from "./ProfileSettings";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <ProfileSubNav />
      <Text>mm</Text>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
