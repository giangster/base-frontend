import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../components/profile-view/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProfileSettings from "../../components/profile-view/ProfileSettings";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ProfileScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "black",
          fontSize: 20,
          fontFamily: "Acronym-ExtraBlack"
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="ios-settings"
              size={24}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
        )
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
