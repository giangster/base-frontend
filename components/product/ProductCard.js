import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={require("../../assets/images/icon.png")}
      />
      <View style={styles.productNamePrice}>
        <Text numberOfLines={1} style={styles.productName}>
          Product Name Is Kinda Long
        </Text>
      </View>

      {/* <Text numberOfLines={1} style={styles.productModel}>
        Product model
      </Text> */}

      <View style={styles.productSizeCond}>
        <Text style={styles.productPrice}>100€</Text>
        <Text style={styles.productSize}>Size: M</Text>
        {/* <Text style={styles.productCond}>cond: 8</Text> */}
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
    marginBottom: 5
  },
  productNamePrice: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productName: {
    // width: "80%",
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    overflow: "hidden"
  },
  productPrice: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    color: Colors.priceColor
  },
  productModel: {
    width: "100%",
    fontFamily: "Montserrat-Medium"
  },
  productSizeCond: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productSize: { fontFamily: "Montserrat-Medium" },
  productCond: {
    width: "50%",
    fontFamily: "Montserrat-Light"
  }
});
