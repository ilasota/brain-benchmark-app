import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { API_LINK } from "@env";

function FollowedProfile({ navigation, route }) {
  const [numberScore, setNumberScore] = useState([]);
  const [speedScore, setSpeedScore] = useState([]);
  const [reactionScore, setReactionScore] = useState([]);
  const [chimpScore, setChimpScore] = useState([]);
  const [loadingVisible, setLoadingVisible] = useState(styles.visible);
  const [scoresVisible, setScoresVisible] = useState(styles.invisible);

  const { followedName } = route.params;

  useEffect(() => {
    const ac = new AbortController();
    fetch(`${API_LINK}/${followedName}/scores`)
      .then((res) => res.json())
      .then((json) => {
        setNumberScore(json.numberScore);
        setSpeedScore(json.speedScore);
        setReactionScore(json.reactionScore);
        setChimpScore(json.chimpScore);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoadingVisible(styles.invisible);
        setScoresVisible(styles.visible);
      });
    return () => {
      setNumberScore([]);
      setSpeedScore([]);
      setReactionScore([]);
      setChimpScore([]);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("FollowList")}>
        <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.mediumFontBold}>{followedName}</Text>
      </View>
      <ActivityIndicator size="small" color="#000" style={loadingVisible} />
      <ScrollView contentContainerStyle={scoresVisible}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
          <Image style={styles.image} source={require("../assets/numbers.png")} />
          <View style={{ flex: 1 }}>
            <View style={{ alignItems: "center" }}>
              <Text>Number Game</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>
              <View>
                <Text>High Score</Text>
                <Text>12</Text>
              </View>
              <View>
                <Text>Average Score</Text>
                <Text>10,5</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf6f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  arrowPlacement: {
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  backarrow: {
    width: 30,
    height: 25,
  },
  header: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  mediumFontBold: {
    fontSize: 30,
    fontWeight: "bold",
  },
  visible: {
    display: "flex",
  },
  invisible: {
    display: "none",
  },
});

export default FollowedProfile;
