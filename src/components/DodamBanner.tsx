import { View, StyleSheet, Image } from "react-native";

const DodamBanner = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/B1NDHeaderLogo.png')} />
      <Image 
        source={require('../assets/bell.png')} 
        style={styles.image} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  image: {
    width: 27,
    height: 27,
    tintColor: "gray"
  },
});

export default DodamBanner;