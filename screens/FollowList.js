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
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { API_LINK } from "@env";

import { followSubmit } from "../data/actions";

function FollowList({ navigation }) {
  const [noConnectionVisible, setNoConnectionVisible] = useState();
  const [errorVisible, setErrorVisible] = useState(styles.invisible);
  const [loadingVisible, setLoadingVisible] = useState(styles.invisible);
  const [errorMessage, setErrorMessage] = useState("");
  const [listVisible, setListVisible] = useState();
  const [followInput, setFollowInput] = useState("");
  const followListData = useSelector((state) => state.followListReducer);
  const [listData, setListData] = useState(followListData);

  const userName = useSelector((state) => state.userNameReducer);

  const dispatch = useDispatch();

  NetInfo.fetch().then((state) => {
    if (!state.isConnected) {
      setNoConnectionVisible(styles.visible);
      setListVisible(styles.invisible);
    } else {
      setNoConnectionVisible(styles.invisible);
      setListVisible(styles.listVisible);
    }
  });

  const inputHandler = () => {
    setErrorVisible(styles.invisible);
    setLoadingVisible(styles.visible);
    fetch(`${API_LINK}/${userName}/followed`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ followed: followInput }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 403) {
          setErrorMessage(res.message);
          setErrorVisible(styles.visible);
          setLoadingVisible(styles.invisible);
        } else {
          setLoadingVisible(styles.invisible);
          setListData([...listData, followInput]);
          dispatch(followSubmit(followInput));
        }
      })
      .catch((err) => console.error(err));

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
        <View style={styles.inputStyle}>
          <TextInput
            style={styles.inputBar}
            onChangeText={(input) => setFollowInput(input)}
            value={followInput}
          />
          <TouchableOpacity style={styles.button} onPress={inputHandler}>
            <Text style={styles.mediumFontBold}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={errorVisible}>
          <Text style={styles.errorFont}>{errorMessage}</Text>
        </View>
        <ActivityIndicator size="small" color="#000" style={loadingVisible} />
        <View style={styles.list}>
          <FlatList
            data={listData}
            keyExtractor={() => Math.random().toString()}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("FollowedProfile", { followedName: item })}
                >
                  <View style={styles.listItem}>
                    <Text style={styles.mediumFont}>{item}</Text>
                    <Text style={styles.mediumFont}>{">"}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
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
  inputStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputBar: {
    minWidth: "60%",
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    borderColor: "#d4d6d9",
  },
  button: {
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#3ac1e3",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 7,
  },
  list: {
    flex: 1,
  },
  listItem: {
    borderBottomColor: "#d4d6d9",
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  listVisible: {
    display: "flex",
    flex: 1,
  },
  visible: {
    display: "flex",
    alignItems: "center",
  },
  invisible: {
    display: "none",
  },
  mediumFontBold: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#484848",
  },
  mediumFont: {
    fontSize: 20,
    color: "#484848",
  },
  errorFont: {
    color: "#ff0000",
    fontWeight: "bold",
    padding: 10,
  },
});

export default FollowList;
