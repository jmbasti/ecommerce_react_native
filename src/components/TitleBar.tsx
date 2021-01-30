import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface TitleBarProps {}

export const TitleBar: React.FC<TitleBarProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerStyle}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
        <Entypo name='menu' size={24} color='#fff' />
      </TouchableWithoutFeedback>

      <Text style={styles.textStyle}>HOME</Text>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Settings")}>
        <Entypo name='dots-three-vertical' size={20} color='#fff' />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});
