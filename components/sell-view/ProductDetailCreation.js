import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Picker
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Slider from "react-native-slider";
import Swiper from "react-native-swiper";
import Colors from "../../constants/Colors";

const ProductDetailCreation = () => {
  let imgArr = [1, 2, 3, 4, 5];
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [sizeType, setSizeType] = useState("Normal");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState(0);
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState(0);
  const sizeTypeArray = ["Normal", "Shoes Size", "Pants Size"];
  const clothingSizeArray = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const shoesSizeArray = [
    "35",
    "36",
    "37",
    "38",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46"
  ];

  const getSellerPrice = price => {
    let stripeFee = 0.014 * price + 0.25;
    let baseProfit;
    if (price <= 0) {
      return 0;
    }
    if (price <= 50) {
      baseProfit = 0.1 * price;
    } else if (price <= 100 && price > 50) {
      baseProfit = 5;
    } else {
      baseProfit = 0.05 * price;
    }
    return (price - stripeFee - baseProfit).toFixed(2);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="padding"
      enabled
      keyboardVerticalOffset={100}
    >
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
        <View style={styles.productDetailsContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setBrand(text)}
            placeholder="Brand"
            value={brand}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => setModel(text)}
            placeholder="Model"
            value={model}
          />
          <TextInput
            multiline
            numberOfLines={4}
            style={[styles.textInput, styles.textArea]}
            onChangeText={text => setDescription(text)}
            placeholder="Description"
            value={description}
          />
          <View style={styles.conditionContainer}>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                alignSelf: "center"
              }}
            >
              Condition: {condition}
            </Text>
            <View style={styles.sliderContainer}>
              <Slider
                minimumTrackTintColor="grey"
                thumbStyle={styles.sliderThumb}
                trackStyle={styles.sliderTrack}
                step={1}
                maximumValue={10}
                onValueChange={e => setCondition(e)}
                value={condition}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={{ width: "45%" }}>
              <RNPickerSelect
                placeholder={{ label: "Size", value: null, color: "#dcdcdc" }}
                style={pickerStyle}
                onValueChange={value => console.log(value)}
                items={[
                  { label: "Football", value: "football" },
                  { label: "Baseball", value: "baseball" },
                  { label: "Hockey", value: "hockey" }
                ]}
              />
            </View>
            <View style={{ width: "45%" }}>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={price => setPrice(price)}
                placeholder="Price"
                value={price}
              />
            </View>
          </View>
          {price > 0 ? <Text>{getSellerPrice(price)}</Text> : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  },
  productDetailsContainer: {
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
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "Montserrat-Light",
    textAlignVertical: "top"
  },
  textArea: {
    height: 150
  },
  picker: {
    width: "80%",
    height: 30,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1
  },
  pickerItem: {
    height: 44,
    color: "red"
  },
  conditionContainer: {
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingVertical: 15
  },
  sliderContainer: {
    alignSelf: "center",
    width: "80%",

    justifyContent: "center"
  },
  sliderTrack: {
    height: 1,
    width: "100%",

    backgroundColor: "#c9ced7"
  },
  sliderThumb: {
    borderWidth: 0.2,
    borderColor: "#c9ced7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.22,
    elevation: 4,
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: "#ffffff"
  }
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 4,
    color: "black"
  },
  inputAndroid: {
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: "#dcdcdc",
    borderRadius: 8,
    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});
