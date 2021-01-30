import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { AuthStackNavProps } from "../types/AuthStackScreenProps";
import { TextInput } from "react-native-gesture-handler";
import { AppButton } from "../components/AppButton";
import { colors } from "../config/colors";

const screenWidth = Dimensions.get("screen").width;

interface OtpProps {}

export function Otp({ navigation, route }: AuthStackNavProps<"Otp">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <AntDesign
            name='left'
            size={18}
            color='#000'
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Verification</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ width: "65%", fontSize: 15 }}>
          We sent a 4 digit verification code to +44 7733065202. Enter it below.
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextInput
          maxLength={1}
          keyboardType='number-pad'
          placeholder='-'
          style={{
            height: 50,
            width: 50,
            borderColor: "#ccc",
            borderWidth: 2,
            textAlign: "center",
          }}
        />
        <TextInput
          keyboardType='numeric'
          placeholder='-'
          style={{
            height: 50,
            width: 50,
            borderColor: "#ccc",
            borderWidth: 2,
            textAlign: "center",
          }}
        />
        <TextInput
          keyboardType='number-pad'
          placeholder='-'
          style={{
            height: 50,
            width: 50,
            borderColor: "#ccc",
            borderWidth: 2,
            textAlign: "center",
          }}
        />
        <TextInput
          keyboardType='numeric'
          placeholder='-'
          style={{
            height: 50,
            width: 50,
            borderColor: "#ccc",
            borderWidth: 2,
            textAlign: "center",
          }}
        />
      </View>
      <View>
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#aaa" }}>Didn't get the OTP?</Text>
          <Text style={{ fontWeight: "bold" }}>&nbsp;&nbsp;Resend</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#aaa" }}>Code expires in </Text>
        <Text style={{ color: "#aaa" }}>00:22 </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <AppButton
          title='Continue'
          style={{ backgroundColor: colors.primary }}
          onPress={() => navigation.navigate("MOCK")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
    marginRight: screenWidth / 2 - 50,
  },
});
