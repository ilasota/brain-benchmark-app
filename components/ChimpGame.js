import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity} from 'react-native';



function ChimpGame () {
  let gameBoard = Array(36);
  let position = [];


    const boardHandler = () => {
        for(let i = 0; i < 4; i++){
            position[i] = Math.floor(Math.random() * 35);
        }

        for(let i = 0; i < 36; i++){
            gameBoard[i] = {value: " ", event: () =>{}, id: Math.random()};
        }

        for(let i = 0; i < position.length; i++){
            gameBoard[position[i]] = {value: i+1,event: () =>{boardHandler()}, id: Math.random()}
        }
    }

    boardHandler()


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item)=> item.id.toString()}
                data={gameBoard}
                renderItem={ ({item}) =>
                    <View>
                        <TouchableOpacity onPress={item.event}>
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
    }
})

export default ChimpGame;

/**/
