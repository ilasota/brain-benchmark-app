import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList} from 'react-native';


function ChimpGame () {
  let test = Array(36);
  test[13] = {value: 15, event: () =>{}};
    test[16] = {value: 15, event: () =>{}};
    test[11] = {value: 15, event: () =>{}};
    test[20] = {value: 15, event: () =>{}};

  test.forEach(value => {console.log(value)})

  console.log(test[20])
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>test</Text></View>
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

/*<FlatList
                keyExtractor={() => Math.random()}
                data={test}
                renderItem={ ({item}) =>
                    <View>
                        <Text>{item.value}</Text>
                    </View>
                }
            />*/
