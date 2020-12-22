import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

function GameOne () {
    const [ gameVisible, setGameVisible ] = useState({display: "none"});
    const [ startVisible, setStartVisible ] = useState({display: "flex"});
    const [ number, setNumber] = useState(Math.floor(Math.random()*10));
    const [ round, setRound ] = useState(1);
    const [ answer, setAnswer] = useState("");
    const [ numVisible, setNumVisible ] = useState({display: "flex"});
    const [ inputVisible, setInputVisible ] = useState({display: "none"});
    const [ loseScreen, setLoseScreen ] = useState({display: "none"});
    const [ winScreen, setWinScreen ] = useState({display: "none"});

    let finalNum = number;

    const visibilityHandler = () => {
        setGameVisible({display: "flex"})
        setStartVisible({display: "none"})
    }


    const numberHandler = () => {
        if( answer == finalNum) {
            setRound(round + 1);
            let powerOfTen = Math.pow(10, round + 1);
            let randomNum = Math.random();
            if (randomNum < 0.1) {
                finalNum = Math.floor( (powerOfTen / 10) + (randomNum * powerOfTen) );
            } else {
                finalNum = Math.floor( randomNum * powerOfTen );
            }
            setNumber(finalNum);
            setAnswer("");
            setGameVisible({display: "none"});
            setWinScreen({display: "flex"});
        } else {
            setRound(1);
            setNumber(Math.floor(Math.random()*10));
            setAnswer("");
            setGameVisible({display: "none"});
            setLoseScreen({display: "flex"});
        }
    }


    const winHandler = () => {
        setNumVisible({display: "flex"});
        setInputVisible({display: "none"});
        setWinScreen({display: "none"});
        setGameVisible({display: "flex"})
        timerHandler();
    }


    const loseHandler = () => {
        setNumVisible({display: "flex"});
        setInputVisible({display: "none"});
        setLoseScreen({display: "none"});
        setGameVisible({display: "flex"})
        timerHandler();
    }


    const timerHandler = () => {
        let timeAmount = 2000 + ( ( round ) * 1000 );
        setTimeout(
            () => {
                setInputVisible({display: "flex", alignItems: "center"});
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
                          //placeholder="..."
                          onChangeText = {(enteredInput) => setAnswer(enteredInput)}
                          value ={answer}
                          keyboardType = "number-pad"
                          onSubmitEditing = {numberHandler}
                      />
                      <TouchableOpacity style={styles.submitButton} onPress={numberHandler}>
                          <Text style={{fontSize: 20}}>Enter</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
          <View style={winScreen}>
              <View style={styles.roundEnd}>
                  <TouchableOpacity onPress={winHandler}>
                      <Text>Next</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={loseScreen}>
              <View style={styles.roundEnd}>
                  <TouchableOpacity onPress={loseHandler}>
                      <Text>Try Again</Text>
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
        fontSize: 35,
        textAlign: "center",
        borderColor: "#071570",
    },
    submitButton: {
        padding: 10,
        marginTop: 20,
        backgroundColor: "#48c348",
        borderWidth: 1,
        borderRadius: 15,
    },
    roundEnd: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "50%",
    },
})


export default GameOne;