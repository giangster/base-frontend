import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";
import Colors from "../../constants/Colors";

const CustomButton = props => {
  return (
    <TouchableHighlight style={styles.container} onPress={props.onPress}>
      <Text style={[props.style, styles.button]}>{props.children}</Text>
    </TouchableHighlight>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: Colors.customButton,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  button: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 20,
    padding: 16
  }
});
