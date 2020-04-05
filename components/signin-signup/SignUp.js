import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../customization/CustomButton";

const SignUp = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { signIn } = React.useContext(props.route.params.AuthContext);

  //   const handleSignUp = async () => {
  //     console.log(email);
  //     //Early return technique
  //     // if (!email || !password) {
  //     //   alert("Please enter email and password");
  //     //   return;
  //     // }
  //     console.log(email);
  //     try {
  //       console.log(firebase);
  //       const response = await firebase.createUserWithEmailAndPassword(
  //         email,
  //         password
  //       );

  //       if (response) {
  //         if (response.user.uid) {
  //           const { uid } = response.user;
  //           const userData = { email, name, uid };
  //           await firebase.createNewUser(userData);
  //           navigation.navigate("Root");
  //         }
  //       }
  //     } catch (err) {
  //       if (err.code == "auth/email-already-in-use") {
  //         alert("User already exists. Try logging in");
  //       }
  //     }
  //   };

  return (
    <View style={styles.container}>
      <Text>Sign Up Easily</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setFirstName(text)}
        placeholder="Your First Name"
        value={firstName}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={text => setLastName(text)}
        placeholder="Your Last Name"
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
        placeholder="Your username"
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
      <CustomButton onPress={() => signIn({ email, password })}>
        Submit
      </CustomButton>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  }
});
