import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

interface AppButtonGroupProps {}

export const AppButtonGroup: React.FC<AppButtonGroupProps> = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableWithoutFeedback>
        <View style={styles.buttonStyle}>
          <Text style={styles.textStyles}>Male</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View
          style={[styles.buttonStyle, { borderColor: "#ccc", borderWidth: 1 }]}
        >
          <Text style={[styles.textStyles, { color: "#ccc" }]}>Female</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonStyle: {
    paddingTop: 14,
    paddingBottom: 14,
    borderColor: "#000",
    borderWidth: 1,
    width: 145,
    margin: 5,
  },
  textStyles: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
