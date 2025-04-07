import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity, Image } from "react-native";
import DodamHeader from "../../components/DodamHeader";
import Outcomponent from "../../components/Outcomponent";

const Out = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTab, setSelectedTab] = useState("외출");

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderContent = () => {
    if (selectedTab === "외출") {
      return Outcomponent({isStay: false});
    } else {
      return Outcomponent({isStay: true});
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DodamHeader
        title="외출/외박"
        button={
          <TouchableOpacity onPress={() => console.log("뒤로가기")}>
            <Image source={require("../../assets/plus.png")} />
          </TouchableOpacity>
        }
      />

      <View style={{ paddingVertical: 10, paddingHorizontal: 25 }}>
        <View style={styles.outButton}>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === "외출" && styles.activeTab]}
            onPress={() => setSelectedTab("외출")}
          >
            <Text style={selectedTab === "외출" ? styles.activeText : styles.inactiveText}>외출</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === "외박" && styles.activeTab]}
            onPress={() => setSelectedTab("외박")}
          >
            <Text style={selectedTab === "외박" ? styles.activeText : styles.inactiveText}>외박</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 150,
    paddingHorizontal: 25,
  },
  outButton: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#dedfe0",
    flexDirection: "row",
    overflow: "hidden",
    padding: 4
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  activeText: {
    fontFamily: "Pretendard-Regular",
    fontSize: 17,
  },
  inactiveText: {
    color: "#555",
    fontFamily: "Pretendard-Bold",
    fontSize: 17,
  },
});

export default Out;
