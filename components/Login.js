import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";

function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
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
});

export default Login;
