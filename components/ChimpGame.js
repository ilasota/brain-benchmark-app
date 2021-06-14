import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";

import { chimpSubmit } from "../data/actions";

export const TILE = Dimensions.get("screen").width * 0.13;

function ChimpGame() {
  const [startVisible, setStartVisible] = useState({ display: "flex" });
  const [gameVisible, setGameVisible] = useState({ display: "none" });
  const [winVisible, setWinVisible] = useState({ display: "none" });
  const [numVisible, setNumVisible] = useState({ fontSize: 30 });
  const [loseVisible, setLoseVisible] = useState({ display: "none" });
  const [gameBoard, setGameBoard] = useState([]);
  const [numberAmount, setNumberAmount] = useState(4);
  const [currentNum, setCurrentNum] = useState(1);
  const [roundResult, setRoundResult] = useState();

  const dispatch = useDispatch();

  let squarePosition = Array(36);
  let position = [];

  const boardHandler = () => {
    for (let i = 0; i < numberAmount; i++) {
      let pos = Math.floor(Math.random() * 35);
      while (position.includes(pos)) {
        pos = Math.floor(Math.random() * 35);
      }
      position[i] = pos;
    }

    for (let i = 0; i < 36; i++) {
      squarePosition[i] = {
        value: " ",
        id: Math.random(),
        tile: {
          minWidth: TILE,
          minHeight: TILE,
          margin: 2,
        },
      };
    }

    for (let i = 0; i < position.length; i++) {
      squarePosition[position[i]] = {
        value: i + 1,
        id: Math.random(),
        tile: {
          backgroundColor: "#ffffff",
          borderWidth: 1,
          borderRadius: 5,
          minWidth: TILE,
          minHeight: TILE,
          alignItems: "center",
          margin: 2,
        },
      };
    }
  };

  const roundHandler = () => {
    boardHandler();
    setGameBoard(squarePosition);
    setCurrentNum(1);
    setStartVisible({ display: "none" });
    setGameVisible({ display: "flex" });
    setWinVisible({ display: "none" });
    setLoseVisible({ display: "none" });
  };

  const gameHandler = (item, itemID) => {
    const editedBoard = gameBoard.map((item) => {
      if (item.id === itemID) {
        item.tile = {
          width: TILE,
          height: TILE,
          margin: 2,
        };
        return item;
      }
      return item;
    });
    setGameBoard(editedBoard);
    if (item.id === itemID && item.value !== " ") {
      setNumVisible({ display: "none" });
      if (item.value === currentNum) {
        if (item.value === numberAmount) {
          setRoundResult(numberAmount);
          setNumberAmount(numberAmount + 1);
          setWinVisible({ display: "flex" });
          setGameVisible({ display: "none" });
          setNumVisible({ display: "flex" });
        } else {
          setCurrentNum(currentNum + 1);
        }
      } else {
        setRoundResult(numberAmount);
        dispatch(chimpSubmit(numberAmount === 4 ? 0 : numberAmount - 1));
        setNumberAmount(4);
        setLoseVisible({ display: "flex" });
        setGameVisible({ display: "none" });
        setNumVisible({ display: "flex" });
      }
      item.value = " ";
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={startVisible}>
        <View style={styles.startGame}>
          <Text style={styles.bigFont}>Chimp Game</Text>
          <Image style={styles.image} source={require("../assets/chimp.png")} />
          <Text style={styles.smallFont}>Press the squares</Text>
          <Text style={styles.smallFont}>according to their numbers.</Text>
          <TouchableOpacity style={styles.startButton} onPress={roundHandler}>
            <Text style={styles.mediumFont}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={gameVisible}>
        <FlatList
          contentContainerStyle={{
            marginTop: 45,
            marginHorizontal: 10,
            alignItems: "center",
          }}
          keyExtractor={() => Math.random().toString()}
          data={gameBoard}
          numColumns={6}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={item.tile}
                onPress={() => {
                  gameHandler(item, item.id);
                }}
              >
                <View style={numVisible}>
                  <Text style={styles.mediumFont}>{item.value}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={winVisible}>
        <View style={styles.resultScreen}>
          <Text style={styles.mediumFont}>Good job!</Text>
          <Text style={styles.mediumFont}>Next round will be</Text>
          <Text style={styles.hugeFont}>{roundResult + 1}</Text>
          <Text style={styles.mediumFont}>numbers</Text>
          <TouchableOpacity style={styles.endButton} onPress={roundHandler}>
            <Text style={styles.smallFont}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={loseVisible}>
        <View style={styles.resultScreen}>
          <Text style={styles.mediumFont}>You lost!</Text>
          <Text style={styles.mediumFont}>Your Score:</Text>
          <Text style={styles.hugeFont}>{roundResult === 4 ? 0 : roundResult - 1}</Text>
          <Text style={styles.mediumFont}>numbers</Text>
          <TouchableOpacity style={styles.endButton} onPress={roundHandler}>
            <Text style={styles.smallFont}>Try Again</Text>
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
    marginTop: "5%",
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
  resultScreen: {
    alignItems: "center",
    marginTop: "5%",
  },
  endButton: {
    alignItems: "center",
    marginTop: "5%",
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
  hugeFont: {
    fontSize: 50,
  },
});

export default ChimpGame;
