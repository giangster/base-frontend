import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../../profile-view/Profile";
import ProfileSettings from "../../profile-view/ProfileSettings";
import ProfileScreen from "../../../screens/home-tab-screens/ProfileScreen";
import CustomDrawer from "./CustomDrawerComponent";
import CustomerService from "../../profile-view/CustomerService";
import Info from "../../profile-view/Info";

const Drawer = createDrawerNavigator();
const ProfileDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="My page" component={ProfileScreen} />
      <Drawer.Screen name="Edit information" component={ProfileSettings} />
      <Drawer.Screen name="App info" component={Info} />
      <Drawer.Screen name="Customer service" component={CustomerService} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawerNavigation;

const styles = StyleSheet.create({});
