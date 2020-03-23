import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Swiper from "react-native-swiper";

const ProductDetailCreation = () => {
  let imgArr = [1, 2, 3, 4, 5];
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
    </ScrollView>
  );
};

export default ProductDetailCreation;

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
  productImage: {
    marginBottom: 10,
    width: null,
    height: "100%",
    flex: 1
  }
});
