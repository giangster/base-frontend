import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CustomerService = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Customer Service</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default CustomerService;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});
