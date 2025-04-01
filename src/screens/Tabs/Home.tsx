import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.text}>홈 화면</Text>
        </ScrollView>
      </SafeAreaView>
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

export default Home;
