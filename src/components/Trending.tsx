import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface TrendingProps {}

export const Trending: React.FC<TrendingProps> = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Trending</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "700",
  },
});
