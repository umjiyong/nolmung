import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
const MiddleHeader = (Props) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={Styles.container}>
                <TouchableOpacity onPress={navigation.goBack}>
                <Image
                    source={require('../assets/icons/GoBack.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
                </TouchableOpacity>
            </View>
            <View style={Styles.mainText}>
                <Text style={Styles.text}>{Props.header}</Text>
            </View>
        </>
    )
}

export default MiddleHeader;


const Styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 15,
    },

    mainText: {
        top: -23,
        alignItems:'center',
    },

    text: {
        color: '#282828',
        fontSize: 16,
        fontWeight: '500'
    },
})