import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import ProductCard from "../product/ProductCard";

const Market = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <ProductCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Market;
