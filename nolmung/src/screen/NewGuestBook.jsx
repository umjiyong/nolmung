import React, { useState } from "react";
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from "react-native";
import Category from "../components/Category";
import MiddleHeader from "../components/MiddleHeader";

const NewGuestBook = () => {
    const [value, setValue] = useState()

    return (
        <>
            <MiddleHeader header="새 방명록" />
            <TouchableOpacity style={{position: 'absolute', top: 18, right: 20,}}>
                <Image 
                    source={require('../assets/icons/Check.png')}
                    />
            </TouchableOpacity>
            <View style={Styles.NewArticleContainer}>
                <View style={{flexDirection:'row',}}>
                    <View style={Styles.ArticleImageSample}></View>
                    <TextInput onChangeText={(e)=>setValue(e)} style={{marginLeft: 10, color:'#282828',}} placeholder="문구 입력..." placeholderTextColor={'#959595'} value={value}/>
                </View>
                <View style={{borderWidth:0.5, borderColor:'#C2C2C2', marginTop: 15,}}></View>
                
            </View>
        </>
    )
}

export default NewGuestBook

const Styles = StyleSheet.create({
    NewArticleContainer: {
        marginHorizontal:20,
        marginTop: 15,
    },
    ArticleImageSample: {
        width: 70,
        height: 70,
        backgroundColor:'gray',
    }

})