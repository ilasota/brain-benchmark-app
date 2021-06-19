import "react-native-gesture-handler";
import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login";
import Home from "./screens/Home";
import NumberGame from "./screens/NumberGame";
import ReactionGame from "./screens/ReactionGame";
import SpeedGame from "./screens/SpeedGame";
import ChimpGame from "./screens/ChimpGame";

const Stack = createStackNavigator();

function Navigation() {
  const loginStatus = useSelector((state) => state.logInStatusReducer);
  let startScreen;

  if (loginStatus === "notLoggedIn") {
    startScreen = "Login";
  } else {
    startScreen = "Home";
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={startScreen} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NumberGame" component={NumberGame} />
        <Stack.Screen name="ReactionGame" component={ReactionGame} />
        <Stack.Screen name="SpeedGame" component={SpeedGame} />
        <Stack.Screen name="ChimpGame" component={ChimpGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
