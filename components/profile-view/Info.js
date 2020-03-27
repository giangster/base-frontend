import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Info = ({ navigation }) => {
  return (
    <View>
      <Text>Terms Of Service</Text>
      <Text>Privacy Policy</Text>
      <Text>FAQ</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
