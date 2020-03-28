import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import Colors from "../../../constants/Colors";
import { Linking } from "expo";

const CustomDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.drawerMain}>
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.userPhoto}
            source={require("../../../assets/images/mayapolarbear.png")}
          />
          <Text style={styles.username}>@mayapolarbear</Text>
        </View>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Edit information")}
        >
          <Text style={styles.drawerLabel}>Edit information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("App info")}
        >
          <Text style={styles.drawerLabel}>App info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Customer service")}
        >
          <Text style={styles.drawerLabel}>Customer service</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.baseAppInfo}>
        <Text style={styles.baseAppInfoLabel}>BASE Beta © 2020</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  drawerMain: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  userInfoContainer: {
    height: 200,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS == "android" ? 20 : 0
  },
  username: { fontSize: 18, fontFamily: "Montserrat-Medium" },
  userPhoto: { width: 80, height: 80, marginBottom: 10, borderRadius: 50 },
  drawerItem: {
    marginVertical: 10,
    width: "80%",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.tabIconDefault,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerLabel: {
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    color: Colors.productInfo
  },
  baseAppInfo: { marginBottom: 20 },
  baseAppInfoLabel: {
    fontFamily: "Montserrat-Medium",
    fontSize: 10,
    color: Colors.productInfo
  }
});
