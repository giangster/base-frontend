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
    // <Stack.Navigator
    //   screenOptions={{
    //     headerTitleStyle: {
    //       color: "black",
    //       fontSize: 20,
    //       fontFamily: "Acronym-ExtraBlack"
    //     }
    //   }}
    //   screenOptions={{
    //     headerRight: () => (
    //       <TouchableOpacity onPress={() => navigation.openDrawer()}>
    //         <Ionicons name="ios-settings" size={24} />
    //       </TouchableOpacity>
    //     )
    //   }}
    // >
    //   <Stack.Screen name="Profile" component={Profile} />
    // </Stack.Navigator>
    <View style={{ width: "100%" }}>
      <ProfileSubNav />
      <Text>mm</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
