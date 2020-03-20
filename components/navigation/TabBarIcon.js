import * as React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default function TabBarIcon(props) {
  let icon = null;
  switch (props.title) {
    case "Shop":
      return (icon = (
        <MaterialCommunityIcons
          size={25}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          name={props.name}
        />
      ));
    case "Sell":
      return (icon = (
        <MaterialCommunityIcons
          size={25}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          name={props.name}
        />
      ));
    case "Inbox":
      return (icon = (
        <MaterialIcons
          size={25}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          name={props.name}
        />
      ));
    case "Profile":
      return (icon = (
        <MaterialIcons
          size={25}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          name={props.name}
        />
      ));
  }

  return icon;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tabBar
  }
});
