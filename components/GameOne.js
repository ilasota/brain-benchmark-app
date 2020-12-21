import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

function GameOne () {
    const [ gameVisible, setGameVisible ] = useState({display: "none"});
    const [ startVisible, setStartVisible ] = useState({display: "flex"});
    const [ number, setNumber] = useState(Math.round(Math.random()*10));
    const [ round, setRound ] = useState(1);
    const [ answer, setAnswer] = useState("");
    const [ numVisible, setNumVisible ] = useState({display: "flex"});
    const [ inputVisible, setInputVisible ] = useState({display: "none"});

    let powerOfTen;
    let finalNum = number;
    let randomNum;
    let timeAmount;

    const visibilityHandler = () => {
        setGameVisible({display: "flex"})
        setStartVisible({display: "none"})
    }


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
            setNumVisible({display: "flex"});
            setInputVisible({display: "none"});
            timerHandler();
        } else {
            setRound(1);
            setNumber(Math.round(Math.random()*10));
            setAnswer("");
            setNumVisible({display: "flex"});
            setInputVisible({display: "none"});
            timerHandler();
        }
    }


    const timerHandler = () => {
        timeAmount = 2000 + ( ( round ) * 1000 );
        setTimeout(
            () => {
                setInputVisible({display: "flex"});
                setNumVisible({display: "none"})
            },
            timeAmount
        )
    }


    return (
      <SafeAreaView style={styles.container}>
          <View style={startVisible}>
              <View style={styles.startGame}>
                  <TouchableOpacity style={styles.startButton} onPress={() => {visibilityHandler(); timerHandler()}}>
                      <Text style={{fontSize: 30}}>Start</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={gameVisible}>
              <View style={styles.roundStyle}>
                  <Text style={{fontSize: 20}}>Round: {round}</Text>
              </View>
              <View style={styles.gameScreen}>
                  <View style={numVisible}>
                      <Text style={{ fontSize: 40 }}>{number}</Text>
                  </View>
                  <View style={inputVisible}>
                      <TextInput
                          style={ styles.numInput }
                          placeholder="..."
                          onChangeText = {(enteredInput) => setAnswer(enteredInput)}
                          value ={answer}
                          keyboardType = "number-pad"
                      />
                      <TouchableOpacity onPress={numberHandler}>
                          <Text style={{fontSize: 20}}>Enter</Text>
                      </TouchableOpacity>
                  </View>
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
    startGame:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "50%",
    },
    startButton: {
      backgroundColor: "#62d653",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 15,
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
      minWidth: "50%",
      alignItems: "center",
      fontSize: 35,
      textAlign: "center",
      borderColor: "#071570",
    },
})


export default GameOne;