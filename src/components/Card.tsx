import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { colors } from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";

interface CardProps {}

export const Card: React.FC<CardProps> = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.heartContainerStyle}>
        <FontAwesome name='heart' size={22} color='#f00' />
      </View>
      <Image
        source={require("../../assets/car.jpg")}
        style={styles.imageStyle}
      ></Image>
      <View style={styles.trapezoidStyle}>
        <View style={styles.textContainerStyle}>
          <Text style={styles.textStyle}>AED 2000</Text>
        </View>
        <View
          style={{
            backgroundColor: `${colors.primary}`,
            height: 30,
            width: 30,
            padding: 5,
            transform: [{ skewX: "25deg" }],
            marginLeft: -15,
            zIndex: -1,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: "90%",
    backgroundColor: "#fff",
    height: 200,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  heartContainerStyle: {
    zIndex: 1,
    position: "absolute",
    right: 0,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  trapezoidStyle: {
    flexDirection: "row",
    position: "absolute",
    left: 15,
    bottom: 15,
  },
  textContainerStyle: {
    backgroundColor: `${colors.primary}`,
    alignSelf: "flex-start",
    padding: 5,
    height: 30,
  },
});
