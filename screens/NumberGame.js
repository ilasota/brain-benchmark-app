import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useDispatch, useSelector } from "react-redux";
import { API_LINK } from "@env";

import { numberSubmit } from "../data/actions";

function NumberGame({ navigation }) {
  const [gameVisible, setGameVisible] = useState(styles.invisible);
  const [startVisible, setStartVisible] = useState(styles.visible);
  const [numVisible, setNumVisible] = useState(styles.visible);
  const [inputVisible, setInputVisible] = useState(styles.invisible);
  const [loseScreen, setLoseScreen] = useState(styles.invisible);
  const [winScreen, setWinScreen] = useState(styles.invisible);
  const [savedScore, setSavedScore] = useState({
    userAnswer: "",
    currentRound: "",
    currentNumber: "",
  });
  const [number, setNumber] = useState(Math.floor(Math.random() * 10));
  const [round, setRound] = useState(1);
  const [answer, setAnswer] = useState("");
  const [animationStatus, setAnimationStatus] = useState(false);
  const [key, setKey] = useState(0);
  const [animationTime, setAnimationTime] = useState(3);
  const [timerStatus, setTimerStatus] = useState(false);
  const [timeAmount, setTimeAmount] = useState();

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userNameReducer);
  const numberScore = useSelector((state) => state.numberReducer);

  let finalNum = number;

  const visibilityHandler = () => {
    setGameVisible(styles.visible);
    setStartVisible(styles.invisible);
    setAnimationStatus(true);
  };

  const numberHandler = () => {
    if (parseInt(answer, 10) === finalNum) {
      setSavedScore({
        userAnswer: answer,
        currentRound: round,
        currentNumber: finalNum,
      });
      setRound(round + 1);
      let powerOfTen = Math.pow(10, round + 1);
      let randomNum = Math.random();
      if (randomNum < 0.1) {
        finalNum = Math.floor(powerOfTen / 10 + randomNum * powerOfTen);
      } else {
        finalNum = Math.floor(randomNum * powerOfTen);
      }
      setNumber(finalNum);
      setAnswer("");
      setGameVisible(styles.invisible);
      setWinScreen(styles.visible);
    } else {
      setSavedScore({
        userAnswer: answer,
        currentRound: round,
        currentNumber: finalNum,
      });
      scoreSaveHandler();
      setRound(1);
      setNumber(Math.floor(Math.random() * 10));
      setAnswer("");
      setGameVisible(styles.invisible);
      setLoseScreen(styles.visible);
    }
  };

  const winHandler = () => {
    setNumVisible(styles.visible);
    setInputVisible(styles.invisible);
    setWinScreen(styles.invisible);
    setGameVisible(styles.visible);
    setKey(key + 1);
    setAnimationStatus(true);
    setAnimationTime(2 + round);
    timerHandler();
  };

  const loseHandler = () => {
    setNumVisible(styles.visible);
    setInputVisible(styles.invisible);
    setLoseScreen(styles.invisible);
    setGameVisible(styles.visible);
    setKey(key + 1);
    setAnimationStatus(true);
    setAnimationTime(3);
    timerHandler();
  };

  const timerHandler = () => {
    setTimeAmount(2000 + round * 1000);
    setTimerStatus(true);
  };

  useEffect(() => {
    if (timerStatus) {
      let timer = setTimeout(() => {
        setInputVisible(styles.visibleInput);
        setNumVisible(styles.invisible);
        setTimerStatus(false);
      }, timeAmount);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [setInputVisible, setNumVisible, timerStatus, timeAmount]);

  const scoreSaveHandler = () => {
    dispatch(numberSubmit(round - 1));
    fetch(`${API_LINK}/${userName}/scores`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ numberScore: [...numberScore, round - 1] }),
    }).catch((err) => console.error(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={startVisible}>
        <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
        </TouchableOpacity>
        <View style={styles.startGame}>
          <Text style={styles.hugeFont}>Number Game</Text>
          <Image style={styles.image} source={require("../assets/numbers.png")} />
          <Text style={styles.smallFont}>Simple memory test.</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              visibilityHandler();
              timerHandler();
            }}
          >
            <Text style={styles.bigFont}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={gameVisible}>
        <View style={styles.roundStyle}>
          <Text style={styles.smallFont}>Round: {round}</Text>
        </View>
        <View style={styles.gameScreen}>
          <View style={numVisible}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.hugeFont}> {number} </Text>
              <CountdownCircleTimer
                key={key}
                isPlaying={animationStatus}
                duration={animationTime}
                colors="#000"
                trailColor="#fcf6f5"
                size={50}
                onComplete={() => {
                  setAnimationStatus(false);
                }}
              />
            </View>
          </View>
          <View style={inputVisible}>
            <TextInput
              style={styles.numInput}
              onChangeText={(enteredInput) => setAnswer(enteredInput)}
              value={answer}
              keyboardType="number-pad"
              onSubmitEditing={numberHandler}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                numberHandler();
                Keyboard.dismiss();
              }}
            >
              <Text style={styles.smallFont}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={winScreen}>
        <View style={styles.roundEnd}>
          <View style={styles.endRound}>
            <Text style={styles.bigFont}>Round</Text>
            <Text style={styles.mediumFont}>{savedScore.currentRound}</Text>
          </View>
          <Image style={styles.endImage} source={require("../assets/Checkmark.png")} />
          <View style={styles.endNumber}>
            <Text style={styles.bigFont}>Number</Text>
            <Text style={styles.mediumFont}>{savedScore.currentNumber}</Text>
          </View>
          <View style={styles.endAnswer}>
            <Text style={styles.bigFont}>Your answer</Text>
            <Text style={styles.mediumFont}>{savedScore.userAnswer}</Text>
            <TouchableOpacity style={styles.endButton} onPress={winHandler}>
              <Text style={styles.mediumFont}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={loseScreen}>
        <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
        </TouchableOpacity>
        <View style={styles.roundEnd}>
          <View style={styles.endRound}>
            <Text style={styles.bigFont}>Round</Text>
            <Text style={styles.mediumFont}>{savedScore.currentRound}</Text>
          </View>
          <Image style={styles.endImage} source={require("../assets/X.png")} />
          <View style={styles.endNumber}>
            <Text style={styles.bigFont}>Number</Text>
            <Text style={styles.mediumFont}>{savedScore.currentNumber}</Text>
          </View>
          <View style={styles.endAnswer}>
            <Text style={styles.bigFont}>Your answer</Text>
            <Text style={styles.mediumFont}>{savedScore.userAnswer}</Text>
            <TouchableOpacity style={styles.endButton} onPress={loseHandler}>
              <Text style={styles.mediumFont}>Try Again</Text>
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
    minHeight: "10%",
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
  roundStyle: {
    padding: 15,
  },
  gameScreen: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  numInput: {
    borderBottomWidth: 1,
    minWidth: "50%",
    fontSize: 35,
    textAlign: "center",
    borderColor: "#071570",
  },
  submitButton: {
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
  roundEnd: {
    alignItems: "center",
  },
  endRound: {
    alignItems: "center",
    marginTop: "5%",
  },
  endImage: {
    width: 75,
    height: 75,
    marginTop: "5%",
  },
  endNumber: {
    alignItems: "center",
    marginTop: "5%",
  },
  endAnswer: {
    alignItems: "center",
    marginTop: "5%",
  },
  endButton: {
    alignItems: "center",
    marginTop: "5%",
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
  visibleInput: {
    display: "flex",
    alignItems: "center",
  },
});

export default NumberGame;
