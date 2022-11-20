import React from "react";
import { View, Image,Text, StyleSheet } from "react-native";

const MedalRanking = (props) => {
    return (
    <>
        <View style={Styles.rankingContainer}>
            <Text style={{color:'#fff', fontSize: 18, fontWeight: '600'}}>{props.rank}</Text>
            <Text style={{color:'#fff', fontSize: 18, fontWeight: '600'}}>{props.firstName}</Text>
            <Text style={{color:'#fff', fontSize: 18, fontWeight: '600'}}>{props.mung} 멍</Text>
        </View>
    </>
    )
}

export default MedalRanking

const Styles = StyleSheet.create({
    rankingContainer: { 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height: 55,
        backgroundColor:'#FF772F',
        borderRadius: 10,
        paddingHorizontal:20,
        shadowColor:'gray',
        elevation:3,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#FF772F'
    }

})