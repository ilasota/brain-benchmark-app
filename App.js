import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 25, }}>Brain Benchmark</Text>
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
  }
});
