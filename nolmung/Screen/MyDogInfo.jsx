import React, { useState } from "react";
import { ScrollView,TextInput, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MiddleHeader from "../Components/MiddleHeader";
const MyDogInfo = () => {
    const navi = useNavigation()
    const [DogName, setDogName] = useState("지용")
    const onChangeText = (event) => {
        setDogName(event)
    }

    const [DogSeed, setDogSeed] = useState('믹스견')
    const onChangeSeed = (event) => {
        setDogSeed(event)
    }

    const [year, setYear] = useState("1997")
    const [month, setMonth] = useState("11")
    const [date, setDate] = useState("11")

    const onChangeYear = (event) => {
        setYear(event)
    } 
    const onChangeMonth = (event) => {
        setMonth(event)
    } 
    const onChangeDate = (event) => {
        setDate(event)
    } 

    const [dogWeight, setDogWeight] = useState('3')
    const onChangeWeight = (event) => {
        setDogWeight(event)
    }

    const [dogChar, setDogChar] = useState('성격을 입력해주세요')
    const onChangeDogChar = (e) => {
        setDogChar(e)
    }

    const [selectSex, setSelectSex] = useState('man')
    const onChangeMan = () => {
        setSelectSex('man');
       
    }
    const onChangeWoman = () => {
        setSelectSex('woman');
     
    }
    const [selectNeut, setSelectNeut ] = useState('X')
    const onChangeO = () => {
        setSelectNeut('O')
    }
    const onChangeX = () => {
        setSelectNeut('X')
    }

    const dogFriendCode = "#ECS10P"
    return (
    <>
        <MiddleHeader header={DogName}/>
        <ScrollView style={Styles.DogContainer}> 
            <View style={Styles.DogImage}>
                <Image  
                    source={require('../assets/image/Dog1.jpg')}
                    resizeMode="contain"
                    style={{
                        width: 102,
                        height: 102,
                        borderRadius: 50,
                    }}
                />
                <Text style={{color: '#282828', marginTop: 6, fontSize: 14}}>{dogFriendCode}</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 이름</Text>
                <Text style={{color: '#282828',borderBottomColor:'gray', borderBottomWidth:1, paddingBottom:5}}>{DogName}</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>견종</Text>
                <Text style={{color: '#282828',borderBottomColor:'gray', borderBottomWidth:1, paddingBottom:5}}>{DogSeed}</Text>
            </View>
            <View>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>생년월일</Text>    
                <View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={Styles.BirthConatiner}>{year}</Text>
                    <Text style={{marginHorizontal:0, ...Styles.BirthConatiner}}>{month}</Text>
                    <Text style={Styles.BirthConatiner}>{date}</Text>
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>몸무게</Text>
                <View>
                    <Text style={{color: '#282828',}}>{dogWeight} Kg</Text>
                </View>
                <View style={{borderBottomColor:'gray', borderBottomWidth:1, marginTop: 5, }}></View>
            </View>
            <View style={{marginTop: 20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 성격</Text>
                    <Text style={{color: '#959595'}}>(최대 40자)</Text>
                </View>
                <View style={{ height: 70, borderColor: '#959595', borderWidth: 1, borderRadius: 15, justifyContent:'center' }}>
                    <Text style={{textAlign: 'center',color: '#282828'}}>{dogChar}</Text>           
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 성별</Text>
                <View style={Styles.BtnContainer}>
                    {/*  */}
                    <View>
                        <View style={selectSex =='man' ? Styles.SelectsexBtn : Styles.sexBtn}>
                            <Text style={selectSex == 'man' ? Styles.SelectBtnText: Styles.BtnText}>남성</Text>
                        </View>
                    </View>
                    <View>
                        <View style={selectSex == 'woman' ? Styles.SelectsexBtn: Styles.sexBtn}>
                            <Text style={selectSex == 'woman'? Styles.SelectBtnText : Styles.BtnText}>여성</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 중성화 여부</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    {/*  */}
                    <View>
                        <View style={selectNeut =='O' ? Styles.SelectNeutBtn : Styles.NeutBtn}>
                            <Text style={selectNeut == 'O' ? Styles.SelectBtnText: Styles.BtnText}>O</Text>
                        </View>
                    </View>
                    <View>
                        <View style={selectNeut == 'X' ? Styles.SelectNeutBtn: Styles.NeutBtn}>
                            <Text style={selectNeut == 'X'? Styles.SelectBtnText : Styles.BtnText}>X</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={Styles.completeBtn} onPress={()=>{navi.goBack()}}>
            <Text style={{color: '#fff', fontWeight:'500'}}>확인</Text>
        </TouchableOpacity>
    </>
    ) 
}

export default MyDogInfo;

const Styles = StyleSheet.create({
    DogList:{
        // flexDirection:'row',
        // justifyContent:'flex-start',
        // alignItems:'center',
        
        height: 70,
        backgroundColor: '#FFD9C6'
    },
    DogContainer: {
        marginHorizontal: 20,
        
    },
    plusDog: {
        marginTop: 15,
        width: 37,
        height: 37,
        backgroundColor: '#FF8544', 
        borderRadius: 50,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 20,
    },
    DogImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    BirthConatiner: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        color: '#282828',
        paddingVertical: 10,
        paddingHorizontal:42,
    },
    BtnContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }, 
    
    sexBtn: {
        paddingVertical: 12,
        paddingHorizontal: 75,
        borderWidth: 1,
        borderColor: '#FF8544',
        borderRadius: 10,

    },
    BtnText: {
        color:"#FF8544",
        fontSize: 16,
    },
    SelectBtnText: {
        color: '#fff',
        fontSize: 16,
    },
    SelectsexBtn: {
        backgroundColor:'#ff8544',
        paddingVertical: 12,
        paddingHorizontal: 75,
        borderWidth: 1,
        borderColor: '#FF8544',
        borderRadius: 10
    },
    SelectNeutBtn: {
        backgroundColor:'#ff8544',
        paddingVertical: 12,
        paddingHorizontal: 75,
        borderWidth: 1,
        borderColor: '#FF8544',
        borderRadius: 10
    },
    NeutBtn: {
        paddingVertical: 12,
        paddingHorizontal: 75,
        borderWidth: 1,
        borderColor: '#FF8544',
        borderRadius: 10,
    },
    completeBtn: {
        marginTop: 40,
        height: 43,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FF772F'
    }

})