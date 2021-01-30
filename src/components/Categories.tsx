import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { categories } from "../data/category";
import { CategoryItem } from "./CategoryItem";

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <FlatList
        scrollEnabled={false}
        numColumns={4}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
