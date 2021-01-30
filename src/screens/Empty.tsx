import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { TabNavProps } from "../types/TabScreenProps";

interface EmptyProps {}

export function Empty({ navigation, route }: TabNavProps<"Empty">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.textStyle}>Empty Screen</Text>
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
