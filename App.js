import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25 }}>Brain Benchmark</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.tile}>
          <Text>tile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Text>tile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Text>tile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Text>tile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 5,
    backgroundColor: '#3ac1e3',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: '10%',
    justifyContent: 'center',
  },
  menu: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  tile: {
    backgroundColor: '#dd6e6e',
    margin: 10,
    width: 175,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
