import "react-native-gesture-handler";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import CarouselItem from "../components/CarouselItem";
import SideMenu from "../components/SideMenu";

import {
  loginStatus,
  userNameSubmit,
  chimpUpdate,
  speedUpdate,
  reactionUpdate,
  numberUpdate,
  followUpdate,
} from "../data/actions";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const IMAGE = Dimensions.get("window").width * 0.25;

function Home({ navigation }) {
  const [index, setIndex] = useState(0);
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const data = ["NumberGame", "ReactionGame", "SpeedGame", "ChimpGame"];
  const isCarousel = React.useRef(null);

  const dispatch = useDispatch();

  const logOutHandler = () => {
    setSideMenuVisible(false);
    dispatch(numberUpdate([]));
    dispatch(speedUpdate([]));
    dispatch(reactionUpdate([]));
    dispatch(chimpUpdate([]));
    dispatch(followUpdate([]));
    dispatch(userNameSubmit(""));
    dispatch(loginStatus("notLoggedIn"));
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mediumFontBold}>BRAIN BENCHMARK</Text>
        <TouchableOpacity onPress={() => setSideMenuVisible(true)}>
          <Image style={styles.hamburgerIcon} source={require("../assets/hamburger-icon.png")} />
        </TouchableOpacity>
      </View>
      <SideMenu
        visible={sideMenuVisible}
        onMakeInvisible={() => setSideMenuVisible(false)}
        onFollowNavi={() => {
          navigation.navigate("FollowList");
          setSideMenuVisible(false);
        }}
        onProfileNavi={() => {
          navigation.navigate("Profile");
          setSideMenuVisible(false);
        }}
        onLogOut={() => logOutHandler()}
      />
      <Carousel
        data={data}
        layout="default"
        ref={isCarousel}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        renderItem={({ item }) => <CarouselItem type={item} />}
      />
      <Pagination
        containerStyle={{ padding: 5 }}
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0,0,0,0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf6f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 3,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  mediumFontBold: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
