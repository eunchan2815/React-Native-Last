import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { ComponentType } from "../types/ComponentType";
const { width } = Dimensions.get("window");

const SmallComponent = ({ type = ComponentType.NIGHTSTUDY }) => {
  const getContent = () => {
    switch (type) {
      case ComponentType.OUTING:
        return {
          image: require('../assets/door_open.png'),
          title: '외출 외박',
          description: '외출,외박이 필요하다면',
          buttonDescription: '외출/외박 신청하기'
        }
      case ComponentType.NIGHTSTUDY:
        return {
          image: require('../assets/moon_plus.png'),
          title: '심야 자습',
          description: '공부할 시간이 필요하다면',
          buttonDescription: '심야 자습 신청하기'
        }
    }
  }
  const content = getContent();

  return (
    <View style={styles.container}>
      <View style={styles.Banner}>
        <View style={styles.Hstack}>
          <View style={styles.imageContainer}>
            <Image source={content?.image} style={styles.image} />
          </View>
          <Text style={styles.Title}>{content?.title}</Text>
        </View>
        <Text style={styles.description}>{content?.description}</Text>
        <TouchableOpacity>
          <Text style={styles.buttonStyle}>
            {content?.buttonDescription}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  Banner: {
    width: width * 0.44,
    height: 110,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  image: {
    width: 15,
    height: 15,
    tintColor: "white",
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#7b9ff8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  Hstack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3
  },
  Title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 18
  },
  description: {
    fontFamily: "Pretendard-Regular",
    fontSize: 13, 
    paddingTop: 10,
    color: "gray"
  },
  buttonStyle: {
    fontFamily: "Pretendard-Bold",
    fontSize: 17,
    color: "#0083F0",
    paddingVertical: 6
  }
});

export default SmallComponent