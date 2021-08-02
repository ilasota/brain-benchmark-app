import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";

import { reactionSubmit } from "../data/actions";

function ReactionGame({ navigation }) {
  const [startVisible, setStartVisible] = useState(styles.visible);
  const [waitingVisible, setWaitingVisible] = useState(styles.invisible);
  const [testVisible, setTestVisible] = useState(styles.invisible);
  const [resultVisible, setResultVisible] = useState(styles.invisible);
  const [failVisible, setFailVisible] = useState(styles.invisible);
  const [startTime, setStartTime] = useState();
  const [timeElapsed, setTimeElapsed] = useState();
  const [timerStatus, setTimerStatus] = useState(false);

  const dispatch = useDispatch();

  let endTime;
  let timer;

  const gameHandler = () => {
    setStartVisible(styles.invisible);
    setWaitingVisible(styles.visible);
    setTimerStatus(true);
  };

  const restartHandler = () => {
    setResultVisible(styles.invisible);
    setFailVisible(styles.invisible);
    setWaitingVisible(styles.visible);
    setTimerStatus(true);
  };

  useEffect(() => {
    if (timerStatus) {
      timer = setTimeout(() => {
        setWaitingVisible(styles.invisible);
        setTestVisible(styles.visible);
        setStartTime(new Date());
        setTimerStatus(false);
      }, Math.random() * 2000 + 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [setWaitingVisible, setTestVisible, timerStatus]);

  const failHandler = () => {
    setTimerStatus(false);
    setWaitingVisible(styles.invisible);
    setFailVisible(styles.visible);
  };

  const endHandler = () => {
    endTime = new Date();
    setTimeElapsed(endTime - startTime);
    setTestVisible(styles.invisible);
    setResultVisible(styles.visible);
    dispatch(reactionSubmit(endTime - startTime));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={startVisible}>
        <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
        </TouchableOpacity>
        <View style={styles.startGame}>
          <Text style={styles.hugeFont}>Reaction Game</Text>
          <Image style={styles.image} source={require("../assets/speed.png")} />
          <Text style={styles.smallFont}>Click when the screen</Text>
          <Text style={styles.smallFont}>turns green.</Text>
          <TouchableOpacity style={styles.startButton} onPress={gameHandler}>
            <Text style={styles.bigFont}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={waitingVisible}>
        <TouchableOpacity style={styles.waitingScreen} onPressIn={failHandler}>
          <Text style={styles.smallBoldFont}>Wait for Green</Text>
        </TouchableOpacity>
      </View>
      <View style={testVisible}>
        <TouchableOpacity style={styles.testScreen} onPressIn={endHandler}>
          <Text style={styles.smallBoldFont}>PRESS NOW!</Text>
        </TouchableOpacity>
      </View>
      <View style={resultVisible}>
        <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
        </TouchableOpacity>
        <View style={styles.resultStyle}>
          <Text style={styles.bigFont}>Your time:</Text>
          <Text style={styles.mediumFont}>{timeElapsed}ms</Text>
          <View style={styles.controlButtons}>
            <TouchableOpacity style={styles.restartButton} onPress={restartHandler}>
              <Text style={styles.smallFont}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={failVisible}>
        <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
        </TouchableOpacity>
        <View style={styles.failStyle}>
          <Text style={styles.bigFont}>You pressed too early!</Text>
          <View style={styles.controlButtons}>
            <TouchableOpacity style={styles.restartButton} onPress={restartHandler}>
              <Text style={styles.smallFont}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf6f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  startGame: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  arrowPlacement: {
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  backarrow: {
    width: 30,
    height: 25,
  },
  startButton: {
    alignItems: "center",
    marginTop: "10%",
    marginBottom: "5%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#3ac1e3",
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  waitingScreen: {
    minHeight: "100%",
    minWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  testScreen: {
    minHeight: "100%",
    minWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00ff40",
  },
  resultStyle: {
    marginTop: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  failStyle: {
    marginTop: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    marginTop: 10,
  },
  restartButton: {
    alignItems: "center",
    marginTop: "15%",
    marginBottom: "5%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#3ac1e3",
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  image: {
    width: 150,
    height: 150,
  },
  smallBoldFont: {
    fontSize: 20,
    fontWeight: "bold",
  },
  smallFont: {
    fontSize: 20,
  },
  mediumFont: {
    fontSize: 25,
  },
  bigFont: {
    fontSize: 30,
  },
  hugeFont: {
    fontSize: 40,
  },
  visible: {
    display: "flex",
  },
  invisible: {
    display: "none",
  },
});

export default ReactionGame;
