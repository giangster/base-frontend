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
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";

let photoSuggestions = ["Front", "Back", "Label", "Zoom-in"];

const EmptyImage = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {photoSuggestions.map((suggestion, index) => (
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
              {suggestion}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const ProductPhotoCreation = () => {
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

  const removeImg = toBeDeleted => {
    let newArr = photoArray.filter((photo, index) => index !== toBeDeleted);
    setPhotoArray(newArr);
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
        <View style={styles.photoGalleryContainer}>
          {photoArray.length > 0 ? (
            photoArray.map((photoName, index) => (
              <View style={styles.photoContainer} key={index}>
                <Image
                  key={index}
                  style={{ flex: 1 }}
                  source={{ uri: photoName }}
                />
                <TouchableOpacity
                  style={styles.removeImgButton}
                  onPress={() => removeImg(index)}
                >
                  <FontAwesome
                    name="remove"
                    size={20}
                    style={{ opacity: 0.6 }}
                  />
                </TouchableOpacity>
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

export default ProductPhotoCreation;

const styles = StyleSheet.create({
  photoGalleryContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  photoContainer: {
    marginVertical: 10,
    width: "25%",
    height: 150,
    padding: 5,
    resizeMode: "cover",
    position: "relative"
  },
  emptyImg: {
    marginVertical: 10,
    width: "25%",
    height: 150,
    padding: 5
  },
  removeImgButton: {
    width: 30,
    height: 30,
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end"
  }
});
