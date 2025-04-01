import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { DodamButtonProps } from "../types/DodamButtonProps";

const { width } = Dimensions.get("window");

const DodamButton = ({ action, text }: DodamButtonProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.button} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: 48,
    backgroundColor: "#0083F0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default DodamButton;
