import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const BaseBuySafe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <View style={{ width: "15%" }}>
          <MaterialCommunityIcons
            name="shield-half-full"
            size={40}
            color={Colors.customButton}
          />
        </View>
        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>BASE protection</Text>
          <Text style={styles.info}> Buy & Sell 100% Safely</Text>
          <Text style={styles.info}> We secure every transaction</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <View style={{ width: "15%" }}>
          <Image
            source={require("../../assets/images/matkahuolto.png")}
            style={styles.mhLogo}
          />
        </View>
        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>
            Matkahuolto Shipping <Text>4.9€</Text>
          </Text>

          <Text style={styles.info}>Package is provided by Matkahuolto</Text>
        </View>
      </View>
    </View>
  );
};

export default BaseBuySafe;

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
  infoBox: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  infoText: { width: "75%", paddingHorizontal: 20 },
  infoTitle: {
    width: "100%",
    marginVertical: 5,
    fontFamily: "Montserrat-Medium",
    fontSize: 15,
    color: Colors.productInfo,
    justifyContent: "space-between"
  },
  info: { fontFamily: "Montserrat-Light", fontSize: 15 },
  mhLogo: { width: 55, height: 35, resizeMode: "stretch" }
});
