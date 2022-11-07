import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FriendListItem from "../components/FriendListItem";

const SearchFriendList = () => {
    return (
        <>
            <View style={Styles.SearchPageContainer}>
                <Text style={{color:'#282828', fontSize: 22, textAlign:'center', fontWeight:'600'}}>내 친구 목록</Text>
                <View style={{borderWidth:0.7, borderColor:'#D9D9D9', marginTop: 20,}}></View>
                <ScrollView contentContainerStyle={{padding:20,}}>
                    <FriendListItem img={require('../assets/icons/32.png')} name="미이"/>
                </ScrollView>








                
            </View>
        </>
    )
}

export default SearchFriendList

const Styles = StyleSheet.create({
    SearchPageContainer: {
        marginTop: 15,
    }
})