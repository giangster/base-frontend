import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CustomerService = ({ navigation }) => {
  return (
    <View>
      <Text>Customer Service</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default CustomerService;

const styles = StyleSheet.create({});
