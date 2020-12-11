import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

function GameOne () {
    const [ number, setNumber] = useState(Math.random);

    return (
      <SafeAreaView style={styles.container}>
          <View>
              <Text>{number}</Text>
              <TouchableOpacity onPress={() => setNumber(Math.random())}>
                  <Text>Change</Text>
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