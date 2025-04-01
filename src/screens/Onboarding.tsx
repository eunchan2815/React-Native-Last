import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const Onboarding = () => {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Image
            source={require('../assets/DodamLogo1.png')}
            style={styles.logo}
          />
          <Image
          source={require('../assets/B1NDLogo1.png')}
          style={styles.logo2}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20,
    },
    logo: {
      width: 180,
      height: 45,
      resizeMode: "contain",
    },
    logo2: {
      width: 60,
      height: 16,
      resizeMode: "contain",
      position: "absolute",
      bottom: 30
    }
  });


export default Onboarding
