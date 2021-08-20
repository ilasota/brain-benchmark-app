import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function ProfileItem(props) {
  let title, imgURL, unit, highScore, averageScore;
  score = props.data;
  switch (props.type) {
    case "NumberGame":
      title = "Number Game";
      imgURL = require("../assets/numbers.png");
      if (score.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.max(...score);
      }
      if (score.length === 0) {
        averageScore = 0;
      } else {
        averageScore = Math.round((score.reduce((a, b) => a + b, 0) / score.length) * 100) / 100;
      }
      unit = "";
      break;
    case "ReactionGame":
      title = "Reaction Game";
      imgURL = require("../assets/speed.png");
      if (score.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.min(...score);
      }
      if (score.length === 0) {
        averageScore = 0;
      } else {
        averageScore = Math.round((score.reduce((a, b) => a + b, 0) / score.length) * 100) / 100;
      }
      unit = " ms";
      break;
    case "SpeedGame":
      title = "Speed Game";
      imgURL = require("../assets/click.png");
      if (score.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.max(...score);
      }
      if (score.length === 0) {
        averageScore = 0;
      } else {
        averageScore = Math.round((score.reduce((a, b) => a + b, 0) / score.length) * 100) / 100;
      }
      unit = " cps";
      break;
    case "ChimpGame":
      title = "Chimp Game";
      imgURL = require("../assets/chimp.png");
      if (score.length === 0) {
        highScore = 0;
      } else {
        highScore = Math.max(...score);
      }
      if (score.length === 0) {
        averageScore = 0;
      } else {
        averageScore = Math.round((score.reduce((a, b) => a + b, 0) / score.length) * 100) / 100;
      }
      unit = "";
      break;
  }

  return (
    <View style={styles.gameRow}>
      <Image style={styles.image} source={imgURL} />
      <View style={styles.item}>
        <View style={styles.gameHeader}>
          <Text style={styles.smallBoldFont}>{title}</Text>
        </View>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomColor: "#d4d6d9",
    borderBottomWidth: 1,
    padding: 20,
    flex: 1,
  },
  item: {
    flex: 1,
  },
  image: {
    height: 60,
    width: 60,
  },
  gameHeader: {
    alignItems: "center",
  },
  scoresRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  scores: {
    alignItems: "center",
  },
  smallFont: {
    fontSize: 18,
    color: "#222222",
  },
  smallBoldFont: {
    fontSize: 18,
    color: "#222222",
    fontWeight: "bold",
  },
  mediumFont: {
    fontSize: 20,
    color: "#222222",
  },
});

export default ProfileItem;
