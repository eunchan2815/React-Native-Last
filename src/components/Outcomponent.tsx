import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Outcomponent = ({ isStay }: {isStay: boolean}) => {
  const imageSource = isStay
  ? require('../assets/Tent.png')
  : require('../assets/Store.png');  

  return (
    <View style={styles.background}>
      <Image source={imageSource} style={{width: 30, height: 30}} />
      <Text style={styles.text}>
        아직 신청한 {isStay ? "외박" : "외출"}이 없어요.
        </Text>
      <View style={{ paddingTop: 20, width: '100%' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("신청하기")}
        >
          <Text style={styles.buttonText}>{isStay ? "외박" : "외출"} 신청하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    width: '100%',
    height: 172,
    borderRadius: 10,
    padding: 15,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  text: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#f0f0f0",
    width: '100%',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Pretendard-Medium',
  },
});

export default Outcomponent;
