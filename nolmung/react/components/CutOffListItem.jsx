import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CutOffListItem = (Props) => {
    const cutOffName = "새로미"
    return (
        <>
            <View style={Styles.itemContainer}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image 
                         source={require('../assets/icons/womanAvatar.png')}
                         resizeMode="contain"
                         style={{
                            width: 50,
                            height: 50,
                            marginRight: 15,
                         }}
                    />
                    <Text style={Styles.cutOffName}>{Props.name}</Text>
                </View>
                <TouchableOpacity>
                    <View style={Styles.cutBtn}>
                        <Text style={Styles.BtnText}>차단 해제</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CutOffListItem

const Styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 5,
        flexDirection:'row',
        height: 70,
        backgroundColor: '#fff',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        
    },
    cutOffName: {
        color: '#282828',
        fontSize: 18,
    },
    cutBtn:{
        backgroundColor: '#FF772F',
        paddingVertical:4,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    BtnText:{
        color: '#fff',
        fontSize: 14,
    }
})