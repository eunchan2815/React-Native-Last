import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DodamHeader from "../../components/DodamHeader";

const Meal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>급식 화면</Text>
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

export default Meal;
