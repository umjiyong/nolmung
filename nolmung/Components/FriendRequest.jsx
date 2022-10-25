import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FriendRequest = () => {
    const HumanName = '미이'
    const DogInfo = '미유 7세 믹스 5kg'
    return (
        <>
            <View style={Styles.requestContainer}>
                <Image 
                    source={require('../assets/icons/Ellipse.png')}
                    resizeMode="contain"
                    style={{
                        width: 70,
                        height: 70,
                    }}
                />
                <View style={Styles.requestTextBox}>
                    <Text style={{...Styles.requestText, fontSize: 20, marginTop: -15,}}>{HumanName}</Text>
                    <Text style={{...Styles.requestText, fontSize: 16, marginTop: 3,}}>{DogInfo}</Text>
                </View>
            </View>
            <View style={Styles.requestBtnContainer}>
                <TouchableOpacity>
                    <View style={Styles.agreeBtn}>
                        <Text style={Styles.agreeText}>수락</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={Styles.disagreeBtn}>
                        <Text style={Styles.disagreeText}>삭제</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default FriendRequest;

const Styles = StyleSheet.create({
    requestContainer: {
        flexDirection:'row',
        alignItems: 'center',

    },
    requestTextBox: {
        marginLeft: 10,
    },
    requestText: {
        color: '#282828'
    },
    requestBtnContainer: {
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingBottom: 30,
    },
    agreeBtn: {
        paddingHorizontal:30,
        paddingVertical:5,
        backgroundColor: '#FF772F',
        borderRadius: 13,
    },
    disagreeBtn: {
        paddingHorizontal:30,
        paddingVertical:5,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FF772F',
        borderRadius: 13,    
    },
    agreeText: {
        color: '#fff',
    },
    disagreeText: {
        color: '#FF772F'
    }
})