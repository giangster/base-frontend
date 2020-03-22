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
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: "black",
        upperCaseLabel: true,
        labelStyle: {
          fontSize: 11,
          textTransform: "uppercase"
        },
        activeTintColor: "rgb(48, 60, 165)",
        inactiveTintColor: "grey",
        showLabel: false
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={MarketScreen}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={focused ? "home" : "home-outline"}
              route="Shop"
            />
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
              name={focused ? "plus-circle" : "plus-circle-outline"}
              route="Sell"
            />
          ),
          tabBarVisible: false
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
              name={focused ? "chat-bubble" : "chat-bubble-outline"}
              route="Inbox"
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
              name={focused ? "person" : "person-outline"}
              route="Profile"
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
