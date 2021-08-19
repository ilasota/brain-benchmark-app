import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";

function SideMenu(props) {
  return (
    <Modal visible={props.visible} animationType={"fade"} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.sideMenu}>
          <TouchableOpacity style={styles.sideHeader} onPress={props.onMakeInvisible}>
            <Image style={styles.hamburgerIcon} source={require("../assets/hamburger-icon.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideMenuItem} onPress={props.onProfileNavi}>
            <Image style={styles.sideMenuIcon} source={require("../assets/profile.png")} />
            <Text style={styles.mediumFont}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideMenuItem} onPress={props.onFollowNavi}>
            <Image style={styles.sideMenuIcon} source={require("../assets/friends.png")} />
            <Text style={styles.mediumFont}>Followed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideMenuItem} onPress={props.onLogOut}>
            <Image style={styles.sideMenuIcon} source={require("../assets/sign-out.png")} />
            <Text style={styles.mediumFont}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: "#00000080",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  sideMenu: {
    backgroundColor: "#fcf6f5",
    width: "80%",
    height: "100%",
  },
  sideHeader: {
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomColor: "#00000080",
    borderBottomWidth: 1,
  },
  sideMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  sideMenuIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
});

export default SideMenu;
