import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface AppButtonProps {
  title: string;
  style?: any;
  onPress?: () => void;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonStyle, style]}>
        <Text style={styles.textStyles}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#1e1e1e",
    width: 325,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
