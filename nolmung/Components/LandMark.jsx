import React from "react";
import { StyleSheet,View,Text,TouchableOpacity, Image } from "react-native";

const LandMark = (props) => {
    return (
        <>
            <View style={Styles.LandMarkContainer}>
                <Image 
                    source={require('../assets/image/park1.jpg')}
                    resizeMode="cover"
                    style={{
                    width: 106,
                    height: 122,
                    borderRadius: 15,
                    }}
            />
                <Text style={{color:'#282828',marginTop:5, fontSize: 15,}}>{props.name}</Text>
            </View>
        </>
    )
}

export default LandMark;

const Styles = StyleSheet.create({
    LandMarkContainer:{
        alignItems:'center',
        marginTop: 10,
        marginHorizontal:10,
    }
})
