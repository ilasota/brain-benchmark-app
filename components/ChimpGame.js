import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from 'react-native';


function ChimpGame () {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Test</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3ac1e3',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        minHeight: '10%',
    }
})

export default ChimpGame;