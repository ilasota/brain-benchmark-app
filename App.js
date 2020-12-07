import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25 }}>Brain Benchmark</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity activeOpacity={0.9} style={styles.tile}>
          <Image
              style={styles.tileIcon}
              source={{
                uri: 'https://2rri712hg8ztbbaed491mw10-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/placeholder-square.png',
              }}
          />
          <Text style={styles.tileText}>tile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.tile}>
          <Image
              style={styles.tileIcon}
              source={{
                uri: 'https://2rri712hg8ztbbaed491mw10-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/placeholder-square.png',
              }}
          />
          <Text style={styles.tileText}>tile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.tile}>
          <Image
              style={styles.tileIcon}
              source={{
                uri: 'https://2rri712hg8ztbbaed491mw10-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/placeholder-square.png',
              }}
          />
          <Text style={styles.tileText}>tile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.tile}>
          <Image
              style={styles.tileIcon}
              source={{
                uri: 'https://2rri712hg8ztbbaed491mw10-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/placeholder-square.png',
              }}
          />
          <Text style={styles.tileText}>tile</Text>
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
  },
  tileIcon: {
    width: 100,
    height: 100,
  },
  tileText: {
    paddingTop: 25,
  }
});
