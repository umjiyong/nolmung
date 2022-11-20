import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const VisitMemo = (Props) => {
    const Navigation = useNavigation()
    return (
        <>
            <Pressable onPress={()=>{Navigation.navigate('VisitArticleItem')}} style={Styles.container}>
                {Props.boardImage ? <Image 
                    source={{uri : Props.boardImage}}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                    }}
                /> : <Image 
                    source={require('../assets/icons/background.png')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                    }}
                /> }
                {/* <Image 
                    source={require('../assets/icons/background.png')}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                    }}
                /> */}
                <View  style={{justifyContent:'center', marginLeft: 10,}}>
                    <Text style={{color:'#282828', fontSize: 16,}}>
                       {Props.content.slice(0,20)}
                    </Text>
                    <Text style={{color:'#959595', fontSize:15,}}>
                        {Props.nickname}
                    </Text>
                    <Text style={{color:'#959595', fontSize: 10,marginTop: 15,}}>
                        {Props.createDate}
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