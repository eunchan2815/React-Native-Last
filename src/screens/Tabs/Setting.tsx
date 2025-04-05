import React, { useState } from "react";
import { ScrollView, RefreshControl, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import DodamHeader from "../../components/DodamHeader";
import Profile from "../../components/Profile";
import SettingComponent from "../../components/SettingComponent";

const Setting = () => {
  const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
      setRefreshing(true);
      
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DodamHeader title="전체" button={
          <TouchableOpacity onPress={() => console.log("뒤로가기")}>
            <Image
              source={require("../../assets/gear.png")}
            />
          </TouchableOpacity>
        } />
      <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.scrollViewContent}
          refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
          <Profile/>        

          <SettingComponent
            image={<Image source={require('../../assets/Barchart.png')} />}
            title="내 상벌점 보기"
          />

          <SettingComponent
            image={<Image source={require('../../assets/card.png')} />}
            title="내 학생코드 보기"
          />

          <View style={styles.divider}/>

          <SettingComponent
            image={<Image source={require('../../assets/Bus.png')} />}
            title="귀가 버스 신청하기"
          />

          <SettingComponent
            image={<Image source={require('../../assets/Tent.png')} />}
            title="외출/외박 신청하기"
          />

          <SettingComponent
            image={<Image source={require('../../assets/speaker.png')} />}
            title="기상송 확인하기"
          />

          <SettingComponent
            image={<Image source={require('../../assets/Musical.png')} />}
            title="기상송 신청하기"
          />

          <SettingComponent
            image={<Image source={require('../../assets/Handshake.png')} />}
            title="그룹"
          />
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: 150,
    paddingHorizontal: 25,
  },
  Vstack: {
    flexDirection: "column",
    gap: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
    marginVertical: 12,
  },
});

export default Setting;
