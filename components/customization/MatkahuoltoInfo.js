import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MatkahuoltoInfo = () => {
  return (
    <View style={styles.container}>
      <Text>ble</Text>
    </View>
  );
};

export default MatkahuoltoInfo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
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
    borderRadius: 8,
    width: "100%",
    padding: 10
  }
});
