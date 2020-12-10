import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';

function GameOne ( {navigation} ) {
    return (
      <SafeAreaView style={styles.container}>
          <View>
              <Text>Siemanko</Text>
          </View>
      </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        minHeight: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default GameOne;