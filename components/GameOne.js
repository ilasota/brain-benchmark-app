import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

function GameOne () {
    const [ number, setNumber] = useState(Math.round(Math.random()*10));
    const [ round, setRound ] = useState(1);

    let powerOfTen;
    let dupa;
    let randomNum;

    const numberHandler = () => {
        setRound(round + 1);
        powerOfTen = Math.pow(10, round + 1);
        randomNum = Math.random();
        if (randomNum < 0.1) {
            dupa = Math.floor( (powerOfTen / 10) + (randomNum * powerOfTen) );
        } else {
            dupa = Math.floor( randomNum * powerOfTen );
        }
        setNumber(dupa);
    }


    return (
      <SafeAreaView style={styles.container}>
          <View>
              <Text>{round}</Text>
              <Text>{number}</Text>
              <TouchableOpacity onPress={numberHandler}>
                  <Text style={{fontSize: 20}}>Change</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setNumber()}>
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