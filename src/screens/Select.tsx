import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { StackNavProps } from "../types/StackScreenProps";
import { Clothing } from "../components/Clothing";
import { Accessories } from "../components/Accessories";
import { AppButtonGroup } from "../components/AppButtonGroup";
import { SelectHeader } from "../components/SelectHeader";

interface SelectProps {}

export function Select({ navigation, route }: StackNavProps<"Select">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <ScrollView>
        <SelectHeader />
        <AppButtonGroup />
        <Clothing />
        <Accessories />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
});
