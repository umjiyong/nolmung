import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {getUserInfo} from "../api/User"
import {useState, useEffect} from 'react';

const SearchFriendList = (Props) => {
    
    const [userdata,setuserdata] = useState([])
    console.log(Props.userId)

    


    const user_info_func = async (id) => {
        try {
          
          await getUserInfo(
            { userId: id },
            (response) => {
              setuserdata(response.data);
            },
            (err) => {
              console.log("아티클질문 에러", err);
            }
          );
        } catch (err) {
          console.log(err);
          console.log("심각한 에러;;");
        }
      };

      useEffect(() => {
        console.log(Props.userId.userId)
        if(Props.userId.userId){
            user_info_func(Props.userId.userId)

        }else{console.log("아직안들어옴")}
        
        console.log("유저값",userdata)
      }, []);
    
      const userName = userdata.userNickName

    return (
        <>
            <View style={Styles.listContainer}>
                <Image 
                    source={{uri : userdata.userImg}}
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