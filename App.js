import * as React from "react";
import { SplashScreen } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./components/navigation/bottom-nav/BottomNavigation";

import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import SignUp from "./components/signin-signup/SignUp";
import SignIn from "./components/signin-signup/SignIn";

import { decode, encode } from "base-64";
import { useAuth } from "./contexts/auth/useAuth";
import { AuthProvider } from "./contexts/auth/AuthProvider";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {useAuth().user === null ? (
          <>
            <Stack.Screen name="Sign In" component={SignIn} />
            <Stack.Screen name="Sign Up" component={SignUp} />
          </>
        ) : (
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{
              headerTitleStyle: {
                color: "black",
                fontSize: 20,
                fontFamily: "Acronym-ExtraBlack",
              },
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App(props) {
  // const user = useAuth();
  // console.log("useAuth: " + useAuth());
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  if (!global.btoa) {
    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        await Font.loadAsync({
          "Acronym-ExtraBlack": require("./assets/fonts/Acronym-Extrablack_Italic.otf"),
          "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
          "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
          "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    );
  }
}
