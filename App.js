import * as React from "react";
import { SplashScreen } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "./components/navigation/bottom-nav/BottomNavigation";
import useLinking from "./components/navigation/useLinking";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Colors from "./constants/Colors";
import Firebase, { FirebaseProvider } from "./config/Firebase";
import ProfileSettings from "./components/profile-view/ProfileSettings";
import Profile from "./components/profile-view/Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        setInitialNavigationState(await getInitialState());

        await Font.loadAsync({
          "Acronym-ExtraBlack": require("./assets/fonts/Acronym-Extrablack_Italic.otf"),
          "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
          "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
          "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
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
      <FirebaseProvider value={Firebase}>
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{
                headerTitleStyle: {
                  color: "black",
                  fontSize: 20,
                  fontFamily: "Acronym-ExtraBlack"
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseProvider>
    );
  }
}
