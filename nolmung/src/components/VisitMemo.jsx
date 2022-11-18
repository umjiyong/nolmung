import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const VisitMemo = () => {
    const Navigation = useNavigation()
    return (
        <>
            <Pressable onPress={()=>{Navigation.navigate('VisitArticleItem')}} style={Styles.container}>
                <Image 
                    source={require('../assets/icons/background.png')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                    }}
                />
                <View  style={{justifyContent:'center', marginLeft: 10,}}>
                    <Text style={{color:'#282828', fontSize: 16,}}>
                        오늘은 날씨가 좋네요
                    </Text>
                    <Text style={{color:'#959595', fontSize:15,}}>
                        모건
                    </Text>
                    <Text style={{color:'#959595', fontSize: 10,marginTop: 15,}}>
                        2022.10.18
                    </Text>
                </View>
            </Pressable>
        </>
    )
}

export default VisitMemo


const Styles = StyleSheet.create({
    container : {
        backgroundColor:'white',
        marginVertical:5,
        paddingVertical:10,
        paddingHorizontal: 10,
        borderRadius: 20,
        flexDirection:'row'
    }
})