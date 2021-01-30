import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface AppMediaBtnGroupProps {}

export const AppMediaBtnGroup: React.FC<AppMediaBtnGroupProps> = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableWithoutFeedback>
        <View style={styles.buttonStyle}>
          <FontAwesome5 name='facebook-f' size={18} color='white' />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View
          style={[
            styles.buttonStyle,
            { backgroundColor: "#fff", borderColor: "#ddd", borderWidth: 1 },
          ]}
        >
          {/* <FontAwesome5 name='google' size={18} color='black' /> */}
          <Image
            source={require("../../assets/icons8-google.png")}
            style={{ height: 22, width: 22 }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
  },
  buttonStyle: {
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#3b5998",
    width: 145,
    margin: 5,
    alignItems: "center",
  },
  textStyles: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
