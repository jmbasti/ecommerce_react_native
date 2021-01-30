import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
// COMPONENTS
import { TitleBar } from "./TitleBar";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.topStyle}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styles.imageStyle}
      />
      <View style={styles.overlay}>
        <TitleBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topStyle: {
    height: 200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    width: "100%",
    overflow: "hidden",
  },
  imageStyle: {
    resizeMode: "cover",
    flex: 1,
  },
  overlay: {
    backgroundColor: "rgba(29,161,242,.75)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
