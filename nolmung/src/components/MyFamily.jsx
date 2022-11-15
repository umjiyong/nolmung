import React from "react";
import { Image, View } from "react-native";

const MyFamily = (props) => {
    console.log("연결된 가족",props.item)
    return (
        <>
            <View style={{marginBottom: 10, marginHorizontal:10,}}>
                <Image 
                source={{uri: props.item }}
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 100,
                    borderRadius:100,
                }}    
                />
            </View>
        </>

    )
}

export default MyFamily;