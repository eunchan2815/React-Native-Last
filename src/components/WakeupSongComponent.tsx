import { View, Text, StyleSheet, Dimensions, Image, Linking, TouchableOpacity } from "react-native";
const { width } = Dimensions.get("window");

const WakeupSongComponent = () => {
  const handlePress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=xcRtOYjBYXc')
  }

  return (
    <View style={styles.container}>
      <View style={styles.Banner} />
      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/note.png')}
              style={styles.image}
            />
            </View>
            <Text style={styles.titleText}>오늘의 기상송</Text>
            </View>
          <View style={styles.SongContainer}>
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={require('../assets/Newjeans.png')}
                style={styles.songImage}
              />
            </TouchableOpacity>
            <View style={styles.Vstack}>
              <Text style={styles.songTitle}>[안방1열 풀캠4K] 뉴진스...</Text>
              <Text style={{fontFamily: "Pretendard-SemiBold", fontSize: 14}}>MBC every1</Text>
            </View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
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
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#7b9ff8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 15,
    height: 15,
    tintColor: "white",
  },
  titleText: {
    fontSize: 18,
    fontFamily: "Pretendard-Bold",
  },
  SongContainer: {
    flexDirection: "row",
    gap: 15,
    width: width - 80,
  },
  songImage: {
    width: 150,
    height: 80,
    borderRadius: 10
  },
  songTitle: {
    fontSize: 15,
    fontFamily: 'Pretendard-Bold',
  },
  Vstack: {
    flexDirection: "column",
    gap: 4
  }
})

export default WakeupSongComponent
