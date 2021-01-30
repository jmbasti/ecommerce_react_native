import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

interface ImageCardProps {
  item: any;
}

export const ImageCard: React.FC<ImageCardProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.imageContainerStyle}>
      <Image source={item.image} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainerStyle: {
    height: 125,
    width: 115,
    padding: 4,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
});
