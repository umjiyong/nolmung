import React, { useState } from "react";
import { ScrollView,TextInput, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MiddleHeader from "../Components/MiddleHeader";
const AddDogInfo = () => {
    const navi = useNavigation()
    const [DogName, setDogName] = useState("")
    const onChangeText = (event) => {
        setDogName(event)
    }

    const [DogSeed, setDogSeed] = useState('')
    const onChangeSeed = (event) => {
        setDogSeed(event)
    }

    const [year, setYear] = useState("YYYY")
    const [month, setMonth] = useState("MM")
    const [date, setDate] = useState("DD")

    const onChangeYear = (event) => {
        setYear(event)
    } 
    const onChangeMonth = (event) => {
        setMonth(event)
    } 
    const onChangeDate = (event) => {
        setDate(event)
    } 

    const [dogWeight, setDogWeight] = useState('')
    const onChangeWeight = (event) => {
        setDogWeight(event)
    }

    const [dogChar, setDogChar] = useState('성격을 입력해주세요')
    const onChangeDogChar = (e) => {
        setDogChar(e)
    }

    const [selectSex, setSelectSex] = useState()
    const onChangeMan = () => {
        setSelectSex('man');
       
    }
    const onChangeWoman = () => {
        setSelectSex('woman');
     
    }
    const [selectNeut, setSelectNeut ] = useState()
    const onChangeO = () => {
        setSelectNeut('O')
    }
    const onChangeX = () => {
        setSelectNeut('X')
    }
    return (
    <>
        <MiddleHeader header="강아지 등록"/>
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
                <Text style={{color: '#282828', marginTop: 6, fontSize: 14}}>강아지 프로필</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 이름</Text>
                <TextInput onChangeText={onChangeText} onFocus={()=>setDogName('')} value={DogName} style={{color: '#282828',borderBottomColor:'gray', borderBottomWidth:1}} />
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>견종</Text>
                <TextInput onChangeText={onChangeSeed} onFocus={()=>setDogSeed('')} value={DogSeed} style={{color: '#282828',borderBottomColor:'gray', borderBottomWidth:1}} />
            </View>
            <View>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>생년월일</Text>    
                <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                    <TextInput maxLength={4} keyboardType="number-pad" onChangeText={onChangeYear} style={Styles.BirthConatiner} value={year}/>
                    <TextInput maxLength={2} keyboardType="number-pad" onChangeText={onChangeMonth} style={{marginHorizontal:6, ...Styles.BirthConatiner}} value={month}/>
                    <TextInput maxLength={2} keyboardType="number-pad" onChangeText={onChangeDate} style={Styles.BirthConatiner} value={date}/>
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>몸무게</Text>
                <View style={{flexDirection:'row',}}>
                    <TextInput keyboardType="number-pad" onChangeText={onChangeWeight} onFocus={()=>setDogWeight('')} value={dogWeight} style={{color: '#282828', marginTop: -15}} />
                    <Text style={{color: '#282828'}}>Kg</Text>
                </View>
                <View style={{borderBottomColor:'gray', borderBottomWidth:1, marginTop: -5, }}></View>
            </View>
            <View style={{marginTop: 20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 성격</Text>
                    <Text style={{color: '#959595'}}>(최대 40자)</Text>
                </View>
                <TextInput maxLength={40} multiline={true} onChangeText={onChangeDogChar} onFocus={()=>setDogChar('')} value={dogChar} style={{textAlign: 'center',color: '#282828', height: 70, borderColor: '#959595', borderWidth: 1, borderRadius: 15,}} />
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 성별</Text>
                <View style={Styles.BtnContainer}>
                    {/*  */}
                    <TouchableWithoutFeedback  onPress={onChangeMan}>
                        <View style={selectSex =='man' ? Styles.SelectsexBtn : Styles.sexBtn}>
                            <Text style={selectSex == 'man' ? Styles.SelectBtnText: Styles.BtnText}>남성</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback  onPress={onChangeWoman}>
                        <View style={selectSex == 'woman' ? Styles.SelectsexBtn: Styles.sexBtn}>
                            <Text style={selectSex == 'woman'? Styles.SelectBtnText : Styles.BtnText}>여성</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{color: '#282828', fontWeight: '600', fontSize: 16, marginBottom: 10,}}>강아지 중성화 여부</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    {/*  */}
                    <TouchableWithoutFeedback  onPress={onChangeO}>
                        <View style={selectNeut =='O' ? Styles.SelectNeutBtn : Styles.NeutBtn}>
                            <Text style={selectNeut == 'O' ? Styles.SelectBtnText: Styles.BtnText}>O</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback  onPress={onChangeX}>
                        <View style={selectNeut == 'X' ? Styles.SelectNeutBtn: Styles.NeutBtn}>
                            <Text style={selectNeut == 'X'? Styles.SelectBtnText : Styles.BtnText}>X</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{marginHorizontal:0,...Styles.completeBtn}}>
                    <Text style={{color: '#fff', fontWeight:'500'}}>등록 완료</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>
    ) 
}

export default AddDogInfo;

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
        paddingVertical: 6,
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
        width: '100%',
        borderRadius:15,
        marginTop: 40,
        height: 43,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FF772F'
    }

})