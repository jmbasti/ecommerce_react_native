import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { ImageCard } from "./ImageCard";
import { accessories } from "../data/accessories";

interface AccessoriesProps {}

export const Accessories: React.FC<AccessoriesProps> = ({}) => {
  return (
    <View>
      <Text style={styles.textStyle}>Accessories</Text>
      <View style={styles.containerStyle}>
        {accessories.map((item) => (
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
    justifyContent: "flex-start",
  },
});
