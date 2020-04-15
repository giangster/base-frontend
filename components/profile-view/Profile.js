import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView
} from "react-native";
import ProfileSubNav from "./ProfileSubNav";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProfileSettings from "./ProfileSettings";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileTabs from "./ProfileTabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ProfileSubNav />
      <ProfileTabs />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({ container: { backgroundColor: "white" } });
