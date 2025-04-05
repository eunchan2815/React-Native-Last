import { View, StyleSheet, Image, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.Hstack}>
      <Image
        source={require('../assets/Avatar.png')}
      />
      <View style={styles.Vstack}>
        <Text style={styles.title}>
          환영합니다, 김은찬님
        </Text>
        <Text style={styles.description}>
          2학년 2반 9번
        </Text>
      </View>
      <View style={styles.spacer}/>
    </View>
  )
}

const styles = StyleSheet.create({
  Hstack: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 10,
  },
  Vstack: {
    flexDirection: "column",
    gap: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 18,
  },
  description: {
    fontFamily: "Pretendard-Medium",
    fontSize: 14,
    color: "#787575",
  },
  spacer: {
    flex: 1,
    paddingRight: 130,
  }
});

export default Profile
