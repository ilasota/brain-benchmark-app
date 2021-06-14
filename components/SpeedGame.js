import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";

import { speedSubmit } from "../data/actions";

function SpeedGame() {
  const [startVisible, setStartVisible] = useState({ display: "flex" });
  const [waitingVisible, setWaitingVisible] = useState({ display: "none" });
  const [gameVisible, setGameVisible] = useState({
    display: "none",
  });
  const [resultVisible, setResultVisible] = useState({ display: "none" });
  const [countdownStatus, setCountdownStatus] = useState(false);
  const [timerStatus, setTimerStatus] = useState(false);
  const [delayStatus, setDelayStatus] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(0);

  const dispatch = useDispatch();

  const visibilityHandler = () => {
    setWaitingVisible({ display: "flex" });
    setStartVisible({ display: "none" });
    setCountdownStatus(true);
  };

  const resetHandler = () => {
    setWaitingVisible({ display: "flex" });
    setResultVisible({ display: "none" });
    setCountdown(3);
    setCounter(0);
    setCountdownStatus(true);
  };

  useEffect(() => {
    if (countdownStatus) {
      let interval = setInterval(() => {
        setCountdown(countdown - 1);
        if (countdown <= 1) {
          clearInterval(interval);
          setCountdownStatus(false);
          setWaitingVisible({ display: "none" });
          setGameVisible({ display: "flex" });
          setTimerStatus(true);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }

    if (timerStatus) {
      let timer = setTimeout(() => {
        setGameVisible({ display: "none" });
        setTimerStatus(false);
        setDelayStatus(true);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }

    if (delayStatus) {
      let timer = setTimeout(() => {
        setResultVisible({ display: "flex" });
        setDelayStatus(false);
        setResult(counter);
        dispatch(speedSubmit(counter / 5));
      }, 10);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [countdownStatus, countdown, timerStatus, delayStatus]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={startVisible}>
        <View style={styles.startGame}>
          <Text style={styles.bigFont}>Speed Game</Text>
          <Image style={styles.image} source={require("../assets/click.png")} />
          <Text style={styles.smallFont}>Click as fast as you can</Text>
          <TouchableOpacity style={styles.startButton} onPress={visibilityHandler}>
            <Text style={styles.mediumFont}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={waitingVisible}>
        <View style={styles.waitingScreen}>
          <Text style={styles.smallFont}>Game starts in:</Text>
          <Text style={styles.smallBoldFont}>{countdown}</Text>
        </View>
      </View>
      <View style={gameVisible}>
        <View>
          <TouchableOpacity
            style={styles.testScreen}
            onPress={() => {
              setCounter(counter + 1);
            }}
          >
            <Text style={styles.smallBoldFont}>CLICK AS FAST</Text>
            <Text style={styles.smallBoldFont}>AS YOU CAN!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={resultVisible}>
        <View style={styles.resultScreen}>
          <Text style={styles.mediumBoldFont}>You clicked</Text>
          <Text style={styles.mediumBoldFont}>{result} times!</Text>
          <Text style={styles.mediumBoldFont}>{result / 5} CPS</Text>
          <TouchableOpacity style={styles.restartButton} onPress={resetHandler}>
            <Text style={styles.smallFont}>Try Again!</Text>
          </TouchableOpacity>
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
    minHeight: "10%",
  },
  startGame: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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
  testScreen: {
    minHeight: "100%",
    minWidth: "100%",
    alignItems: "center",
    marginTop: "20%",
  },
  waitingScreen: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  resultScreen: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },
  restartButton: {
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
  image: {
    width: 150,
    height: 150,
  },
  smallFont: {
    fontSize: 20,
  },
  mediumFont: {
    fontSize: 30,
  },
  bigFont: {
    fontSize: 40,
  },
  smallBoldFont: {
    fontSize: 25,
    fontWeight: "bold",
  },
  mediumBoldFont: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default SpeedGame;
