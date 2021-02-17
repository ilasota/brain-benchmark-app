import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet, View, Text, SafeAreaView, StatusBar,  Dimensions, Image, TouchableOpacity} from 'react-native';

import data from "../assets/data";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


function Home ({ navigation }) {
    const [ index, setIndex ] = useState(0)
    const isCarousel = React.useRef(null)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>BRAIN BENCHMARK</Text>
            </View>
           <Carousel data={data}
                     layout="default"
                     ref={isCarousel}
                     sliderWidth={SLIDER_WIDTH}
                     itemWidth={ITEM_WIDTH}
                     useScrollView={true}
                     onSnapToItem={(index) => setIndex(index)}
                     renderItem={ ({item} ) =>
                       <View style={styles.carousel}>
                           <Text style={styles.headerCar}>{item.title}</Text>
                           <Image
                               source={{ uri: item.imgUrl }}
                               style={styles.image}
                           />
                           <View style={styles.scoresRow}>
                               <View style={styles.scores}>
                                   <Text style={{fontSize: 18, color: '#222222'}}>High Score</Text>
                                   <Text style={{fontSize: 20, color: '#222222'}}>{item.high}</Text>
                               </View>
                               <View style={styles.scores}>
                                   <Text style={{fontSize: 18, color: '#222222'}}>Average Score</Text>
                                   <Text style={{fontSize: 20, color: '#222222'}}>{item.average}</Text>
                               </View>
                           </View>
                           <Text style={styles.body}>{item.body}</Text>
                           <TouchableOpacity style={styles.playButton} onPress={() => {navigation.navigate(item.navi)}}>
                               <Text style={styles.buttonText}>PLAY!</Text>
                           </TouchableOpacity>
                       </View>
                     }
           />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: "rgba(0,0,0,0.92)"
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
        backgroundColor: '#fcf6f5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center"
    },
    header: {
        alignItems: "flex-start",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    carousel: {
        alignItems: "center",
        borderRadius: 8,
        minWidth: ITEM_WIDTH,
        minHeight: "95%",
        paddingBottom: 40,
        marginTop: 15,
    },
    headerCar: {
        color: "#222222",
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 20,
    },
    image: {
        width: 75,
        height: 75,
    },
    body: {
        color: "#222222",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
        minHeight: "35%",
    },
    scoresRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 300,
        paddingVertical: 10,
    },
    scores: {
        alignItems: "center",
        paddingVertical: 5,
    },
    playButton: {
        alignItems: "center",
        marginTop: "15%",
        marginBottom: "5%",
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "#3ac1e3",
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 7,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }
});

export default Home;