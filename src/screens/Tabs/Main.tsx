import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

const icons = {
  Home: require("../../assets/home.png"),
  Meal: require("../../assets/fork_and_knife.png"),
  Out: require("../../assets/door_open.png"),
  Night: require("../../assets/moon_plus.png"),
  Setting: require("../../assets/menu.png"),
};

const Main = ({ state, navigation }: any) => {
  return (
    <View style={{marginHorizontal: 15 }}>
      <View style={[styles.tabBar]}> 
        {state.routes.map((route: any, index: any) => {
          const isFocused = state.index === index;

          const iconSource = route.name && icons[route.name as keyof typeof icons] 
            ? icons[route.name as keyof typeof icons]
            : icons.Home;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={[styles.tabButton, isFocused && styles.activeTab]}
            >
              <Image 
                source={iconSource}
                style={[styles.icon, isFocused && styles.activeIcon]} 
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );  
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 20,
    position: "absolute",
    bottom: 40,
    width: "100%",
    elevation: 5,
    padding: 10,
  },
  tabButton: {
    alignItems: "center",
    padding: 10,
  },
  activeTab: {
    backgroundColor: "#0083F0",
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: "black",
  },
  activeIcon: {
    tintColor: "#fff",
  }
});

export default Main;