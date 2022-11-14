import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SearchDogList = () => {
    const userName = '두부'
    return (
        <>
            <TouchableOpacity>
                <View style={Styles.listContainer}>
                    <Image 
                        source={require('../assets/image/Dog1.jpg')}
                        resizeMode="contain"
                        style={{
                        width: 125,
                        height: 125,
                        borderRadius: 100,
                        marginLeft: 10,
                        
                        }}
                    />
                    <Text style={{color: '#282828', fontSize: 18, fontWeight: '500',marginTop: 10,}}>{userName}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default SearchDogList

const Styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'center',
    }
})