import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity} from 'react-native';



function ChimpGame () {
  const [ startVisible, setStartVisible ] = useState({display: "flex"});
  const [ gameVisible, setGameVisible ] = useState({display: "none"});
  const [gameBoard, setGameBoard]  = useState([]);

  let squarePosition = Array(36);
  let position = [];


    const boardHandler = () => {
        for(let i = 0; i < 4; i++) {
            let pos = Math.floor(Math.random() * 35);
            while (position.includes(pos)) {
                pos = Math.floor(Math.random() * 35);
            }
            position[i] = pos;
        }

        for(let i = 0; i < 36; i++){
            squarePosition[i] = {
                value: " ",
                event: () =>{},
                id: Math.random(),
                test: {
                    minWidth: 55,
                    minHeight: 55,
                    margin: 5,
                }
            };
        }

        for(let i = 0; i < position.length; i++){
            squarePosition[position[i]] = {
                value: i+1,
                event: () =>{},
                id: Math.random(),
                test: {
                    backgroundColor: '#ffffff',
                    borderWidth: 1,
                    borderRadius: 5,
                    minWidth: 55,
                    minHeight: 55,
                    alignItems: "center",
                    margin: 5,
                }
            }
        }
    }

    const startHandler = () => {
        boardHandler();
        setGameBoard(squarePosition);
        setStartVisible({display: "none"});
        setGameVisible({display: "flex"});
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={startVisible}>
                <View style={styles.startGame}>
                    <TouchableOpacity style={styles.startButton}
                                      onPress={startHandler}>
                        <Text style={ {fontSize: 30} }>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={gameVisible}>
                <FlatList
                    style={{marginVertical: 100}}
                    keyExtractor={()=> Math.random().toString()}
                    data={gameBoard}
                    numColumns={6}
                    renderItem={ ({item}) =>
                        <View>
                            <TouchableOpacity activeOpacity={0.8} style={item.test} onPress={item.event}>
                                <Text style={{fontSize: 30}}>{item.value}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
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
})

export default ChimpGame


