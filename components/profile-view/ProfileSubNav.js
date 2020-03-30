import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";

const ProfileSubNav = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <View style={{ width: "30%" }}>
          <Image
            style={styles.profilePicture}
            source={require("../../assets/images/mayapolarbear.png")}
          />
        </View>
        <View style={{ width: "65%", justifyContent: "center" }}>
          <Text style={styles.username}>mayapolarbear</Text>
          <Text>Helsinki, Finland</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileSubNav;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "black",
    backgroundColor: "white"
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  username: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    marginBottom: 10
  }
});
