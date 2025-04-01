import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>설정 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default Setting;
