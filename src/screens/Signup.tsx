import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { AuthStackNavProps } from "../types/AuthStackScreenProps";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../config/colors";
import { AppButton } from "../components/AppButton";
import { AppMediaBtnGroup } from "../components/AppMediaBtnGroup";
import { AntDesign } from "@expo/vector-icons";
import { RadioBtn } from "../components/RadioBtn";
import Logo from "../components/Logo";

interface SignupProps {}

export function Signup({ navigation, route }: AuthStackNavProps<"Signup">) {
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.containerStyle}>
      <ImageBackground
        source={require("../../assets/home.jpg")}
        style={styles.backgoundImageStyle}
      >
        <LinearGradient
          colors={["transparent", "#fff", "#fff", "#fff"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />
      </ImageBackground>
      <View style={styles.formContainerStyle}>
        <Logo style={{ height: 60, width: 60, marginBottom: 25 }} />
        <Text style={styles.headingStyle}>Sign up</Text>
        <Text style={styles.welcomeStyle}>Welcome to Bagonli</Text>
        <View style={styles.formStyle}>
          <Text style={{ color: "#aaa", letterSpacing: 0.25 }}>
            Mobile number/Email
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 15,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <TextInput
              style={{
                height: 40,
                borderBottomWidth: 2,
                borderBottomColor: "#eee",
                flex: 1,
                fontSize: 16,
              }}
            />
            <AntDesign
              name='checkcircle'
              color='#1db954'
              style={{
                fontSize: 18,
                alignSelf: "center",
                marginHorizontal: 15,
                position: "absolute",
                right: 0,
              }}
            />
          </View>
          <Text style={{ fontSize: 10, color: "#aaa", paddingTop: 10 }}>
            We will send you a one time password
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity onPress={() => setSelected(!selected)}>
              <RadioBtn selected={selected} />
            </TouchableOpacity>

            <Text style={{ color: "#aaa", paddingLeft: 10 }}>I agree the</Text>
            <Text style={{ color: "#aaa", textDecorationLine: "underline" }}>
              Terms & Condition
            </Text>
          </View>
        </View>
        <View style={{ paddingBottom: 20 }}></View>
        <AppButton
          title='Next'
          style={{ width: "100%" }}
          onPress={() => navigation.navigate("Success")}
        />
        <Text
          style={{
            textAlign: "center",
            color: "#aaa",
            letterSpacing: 0.25,
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          OR get started with
        </Text>
        <AppMediaBtnGroup />
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#aaa",
              letterSpacing: 0.25,
              fontSize: 16,
            }}
          >
            already onboard?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Otp")}>
            <Text style={{ fontSize: 16 }}> login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  backgoundImageStyle: {
    alignItems: "center",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  textStyle: {
    fontSize: 30,
  },
  formContainerStyle: {
    top: 125,
    position: "absolute",
    paddingLeft: 30,
    paddingRight: 30,
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  welcomeStyle: {
    letterSpacing: 0.5,
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
  },
  formStyle: {
    marginTop: 50,
  },
});
