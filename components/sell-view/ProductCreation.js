import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

const ProductCreation = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [photoBase64, setPhotoBase64] = useState("");
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);

  const snap = async () => {
    if (camera) {
      let photo = await camera.current.takePictureAsync({ base64: true });
      setPhotoName(photo.uri);
      setPhotoBase64(photo.base64);
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
      <Camera style={{ flex: 1 }} type={type} ref={camera}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Flip
            </Text>
          </TouchableOpacity>
          <View>
            <Button title="TakePhoto" onPress={snap} />
          </View>
        </View>

        <View style={{ flex: 4 }}>
          <Image style={{ flex: 1 }} source={{ uri: photoName }} />
          <Image
            style={{ flex: 1 }}
            source={{ uri: `data:image/gif;base64,${photoBase64}` }}
          />
        </View>
      </Camera>
    </View>
  );
};

export default ProductCreation;

const styles = StyleSheet.create({});
