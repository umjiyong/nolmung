import React from "react";
import { StyleSheet,View, Text, Image } from "react-native";

const SendMessage = () => {
    const Time = "오후 10:40"
    const Message = "아니요..."
    return (
        <>
            <View style={Styles.sendMessageContainer}>
                <Text style={Styles.messageTime}>{Time}</Text>
                <Text style={Styles.Message}>{Message}</Text>
            </View>
        </>
    )
}

export default SendMessage;

const Styles = StyleSheet.create({
    sendMessageContainer: {
        marginLeft:'auto',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    messageTime: {
        color:'#959595',
        fontSize: 12,
        marginRight: 4,
    },
    Message:{
        color: '#282828',
        fontSize: 16,
        backgroundColor:'#FFC19F',
        paddingHorizontal:13,
        paddingVertical:6,
        borderRadius: 6,
    },
   
})