import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../customization/CustomButton";
import Colors from "../../constants/Colors";

const SignIn = (props) => {
  const { signIn } = React.useContext(props.route.params.AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.signInContainer}>
        <Image
          style={styles.baseLogo}
          source={require("../../assets/images/logo.png")}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          value={email}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          value={password}
        />
        <View style={styles.signInButton}>
          <CustomButton onPress={() => signIn({ email, password })}>
            Sign in
          </CustomButton>
          <Text style={styles.signUpText}>Don't have an account yet?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sign Up")}
          >
            <Text style={styles.signUpButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInContainer: {
    width: "90%",
    padding: 30,
    borderWidth: 1,
    borderColor: Colors.productInfoBorder,
    backgroundColor: Colors.productInfoBorder,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
  },
  baseLogo: { alignSelf: "center", marginVertical: 40, width: 270, height: 90 },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "Montserrat-Light",
    textAlignVertical: "top",
  },
  signInButton: { marginTop: 20 },
  signUpButton: {
    alignSelf: "center",
    marginVertical: 20,
    fontFamily: "Montserrat-Bold",
    textDecorationColor: "black",
    textDecorationLine: "underline",
  },
  signUpText: { alignSelf: "center", fontFamily: "Montserrat-Medium" },
});
