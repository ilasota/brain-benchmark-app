import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

function GameOne () {
    const [ number, setNumber] = useState(Math.round(Math.random()*10));
    const [ round, setRound ] = useState(1);
    const [ answer, setAnswer] = useState("")

    let powerOfTen;
    let finalNum = number;
    let randomNum;


    const numberHandler = () => {
        if( answer == finalNum) {
            setRound(round + 1);
            powerOfTen = Math.pow(10, round + 1);
            randomNum = Math.random();
            if (randomNum < 0.1) {
                finalNum = Math.floor( (powerOfTen / 10) + (randomNum * powerOfTen) );
            } else {
                finalNum = Math.floor( randomNum * powerOfTen );
            }
            setNumber(finalNum);
            setAnswer("");
        } else {
            setRound(1);
            setNumber(Math.round(Math.random()*10));
            setAnswer("")
        }
    }


    return (
      <SafeAreaView style={styles.container}>
          <View>
              <View style={styles.roundStyle}>
                  <Text style={{fontSize: 20}}>Round: {round}</Text>
              </View>
              <View style={styles.gameScreen}>
                  <Text>{number}</Text>
                  <TextInput
                      style={styles.numInput}
                      placeholder="..."
                      onChangeText = {(enteredInput) => setAnswer(enteredInput)}
                      value ={answer}
                      keyboardType = "number-pad"
                  />
                  <TouchableOpacity onPress={numberHandler}>
                      <Text style={{fontSize: 20}}>Change</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3ac1e3',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        minHeight: '10%',
    },
    roundStyle: {
        padding: 15,
    },
    gameScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: "60%"
    },
    numInput: {
      borderBottomWidth: 1,
      width: "50%",
      alignItems: "center",
      fontSize: 20,
      textAlign: "center",
      borderColor: "#071570",
    },
})


export default GameOne;