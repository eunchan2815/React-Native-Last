import React, { useState } from 'react';
import {
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import DodamButton from "../components/DodamButton";
import BackButton from "../components/BackButton";

const { width } = Dimensions.get("window");

const Login = ({ navigation }: any) => {
  const handleMainPress = () => {
    navigation.navigate("Main")
  }

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isIdFocused, setIsIdFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.title}>아이디와 비밀번호를 {"\n"}입력해주세요</Text>

        <View style={[styles.inputContainer, isIdFocused && styles.focusedInput]}>
          <TextInput
            onChangeText={setId}
            value={id}
            placeholder="아이디"
            style={styles.input}
            onFocus={() => setIsIdFocused(true)}
            onBlur={() => setIsIdFocused(false)}
          />
        </View>

        <View style={[styles.inputContainer, isPasswordFocused && styles.focusedInput]}>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="비밀번호"
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </View>

        <DodamButton action={handleMainPress} text='로그인'/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 200,
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 25,
    position: "absolute",
    top: 100,
    left: 10,
    padding: 10,
  },
  inputContainer: {
    width: width * 0.9,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    marginBottom: 20,
  },
  focusedInput: {
    borderBottomColor: '#0083F0',
  },
  input: {
    height: 40,
    fontSize: 18,
    fontFamily: "Pretendard-Regular",
  },
});

export default Login;
