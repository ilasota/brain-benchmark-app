import "react-native-gesture-handler";
import React from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import ProfileItem from "../components/ProfileItem";

function Profile({ navigation }) {
  const userName = useSelector((state) => state.userNameReducer);
  const numberScore = useSelector((state) => state.numberReducer);
  const reactionScore = useSelector((state) => state.reactionReducer);
  const speedScore = useSelector((state) => state.speedReducer);
  const chimpScore = useSelector((state) => state.chimpReducer);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("Home")}>
        <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.mediumFontBold}>{userName}</Text>
      </View>
      <ScrollView>
        <ProfileItem type={"NumberGame"} data={numberScore} />
        <ProfileItem type={"SpeedGame"} data={speedScore} />
        <ProfileItem type={"ReactionGame"} data={reactionScore} />
        <ProfileItem type={"ChimpGame"} data={chimpScore} />
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
  mediumFontBold: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Profile;
