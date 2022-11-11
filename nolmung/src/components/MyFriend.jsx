import React from "react";
import {useState,useEffect} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {user_info} from "../api/user"
import {user_puppy_info} from "../api/puppy"
const MyFriend = (Props) => {
    const navigation = useNavigation()
    const [userinfo,setuseinfo] = useState([])
    const [puppyinfo,setpuppyinfo] = useState([])
    const HumanName = userinfo.userNickName
    const DogInfo = '미유 7세 믹스 5kg'


    const user_info_func = async (Id) => {
        try {
          
          await user_info(
            { userId: Id },
            (response) => {
              setuseinfo(response.data);
            },
            (err) => {
              console.log("유저정보 에러", err);
            }
          );
        } catch (err) {
          console.log(err);
          console.log("심각한 에러;;");
        }
      };

      const user_puppy_info_func = async (id) => {
        try {
          
          await user_puppy_info(
            { userId: 1 },
            (response) => {
              setpuppyinfo(response.data);
            },
            (err) => {
              console.log("강아지정보 에러", err);
            }
          );
        } catch (err) {
          console.log(err);
          console.log("심각한 에러;;");
        }
      };

      useEffect(() => {
        user_info_func(Props.userId);
        user_puppy_info_func(Props.userId);
        
      }, []);

      console.log(puppyinfo)
    return (
        <>
            <TouchableWithoutFeedback onPress={()=>{navigation.push('FriendProfile')}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
                    <View style={Styles.requestContainer}>
                        <Image 
                            source={{uri : userinfo.userImg}}
                            resizeMode="contain"
                            style={{
                                width: 70,
                                height: 70,
                            }}
                        />
                        <View style={Styles.requestTextBox}>
                            <Text style={{...Styles.requestText, fontSize: 20, marginTop: -15,}}>{HumanName}</Text>
                            <Text style={{...Styles.requestText, fontSize: 16, marginTop: 3,}}>{DogInfo}</Text>
                        </View>
                    </View>
                    
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default MyFriend

const Styles = StyleSheet.create({
    requestContainer: {
        flexDirection:'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    requestTextBox: {
        marginLeft: 10,
    },
    requestText: {
        color: '#282828'
    },
})