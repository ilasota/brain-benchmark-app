import "react-native-gesture-handler";
import React, { useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { followSubmit } from "../data/actions";

function FollowList({ navigation }) {
  const [noConnectionVisible, setNoConnectionVisible] = useState();
  const [listVisible, setListVisible] = useState();
  const [followInput, setFollowInput] = useState("");
  const followListData = useSelector((state) => state.followListReducer);
  const [listData, setListData] = useState(followListData);

  const dispatch = useDispatch();

  NetInfo.fetch().then((state) => {
    if (!state.isConnected) {
      setNoConnectionVisible(styles.visible);
      setListVisible(styles.invisible);
    } else {
      setNoConnectionVisible(styles.invisible);
      setListVisible(styles.visible);
    }
  });

  const inputHandler = () => {
    setListData([...listData, followInput]);
    dispatch(followSubmit(followInput));
    setFollowInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.arrowPlacement} onPress={() => navigation.navigate("Home")}>
        <Image source={require("../assets/backarrow.png")} style={styles.backarrow} />
      </TouchableOpacity>
      <View style={noConnectionVisible}>
        <View style={styles.netInfoPlacement}>
          <Text style={styles.mediumFontBold}>No Internet Connection</Text>
        </View>
      </View>
      <View style={listVisible}>
        <TextInput style={styles.input} onChangeText={(input) => setFollowInput(input)} value={followInput} />
        <TouchableOpacity onPress={inputHandler}>
          <Text>daiughdwi</Text>
        </TouchableOpacity>
        <FlatList
          data={listData}
          onSubmitEnding={inputHandler}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity>
                <View>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf6f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  arrowPlacement: {
    justifyContent: "flex-start",
    marginHorizontal: 20,
  },
  backarrow: {
    width: 30,
    height: 25,
  },
  netInfoPlacement: {
    justifyContent: "center",
    alignItems: "center",
  },
  visible: {
    display: "flex",
  },
  invisible: {
    display: "none",
  },
  mediumFontBold: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#484848",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FollowList;
