import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { API_LINK } from "@env";

function SignUp({ navigation }) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatPasswordInput, setRepeatPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisible, setErrorVisible] = useState(styles.invisible);

  const inputChecker = () => {
    setErrorVisible(styles.invisible);
    if (!nameInput.trim().length) {
      setErrorMessage("Enter Username");
      setErrorVisible(styles.visible);
    } else if (!emailInput.trim().length) {
      setErrorMessage("Enter Email");
      setErrorVisible(styles.visible);
    } else if (!passwordInput.trim().length) {
      setErrorMessage("Enter Password");
      setErrorVisible(styles.visible);
    } else if (passwordInput !== repeatPasswordInput) {
      setErrorMessage("Passwords are not the same");
      setErrorVisible(styles.visible);
    } else {
      signUpHandler();
    }
  };

  const signUpHandler = () => {
    fetch(`${API_LINK}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: nameInput.replace(/\s/g, ""),
        email: emailInput.replace(/\s/g, ""),
        password: passwordInput,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 401 || res.status === 402) {
          setErrorMessage(res.message);
          setErrorVisible(styles.visible);
        } else {
          navigation.navigate("Home");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text>E-mail</Text>
          <TextInput
            value={emailInput}
            style={styles.input}
            onChangeText={(enteredInput) => setEmailInput(enteredInput)}
          />
          <Text>Password</Text>
          <TextInput
            value={passwordInput}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(enteredInput) => setPasswordInput(enteredInput)}
          />
          <Text>Repeat Passoword</Text>
          <TextInput
            value={repeatPasswordInput}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(enteredInput) => setRepeatPasswordInput(enteredInput)}
          />
        </View>
        <View style={errorVisible}>
          <Text style={styles.errorFont}>{errorMessage}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => inputChecker()}>
          <Text style={styles.buttonText}>Sign up!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text>Already have an account? Sign In!</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginVertical: 15,
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
  goBackButton: {
    marginTop: 20,
    alignItems: "center",
  },
  bigFontBold: {
    fontSize: 35,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
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

export default SignUp;
