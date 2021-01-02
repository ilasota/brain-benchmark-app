import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';


function ReflexGame () {
    const [ startVisible, setStartVisible ] = useState({display: "flex"});
    const [ waitingVisible, setWaitingVisible ] = useState({display: "none"});
    const [ testVisible, setTestVisible ] = useState({display: "none"});
    const [ resultVisible, setResultVisible ] = useState({display: "none"});
    const [ startTime, setStartTime ] = useState();
    const [ timeElapsed, setTimeElapsed ] = useState();

    let endTime;

    const gameHandler = () => {
        setStartVisible({display: "none"});
        setWaitingVisible({display: "flex"});
        setTimeout(() => {
            setWaitingVisible({display: "none"});
            setTestVisible({display: "flex"});
            setStartTime(new Date())
        }, 2000)
    }

    const endHandler = () => {
        endTime = new Date();
        setTimeElapsed(endTime - startTime);
        setTestVisible({display: "none"});
        setResultVisible({display: "flex"});
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={startVisible}>
                <View style={styles.startGame}>
                    <TouchableOpacity style={styles.startButton}
                                      onPress={ gameHandler }>
                        <Text style={ {fontSize: 30} }>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={waitingVisible}>
                    <TouchableOpacity style={styles.waitingScreen} onPress={() => console.log("chujpa")}>
                        <Text>Dupa</Text>
                    </TouchableOpacity>
            </View>
            <View style={testVisible}>
                <TouchableOpacity style={styles.testScreen} onPress={endHandler}>
                    <Text>Dupsko</Text>
                </TouchableOpacity>
            </View>
            <View style={resultVisible}>
                <View>
                    <Text>{timeElapsed}ms</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3ac1e3',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    waitingScreen: {
        minHeight: "100%",
        minWidth: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    testScreen: {
        minHeight: "100%",
        minWidth: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#00ff40"
    }
})

export default ReflexGame