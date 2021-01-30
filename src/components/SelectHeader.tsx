import React from "react";
import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";
import { Octicons } from "@expo/vector-icons";

interface SelectHeaderProps {}

export const SelectHeader: React.FC<SelectHeaderProps> = ({}) => {
  return (
    <>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          Select Your Preferences
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#bbb",
            paddingBottom: 20,
            paddingTop: 15,
          }}
        >
          Choose as many as you can
        </Text>
      </View>
      <Octicons
        name='search'
        size={20}
        color='black'
        style={{ position: "absolute", right: 30, top: 60 }}
      />
    </>
  );
};

const styles = StyleSheet.create({});
