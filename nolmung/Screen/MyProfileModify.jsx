import React, { useState } from "react";
import { ScrollView,TextInput, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DogModify from "../Components/DogModifty";
import HumanModify from "../Components/HumanModify";
import MiddleHeader from "../Components/MiddleHeader";

const MyProfileModify = () =>{
    const [select, setSelect] = useState('human')
    const onPressHuman = () => {
        setSelect('human')
        console.log(select)
    }
    const onPressDog = () => {
        setSelect('dog')
        console.log(select)
    }   
    
    return (
        <>
            <MiddleHeader header="프로필 수정" />
            <View style={Styles.selectBox}>
                <TouchableOpacity onPress={onPressHuman} style={select =='human' ? Styles.bottomBorder : Styles.selectTextHuman}>
                    <View>
                        <Text style={{color: '#282828',textAlign:'center',marginBottom:5,}}>
                            보호자 정보
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressDog} style={select =='dog' ? Styles.bottomBorder : Styles.selectTextHuman}>
                    <View>
                        <Text style={{color: '#282828',textAlign:'center',marginBottom:5}}>
                            강아지 정보
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {select == 'human' ? 
            (
                <>
                  <HumanModify />
                </>
            ) : 
            (
                <ScrollView showsVerticalScrollIndicator={false}>
                   <DogModify />
                </ScrollView>
            )}
        </>
    )
}



export default MyProfileModify;


const Styles = StyleSheet.create({
    selectBox:{
        flexDirection:'row',
        // backgroundColor:'red',
        justifyContent:'space-around',
    },
    selectTextHuman: {
        // borderBottomColor: 'gray',
        // borderBottomWidth: 2,
        width:'50%',
    },
    selectTextDog: {

    },
    bottomBorder: {
        width:'50%',
        borderBottomColor: '#FF8544',
        borderBottomWidth: 1.5,
    },
})