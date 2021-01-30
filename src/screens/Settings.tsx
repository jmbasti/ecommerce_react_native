import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Button,
} from "react-native";
import { StackNavProps } from "../types/StackScreenProps";

interface SettingsProps {}

export function Settings({ navigation, route }: StackNavProps<"Settings">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.textStyle}>Settings Screen</Text>
      <Button title='Back' onPress={() => navigation.goBack()} />
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
