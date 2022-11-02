import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
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











            {/* end */}
            <ScrollView  style={{marginTop: 50,marginBottom:80,}} contentContainerStyle={{padding:20}}>
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
        height: 300,
        borderRadius: 30,
        backgroundColor:'#fff',
    }
})