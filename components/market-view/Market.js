import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";
import ProductCard from "./ProductCard";

let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5];

const Market = ({ navigation }) => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.product}>
        <FlatList
          data={arr}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => navigation.navigate("Product")}
              style={{ flex: 0.5, flexDirection: "column", margin: 1 }}
            >
              <ProductCard />
            </TouchableHighlight>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
          style={{ paddingTop: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: { flex: 1 },
  product: { justifyContent: "center", flex: 1 }
});
