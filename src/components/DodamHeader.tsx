import { View, StyleSheet, Image, Text } from "react-native";

const DodamHeader = ({title, button}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.button}>{button}</View>
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
  button: {
    width: 30,
    height: 30,
    tintColor: "gray"
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
})

export default DodamHeader