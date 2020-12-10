import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';




export default function App() {
  const [ firstTileStatus, setFTS ] = useState(false);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25 }}>Brain Benchmark</Text>
      </View>
      <ScrollView contentContainerStyle={styles.menu}>
        <TouchableOpacity onPress={() => setFTS(true) } activeOpacity={0.9} style={styles.tile}>
          <Image
              style={styles.tileIcon}
              source={{
                uri: 'https://2rri712hg8ztbbaed491mw10-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/placeholder-square.png',
              }}
          />
          <Text style={styles.tileText}>tile</Text>
          <Modal
              onRequestClose={ () => setFTS(false) }
              visible={firstTileStatus}
              transparent={true}
              animationType = 'slide'
          >
            <View style={styles.infoModal}>
              <View style={styles.testDesc}>
                <Text style={ { fontSize: 40, } } >Game Name</Text>
                <Text style={ { fontSize: 20, } }>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
              <View style={styles.controlButtons}>
                <TouchableOpacity onPress={() => setFTS(false)} style={styles.cancelButton}>
                  <Text style={ { fontSize: 20, } }>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Played Test!')} style={styles.playButton}>
                  <Text style={ { fontSize: 20, } }>Play!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
      </ScrollView>
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
    alignItems: "flex-start",
    flexWrap: 'wrap',
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
  },
  infoModal: {
    flex: 1,
    marginVertical: "5%",
    marginHorizontal: "5%",
    alignItems: "center",
    backgroundColor: '#ffffff',
    borderRadius: 30,
    borderWidth: 1,
    padding: 20,
    borderColor: '#000000'
  },
  testDesc: {
    minHeight: '80%',
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    width: '35%',
    alignItems: 'center',
    backgroundColor: "#d91414",
  },
  playButton: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    width: '35%',
    alignItems: 'center',
    backgroundColor: "#1ccf23",
  }
});
