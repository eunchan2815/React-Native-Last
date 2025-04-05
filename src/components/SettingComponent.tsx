import { View, StyleSheet, Image, Text } from "react-native";

const SettingComponent = ({ image, title }: SettingProps) => {
  return (
    <View style={styles.Hstack}>
      <View style={styles.imageWrapper}>
        {image}
      </View>
      <Text style={styles.description}>{title}</Text>
      <View style={styles.spacer} />
      <Image
        source={require("../assets/chevron_right.png")}
        style={{ width: 20, height: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Hstack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },
  description: {
    fontFamily: "Pretendard-Medium",
    fontSize: 17,
  },
  spacer: {
    flex: 1,
  },
  imageWrapper: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#DCDDDE",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default SettingComponent