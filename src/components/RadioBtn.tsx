import React from "react";
import { StyleSheet, View } from "react-native";

interface RadioBtnProps {
  style?: any;
  selected: boolean;
}

export const RadioBtn: React.FC<RadioBtnProps> = (props) => {
  return (
    <View
      style={[
        {
          height: 15,
          width: 15,
          borderRadius: 9,
          borderWidth: 1,
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    >
      {props.selected ? (
        <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "#000",
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});
