import React from "react";
import { Text, View, Image, StyleSheet,ScrollView,Dimensions, TouchableWithoutFeedback } from "react-native";

const CommentList = () => {
    const userNickName = 'aJumoney__'
    const region = '서울특별시 강남구 역삼동'
    const windowWidth = Dimensions.get('window').width;
    const like = 200
    const comment = 5
    return (
        <>
        {/* Comment Header start */}
            <View style={{paddingHorizontal:30,marginVertical:10,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center',}}>
                    <Image 
                        source={require('../assets/icons/Ellipse13.png')}
                        resizeMode="cover"
                        style={{}}
                    />
                    <View style={{marginLeft: 5,}}>
                        <Text style={{color:'#282828', fontWeight:'600', fontSize:15,}}>유저네임</Text>
                        <Text style={{color:'#959595',}}>{region} 1시간 전</Text>
                    </View>
                </View>
                <Image 
                    source={require('../assets/icons/menuvertical.png')}
                    style={{
                        width: 24,
                        height: 24,
                    }}
                />
            </View>
        {/* Comment Header End */}
            <View style={{paddingHorizontal:30,marginLeft: 60,}}>
                <Text style={{color:'#282828', textAlign:'left'}}>
                    강아지 너무 귀엽스므니다 이 아조씨 강아지 키우고 싶스므니다
                </Text>
            </View>
        </>
    )
}

export default CommentList;

const Styles = StyleSheet.create({

})