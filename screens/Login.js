import "react-native-gesture-handler";
import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { API_LINK } from "@env";

import { loginStatus, chimpUpdate, speedUpdate, reactionUpdate, numberUpdate } from "../data/actions";

function Login({ navigation }) {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorVisible, setErrorVisible] = useState(styles.invisible);

  const dispatch = useDispatch();

  const loginHandler = () => {
    setErrorVisible(styles.invisible);
    fetch(`${API_LINK}${nameInput}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: passwordInput }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          successHandler();
        } else {
          failureHandler();
        }
      })
      .catch((err) => console.error(err));
  };

  const successHandler = () => {
    updateScores();
    console.log("success");
    setNameInput("");
    setPasswordInput("");
    navigation.navigate("Home");
  };

  const updateScores = () => {
    fetch(`${API_LINK}${nameInput}/scores`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(numberUpdate(json.numberScore));
        dispatch(speedUpdate(json.speedScore));
        dispatch(reactionUpdate(json.reactionScore));
        dispatch(chimpUpdate(json.chimpScore));
      })
      .catch((err) => console.error(err));
  };

  const failureHandler = () => {
    setErrorVisible(styles.visible);
    console.log("failure");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <Text style={styles.bigFontBold}>BRAIN BENCHMARK</Text>
      </View>
      <View>
        <Text>Username</Text>
        <TextInput
          value={nameInput}
          style={styles.input}
          onChangeText={(enteredInput) => setNameInput(enteredInput)}
        />
        <Text>Password</Text>
        <TextInput
          value={passwordInput}
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(enteredInput) => setPasswordInput(enteredInput)}
        />
        <View style={errorVisible}>
          <Text style={styles.errorFont}>Wrong password</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => loginHandler()}>
          <Text style={styles.mediumButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.secondaryButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.smallButtonText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(loginStatus("guestLoggin"));
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.smallButtonText}>Play as Guest</Text>
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
    minWidth: "90%",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    borderColor: "#d4d6d9",
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
  smallButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mediumButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bigFontBold: {
    fontSize: 35,
    fontWeight: "bold",
  },
  errorFont: {
    color: "#ff0000",
    fontWeight: "bold",
    padding: 10,
  },
  visible: {
    display: "flex",
    alignItems: "center",
  },
  invisible: {
    display: "none",
  },
});

export default Login;
