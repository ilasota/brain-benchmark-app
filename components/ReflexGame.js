import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';


function ReflexGame () {
    const [ startVisible, setStartVisible ] = useState({display: "flex"});
    const [ waitingVisible, setWaitingVisible ] = useState({display: "none"});
    const [ testVisible, setTestVisible ] = useState({display: "none"});
    const [ resultVisible, setResultVisible ] = useState({display: "none"});
    const [ failVisible, setFailVisible ] = useState({display: "none"});
    const [ startTime, setStartTime ] = useState();
    const [ timeElapsed, setTimeElapsed ] = useState();
    const [ gameTimer, setGameTimer ] = useState()

    let endTime;

    const gameHandler = () => {
        setStartVisible({display: "none"});
        setWaitingVisible({display: "flex"});
        setGameTimer(setTimeout(() => {
            setWaitingVisible({display: "none"});
            setTestVisible({display: "flex"});
            setStartTime(new Date());
        }, Math.random() * 4000 + 2000))
    }


    const failHandler = () => {
        clearTimeout(gameTimer);
        setWaitingVisible({display: "none"});
        setFailVisible({display: "flex"});
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
                    <TouchableOpacity style={styles.waitingScreen} onPress={failHandler}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Wait for Green</Text>
                    </TouchableOpacity>
            </View>
            <View style={testVisible}>
                <TouchableOpacity style={styles.testScreen} onPress={endHandler}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>PRESS NOW!</Text>
                </TouchableOpacity>
            </View>
            <View style={resultVisible}>
                <View style={styles.resultStyle}>
                    <Text style={{fontSize: 30}}>Your time:</Text>
                    <Text style={{fontSize: 20}}>{timeElapsed}ms</Text>
                    <View style={styles.controlButtons}>
                        <TouchableOpacity styles={styles.resetButton}>
                            <Text>Try Again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={failVisible}>
                <View style={styles.failStyle}>
                    <Text style={{fontSize: 20}}>You pressed too early!</Text>
                    <View style={styles.controlButtons}>
                        <TouchableOpacity styles={styles.resetButton}>
                            <Text>Try Again</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </View>
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
    },
    resultStyle: {
        marginTop: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    failStyle: {
        marginTop: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        marginTop: 10,
    }
})

export default ReflexGame