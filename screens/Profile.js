import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mediumFontBold}>UserName</Text>
      </View>
      <View style={styles.itemsRow}>
        <View>
          <Text>Number Game</Text>
          <View style={styles.itemScores}>
            <View>
              <Text>High Score</Text>
              <Text>0</Text>
            </View>
            <View>
              <Text>Average Score</Text>
              <Text>0</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Number Game</Text>
          <View style={styles.itemScores}>
            <View>
              <Text>High Score</Text>
              <Text>0</Text>
            </View>
            <View>
              <Text>Average Score</Text>
              <Text>0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.itemsRow}>
        <View>
          <Text>Number Game</Text>
          <View style={styles.itemScores}>
            <View>
              <Text>High Score</Text>
              <Text>0</Text>
            </View>
            <View>
              <Text>Average Score</Text>
              <Text>0</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Number Game</Text>
          <View style={styles.itemScores}>
            <View>
              <Text>High Score</Text>
              <Text>0</Text>
            </View>
            <View>
              <Text>Average Score</Text>
              <Text>0</Text>
            </View>
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
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  itemsRow: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  itemScores: {
    flexDirection: "row",
  },
  mediumFontBold: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Profile;
