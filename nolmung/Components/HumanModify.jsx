import React, { useState } from "react";
import {Modal, ScrollView,TextInput, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
// import Postcode from "@actbase/react-daum-postcode";
const HumanModify = () => {
    const [nickName, setNickName] = useState('닉네임을 입력하세요')
    const onChangeText = (event) => {
        setNickName(event)
        console.log(event)
    }

    const [introduce, setIntroduce] = useState('')
    const onChangeIntro = (event) => {
        setIntroduce(event)
        console.log(event)
    }

    const [address, setAddress] = useState('서울시 종로구 난계로 241')

    return (
    <>
        <ScrollView>
            <View style={Styles.HumanContainer}>
                <View style={Styles.HumanNickNameBox}>
                    <Text style={Styles.HumanNickname}>닉네임</Text>
                    <TextInput
                        onFocus={()=> {setNickName('')}}
                        value={nickName}
                        onChangeText={onChangeText}
                        style={Styles.horizentalLine}
                    />
                </View>
                <View style={Styles.HumanIntroBox}>
                    <Text style={Styles.IntroTitle}>자기소개</Text>
                    <TextInput
                        value={introduce}
                        onChangeText={onChangeIntro}
                        style={Styles.TextArea}
                    />
                </View>
                <View style={Styles.HumanAddressBox}>
                    <Text style={Styles.AddressText}>주소</Text> 
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{color: '#282828'}}>{address}</Text>
                        <Text style={Styles.changeBtn}>변경</Text>
                    </View>
                    <View style={Styles.addressBottom}/>
                    
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={Styles.completeBtn}>
                    <Text style={{color: '#fff', fontWeight:'500'}}>수정 완료</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>
    )
}

export default HumanModify;

const Styles = StyleSheet.create({
    HumanContainer:{
        marginHorizontal: 20,
        marginTop: 20,
    },
    HumanNickname: {
        color: '#282828',
        fontWeight: '600',
        fontSize: 16,

    },
    horizentalLine: {
        color: '#282828',
        borderBottomColor: '#959595',
        borderBottomWidth: 1,
        marginBottom: 20,
        height: 40,
      
    },
    HumanNickNameBox: {
       
      
    },
    HumanIntroBox: {
      
        // backgroundColor: 'red'
    },
    IntroTitle: {
        color: '#282828',
        fontWeight: '600',
        marginBottom: 10,
        fontSize: 16,

    },
    TextArea: {
        color: '#282828',
        borderWidth: 1,
        borderColor: '#959595',
        borderRadius: 15,
        paddingLeft: 15,
    },
    HumanAddressBox:{
        marginTop: 20,
    },
    AddressText: {
        fontWeight: '600',
        color: '#282828',
        fontSize: 16,
    },
    addressBottom: {
        marginTop: 5,
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },
    changeBtn: {
        color: '#FF772F',
        backgroundColor:'transparent',
        borderWidth: 1,
        borderColor: '#FF772F',
        borderRadius: 15,
        paddingTop: 2,
        paddingHorizontal:10,
    },
    completeBtn: {
        marginTop: 100,
        width: '70%',
        height: 43,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FF772F',
        borderRadius:50,
    }

})
