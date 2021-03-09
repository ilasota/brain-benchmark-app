import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';


function Login({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Text</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                    <Text>home screen</Text>
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
    }
});


export default Login;