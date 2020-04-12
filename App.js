import * as React from "react";
import { SplashScreen } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "./components/navigation/bottom-nav/BottomNavigation";
import useLinking from "./components/navigation/useLinking";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import SignUp from "./components/signin-signup/SignUp";
import SignIn from "./components/signin-signup/SignIn";
import { firebaseConfig } from "./config/Firebase/firebaseConfig";
import * as firebase from "firebase";
import "firebase/firestore";
import { decode, encode } from "base-64";

const Stack = createStackNavigator();

const AuthContext = React.createContext();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [loggedIn, setLoggedIn] = React.useState(false);
  let app;

  if (!global.btoa) {
    global.btoa = encode;
  }

  if (!global.atob) {
    global.atob = decode;
  }
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  if (!firebase.apps.length) {
    console.log("Firebase initialized");
    app = firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore(app);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        setInitialNavigationState(await getInitialState());

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

  const authContext = React.useMemo(
    () => ({
      signIn: async ({ email, password }) => {
        // Early return technique
        if (!email || !password) {
          alert("Please enter email and password");
          return;
        }

        try {
          const response = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

          if (response) {
            dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
          }
        } catch (err) {
          switch (err.code) {
            case "auth/user-not-found":
              alert("User does not exists. Try signing up");
              break;

            case "auth/invalid-email":
              alert("Please enter a valid email");
          }
        }
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async ({ email, password, firstName, lastName }) => {
        if (!email || !password) {
          alert("Please enter email and password");
          return;
        }

        if (email && password) {
          try {
            const response = await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password);
            if (response) {
              console.log(response);
              const user = await db
                .collection("users")
                .doc(response.user.uid)
                .set({
                  uid: response.user.uid,
                  email: response.user.email,
                  firstName: firstName,
                  lastName: lastName,
                });

              dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
            }
          } catch (err) {
            if (err.code == "auth/email-already-in-use") {
              alert("User already exists. Try logging in");
            }
          }
        }
      },
    }),
    []
  );

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator headerMode="none">
            {state.userToken === null ? (
              <>
                <Stack.Screen
                  name="Sign In"
                  component={SignIn}
                  initialParams={{ AuthContext: AuthContext }}
                />
                <Stack.Screen
                  name="Sign Up"
                  component={SignUp}
                  initialParams={{ AuthContext: AuthContext }}
                />
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
      </AuthContext.Provider>
    );
  }
}
