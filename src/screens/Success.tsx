import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AuthStackNavProps } from "../types/AuthStackScreenProps";
import { AppButton } from "../components/AppButton";

interface SuccessProps {}

export function Success({ navigation, route }: AuthStackNavProps<"Success">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.iconContainerStyle}>
        <Feather name='check' size={150} color='black' />
      </View>
      <View style={styles.textContainerStyle}>
        <Text style={styles.successTextStyle}>Success!</Text>
        <Text style={styles.textStyle}>We have sent you a reset password </Text>
        <Text style={styles.textStyle}>link on your registered email</Text>
        <Text style={styles.textStyle}>address</Text>
      </View>
      <AppButton
        title='Go to Email'
        onPress={() => navigation.navigate("Otp")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconContainerStyle: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderColor: "#000",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainerStyle: {
    width: "100%",
    marginTop: -50,
    marginBottom: 100,
  },
  successTextStyle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  textStyle: {
    letterSpacing: 1,
    fontSize: 16,
    textAlign: "center",
  },
});
