import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../customization/CustomButton";
import Colors from "../../constants/Colors";

const SignUp = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { signUp } = React.useContext(props.route.params.AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.signUpContainer}>
        <Text>Sign Up Easily</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setFirstName(text)}
          placeholder="First Name"
          value={firstName}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => setLastName(text)}
          placeholder="Last Name"
          value={lastName}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          value={email}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={text => setUsername(text)}
          placeholder="Username"
          value={username}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          value={password}
        />
        <View style={styles.signUpButton}>
          <CustomButton onPress={() => signUp({ email, password })}>
            Submit
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  signUpContainer: {
    width: "90%",
    padding: 30,
    borderWidth: 1,
    borderColor: Colors.productInfoBorder,
    backgroundColor: Colors.productInfoBorder,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10
  },
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
    textAlignVertical: "top"
  },
  signUpButton: {
    marginTop: 20
  }
});
