import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ProfileSettings = ({ navigation }) => {
  return (
    <View>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
      <Text>settings</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({});
