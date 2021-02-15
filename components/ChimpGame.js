import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity} from 'react-native';



function ChimpGame () {
  const [ startVisible, setStartVisible ] = useState({display: "flex"});
  const [ gameVisible, setGameVisible ] = useState({display: "none"});
  const [ winVisible, setWinVisible ] = useState({display: "none"});
  const [ loseVisible, setLoseVisible ] = useState({display: "none"});
  const [ gameBoard, setGameBoard ]  = useState([]);
  const [ numberAmount, setNumberAmount ] = useState(4)
  const [ numVisible, setNumVisible ] = useState({font: 30});
  const [ currentNum , setCurrentNum ] = useState(1);


  let squarePosition = Array(36);
  let position = [];


    const boardHandler = () => {
        for(let i = 0; i < numberAmount; i++) {
            let pos = Math.floor(Math.random() * 35);
            while (position.includes(pos)) {
                pos = Math.floor(Math.random() * 35);
            }
            position[i] = pos;
        }

        for(let i = 0; i < 36; i++){
            squarePosition[i] = {
                value: " ",
                id: Math.random(),
                tile: {
                    minWidth: 55,
                    minHeight: 55,
                    margin: 5,
                }
            };
        }

        for(let i = 0; i < position.length; i++){
            squarePosition[position[i]] = {
                value: i+1,
                id: Math.random(),
                tile: {
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

    const roundHandler = () => {
        boardHandler();
        setGameBoard(squarePosition);
        setCurrentNum(1);
        setStartVisible({display: "none"});
        setGameVisible({display: "flex"});
        setWinVisible({display: "none"});
        setLoseVisible({display: "none"});
    }


    const gameHandler = (item, itemID) => {
        setNumVisible({display: "none"})
        const editedBoard = gameBoard.map( item => {
            if ( item.id === itemID ) {
                item.tile = {minWidth: 55, minHeight: 55, margin: 5,}
                return item
            }
            return item
        })
        setGameBoard( editedBoard )
        if( item.id === itemID ){
            if(item.value === currentNum){
                if(item.value === numberAmount){
                    setNumberAmount(numberAmount + 1)
                    setWinVisible({display: "flex"});
                    setGameVisible({display: "none"});
                    setNumVisible({display: "flex"});
                } else {
                    setCurrentNum(currentNum + 1)
                }
            }else {
                setNumberAmount(4);
                setLoseVisible({display: "flex"});
                setGameVisible({display: "none"});
                setNumVisible({display: "flex"});
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={startVisible}>
                <View style={styles.startGame}>
                    <TouchableOpacity style={styles.startButton}
                                      onPress={roundHandler}>
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
                            <TouchableOpacity activeOpacity={0.8} style={item.tile} onPress={()=>{gameHandler(item, item.id)}}>
                                <View style={numVisible}>
                                    <Text style={{fontSize: 30}}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }/>
            </View>
            <View style={winVisible}>
                <TouchableOpacity onPress={roundHandler}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={loseVisible}>
                <TouchableOpacity onPress={roundHandler}>
                    <Text>Try Again</Text>
                </TouchableOpacity>
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


