import { AuthStateContext, AuthProvider } from "./AuthProvider";
import { useContext } from "react";
import * as firebase from "firebase";
import db from "../../config/Firebase/firebaseConfig";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthStateContext);
  if (state === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const signIn = async ({ email, password }) => {
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
  };
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      dispatch({ type: "SIGN_OUT" });
    } catch (err) {
      console.log(err);
      alert("Unable to sign out right now. Please try again later.");
    }
  };

  const signUp = async ({ email, password, firstName, lastName }) => {
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
          const user = await db.collection("users").doc(response.user.uid).set({
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
  };

  return {
    user: state.userToken,
    // userId: state.user ? state.user : null,
    signUp,
    signIn,
    signOut,
  };
};
