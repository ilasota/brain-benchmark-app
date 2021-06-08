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
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>BRAIN BENCHMARK</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Pasword" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.secondaryButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Play as Guest</Text>
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
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    paddingBottom: "5%",
  },
  image: {
    width: 125,
    height: 125,
  },
  input: {
    borderWidth: 1,
    minWidth: "80%",
    fontSize: 20,
    borderColor: "#071570",
    marginTop: 5,
    padding: 5,
  },
  button: {
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#3ac1e3",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  secondaryButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    minWidth: "75%",
  },
});

export default Login;