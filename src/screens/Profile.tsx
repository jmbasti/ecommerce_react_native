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
import { TabNavProps } from "../types/TabScreenProps";

interface ProfileProps {}

export function Profile({ navigation, route }: TabNavProps<"Profile">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.textStyle}>Profile Screen</Text>
      <Button title='Logout' onPress={() => navigation.navigate("Signup")} />
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
