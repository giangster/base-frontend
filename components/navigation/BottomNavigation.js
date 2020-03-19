import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "./TabBarIcon";
import MarketScreen from "../../screens/MarketScreen";
import SellScreen from "../../screens/SellScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import InboxScreen from "../../screens/InboxScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Shop";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Shop"
        component={MarketScreen}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home-outline" title="Shop" />
          )
        }}
      />
      <BottomTab.Screen
        name="Sell"
        component={SellScreen}
        options={{
          title: "Sell",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="plus-circle-outline"
              title="Sell"
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          title: "Inbox",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="chat-bubble-outline"
              title="Inbox"
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="person-outline"
              title="Profile"
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Shop":
      return "Market";
    case "Sell":
      return "Sell";
    case "Inbox":
      return "Inbox";
    case "Profile":
      return "Profile";
  }
}
