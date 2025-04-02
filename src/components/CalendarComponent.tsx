import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

const CalendarComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Banner} />

      <View style={styles.rowContainer}>
        <View style={styles.iconTextContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/calendar.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.titleText}>가까운 일정</Text>
        </View>


        <View style={{paddingBottom: 4}}>
          <View style={styles.Hstack}>
            <Text style={styles.date}>02일</Text>
            <Text>수요일</Text>
          </View>
          <View style={styles.description}>
            <View style={styles.circle}></View>
            <Text style={styles.subTitle}>해양수련활동</Text>
          </View>
        </View>

        <View style={styles.Hstack}>
          <Text style={styles.date}>07일</Text>
          <Text>월요일</Text>
        </View>

        <View style={styles.description}>
          <View style={styles.circle}></View>
          <Text style={styles.subTitle}>학생 정서 행동 특성검사</Text>
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
    height: 210,
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
    color: "#000",
  },
  Hstack: {
    flexDirection: "row",
    paddingHorizontal: 4,
    gap: 6,
    alignItems: "center",
    paddingVertical: 10
  },
  date: {
    fontSize: 20,
    fontFamily: "Pretendard-Bold",
    color: "#000",
  },
  subTitle: {
    paddingHorizontal: 4,
    fontFamily: "Pretendard-Regular",
    fontSize: 18,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#e76d64",
  },
  description: {
    flexDirection: "row", 
    paddingHorizontal: 4, 
    alignItems: "center", gap: 4
  }
});



export default CalendarComponent
