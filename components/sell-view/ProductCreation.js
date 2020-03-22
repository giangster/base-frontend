import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyImage = () => {
  let arr = ["Front", "Back", "Label", "Zoom-in"];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {arr.map((i, index) => (
        <View key={index} style={styles.emptyImg}>
          <View
            key={index}
            style={{
              height: 140,
              borderStyle: "dashed",
              borderColor: "black",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              key={index}
              style={{
                fontFamily: "Montserrat-Light"
              }}
            >
              {i}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const ProductCreation = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [photoArray, setPhotoArray] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);

  const snap = async () => {
    if (camera) {
      let photo = await camera.current.takePictureAsync({ base64: true });
      if (photoArray.length >= 10) {
        Alert.alert("Maximum number of photos is 10");
        return;
      }
      setPhotoName(photo.uri);
      setPhotoArray([...photoArray, photo.uri]);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 4 }} type={type} ref={camera}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Ionicons
                name="ios-reverse-camera"
                color="white"
                size={40}
                style={{ opacity: 0.6 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={snap}>
              <MaterialCommunityIcons
                name="circle-slice-8"
                color="white"
                size={80}
                style={{ opacity: 0.6 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap"
          }}
        >
          {photoArray.length > 0 ? (
            photoArray.map((photoName, index) => (
              <View style={styles.photoContainer} key={index}>
                <Image
                  key={index}
                  style={{ flex: 1 }}
                  source={{ uri: photoName }}
                />
              </View>
            ))
          ) : (
            <EmptyImage />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductCreation;

const styles = StyleSheet.create({
  photoContainer: {
    marginVertical: 10,
    width: "25%",
    height: 150,
    padding: 5,
    resizeMode: "cover"
  },
  emptyImg: {
    marginVertical: 10,
    width: "25%",
    height: 150,
    padding: 5
  }
});
