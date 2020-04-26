import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../customization/CustomButton";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth/useAuth";

const SignUp = (props) => {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // const { signUp } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ width: "90%", top: 0, marginLeft: 20, marginTop: 50 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={30} />
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First Name"
          value={firstName}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setLastName(text)}
          placeholder="Last Name"
          value={lastName}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          keyboardType="email-address"
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
        <View style={styles.signUpButton}>
          <CustomButton
            onPress={() => signUp({ email, password, firstName, lastName })}
          >
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
  },
  signUpContainer: {
    alignSelf: "center",
    justifyContent: "center",
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
  signUpButton: {
    marginTop: 20,
  },
});
