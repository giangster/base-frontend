import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>Sign In now</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setUsername(text)}
        placeholder="Brand"
        value={username}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={text => setPassword(text)}
        placeholder="Brand"
        value={password}
      />
    </View>
  );
};

export default SignIn;

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
