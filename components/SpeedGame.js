import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';

function SpeedGame () {
    const [ startVisible, setStartVisible ] = useState({display: "flex"});
    const [ waitingVisible, setWaitingVisible ] = useState({display: "none"});
    const [ gameVisible, setGameVisible ] = useState({display: "none"});
    const [ resultVisible, setResultVisible ] = useState({display: "none"});
    const [ countdownStatus, setCountdownStatus ] = useState(false);
    const [ timerStatus, setTimerStatus ] = useState(false);
    const [ countdown, setCountdown ] = useState(3);
    const [ counter, setCounter ] = useState(0);


    const visibilityHandler = () => {
        setWaitingVisible({display: "flex"});
        setStartVisible({display: "none"});
        setCountdownStatus(true);
    }

    useEffect(() => {
        if(countdownStatus){
            let interval = setInterval(() =>{
                setCountdown(countdown - 1);
                if (countdown <= 1){
                    clearInterval(interval);
                    setCountdownStatus(false);
                    setWaitingVisible({display: "none"});
                    setGameVisible({display: "flex"});
                    setTimerStatus(true);
                }
            }, 1000)
            return () => { clearInterval(interval) }
        }
    }, [countdownStatus, countdown])

    useEffect(() => {
        if(timerStatus){
            let timer = setTimeout(() => {
                setResultVisible({display: "flex"});
                setGameVisible({display: "none"});
                setTimerStatus(true);
            }, 5000)
            return () => { clearTimeout(timer) }
        }
    }, [timerStatus])


    return (
        <SafeAreaView style={styles.container}>
            <View style={startVisible}>
                <View style={styles.startGame}>
                    <TouchableOpacity style={styles.startButton} onPress={visibilityHandler}>
                        <Text style={{fontSize: 30}}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={waitingVisible}>
                <View style={styles.waitingScreen}>
                    <Text style={{fontSize: 20}}>Game starts in:</Text>
                    <Text style={{fontWeight: "bold", fontSize: 25}}>{countdown}</Text>
                </View>
            </View>
            <View style={gameVisible}>
                <View>
                    <TouchableOpacity style={styles.testScreen} onPress={() => {setCounter(counter + 1)}}>
                        <Text style={{fontWeight: "bold", fontSize: 30}}>CLICK AS FAST AS YOU CAN</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={resultVisible}>
                <View style={styles.resultScreen}>
                    <Text style={{fontWeight: "bold", fontSize: 35}} >You clicked {counter} times!</Text>
                    <Text style={{fontWeight: "bold", fontSize: 35}} >{counter/5}CPS</Text>
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
    testScreen: {
        minHeight: "100%",
        minWidth: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    waitingScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "50%"
    },
    resultScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "50%"
    },
})


export default SpeedGame