import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SearchFriendList = () => {
    const userName = '세로즈'
    return (
        <>
            <View style={Styles.listContainer}>
                <Image 
                    source={require('../assets/icons/man1Avatar.png')}
                    resizeMode="contain"
                    style={{
                      width: 125,
                      height: 125,
                      
                      marginLeft: 10,
                      
                    }}
                />
                <Text style={{color: '#282828', fontSize: 18, fontWeight: '500',marginTop: 10,}}>{userName}</Text>
            </View>
        </>
    )
}

export default SearchFriendList

const Styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'center',
    }
})