import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";

const MatkahuoltoInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoText}>
        <Text style={styles.infoTitle}>How Matkahuolto shipping works?</Text>
        <View style={{ width: "15%" }}>
          <Image
            source={require("../../assets/images/matkahuolto.png")}
            style={styles.mhLogo}
          />
        </View>
      </View>
      <Text style={styles.info}>
        1. The buyer pays the product and delivery.
      </Text>
      <Text style={styles.info}>
        2. You will receive short code for delivery.
      </Text>
      <Text style={styles.info}>
        3. Take the package to any Matkahuolto service point.
      </Text>
      <Text style={styles.info}>
        4. Show your code at service point. You don't have to pay or write
        anything on the package.
      </Text>
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
  },
  infoText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  infoTitle: {
    width: "75%",
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: Colors.productInfo
  },
  info: {
    fontFamily: "Montserrat-Light",
    fontSize: 15,
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  mhLogo: { width: 55, height: 35, resizeMode: "stretch" }
});
