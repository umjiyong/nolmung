import React from "react";
import { Image, Pressable, StyleSheet, Text, View,} from "react-native";
import MedalRanking from "./MedalRanking";
import MyRanking from './MyRanking'
const FriendRanking = () => {
    const myName="도공"
    const Rival ="퍼니"
    const myRank = 148
    const nokoriten = 100
    return (
        <>
        {/* style={select =='All' ? Styles.bottomBorder : Styles.selectTextHuman} */}
        <View style={{marginHorizontal:20}}>

            <View style={Styles.FriendRankingContainer}>
                <Pressable style={Styles.circle}>
                    <Image 
                        style={Styles.circle}
                        source={require('../assets/icons/image22.png')}
                        resizeMode="cover"
                    />
                </Pressable>
                <View style={{flexDirection:'row', marginTop:10,}}>
                    <Text style={{fontWeight:'600', ...Styles.font }}>{myName}</Text>
                    <Text style={{...Styles.font}}> 님의 라이벌은</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                    <Text style={{color:'#282828',fontWeight:'600',fontSize:18}}>{Rival}</Text>
                    <Text style={{color:'#282828',fontSize:18}}>님입니다.</Text>
                </View>
                <View style={{marginTop:5,}}>
                    <Text style={{color: '#282828', fontSize: 16}}>(현재 {myRank}위)</Text>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={{color: '#282828', fontSize: 16}}>필요 점수: {nokoriten}멍 </Text>
                </View>
            </View>
            <View style={Styles.totalRankingContainer}>
                    <Text style={{color:'#282828', fontSize: 18, marginBottom:10,}}>친구 랭킹</Text>
                    <View>
                        <MedalRanking firstName="박찬혁" mung="10324" img={require('../assets/icons/medal.png')} color="gold"/>
                        <MedalRanking firstName="엄지용" mung="10314" img={require('../assets/icons/medal.png')} color="silver"/>
                        <MedalRanking firstName="박세원" mung="10304" img={require('../assets/icons/medal.png')} color="brown"/>
                        <MedalRanking firstName="이지영" mung="10294" img={require('../assets/icons/medal.png')} color="brown"/>
                        <MyRanking firstName="내 랭킹" mung="8080" rank="148"/>
                    </View>
            </View>
        </View>
        </>
    )
}

export default FriendRanking;

const Styles = StyleSheet.create({
    FriendRankingContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        paddingTop: 25,
        paddingBottom: 15,
        alignItems:'center',
        borderRadius: 30,
        shadowColor:'#000',
        elevation: 2,
    },
    circle:{
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    font:{
        color:'#282828',
        fontSize:18,
    },
    totalRankingContainer: {
        marginTop: 25,
    },
    
})