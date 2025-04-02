import React, { useState } from "react";
import { View, RefreshControl, StyleSheet, ScrollView, SafeAreaView, Dimensions, Image } from "react-native";
import DodamHeader from "../../components/DodamHeader";
import EatComponent from "../../components/EatComponent";
import WakeupSongComponent from "../../components/WakeupSongComponent";
import SmallComponent from "../../components/SmallComponent";
import { ComponentType } from "../../types/ComponentType";
import CalendarComponent from "../../components/CalendarComponent";

const { width } = Dimensions.get('window');

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <DodamHeader/>
      <ScrollView 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={styles.scrollViewContent}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      >
        <Image 
          source={require('../../assets/Banner.png')}  
          style={[styles.Banner, { width: width * 0.93, marginHorizontal: width * 0.05 }]}
        />
        <EatComponent/>
        <WakeupSongComponent/>
        <View style={styles.Hstack}>
          <SmallComponent type={ComponentType.OUTING}/>
          <SmallComponent type={ComponentType.NIGHTSTUDY}/>
        </View>
        <CalendarComponent/>
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
    paddingBottom: 150,
  },
  Banner: {
    borderRadius: 15,
    resizeMode: 'cover',
  },
  Hstack: {
    flexDirection: "row",
  }
});

export default Home;
