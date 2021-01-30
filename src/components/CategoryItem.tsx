import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CategoryItemProps {
  category: any;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <TouchableOpacity style={styles.cardContainerStyle}>
      <View style={styles.iconContainerStyle}>
        <MaterialCommunityIcons name={category.icon} size={24} color='black' />
      </View>
      <View
        style={{
          height: 50,
          paddingTop: 15,
          padding: 5,
          width: "100%",
        }}
      >
        <Text style={styles.textStyle}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    flex: 1,
    height: 115,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 0,
  },
  iconContainerStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede7f6",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 11,
  },
});
