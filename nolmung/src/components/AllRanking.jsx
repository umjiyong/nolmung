import React, { useState } from "react";
import { StyleSheet, View,Text, Image, ScrollView, Pressable, TouchableWithoutFeedback, } from "react-native";
import MedalRanking from "./MedalRanking";
import MyRanking from './MyRanking'
function AllRanking() {
    const [select, setSelect] = useState('date')
    const selectDate = () => {
        setSelect('date')
        console.log(select)
    }

    const selectWeek = () => {
        setSelect('week')
        console.log(select)
    }

    const selectMonth = () => {
        setSelect('month')
        console.log(select)
    }
    const mung = 2000
    const rank = 148
    const highRank = 30
    return(
        <>
        {/* style={select =='All' ? Styles.bottomBorder : Styles.selectTextHuman} */}
            <View style={Styles.Container}>
                <View style={Styles.selectBtn}>
                    <Pressable onPress={selectDate}>
                            <Text style={select==='date' ? Styles.SelectText : Styles.NoSelectText}>일간</Text>
                    </Pressable>
                    <Pressable onPress={selectWeek}>
                            <Text style={select==='week' ? Styles.SelectText : Styles.NoSelectText}>주간</Text>
                    </Pressable>
                    <Pressable onPress={selectMonth}>
                            <Text style={select==='month' ? Styles.SelectText : Styles.NoSelectText}>월간</Text>
                    </Pressable>
                </View>
                <View style={Styles.MainRankingContainer}>
                    <Image 
                        source={require('../assets/icons/DogImg.png')}
                        resizeMode="cover"
                        style={{
                        width: 100,
                        height: 100,
                        
                        }}    
                    />
                    <Text style={{color:'#282828', marginTop: 10, fontSize: 24, fontWeight: 'bold', marginBottom: 5,}}>{mung} 멍</Text>
                    <Text style={{color:'#282828', marginTop: -10, fontSize: 20, fontFamily:'NotoSansKR-Bold',}}> {rank}위</Text>
                    <Text style={{color:'#282828', fontSize: 16, marginBottom: 5,}}>가장 높았던 순위</Text>
                    <Text style={{color:'#282828', fontSize: 16, marginBottom: 5,}}>{highRank}위</Text>
                </View>
                <View style={Styles.totalRankingContainer}>
                    <Text style={{color:'#282828', fontSize: 18, marginBottom:10,}}>종합 랭킹</Text>
                    <View>
                        <MedalRanking firstName="이동일" mung="10324" img={require('../assets/icons/medal.png')} color="gold"/>
                        <MedalRanking firstName="이동이" mung="10314" img={require('../assets/icons/medal.png')} color="silver"/>
                        <MedalRanking firstName="이동삼" mung="10304" img={require('../assets/icons/medal.png')} color="brown"/>
                        <MyRanking firstName="내 랭킹" mung="8080" rank="148"/>
                        
                    </View>
                </View>
            </View>
        </>
    )
}

export default AllRanking

const Styles = StyleSheet.create({
    Container: {
        marginHorizontal:20,
    },
    selectBtn: {
        marginTop: 15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    SelectText: {
        color:'#282828',
        fontWeight:'600',
        fontSize: 16,
    },
    NoSelectText: {
        color: '#959595',
        fontSize: 16,
    },
    MainRankingContainer: {
        marginTop:20,
        backgroundColor:'#fff',
        borderRadius: 30,
        paddingTop: 25,
        paddingBottom:20,
        alignItems:'center',
        shadowColor:'#000',
        elevation: 2
    },
    totalRankingContainer: {
        marginTop: 25,
    },
})