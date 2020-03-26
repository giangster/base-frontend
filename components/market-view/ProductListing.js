import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import { Rating } from "react-native-elements";
import Colors from "../../constants/Colors";
import CustomButton from "../customization/CustomButton";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import BaseBuySafe from "../customization/BaseBuySafe";

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

let imgArr = [1, 2, 3, 4, 5];

const ProductListing = () => {
  return (
    <ScrollView style={styles.container}>
      <Swiper
        dotStyle={styles.dotStyle}
        loop={false}
        activeDotStyle={styles.activeDotStyle}
        height={500}
      >
        {imgArr.map((item, index) => (
          <Image
            key={index}
            style={styles.productImage}
            source={require("../../assets/images/icon.png")}
          />
        ))}
      </Swiper>

      <View style={styles.productDetailCard}>
        <Text style={styles.productBrand}>
          Product brand is here and it could be unbelivably long
        </Text>
        <Text style={styles.productPrice}>300€</Text>
      </View>

      <View style={styles.productDetailCard}>
        <Text style={styles.infoTitle}>Seller</Text>
        <View style={[{ display: "flex", flexDirection: "row" }, styles.info]}>
          <Image
            style={styles.sellerImage}
            source={require("../../assets/images/icon.png")}
          />
          <View style={styles.sellerDetails}>
            <Text style={styles.sellerName}>KKXD</Text>
            <View style={styles.sellerRating}>
              <Rating
                style={{ alignSelf: "flex-start", marginRight: 5 }}
                ratingCount={5}
                startingValue={3.2}
                imageSize={20}
              />
              <Text>(123)</Text>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 5 }}>
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
      <BaseBuySafe />
      <CustomButton>
        Buy it now
        <MaterialCommunityIcons name="cart" size={20} color="white" />
      </CustomButton>
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
  sellerImage: {
    width: 50,
    height: 50
  },
  sellerDetails: {
    marginLeft: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  sellerName: { width: "100%", fontWeight: "600" },
  sellerRating: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  productDetailCard: {
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
  productDetail: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productImage: {
    marginBottom: 10,
    width: null,
    height: "100%",
    flex: 1
  },
  productBrand: {
    marginBottom: 10,
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    textTransform: "uppercase",
    color: Colors.productInfo,
    opacity: 0.8
  },
  productPrice: {
    marginBottom: 10,
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    color: Colors.priceColor
  },
  infoTitle: {
    marginVertical: 5,
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    width: "30%",
    color: Colors.productInfo
  },
  info: { fontFamily: "Montserrat-Light", fontSize: 16 }
});
