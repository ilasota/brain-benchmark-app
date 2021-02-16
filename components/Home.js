import 'react-native-gesture-handler';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, View, Text, SafeAreaView, StatusBar,  Dimensions, Image, TouchableOpacity} from 'react-native';

import data from "../assets/data";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


function Home ({ navigation }) {

    const isCarousel = React.useRef(null)

    return (
        <SafeAreaView style={styles.container}>
           <Carousel data={data}
                     layout="default"
                     ref={isCarousel}
                     sliderWidth={SLIDER_WIDTH}
                     itemWidth={ITEM_WIDTH}
                     useScrollView={true}
                     renderItem={ ({item} ) =>
                       <View style={styles.carousel}>
                           <Image
                               source={{ uri: item.imgUrl }}
                               style={styles.image}
                           />
                           <TouchableOpacity onPress={() => {navigation.navigate(item.navi)}}>
                               <Text style={styles.headerCar}>{item.title}</Text>
                           </TouchableOpacity>
                           <Text style={styles.body}>{item.body}</Text>
                       </View>
                     }
           />
        </SafeAreaView>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center"
    },
    image: {
        width: ITEM_WIDTH,
        height: 300,
    },
    carousel: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    headerCar: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20
    },
});

export default Home;