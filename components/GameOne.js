import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

function GameOne () {
    const [ number, setNumber] = useState(Math.round(Math.random()*10));
    const [ round, setRound ] = useState(1);
    const [ answer, setAnswer] = useState("")

    let powerOfTen;
    let finalNum;
    let randomNum;


    const numberHandler = () => {
        if( answer == number) {
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
              <Text>{round}</Text>
              <Text>{number}</Text>
              <TextInput
                  placeholder="..."
                  onChangeText = {(enteredInput) => setAnswer(enteredInput)}
                  value ={answer}
                  keyboardType = "number-pad"
              />
              <TouchableOpacity onPress={numberHandler}>
                  <Text style={{fontSize: 20}}>Change</Text>
              </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default GameOne;