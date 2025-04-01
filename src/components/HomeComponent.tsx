import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Banner} />
      
      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/fork_and_knife.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.titleText}>내일의 아침</Text>
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.menuText}>
            참치 야채죽{"\n"}불고기치즈파니니{"\n"}샐러드바/드레싱
          </Text>
          <Text style={styles.menuText}>
            깍두기{"\n"}안현우{"\n"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  Banner: {
    width: width - 30,
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  rowContainer: {
    position: "absolute",
    top: 10,
    left: 15,
    padding: 12,
    flexDirection: "column",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imageContainer: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "#6589e4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: "white",
  },
  titleText: {
    fontSize: 18,
    fontFamily: "Pretendard-Bold",
    color: "#000",
  },
  menuContainer: {
    flexDirection: "row",
    gap: 60,
    width: width - 80,
    padding: 5
  },
  menuText: {
    fontSize: 16,
    fontFamily: "Pretendard-Regular",
    color: "#000",
    lineHeight: 23, 
  },
});

export default HomeComponent;
