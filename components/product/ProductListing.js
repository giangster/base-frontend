import React from "react";
import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
// import Swiper from "react-native-swiper";
import Colors from "../../constants/Colors";

let productObj = {
  brand: "Brand",
  model: "model",
  description:
    "Very good piece of app logo. Bright color and everything. Suitable for your application.",
  size: "M",
  posted: new Date("19.03.2020"),
  location: "Helsinki",
  condition: "8/10"
};

const ProductListing = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Swiper
        dotStyle={styles.dotStyle}
        loop={false}
        activeDotStyle={styles.activeDotStyle}
      >
        <Image
          style={styles.productImage}
          source={require("../../assets/images/icon.png")}
        />
        <Image
          style={styles.productImage}
          source={require("../../assets/images/icon.png")}
        />
        <Image
          style={styles.productImage}
          source={require("../../assets/images/icon.png")}
        />
        <Image
          style={styles.productImage}
          source={require("../../assets/images/icon.png")}
        />
      </Swiper> */}

      <Image
        style={styles.productImage}
        source={require("../../assets/images/icon.png")}
      />

      <View style={styles.productDetails}>
        <Text style={styles.productBrand}>Product name/ brand is here</Text>
        <Text style={styles.productPrice}>300€</Text>
      </View>
      <View style={styles.productDetails}>
        <View style={styles.productDetail}>
          <Text style={styles.infoTitle}>Description</Text>
          <Text style={styles.info}>
            Very good piece of app logo. Bright color and everything. Suitable
            for your application.
          </Text>
        </View>
        <View style={styles.productDetail}>
          <Text style={styles.infoTitle}>Size</Text>
          <Text style={styles.info}>M</Text>
        </View>
        <View style={styles.productDetail}>
          <Text style={styles.infoTitle}>Posted</Text>
          <Text style={styles.info}>19.03.2020</Text>
        </View>
        <View style={styles.productDetail}>
          <Text style={styles.infoTitle}>Location</Text>
          <Text style={styles.info}>Helsinki</Text>
        </View>
        <View style={styles.productDetail}>
          <Text style={styles.infoTitle}>Condition</Text>
          <Text style={styles.info}>8/10</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10
  },
  dotStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.48)"
  },
  activeDotStyle: {
    backgroundColor: "white"
  },
  productDetails: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.productInfoBorder,
    backgroundColor: Colors.productInfoBorder,
    borderRadius: 8,
    width: "100%",
    padding: 10
  },
  productDetail: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.productInfoBorder,
    justifyContent: "space-between"
  },
  productImage: {
    marginBottom: 5,
    width: null,
    height: 600,
    flex: 1
  },
  productBrand: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20
  },
  productPrice: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    color: Colors.priceColor
  },
  infoTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16
  },
  info: {
    fontFamily: "Montserrat-Light",
    fontSize: 16
  }
});

// const sampleObj = {
//   imgUrl: "pecpec",
//   description: "pecpec",
//   location: "sgsgd",
//   size: "M"
// };

// Object.keys(sampleObj).map(key => {
//   console.log(key);
//   console.log(sampleObj[key]);

//   sampleObj.imgUrl;
//   sampleObj[someKey];
// });
