import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions, Image } from "react-native";
import DodamHeader from "../../components/DodamHeader";
import HomeComponent from "../../components/HomeComponent";

const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <DodamHeader/>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image 
          source={require('../../assets/Banner.png')}  
          style={[styles.Banner, { width: width * 0.93, marginHorizontal: width * 0.05 }]}
        />
        <HomeComponent/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  Banner: {
    borderRadius: 15,
    resizeMode: 'cover',
  },
});

export default Home;
