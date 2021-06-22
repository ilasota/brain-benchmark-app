import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from "react-native";

function SignUp({ navigation }) {
  <SafeAreaView style={styles.container}>
    <View>
      <Text>Test</Text>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf6f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
});

export default SignUp;
