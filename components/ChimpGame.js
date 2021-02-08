import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity} from 'react-native';



function ChimpGame () {
  const [gameBoard, setGameBoard]  = useState([]);
  let squarePosition = Array(36);
  let position = [];


    const boardHandler = () => {
        for(let i = 0; i < 10; i++) {
            let pos = Math.floor(Math.random() * 35);
            while (position.includes(pos)) {
                pos = Math.floor(Math.random() * 35);
            }
            position[i] = pos;
        }

        for(let i = 0; i < 36; i++){
            squarePosition[i] = {value: " ", event: () =>{}, id: Math.random()};
        }

        for(let i = 0; i < position.length; i++){
            squarePosition[position[i]] = {value: i+1,event: () =>{}, id: Math.random()}
        }
    }




    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>{boardHandler(); setGameBoard(squarePosition)}}><Text>Test</Text></TouchableOpacity>
            <FlatList
                keyExtractor={()=> Math.random().toString()}
                data={gameBoard}
                numColumns={6}
                renderItem={ ({item}) =>
                    <View style={styles.board}>
                        <TouchableOpacity style={styles.tile} onPress={item.event}>
                            <Text style={{fontSize: 40}}>{item.value}</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
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
    board: {

    },
    tile: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        minWidth: 55,
        minHeight: 55,
        alignItems: "center",
        margin: 5,
    }
})

export default ChimpGame


