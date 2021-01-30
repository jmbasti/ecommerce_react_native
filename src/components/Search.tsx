import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <View style={{ marginTop: -100 }}>
      <Text style={styles.textStyle}>BUY & SELL IN ONE CLICK</Text>
      <View style={styles.backgroundStyle}>
        <Octicons
          name='search'
          size={20}
          color='black'
          style={styles.iconStyle}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder='What are you looking for?'
        />
        <Octicons
          name='settings'
          size={20}
          color='black'
          style={styles.iconStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#fff",
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
  },
  iconStyle: {
    fontSize: 18,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 20,
    color: "#fff",
  },
});
