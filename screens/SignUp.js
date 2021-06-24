import "react-native-gesture-handler";
import React from "react";
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

function SignUp({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logo}>
          <Image style={styles.image} source={require("../assets/icon.png")} />
          <Text style={styles.bigFontBold}>BRAIN BENCHMARK</Text>
        </View>
        <View>
          <Text>Username</Text>
          <TextInput style={styles.input} />
          <Text>E-mail</Text>
          <TextInput style={styles.input} />
          <Text>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
          <Text>Repeat Passowrd</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.button}>
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
});

export default SignUp;
