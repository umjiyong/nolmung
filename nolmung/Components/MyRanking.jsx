import React from "react";
import { View, Image,Text, StyleSheet } from "react-native";

const MedalRanking = (props) => {
    return (
    <>
        <View style={Styles.rankingContainer}>
            <Text style={{color:'#282828', fontSize: 18, fontWeight: '600'}}>{props.rank}</Text>
            <Text style={{color:'#282828', fontSize: 18, fontWeight: '600'}}>{props.firstName}</Text>
            <Text style={{color:'#FF772F', fontSize: 18, fontWeight: '600'}}>{props.mung} 멍</Text>
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
        backgroundColor:'#fff',
        borderRadius: 10,
        paddingHorizontal:20,
        
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#FF772F'
    }

})