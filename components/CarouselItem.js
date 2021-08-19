import "react-native-gesture-handler";
import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const IMAGE = Dimensions.get("window").width * 0.25;

function CarouselItem(props) {
  const navigation = useNavigation();

  const numberScore = useSelector((state) => state.numberReducer);
  const reactionScore = useSelector((state) => state.reactionReducer);
  const speedScore = useSelector((state) => state.speedReducer);
  const chimpScore = useSelector((state) => state.chimpReducer);

  let title, description, imgURL, unit, navi, highScore, averageScore;
  switch (props.type) {
    case "NumberGame":
      title = "Number Game";
      description =
        "Simple number memory test. The average person can only remember 7 digit numbers reliably, but it's possible to do much better using mnemonic techniques.";
      imgURL = require("../assets/numbers.png");
      if (numberScore.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.max(...numberScore);
      }
      if (numberScore.length === 0) {
        averageScore = 0;
      } else {
        averageScore = Math.round((numberScore.reduce((a, b) => a + b, 0) / numberScore.length) * 100) / 100;
      }
      unit = "";
      navi = "NumberGame";
      break;
    case "ReactionGame":
      title = "Reaction Game";
      description =
        "Simple test that measures your reaction speed. Average reaction time for a person is around 250ms.";
      imgURL = require("../assets/speed.png");
      if (reactionScore.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.min(...reactionScore);
      }
      if (reactionScore.length === 0) {
        averageScore = 0;
      } else {
        averageScore =
          Math.round((reactionScore.reduce((a, b) => a + b, 0) / reactionScore.length) * 100) / 100;
      }
      unit = " ms";
      navi = "ReactionGame";
      break;
    case "SpeedGame":
      title = "Speed Game";
      description =
        "Test that measures your clicking speed. For a reliable results you should only use one finger.";
      imgURL = require("../assets/click.png");
      if (speedScore.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.max(...speedScore);
      }
      if (speedScore.length === 0) {
        averageScore = 0;
      } else {
        averageScore = Math.round((speedScore.reduce((a, b) => a + b, 0) / speedScore.length) * 100) / 100;
      }
      unit = " cps";
      navi = "SpeedGame";
      break;
    case "ChimpGame":
      title = "Chimp Game";
      description =
        "This is a test of working memory, made famous by a study that found that chimpanzees consistently outperform humans on this task.";
      imgURL = require("../assets/chimp.png");
      if (chimpScore.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.max(...chimpScore);
      }
      if (chimpScore.length === 0) {
        averageScore = 0;
      } else {
        averageScore = Math.round((chimpScore.reduce((a, b) => a + b, 0) / chimpScore.length) * 100) / 100;
      }
      unit = "";
      navi = "ChimpGame";
      break;
  }

  return (
    <View style={styles.carousel}>
      <Text style={styles.headerCar}>{title}</Text>
      <Image source={imgURL} style={styles.image} />
      <View style={styles.scoresRow}>
        <View style={styles.scores}>
          <Text style={styles.smallFont}>High Score</Text>
          <Text style={styles.mediumFont}>
            {highScore}
            {unit}
          </Text>
        </View>
        <View style={styles.scores}>
          <Text style={styles.smallFont}>Average Score</Text>
          <Text style={styles.mediumFont}>
            {averageScore}
            {unit}
          </Text>
        </View>
      </View>
      <Text style={styles.body}>{description}</Text>
      <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate(navi)}>
        <Text style={styles.buttonText}>PLAY!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    alignItems: "center",
    borderRadius: 8,
    minWidth: ITEM_WIDTH,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  headerCar: {
    color: "#222222",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 3,
  },
  image: {
    width: IMAGE,
    height: IMAGE,
  },
  body: {
    color: "#222222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  scoresRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
  },
  scores: {
    alignItems: "center",
  },
  playButton: {
    alignItems: "center",
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  smallFont: {
    fontSize: 18,
    color: "#222222",
  },
  mediumFontBold: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mediumFont: {
    fontSize: 20,
    color: "#222222",
  },
});

export default CarouselItem;
