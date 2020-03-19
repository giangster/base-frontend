import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { BoldText, MediumText, LightText } from "../custom-text/CustomText";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={require("../../assets/images/icon.png")}
      />
      <View style={styles.productNamePrice}>
        <BoldText>Product Name</BoldText>
        <BoldText style={styles.productPrice}>100€</BoldText>
      </View>
      <View>
        <MediumText>Product model</MediumText>
      </View>
      <View>
        <LightText>size: product size</LightText>
        <LightText>cond: product condition</LightText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: { width: "100%", justifyContent: "center", alignItems: "center" },
  productImage: {
    width: "50%",
    height: 200,
    resizeMode: "stretch"
  },
  productNamePrice: { justifyContent: "space-between", fontSize: 20 },
  productPrice: {
    color: Colors.priceColor
  }
});
