import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";

export const LightText = props => {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function getFont() {
    await Font.loadAsync({
      "Montserrat-Light": require("../../assets/fonts/Montserrat-Light.ttf")
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    getFont();
  });
  return (
    fontLoaded && (
      <Text style={[props.style, { fontFamily: "Montserrat-Light" }]}>
        {props.children}
      </Text>
    )
  );
};

export const MediumText = props => {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function getFont() {
    await Font.loadAsync({
      "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf")
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    getFont();
  });
  return (
    fontLoaded && (
      <Text style={[props.style, { fontFamily: "Montserrat-Medium" }]}>
        {props.children}
      </Text>
    )
  );
};

export const BoldText = props => {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function getFont() {
    await Font.loadAsync({
      "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf")
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    getFont();
  });
  return (
    fontLoaded && (
      <Text style={[props.style, { fontFamily: "Montserrat-Bold" }]}>
        {props.children}
      </Text>
    )
  );
};

export const HeaderText = props => {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function getFont() {
    await Font.loadAsync({
      "Acronym-ExtraBlack": require("../../assets/fonts/Acronym-Extrablack_Italic.otf")
    });
    setFontLoaded(true);
  }

  useEffect(() => {
    getFont();
  });
  return (
    fontLoaded && (
      <Text style={[props.style, { fontFamily: "Acronym-ExtraBlack" }]}>
        {props.children}
      </Text>
    )
  );
};
