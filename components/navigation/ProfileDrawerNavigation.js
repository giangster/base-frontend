import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../profile-view/Profile";
import ProfileSettings from "../profile-view/ProfileSettings";
import ProfileScreen from "../../screens/home-tab-screens/ProfileScreen";

const Drawer = createDrawerNavigator();
const ProfileDrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
      <Drawer.Screen name="Home" component={ProfileScreen} />
      <Drawer.Screen name="Notifications" component={ProfileSettings} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawerNavigation;

const styles = StyleSheet.create({});
