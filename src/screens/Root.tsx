import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View
} from "react-native";
import DodamButton from "../components/DodamButton";
const { width, height } = Dimensions.get("window");

const Root = ({ navigation }: any) => {
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const handleMainPress = () => {
    navigation.navigate("Main")
  }

  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>도담도담</Text>
        <Text style={styles.subTitle}>어린아이가 탈 없이 잘 놀며 자라는 모양.</Text>
        <DodamButton action={(handleMainPress)} text="시작하기" />
        
        <View style={styles.hstack}>
          <Text style={styles.accountText}>이미 계정이 있나요?</Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginButtonText}>로그인</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontFamily: "Pretendard-Bold",
    color: "white",
    position: "absolute",
    top: 140,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
    position: "absolute",
    top: 200,
  },
  accountText: {
    fontSize: 14,
    color: "white",
    paddingInlineEnd: 10
  },
  loginButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  underline: {
    width: 38,
    height: 1,
    backgroundColor: "white",
  },
  hstack: {
    flexDirection: "row",
    position: "absolute",
    bottom: 40
  },
});

export default Root;
