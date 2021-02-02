import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList} from 'react-native';


function ChimpGame () {
  let test = Array(36);
  test.fill({value: 0})


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={() => Math.random()}
                data={test}
                renderItem={ (test) =>
                    <View>
                        <Text>{test.value}</Text>
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