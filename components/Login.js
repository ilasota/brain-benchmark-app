import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>BRAIN BENCHMARK</Text>
      </View>
      <View>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Pasword" secureTextEntry={true} />
      </View>
      <View>
        <Text>Sing Up</Text>
      </View>
      <View>
        <Text>Play as Guest</Text>
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
  logo: {
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 125,
  },
});

export default Login;
