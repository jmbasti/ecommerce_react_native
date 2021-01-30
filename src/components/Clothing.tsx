import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { clothing } from "../data/clothing";
import { ImageCard } from "./ImageCard";

interface ClothingProps {}

export const Clothing: React.FC<ClothingProps> = ({}) => {
  return (
    <View>
      <Text style={styles.textStyle}>Clothing</Text>
      <View style={styles.containerStyle}>
        {clothing.map((item) => (
          <ImageCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
    marginTop: 20,
  },
  containerStyle: {
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
