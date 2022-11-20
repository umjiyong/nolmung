import React, { useState } from "react";
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from "react-native";
import Category from "../components/Category";
import MiddleHeader from "../components/MiddleHeader";
import {postLandmark} from "../api/Landmark"
import {useNavigation} from '@react-navigation/native';

const NewGuestBook = ({navigation: {navigate}, route}) => {
    // console.log('파람확인', route.params.landmarkId);
    const [value, setValue] = useState("")


    // const [content,setcontent] = useState("")
    const [imageUrl, setimageUrl] = useState("")
    const landmarkBoardCreateDate = new Date();
    const landmarkId = route.params.landmarkId
    
    
    
      
    const postLandmarkFunc = async () => {
        try {
        await AsyncStorage.getItem('userId', (err, id) => {
            postLandmark(
            {content: value,
            imageUrl: imageUrl ,
            landmarkBoardCreateDate: landmarkBoardCreateDate,
            landmarkId: landmarkId,
            userId: 2}, // id로 바꿔야함
            response => {
                console.log("랜드마크 보드 포스트 성공")
            },
            
            );
        });
        } catch (err) {
        console.log('유저정보페이지 유저정보 get 에러', err);
        }
    };

    


    return (
        <>
            <MiddleHeader header="새 방명록" />
            <TouchableOpacity onPress={postLandmarkFunc} style={{position: 'absolute', top: 18, right: 20,}}>
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