import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import MyWalkRecordInfo from "./MyWalkRecordInfo";

const MyWalkRecord = () => {
    return ( 
        <>
            <View style={Styles.myWalkRecordContainer}>
                <View style={Styles.calanderTest}>
                    <Text style={{color:'#282828'}}>ㅎㅇ</Text> 
                </View>
            </View>
            {/* 강아지 마리수 프로필 div start */}

            <View style={Styles.DogContainer}>
                <View style={{alignItems:'center', marginRight: 15,}}>
                    <Image 
                        source={require('../assets/icons/DogImg.png')}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                        }}/>
                    <Text style={{color:'#282828',}}>땅콩이</Text>
                </View>
                <View style={{alignItems:'center',}}>
                    <Image 
                        source={require('../assets/icons/DogImg.png')}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                        }}/>
                    <Text style={{color:'#282828',}}>땅콩이</Text>
                </View>
            </View>









            {/* end */}
            <ScrollView  style={{marginBottom:80,}} contentContainerStyle={{padding:20}}>
                <MyWalkRecordInfo />
                <MyWalkRecordInfo />
                <MyWalkRecordInfo />
                <MyWalkRecordInfo />
                <MyWalkRecordInfo />
                <MyWalkRecordInfo />
                <MyWalkRecordInfo />
            
            </ScrollView>
        </>
    )
}

export default MyWalkRecord;

const Styles = StyleSheet.create({
    myWalkRecordContainer: {
        marginHorizontal: 20,
    },
    calanderTest:{
        width: '100%',
        height: 200,
        borderRadius: 30,
        backgroundColor:'#fff',
    },
    DogContainer:{
        flex: 0,
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'center'
    }
})