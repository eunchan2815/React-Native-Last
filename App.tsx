import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // 추가
import Root from './src/screens/Root'; 
import Main from './src/screens/Tabs/Main'; // 커스텀 탭바 사용
import Login from "./src/screens/Login";
import Onboarding from "./src/screens/Onboarding";
import Home from "./src/screens/Tabs/Home";
import Meal from "./src/screens/Tabs/Meal";
import Setting from "./src/screens/Tabs/Setting";
import Out from "./src/screens/Tabs/Out";
import Night from "./src/screens/Tabs/Night";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // Tab 네비게이터 생성

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("./src/assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-Light": require("./src/assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Medium": require("./src/assets/fonts/Pretendard-Medium.ttf"),
    "Pretendard-Regular": require("./src/assets/fonts/Pretendard-Regular.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []);

  if (isLoading) {
    return <Onboarding />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Root' component={Root} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="Main" component={() => (
          <Tab.Navigator 
          screenOptions={{ headerShown: false }} 
          tabBar={(props) => <Main {...props} />}
          >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Meal" component={Meal} />
          <Tab.Screen name="Out" component={Out} />
          <Tab.Screen name="Night" component={Night} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>        
        )} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
