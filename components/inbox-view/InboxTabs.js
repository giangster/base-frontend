import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../../constants/Colors";

const Tab = createMaterialTopTabNavigator();
import SoldItems from "./SoldItems";
import Purchases from "./Purchases";

const InboxTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: { backgroundColor: "white" },
        labelStyle: { fontFamily: "Montserrat-Medium" }
      }}
    >
      <Tab.Screen name="Sold" component={SoldItems} />
      <Tab.Screen name="Purchases" component={Purchases} />
    </Tab.Navigator>
  );
};

export default InboxTabs;

const styles = StyleSheet.create({});
