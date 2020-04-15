import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

const Info = ({ navigation }) => {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        <Button onPress={() => navigation.goBack()} title="Close" />
        <Text style={styles.infoTitle}>Terms Of Service</Text>
        <Text style={styles.infoTitle}>Privacy Policy</Text>
        <Text style={styles.infoTitle}>FAQ</Text>
      </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  infoTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
});
