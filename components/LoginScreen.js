import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';


function Login({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 20}}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Home")}}>
                    <Text style={{fontSize: 20}}>Play as guest</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf6f5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "space-around"
    },
    button: {
        alignItems: "center",
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
    }
});


export default Login;