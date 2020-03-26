import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";

const ProfileSubNav = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image
          style={styles.profilePicture}
          source={require("../../assets/images/icon.png")}
        />
        <Text style={styles.username}>username</Text>
      </View>
    </View>
  );
};

export default ProfileSubNav;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  profilePicture: {
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    flex: 1
  },
  username: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18
  }
});
