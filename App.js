import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./components/Home";
import NumberGame from "./components/NumberGame";
import ReactionGame from "./components/ReactionGame";
import SpeedGame from "./components/SpeedGame";
import ChimpGame from "./components/ChimpGame";

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen
              name="Home"
              component={Home}
          />
          <Stack.Screen
              name="NumberGame"
              component={NumberGame}
          />
          <Stack.Screen
              name="ReactionGame"
              component={ReactionGame}
          />
          <Stack.Screen
              name="SpeedGame"
              component={SpeedGame}
          />
          <Stack.Screen
              name="ChimpGame"
              component={ChimpGame}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


