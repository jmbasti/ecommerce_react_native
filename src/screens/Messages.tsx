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

interface MessagesProps {}

export function Messages({ navigation, route }: TabNavProps<"Messages">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.textStyle}>Messages Screen</Text>
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
